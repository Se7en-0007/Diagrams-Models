/**
 * World Mapping Atlas — Ultra-High Performance Fluid 3D Globe Engine
 * Engineered for solid 60 FPS:
 * 1. Pixel ratio capped to max 1.5 (prevents GPU 4K fill-rate throttle).
 * 2. Front-hemisphere spherical curvature culling (discards back-facing labels).
 * 3. Removed polygon raycasting on pointer-move (eliminates 10,650-vertex CPU traversals).
 * 4. Zero morphing/tween duration (instant updates).
 * 5. RAF-throttled camera LOD updates (pure 60 FPS during drag rotation).
 */

window.WORLD_GLOBE = (function () {
  'use strict';

  let globe = null;
  let container = null;
  let isReady = false;

  let countriesGeojson = null;
  let polygonsLoaded = false;
  let selectedEntityId = null;
  let selectedCountryName = null;

  let hiddenQuizEntityId = null;
  let activeRecallTarget = null;
  let recallCallback = null;

  const activeLayers = {
    political: true,
    physical: true,
    water: true,
    labels: true
  };

  let allLabels = [];
  let allPaths = [];
  let _updateTimer = null;

  function scheduleUpdate(delay = 100) {
    clearTimeout(_updateTimer);
    _updateTimer = setTimeout(() => {
      requestAnimationFrame(_applyLayers);
    }, delay);
  }

  function init(containerId = 'globeContainer') {
    container = document.getElementById(containerId);
    if (!container) { console.error('Globe container not found'); return false; }
    if (typeof Globe === 'undefined') { console.error('Globe.gl not loaded'); return false; }

    try {
      globe = Globe()(container)
        .globeImageUrl('world-map/assets/img/earth-blue-marble.jpg')
        .backgroundColor('#060e18')
        .showAtmosphere(true)
        .atmosphereColor('#2563eb')
        .atmosphereAltitude(0.12)

        // Instant transitions — removes 1000ms CPU tween loops
        .polygonsTransitionDuration(0)
        .labelsTransitionDuration(0)

        // ── Labels ──
        .labelLat(d => d.lat)
        .labelLng(d => d.lng)
        .labelText(d => d.text)
        .labelSize(d => d.size)
        .labelDotRadius(d => d.dotRadius)
        .labelColor(d => d.color)
        .labelAltitude(0.008)
        .labelResolution(1.4)
        .onLabelClick(d => {
          const mode = window.WORLD_NAV ? window.WORLD_NAV.getMode() : 'browse';
          if (mode === 'recall') {
            handleRecallAttempt(d.lat, d.lng, d.name);
            return;
          }
          if (mode === 'quiz') return;
          if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
            window.WORLD_APP.onEntitySelected(d.id);
          }
        })

        // ── Paths: rivers & mountains (Solid lines, zero animation lag) ──
        .pathPoints(d => d.coords)
        .pathPointLat(p => p[1])
        .pathPointLng(p => p[0])
        .pathPointAlt(0.006)
        .pathColor(d => d.color)
        .pathStroke(d => d.stroke || 0.8)
        .pathDashLength(1.0)
        .pathDashGap(0)
        .pathDashAnimateTime(0)

        // ── Selection Rings (only rendered on selection) ──
        .ringLat(d => d.lat)
        .ringLng(d => d.lng)
        .ringColor(() => '#38bdf8')
        .ringMaxRadius(3.2)
        .ringPropagationSpeed(1.4)
        .ringRepeatPeriod(850)

        // ── Globe Surface Click (for Recall spatial tap) ──
        .onGlobeClick(({ lat, lng }) => {
          const mode = window.WORLD_NAV ? window.WORLD_NAV.getMode() : 'browse';
          if (mode === 'recall') handleRecallAttempt(lat, lng, null);
        });

      // Cap device pixel ratio to max 1.5 to double GPU rendering speed on high-DPI displays
      if (globe.renderer) {
        try {
          const r = globe.renderer();
          if (r) {
            r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
          }
        } catch (e) {}
      }

      // OrbitControls tuning — only refresh labels after camera drag completes
      try {
        if (globe.controls) {
          const ctrl = globe.controls();
          if (ctrl) {
            ctrl.rotateSpeed = 0.85;
            ctrl.zoomSpeed = 1.1;
            if (ctrl.addEventListener) {
              ctrl.addEventListener('end', () => scheduleUpdate(80));
            }
          }
        }
      } catch (err) {
        console.warn('Controls tuning deferred:', err);
      }

      globe.pointOfView({ lat: 15, lng: 20, altitude: 2.3 });

      buildLabelsData();
      buildPathsData();
      loadCountryBoundaries();
      setupResize();

      isReady = true;
      return true;
    } catch (e) {
      console.error('Globe init error:', e);
      return false;
    }
  }

  // ── Throttled Responsive Resize ──
  let _resizeTimer = null;
  function setupResize() {
    function handleResize() {
      if (!globe || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 50 && h > 50) {
        globe.width(w);
        globe.height(h);
      }
    }
    window.addEventListener('resize', () => {
      clearTimeout(_resizeTimer);
      _resizeTimer = setTimeout(handleResize, 60);
    });
    setTimeout(handleResize, 100);
  }

  // ── Build label dataset with prominence ranking ──
  function buildLabelsData() {
    if (!window.WORLD_MAP_DATA || !Array.isArray(window.WORLD_MAP_DATA.entities)) return;

    const majorCapitals = new Set([
      'Washington, D.C.', 'London', 'Paris', 'Berlin', 'Tokyo', 'Beijing',
      'New Delhi', 'Canberra', 'Brasilia', 'Cairo', 'Pretoria / Cape Town / Bloemfontein',
      'Ottawa', 'Rome', 'Madrid', 'Moscow', 'Buenos Aires', 'Riyadh'
    ]);

    allLabels = window.WORLD_MAP_DATA.entities.map(e => {
      const colorMap = {
        country:   '#fef08a',
        mountain:  '#e9d5ff',
        river:     '#38bdf8',
        lake:      '#67e8f9',
        strait:    '#5eead4',
        sea:       '#67e8f9',
        desert:    '#fcd34d',
        grassland: '#86efac',
        island:    '#fdba74'
      };

      let isProminent = false;
      if (e.category === 'country' && majorCapitals.has(e.capital)) isProminent = true;
      if (e.category === 'mountain' && ['Mount Everest', 'Mount Aconcagua', 'Mount Kilimanjaro', 'Mont Blanc', 'Mount Denali'].includes(e.name)) isProminent = true;
      if (e.category === 'river' && ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River', 'Ganges River', 'Danube River'].includes(e.name)) isProminent = true;
      if (e.category === 'strait' && ['Strait of Gibraltar', 'Strait of Malacca', 'Suez Canal', 'Panama Canal', 'Bab-el-Mandeb', 'Strait of Hormuz'].includes(e.name)) isProminent = true;

      return {
        id: e.id,
        name: e.name,
        text: e.name,
        category: e.category,
        continent: e.continent,
        lat: e.coords[1],
        lng: e.coords[0],
        color: colorMap[e.category] || '#f8fafc',
        size: e.category === 'country' ? 0.90 : 0.80,
        dotRadius: e.category === 'country' ? 0.22 : 0.18,
        isProminent: isProminent
      };
    });

    scheduleUpdate(50);
  }

  // ── Build river and mountain paths ──
  function buildPathsData() {
    if (!window.GEOGRAPHIC_FEATURES) return;
    const paths = [];

    (window.GEOGRAPHIC_FEATURES.rivers || []).forEach(r => {
      if (r.path && r.path.length > 1) {
        paths.push({
          id: r.id, name: r.name, type: 'river',
          color: 'rgba(56,189,248,0.85)', stroke: 0.8, coords: r.path
        });
      }
    });

    (window.GEOGRAPHIC_FEATURES.mountains || []).forEach(m => {
      if (m.path && m.path.length > 1) {
        paths.push({
          id: m.id, name: m.name, type: 'mountain',
          color: 'rgba(192,132,252,0.85)', stroke: 1.1, coords: m.path
        });
      }
    });

    allPaths = paths;
    scheduleUpdate(50);
  }

  // ── Country Boundary Polygons (Zero raycasting overhead) ──
  function loadCountryBoundaries() {
    fetch('world-map/data/countries.geojson')
      .then(r => { if (!r.ok) throw new Error('miss'); return r.json(); })
      .then(geojson => {
        countriesGeojson = geojson;
        applyPolygons(countriesGeojson.features);
      })
      .catch(err => {
        console.warn('Country boundaries deferred:', err);
      });
  }

  function applyPolygons(features) {
    if (!globe || !features || polygonsLoaded) return;
    polygonsLoaded = true;

    globe
      .polygonsData(activeLayers.political ? features : [])
      .polygonAltitude(0.001) // Flat to surface — ZERO 3D extrusion geometry
      .polygonSideColor(() => 'transparent')
      .polygonStrokeColor(() => 'rgba(255,255,255,0.25)')
      .polygonCapColor(() => 'rgba(15,35,60,0.18)')
      // NOTE: Intentionally NO polygonLabel to avoid raycasting 10,650 vertices on pointermove!
      .onPolygonClick(poly => {
        const name = poly.properties.ADMIN || poly.properties.NAME;
        const mode = window.WORLD_NAV ? window.WORLD_NAV.getMode() : 'browse';
        if (mode === 'recall') { handleRecallAttempt(0, 0, name); return; }
        if (mode === 'quiz') return;

        selectedCountryName = name;
        if (window.WORLD_MAP_DATA) {
          const match = window.WORLD_MAP_DATA.entities.find(e =>
            e.category === 'country' && (
              e.name.toLowerCase() === name.toLowerCase() ||
              name.toLowerCase().includes(e.name.toLowerCase()) ||
              e.name.toLowerCase().includes(name.toLowerCase())
            )
          );
          if (match && window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
            window.WORLD_APP.onEntitySelected(match.id);
          }
        }
      });
  }

  // ── Spherical Front-Hemisphere LOD Label Filtering ──
  function _applyLayers() {
    if (!globe) return;

    const pov = globe.pointOfView ? globe.pointOfView() : { lat: 15, lng: 20, altitude: 2.3 };
    const camLatRad = (pov.lat || 0) * (Math.PI / 180);
    const camLng = pov.lng || 0;
    const altitude = pov.altitude || 2.3;

    // Filter labels: curvature culling + layer checks
    const filteredLabels = allLabels.filter(l => {
      if (hiddenQuizEntityId && l.id === hiddenQuizEntityId) return false;
      if (!activeLayers.labels) return false;
      if (activeRecallTarget) return false; // all hidden in recall

      if (l.category === 'country' && !activeLayers.political) return false;
      if ((l.category === 'mountain' || l.category === 'desert' || l.category === 'grassland') && !activeLayers.physical) return false;
      if ((l.category === 'river' || l.category === 'lake' || l.category === 'strait' || l.category === 'sea') && !activeLayers.water) return false;

      // Always show selected entity label
      if (l.id === selectedEntityId) return true;

      // Spherical dot product to cull back-facing labels behind the Earth's curvature
      const lLatRad = l.lat * (Math.PI / 180);
      const dLngRad = (l.lng - camLng) * (Math.PI / 180);
      const cosAngle = Math.sin(camLatRad) * Math.sin(lLatRad) + Math.cos(camLatRad) * Math.cos(lLatRad) * Math.cos(dLngRad);

      // Facing away from camera (> 75 degrees from center) -> drop
      if (cosAngle < 0.22) return false;

      // Altitude-based LOD
      if (altitude > 1.6) {
        return l.isProminent;
      } else if (altitude > 1.0) {
        return l.isProminent || cosAngle > 0.55;
      }
      return true;
    });

    // Cap to max 45 labels simultaneously for silky smooth 60 FPS
    globe.labelsData(filteredLabels.slice(0, 45));

    // Paths
    const filteredPaths = allPaths.filter(p => {
      if (p.type === 'river') return activeLayers.water;
      if (p.type === 'mountain') return activeLayers.physical;
      return true;
    });
    globe.pathsData(filteredPaths);

    // Polygons layer toggle
    if (countriesGeojson && polygonsLoaded) {
      globe.polygonsData(activeLayers.political ? countriesGeojson.features : []);
    }
  }

  function updateVisibleLayers() { scheduleUpdate(50); }

  function flyTo(lon, lat, altitude = 0.88) {
    if (!globe) return;
    globe.pointOfView({ lat, lng: lon, altitude }, 900);
  }

  function selectEntity(id, shouldFly = false, altitude = 0.88) {
    selectedEntityId = id;
    if (!id || !window.DATA_INTEGRITY) {
      selectedCountryName = null;
      if (globe) {
        globe.ringsData([]);
      }
      scheduleUpdate(50);
      return;
    }

    const entity = window.DATA_INTEGRITY.getEntity(id);
    if (!entity || !entity.coords) return;
    const [lon, lat] = entity.coords;

    if (entity.category === 'country') {
      selectedCountryName = entity.name;
    } else {
      selectedCountryName = null;
    }

    if (globe) {
      globe.ringsData([{ lat, lng: lon }]);
    }

    if (shouldFly) flyTo(lon, lat, altitude);
    scheduleUpdate(50);
  }

  function setQuizTarget(targetEntityId) {
    hiddenQuizEntityId = targetEntityId;
    scheduleUpdate(50);

    if (targetEntityId && window.DATA_INTEGRITY) {
      const entity = window.DATA_INTEGRITY.getEntity(targetEntityId);
      if (entity && entity.coords) {
        const [lon, lat] = entity.coords;
        if (globe) {
          globe.ringsData([{ lat, lng: lon }]);
          flyTo(lon, lat, 0.88);
        }
      }
    }
  }

  function revealQuizAnswer(targetEntityId) {
    hiddenQuizEntityId = null;
    scheduleUpdate(50);
    if (targetEntityId) selectEntity(targetEntityId, false, 0.88);
  }

  function setRecallTarget(targetEntity, callback) {
    activeRecallTarget = targetEntity;
    recallCallback = callback;
    activeLayers.labels = false;
    scheduleUpdate(50);
    if (globe) globe.ringsData([]);
  }

  function handleRecallAttempt(clickedLat, clickedLng, clickedName) {
    if (!activeRecallTarget || !recallCallback) return;
    let isMatch = false;

    if (clickedName && activeRecallTarget.name) {
      const n1 = clickedName.toLowerCase().trim();
      const n2 = activeRecallTarget.name.toLowerCase().trim();
      if (n1 === n2 || n1.includes(n2) || n2.includes(n1)) isMatch = true;
    }

    if (!isMatch && activeRecallTarget.coords) {
      const [tLng, tLat] = activeRecallTarget.coords;
      const dLat = clickedLat - tLat;
      const dLng = (clickedLng - tLng) * Math.cos((tLat * Math.PI) / 180);
      if (Math.sqrt(dLat * dLat + dLng * dLng) < 14) isMatch = true;
    }

    recallCallback(isMatch, clickedName);
  }

  function revealRecallTarget(targetEntity) {
    activeLayers.labels = true;
    scheduleUpdate(50);
    if (targetEntity && targetEntity.coords) {
      selectEntity(targetEntity.id, true, 0.88);
    }
  }

  function clearRecallTarget() {
    activeRecallTarget = null;
    recallCallback = null;
    activeLayers.labels = true;
    scheduleUpdate(50);
  }

  function setLayerVisibility(layer, visible) {
    activeLayers[layer] = visible;
    scheduleUpdate(50);
  }

  function zoomIn() {
    if (!globe) return;
    const pov = globe.pointOfView();
    globe.pointOfView({ altitude: Math.max(0.25, pov.altitude * 0.72) }, 300);
  }

  function zoomOut() {
    if (!globe) return;
    const pov = globe.pointOfView();
    globe.pointOfView({ altitude: Math.min(3.6, pov.altitude * 1.35) }, 300);
  }

  function resetView() {
    if (!globe) return;
    selectedCountryName = null;
    selectedEntityId = null;
    hiddenQuizEntityId = null;
    activeRecallTarget = null;
    activeLayers.labels = true;
    scheduleUpdate(50);
    globe.ringsData([]);
    globe.pointOfView({ lat: 15, lng: 20, altitude: 2.3 }, 900);
  }

  return {
    init, flyTo, selectEntity, setQuizTarget, revealQuizAnswer,
    setRecallTarget, revealRecallTarget, clearRecallTarget,
    setLayerVisibility, updateVisibleLayers,
    zoomIn, zoomOut, resetView,
    isReady: () => isReady
  };
})();
