/**
 * World Mapping Atlas — 2D Interactive Flat Map Engine (Leaflet.js)
 * Real physical + political basemap with country names, borders, and terrain.
 * Full mode integration: Browse, Quiz, and Recall.
 */

window.WORLD_FLAT_MAP = (function () {
  'use strict';

  let map = null;
  let container = null;
  let mapDiv = null;
  let markersLayer = null;
  let quizLayer = null;
  let recallLayer = null;

  let selectedId = null;
  let isReady = false;
  let initDone = false;

  let currentMode = 'browse';
  let activeQuizTargetId = null;
  let activeRecallTarget = null;
  let recallCallback = null;

  const activeLayers = {
    political: true,
    physical: true,
    water: true,
    labels: true
  };

  const catColor = {
    country:   '#3b82f6',
    mountain:  '#a855f7',
    river:     '#06b6d4',
    lake:      '#0ea5e9',
    strait:    '#14b8a6',
    desert:    '#f59e0b',
    grassland: '#22c55e',
    sea:       '#0284c7',
    island:    '#f97316'
  };

  function init() {
    container = document.getElementById('flatMapContainer');
    if (!container) return false;
    if (initDone) {
      resizeAndRender();
      return true;
    }

    if (typeof L === 'undefined') {
      console.error('Leaflet is not loaded!');
      return false;
    }

    // Create a dedicated div inside flatMapContainer for Leaflet
    mapDiv = document.createElement('div');
    mapDiv.id = 'leafletMap';
    mapDiv.style.cssText = 'width:100%;height:100%;position:absolute;inset:0;background:#060e18;';
    container.appendChild(mapDiv);

    // Initialise Leaflet map
    map = L.map('leafletMap', {
      center: [20, 15],
      zoom: 3,
      minZoom: 2,
      maxZoom: 11,
      zoomControl: false,
      attributionControl: true,
      preferCanvas: true
    });

    // National Geographic Physical + Political World Map (100% Free, NO API Key Required, No Watermark)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; National Geographic, Esri, DeLorme, NAVTEQ',
      maxZoom: 16
    }).addTo(map);

    // Dedicated layers
    markersLayer = L.layerGroup().addTo(map);
    quizLayer = L.layerGroup().addTo(map);
    recallLayer = L.layerGroup().addTo(map);

    // Map click handler (for Recall spatial tap)
    map.on('click', e => {
      if (activeRecallTarget && recallCallback) {
        handleSpatialRecallClick(e.latlng.lat, e.latlng.lng, null);
      }
    });

    buildMarkers();
    initDone = true;
    isReady = true;

    return true;
  }

  function buildMarkers() {
    if (!map || !markersLayer) return;
    if (!window.WORLD_MAP_DATA || !Array.isArray(window.WORLD_MAP_DATA.entities)) return;

    markersLayer.clearLayers();

    window.WORLD_MAP_DATA.entities.forEach(e => {
      if (!e.coords) return;
      const [lng, lat] = e.coords;
      const color = catColor[e.category] || '#94a3b8';

      // Custom marker icon
      const icon = L.divIcon({
        className: 'atlas-marker-wrapper',
        iconSize: [12, 12],
        iconAnchor: [6, 6],
        popupAnchor: [0, -10],
        html: `<div class="atlas-marker-dot" id="fmarker-${e.id}" style="
          width:12px;height:12px;border-radius:50%;
          background:${color};
          border:2px solid rgba(255,255,255,0.9);
          box-shadow:0 0 6px ${color}aa;
          cursor:pointer;
          transition:transform 0.15s ease, box-shadow 0.15s ease;
        "></div>`
      });

      const marker = L.marker([lat, lng], { icon: icon });
      marker._atlasEntity = e;
      marker._atlasId = e.id;

      // Tooltip for browse mode
      marker.bindTooltip(`
        <div style="font-family:'JetBrains Mono',monospace;">
          <div style="font-weight:700;color:#60a5fa;font-size:12px;">${esc(e.name)}</div>
          <div style="font-size:10px;color:#94a3b8;margin-top:2px;text-transform:uppercase;letter-spacing:0.04em;">${esc(e.category)} · ${esc(e.continent)}</div>
        </div>
      `, {
        className: 'atlas-tooltip',
        direction: 'top',
        offset: [0, -8]
      });

      marker.on('click', () => {
        // In Recall mode, tapping a marker counts as a recall attempt
        if (activeRecallTarget && recallCallback) {
          handleSpatialRecallClick(lat, lng, e.name);
          return;
        }

        // In Quiz mode, clicking markers is disabled to avoid spoilers
        if (activeQuizTargetId) return;

        // In Browse mode:
        selectEntity(e.id, false);
        if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
          window.WORLD_APP.onEntitySelected(e.id);
        }
      });

      markersLayer.addLayer(marker);
    });

    applyLayerVisibility();
  }

  function applyLayerVisibility() {
    if (!markersLayer) return;

    markersLayer.eachLayer(m => {
      const e = m._atlasEntity;
      if (!e) return;

      let visible = true;
      if (e.category === 'country' && !activeLayers.political) visible = false;
      if ((e.category === 'mountain' || e.category === 'desert' || e.category === 'grassland') && !activeLayers.physical) visible = false;
      if ((e.category === 'river' || e.category === 'lake' || e.category === 'strait' || e.category === 'sea') && !activeLayers.water) visible = false;

      // In Recall mode, hide all marker tooltips
      if (activeRecallTarget) {
        m.unbindTooltip();
      }

      const el = m.getElement();
      if (el) {
        el.style.display = visible ? '' : 'none';
      }
    });
  }

  function selectEntity(id, shouldPan = true) {
    selectedId = id;
    if (!map || !markersLayer) return;

    markersLayer.eachLayer(m => {
      const el = m.getElement();
      const dot = el ? el.querySelector('.atlas-marker-dot') : null;
      if (!dot) return;

      if (m._atlasId === id) {
        dot.style.transform = 'scale(2.0)';
        dot.style.boxShadow = '0 0 16px 5px #38bdf8';
        dot.style.borderColor = '#ffffff';
        dot.style.zIndex = '999';
      } else {
        dot.style.transform = '';
        dot.style.boxShadow = '';
        dot.style.borderColor = 'rgba(255,255,255,0.9)';
        dot.style.zIndex = '';
      }
    });

    if (shouldPan && id && window.DATA_INTEGRITY) {
      const entity = window.DATA_INTEGRITY.getEntity(id);
      if (entity && entity.coords) {
        const [lng, lat] = entity.coords;
        map.flyTo([lat, lng], Math.max(map.getZoom(), 5), { animate: true, duration: 0.9 });
      }
    }
  }

  // ── Quiz Mode Integration on 2D Flat Map ──
  function setQuizTarget(targetEntityId) {
    activeQuizTargetId = targetEntityId;
    if (!map || !quizLayer) return;

    quizLayer.clearLayers();
    if (!targetEntityId || !window.DATA_INTEGRITY) return;

    const entity = window.DATA_INTEGRITY.getEntity(targetEntityId);
    if (!entity || !entity.coords) return;
    const [lng, lat] = entity.coords;

    // Suppress tooltips on all regular markers so user can't hover to cheat
    if (markersLayer) {
      markersLayer.eachLayer(m => {
        if (m.isTooltipOpen()) m.closeTooltip();
      });
    }

    // Create prominent pulsing Quiz Target Pin
    const quizIcon = L.divIcon({
      className: 'quiz-target-marker-wrapper',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      html: `
        <div style="position:relative;width:28px;height:28px;display:flex;align-items:center;justify-content:center;">
          <div style="
            position:absolute;inset:-6px;border-radius:50%;
            border:2px solid #38bdf8;
            animation:atlasQuizPulse 1.4s ease-out infinite;
          "></div>
          <div style="
            width:22px;height:22px;border-radius:50%;
            background:#0284c7;color:#fff;
            display:flex;align-items:center;justify-content:center;
            font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;
            border:2px solid #fff;box-shadow:0 0 12px #38bdf8;
          ">?</div>
        </div>
      `
    });

    const quizMarker = L.marker([lat, lng], { icon: quizIcon, zIndexOffset: 1000 });
    quizLayer.addLayer(quizMarker);

    map.flyTo([lat, lng], Math.max(map.getZoom(), 5), { animate: true, duration: 0.9 });
  }

  function revealQuizAnswer(targetEntityId, isCorrect) {
    if (!map || !quizLayer) return;
    if (!targetEntityId || !window.DATA_INTEGRITY) return;

    const entity = window.DATA_INTEGRITY.getEntity(targetEntityId);
    if (!entity || !entity.coords) return;
    const [lng, lat] = entity.coords;

    quizLayer.clearLayers();

    const color = isCorrect ? '#10b981' : '#ef4444';
    const symbol = isCorrect ? '✓' : '✗';

    const revealIcon = L.divIcon({
      className: 'quiz-reveal-marker-wrapper',
      iconSize: [160, 32],
      iconAnchor: [16, 16],
      html: `
        <div style="display:flex;align-items:center;gap:6px;pointer-events:none;">
          <div style="
            width:26px;height:26px;border-radius:50%;
            background:${color};color:#fff;
            display:flex;align-items:center;justify-content:center;
            font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;
            border:2px solid #fff;box-shadow:0 0 14px ${color};flex:none;
          ">${symbol}</div>
          <div style="
            background:rgba(6,14,24,0.94);border:1px solid ${color};
            border-radius:6px;padding:3px 8px;font-family:'JetBrains Mono',monospace;
            font-size:11px;font-weight:600;color:#fff;white-space:nowrap;
            box-shadow:0 4px 12px rgba(0,0,0,0.6);
          ">${esc(entity.name)}</div>
        </div>
      `
    });

    const revealMarker = L.marker([lat, lng], { icon: revealIcon, zIndexOffset: 1100 });
    quizLayer.addLayer(revealMarker);

    activeQuizTargetId = null;
  }

  // ── Recall Mode Integration on 2D Flat Map ──
  function setRecallTarget(targetEntity, callback) {
    activeRecallTarget = targetEntity;
    recallCallback = callback;

    if (quizLayer) quizLayer.clearLayers();
    if (recallLayer) recallLayer.clearLayers();

    // Disable all tooltips on markers in recall mode so user has to guess
    if (markersLayer) {
      markersLayer.eachLayer(m => {
        if (m.isTooltipOpen()) m.closeTooltip();
      });
    }
  }

  function handleSpatialRecallClick(clickedLat, clickedLng, clickedName) {
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
      // ~600 km tolerance on map click
      if (Math.sqrt(dLat * dLat + dLng * dLng) < 6.0) isMatch = true;
    }

    recallCallback(isMatch, clickedName);
  }

  function revealRecallTarget(targetEntity) {
    if (!map || !recallLayer || !targetEntity || !targetEntity.coords) return;

    recallLayer.clearLayers();
    const [lng, lat] = targetEntity.coords;

    const icon = L.divIcon({
      className: 'recall-reveal-marker',
      iconSize: [160, 32],
      iconAnchor: [16, 16],
      html: `
        <div style="display:flex;align-items:center;gap:6px;pointer-events:none;">
          <div style="
            width:26px;height:26px;border-radius:50%;
            background:#10b981;color:#fff;
            display:flex;align-items:center;justify-content:center;
            font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;
            border:2px solid #fff;box-shadow:0 0 14px #10b981;flex:none;
          ">✓</div>
          <div style="
            background:rgba(6,14,24,0.94);border:1px solid #10b981;
            border-radius:6px;padding:3px 8px;font-family:'JetBrains Mono',monospace;
            font-size:11px;font-weight:600;color:#fff;white-space:nowrap;
            box-shadow:0 4px 12px rgba(0,0,0,0.6);
          ">${esc(targetEntity.name)}</div>
        </div>
      `
    });

    const marker = L.marker([lat, lng], { icon: icon, zIndexOffset: 1200 });
    recallLayer.addLayer(marker);

    map.flyTo([lat, lng], Math.max(map.getZoom(), 5), { animate: true, duration: 0.9 });
  }

  function clearRecallTarget() {
    activeRecallTarget = null;
    recallCallback = null;
    if (recallLayer) recallLayer.clearLayers();
    buildMarkers(); // restores tooltips
  }

  function setLayerVisibility(layer, visible) {
    activeLayers[layer] = visible;
    applyLayerVisibility();
  }

  function zoomIn() { if (map) map.zoomIn(); }
  function zoomOut() { if (map) map.zoomOut(); }

  function resetView() {
    selectedId = null;
    activeQuizTargetId = null;
    activeRecallTarget = null;
    if (quizLayer) quizLayer.clearLayers();
    if (recallLayer) recallLayer.clearLayers();

    if (markersLayer) {
      markersLayer.eachLayer(m => {
        const el = m.getElement();
        const dot = el ? el.querySelector('.atlas-marker-dot') : null;
        if (dot) {
          dot.style.transform = '';
          dot.style.boxShadow = '';
          dot.style.borderColor = 'rgba(255,255,255,0.9)';
          dot.style.zIndex = '';
        }
      });
    }

    if (map) map.flyTo([20, 15], 3, { animate: true, duration: 0.8 });
  }

  function resizeAndRender() {
    if (map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 60);
    }
  }

  function esc(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return {
    init,
    render: () => {},
    resizeAndRender,
    zoomIn,
    zoomOut,
    resetView,
    selectEntity,
    setQuizTarget,
    revealQuizAnswer,
    setRecallTarget,
    revealRecallTarget,
    clearRecallTarget,
    setLayerVisibility,
    isReady: () => isReady
  };
})();
