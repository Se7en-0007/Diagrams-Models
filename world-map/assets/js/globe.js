/**
 * World Mapping Atlas — Ultra-High Performance Fluid 3D Cartographic Globe Engine
 * Engineered for solid 60 FPS & Crystal-Clear Cartographic Study:
 * 1. Dynamic country extrusion & glowing highlighting on click / selection.
 * 2. Spherical grid-based spatial decluttering (No overlapping label blobs, balanced across all continents).
 * 3. Official Survey of India boundary integration (including POK and Aksai Chin).
 * 4. High-contrast typography with elevated label altitude (zero Z-fighting with terrain).
 * 5. Elevated animated beacon rings & paths floating cleanly above polygon caps.
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

  function scheduleUpdate(delay = 60) {
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
        .atmosphereColor('#1d4ed8')
        .atmosphereAltitude(0.11)

        // Instant transitions — prevents heavy 1000ms CPU tween loops
        .polygonsTransitionDuration(0)
        .labelsTransitionDuration(0)

        // ── High-Contrast Cartographic Labels ──
        .labelLat(d => d.lat)
        .labelLng(d => d.lng)
        .labelText(d => d.text)
        .labelSize(d => d.id === selectedEntityId ? 1.35 : (d.size || 0.85))
        .labelDotRadius(d => d.id === selectedEntityId ? 0.42 : (d.dotRadius || 0.20))
        .labelColor(d => d.id === selectedEntityId ? '#38bdf8' : (d.color || '#ffffff'))
        .labelAltitude(0.015) // Elevated cleanly above polygon caps
        .labelResolution(1.6)
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

        // ── Paths: rivers & mountain crests (Elevated to 0.007 to avoid Z-fighting) ──
        .pathPoints(d => d.coords)
        .pathPointLat(p => p[1])
        .pathPointLng(p => p[0])
        .pathPointAlt(0.007)
        .pathColor(d => d.id === selectedEntityId ? '#38bdf8' : d.color)
        .pathStroke(d => d.id === selectedEntityId ? 2.0 : (d.stroke || 0.9))
        .pathDashLength(1.0)
        .pathDashGap(0)
        .pathDashAnimateTime(0)

        // ── Selection Beacon Rings (Elevated to 0.018 to float above all features) ──
        .ringLat(d => d.lat)
        .ringLng(d => d.lng)
        .ringAltitude(0.018)
        .ringColor(() => '#38bdf8')
        .ringMaxRadius(3.5)
        .ringPropagationSpeed(1.6)
        .ringRepeatPeriod(750)

        // ── Globe Surface Click (Browse & Recall) ──
        .onGlobeClick(({ lat, lng }) => {
          const mode = window.WORLD_NAV ? window.WORLD_NAV.getMode() : 'browse';
          if (mode === 'recall') {
            handleRecallAttempt(lat, lng, null);
          }
        });

      // Cap device pixel ratio to max 1.5 for ultra-smooth 60 FPS
      if (globe.renderer) {
        try {
          const r = globe.renderer();
          if (r) {
            r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
          }
        } catch (e) {}
      }

      // Smooth OrbitControls tuning
      try {
        if (globe.controls) {
          const ctrl = globe.controls();
          if (ctrl) {
            ctrl.rotateSpeed = 0.85;
            ctrl.zoomSpeed = 1.1;
            ctrl.addEventListener('change', () => scheduleUpdate(120));
            ctrl.addEventListener('end', () => scheduleUpdate(40));
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

  // ── Responsive Resize ──
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

  // ── Build label dataset with clear contrast colors & prominence hierarchy ──
  function buildLabelsData() {
    if (!window.WORLD_MAP_DATA || !Array.isArray(window.WORLD_MAP_DATA.entities)) return;

    const majorCapitals = new Set([
      'Washington, D.C.', 'London', 'Paris', 'Berlin', 'Tokyo', 'Beijing',
      'New Delhi', 'Canberra', 'Brasília', 'Cairo', 'Pretoria / Cape Town / Bloemfontein',
      'Ottawa', 'Rome', 'Madrid', 'Moscow', 'Buenos Aires', 'Riyadh', 'Jakarta', 'Nairobi'
    ]);

    allLabels = window.WORLD_MAP_DATA.entities.map(e => {
      const colorMap = {
        country:   '#ffffff', // Crisp bright white with dark drop-shadow contrast
        mountain:  '#d8b4fe', // High-contrast purple
        river:     '#38bdf8', // Vibrant cyan
        lake:      '#38bdf8', // Vibrant cyan
        strait:    '#2dd4bf', // Bright teal
        sea:       '#38bdf8', // Bright cyan
        desert:    '#fbbf24', // Vivid amber
        grassland: '#4ade80', // Emerald green
        island:    '#fb923c'  // Vivid orange
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
        color: colorMap[e.category] || '#ffffff',
        size: e.category === 'country' ? 0.95 : 0.80,
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
          color: 'rgba(56,189,248,0.85)', stroke: 0.9, coords: r.path
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

  // ── Country Boundary Polygons (with Survey of India sovereign borders) ──
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

  function isMatchName(n1, n2) {
    if (!n1 || !n2) return false;
    const a = n1.toLowerCase().trim();
    const b = n2.toLowerCase().trim();
    return a === b || a.includes(b) || b.includes(a);
  }

  function applyPolygons(features) {
    if (!globe || !features || polygonsLoaded) return;
    polygonsLoaded = true;

    globe
      .polygonsData(activeLayers.political ? features : [])
      // Default altitude 0.003 cleanly eliminates Z-fighting with sphere surface
      .polygonAltitude(d => {
        const name = d.properties.ADMIN || d.properties.NAME;
        return (selectedCountryName && isMatchName(name, selectedCountryName)) ? 0.014 : 0.003;
      })
      .polygonSideColor(d => {
        const name = d.properties.ADMIN || d.properties.NAME;
        return (selectedCountryName && isMatchName(name, selectedCountryName)) ? 'rgba(56, 189, 248, 0.45)' : 'transparent';
      })
      .polygonStrokeColor(d => {
        const name = d.properties.ADMIN || d.properties.NAME;
        return (selectedCountryName && isMatchName(name, selectedCountryName)) ? '#38bdf8' : 'rgba(255, 255, 255, 0.35)';
      })
      .polygonCapColor(d => {
        const name = d.properties.ADMIN || d.properties.NAME;
        return (selectedCountryName && isMatchName(name, selectedCountryName)) ? 'rgba(14, 165, 233, 0.48)' : 'rgba(15, 30, 55, 0.22)';
      })
      .onPolygonClick(poly => {
        const name = poly.properties.ADMIN || poly.properties.NAME;
        const mode = window.WORLD_NAV ? window.WORLD_NAV.getMode() : 'browse';
        if (mode === 'recall') { handleRecallAttempt(0, 0, name); return; }
        if (mode === 'quiz') return;

        selectedCountryName = name;
        if (window.WORLD_MAP_DATA) {
          const match = window.WORLD_MAP_DATA.entities.find(e =>
            e.category === 'country' && isMatchName(e.name, name)
          );
          if (match) {
            selectEntity(match.id, false);
            if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
              window.WORLD_APP.onEntitySelected(match.id);
            }
          }
        }
      });
  }

  function updatePolygonStyles() {
    if (!globe || !countriesGeojson || !polygonsLoaded) return;
    globe
      .polygonAltitude(d => {
        const name = d.properties.ADMIN || d.properties.NAME;
        return (selectedCountryName && isMatchName(name, selectedCountryName)) ? 0.014 : 0.003;
      })
      .polygonCapColor(d => {
        const name = d.properties.ADMIN || d.properties.NAME;
        return (selectedCountryName && isMatchName(name, selectedCountryName)) ? 'rgba(14, 165, 233, 0.48)' : 'rgba(15, 30, 55, 0.22)';
      })
      .polygonStrokeColor(d => {
        const name = d.properties.ADMIN || d.properties.NAME;
        return (selectedCountryName && isMatchName(name, selectedCountryName)) ? '#38bdf8' : 'rgba(255, 255, 255, 0.35)';
      })
      .polygonSideColor(d => {
        const name = d.properties.ADMIN || d.properties.NAME;
        return (selectedCountryName && isMatchName(name, selectedCountryName)) ? 'rgba(56, 189, 248, 0.45)' : 'transparent';
      });
  }

  // ── Spherical Spatial Grid Decluttering (Balanced Globally, Zero Cluster Blobs) ──
  function _applyLayers() {
    if (!globe) return;

    const pov = globe.pointOfView ? globe.pointOfView() : { lat: 15, lng: 20, altitude: 2.3 };
    const camLat = pov.lat || 15;
    const camLng = pov.lng || 20;
    const camLatRad = camLat * (Math.PI / 180);
    const altitude = pov.altitude || 2.3;

    if (activeRecallTarget || !activeLayers.labels) {
      globe.labelsData([]);
    } else {
      const candidates = [];
      let selectedLabel = null;

      for (let i = 0; i < allLabels.length; i++) {
        const l = allLabels[i];
        if (hiddenQuizEntityId && l.id === hiddenQuizEntityId) continue;

        if (l.category === 'country' && !activeLayers.political) continue;
        if ((l.category === 'mountain' || l.category === 'desert' || l.category === 'grassland') && !activeLayers.physical) continue;
        if ((l.category === 'river' || l.category === 'lake' || l.category === 'strait' || l.category === 'sea') && !activeLayers.water) continue;

        // Guaranteed visibility for selected entity
        if (l.id === selectedEntityId) {
          selectedLabel = Object.assign({}, l, {
            size: 1.35,
            color: '#38bdf8',
            dotRadius: 0.42
          });
          continue;
        }

        // Spherical cosine dot product to cull behind-the-horizon points
        const lLatRad = l.lat * (Math.PI / 180);
        const dLngRad = (l.lng - camLng) * (Math.PI / 180);
        const cosAngle = Math.sin(camLatRad) * Math.sin(lLatRad) + Math.cos(camLatRad) * Math.cos(lLatRad) * Math.cos(dLngRad);

        // Discard behind horizon (> 78 degrees from center of view)
        if (cosAngle < 0.20) continue;

        candidates.push({
          label: l,
          cosAngle: cosAngle,
          weight: (l.isProminent ? 80 : 20) + cosAngle * 40
        });
      }

      // Sort by prominence & distance from view center
      candidates.sort((a, b) => b.weight - a.weight);

      // Spatial Grid Decluttering: dynamically adjusts cell size based on camera altitude
      const cellSize = altitude > 1.8 ? 16 : (altitude > 1.2 ? 10 : 5);
      const maxPerCell = altitude > 1.8 ? 1 : 2;
      const cellCounts = {};
      const chosen = [];

      if (selectedLabel) chosen.push(selectedLabel);

      for (let i = 0; i < candidates.length; i++) {
        const item = candidates[i].label;
        const cellX = Math.floor((item.lng + 180) / cellSize);
        const cellY = Math.floor((item.lat + 90) / cellSize);
        const cellKey = cellX + '_' + cellY;

        const currentCount = cellCounts[cellKey] || 0;
        if (currentCount < maxPerCell) {
          cellCounts[cellKey] = currentCount + 1;
          chosen.push(item);
          if (chosen.length >= 65) break; // generous, balanced quota
        }
      }

      globe.labelsData(chosen);
    }

    // Paths
    const filteredPaths = allPaths.filter(p => {
      if (p.type === 'river') return activeLayers.water;
      if (p.type === 'mountain') return activeLayers.physical;
      return true;
    });
    globe.pathsData(filteredPaths);

    // Polygons layer toggle & update styles
    if (countriesGeojson && polygonsLoaded) {
      globe.polygonsData(activeLayers.political ? countriesGeojson.features : []);
      updatePolygonStyles();
    }
  }

  function updateVisibleLayers() { scheduleUpdate(40); }

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
      updatePolygonStyles();
      scheduleUpdate(40);
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

    updatePolygonStyles();
    if (shouldFly) flyTo(lon, lat, altitude);
    scheduleUpdate(40);
  }

  function setQuizTarget(targetEntityId) {
    hiddenQuizEntityId = targetEntityId;
    scheduleUpdate(40);

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
    scheduleUpdate(40);
    if (targetEntityId) selectEntity(targetEntityId, false, 0.88);
  }

  function setRecallTarget(targetEntity, callback) {
    activeRecallTarget = targetEntity;
    recallCallback = callback;
    activeLayers.labels = false;
    scheduleUpdate(40);
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
    scheduleUpdate(40);
    if (targetEntity && targetEntity.coords) {
      selectEntity(targetEntity.id, true, 0.88);
    }
  }

  function clearRecallTarget() {
    activeRecallTarget = null;
    recallCallback = null;
    activeLayers.labels = true;
    scheduleUpdate(40);
  }

  function setLayerVisibility(layer, visible) {
    activeLayers[layer] = visible;
    scheduleUpdate(40);
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
    updatePolygonStyles();
    scheduleUpdate(40);
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
