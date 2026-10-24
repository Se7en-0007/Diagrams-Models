/**
 * World Mapping Atlas — 2D Interactive Vector Map Engine (Leaflet.js)
 * 1. Cartographic Paper Atlas Aesthetic: Pale blue-grey sea (#edf2f7), crisp white landmasses (#ffffff), delicate slate grey borders (#cbd5e1).
 * 2. Distinct Physical Geography: Mountain ranges rendered as shaded topographic polygons in warm earth-tan tint (#d8cca8) highlighting to warm earth brown (#a68057, border #6b4b2c) matching user reference screenshots.
 * 3. Flowing Animated Rivers: Braided river channels with CSS stroke-dashoffset animation.
 * 4. Distinct Ecological & Feature Symbols: Peaks (magenta ▲), Passes (amber ⧖), Glaciers (cyan ❄), and Protected Areas (National parks, Tiger reserves, Biosphere reserves, Ramsar sites).
 * 5. Official Survey of India Sovereign Boundaries: Seamless inclusion of POK and Aksai Chin with toggleable Indian State Borders.
 * 6. Floating Executive Card Tooltip: Clean white rounded card with 4px left category accent bar.
 * 7. Quiz Spotlight: Surrounding map dimmed 5-7% with pulsating radar ring on target.
 */

window.WORLD_FLAT_MAP = (function () {
  'use strict';

  let map = null;
  let container = null;
  let mapDiv = null;

  // Base map tile layers (Light and Dark mode)
  let lightTileLayer = null;
  let darkTileLayer = null;
  let currentTileLayer = null;
  let currentTheme = 'light';

  // Layer groups
  let oceanCurrentsLayer = null;
  let countriesGeojsonLayer = null;
  let stateBordersLayer = null;
  let mountainPolygonsLayer = null;
  let mountainCrestsLayer = null;
  let riversLayer = null;
  let peaksLayer = null;
  let passesLayer = null;
  let glaciersLayer = null;
  let protectedAreasLayer = null;
  let markersLayer = null;
  let quizLayer = null;
  let quizDimLayer = null;
  let recallLayer = null;

  let countriesData = null;
  let stateBordersData = null;
  let selectedId = null;
  let selectedCountryName = null;
  let isReady = false;
  let initDone = false;

  let activeQuizTargetId = null;
  let activeRecallTarget = null;
  let recallCallback = null;

  // Layer visibility & category filters
  let showBorders = true;      // Master switch for all state and country boundaries
  let showStateBorders = true;
  let showLabels = true;       // Master switch for all geographic text names/labels
  let showFacts = false;
  let showOceanCurrents = true;

  const activeCategoryFilters = {
    national_park: true,
    tiger_reserve: true,
    biosphere_reserve: true,
    ramsar_site: true,
    river: true,
    mountain: true,
    peak: true,
    pass: true,
    glacier: true,
    states: true,
    country: true,
    lake: true,
    strait: true,
    desert: true,
    grassland: true,
    current: true
  };

  const catColor = {
    country:          '#2563eb',
    mountain:         '#78350f',
    river:            '#0284c7',
    peak:             '#9333ea',
    pass:             '#c2410c',
    glacier:          '#0e7490',
    current:          '#0284c7',
    national_park:    '#15803d',
    tiger_reserve:    '#78350f',
    biosphere_reserve:'#6b21a8',
    ramsar_site:      '#0f766e',
    lake:             '#0284c7',
    strait:           '#0891b2',
    desert:           '#d97706',
    grassland:        '#16a34a',
    sea:              '#0284c7',
    island:           '#ea580c'
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

    // Dedicated div inside flatMapContainer
    mapDiv = document.createElement('div');
    mapDiv.id = 'leafletMap';
    mapDiv.style.cssText = 'width:100%;height:100%;position:absolute;inset:0;background:#edf2f7;';
    container.appendChild(mapDiv);

    // Initialise Leaflet with high-performance HTML5 canvas
    map = L.map('leafletMap', {
      center: [23.5, 82.0],
      zoom: 5,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false,
      attributionControl: true,
      preferCanvas: true
    });

    // ── Base Map Visibility Fix: Initialize high-resolution cartographic tile layers without watermark ──
    lightTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), GIS Community',
      maxZoom: 18,
      zIndex: 1
    });

    darkTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      maxZoom: 16,
      zIndex: 1
    });

    // Detect initial theme preference
    const savedTheme = localStorage.getItem('mapping_atlas_theme') ||
      (document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    currentTheme = savedTheme;

    if (currentTheme === 'dark') {
      darkTileLayer.addTo(map);
      currentTileLayer = darkTileLayer;
      mapDiv.style.background = '#060e18';
    } else {
      lightTileLayer.addTo(map);
      currentTileLayer = lightTileLayer;
      mapDiv.style.background = '#edf2f7';
    }

    // Layer groups initialized in exact cartographic stacking order
    quizDimLayer = L.layerGroup().addTo(map);
    oceanCurrentsLayer = L.layerGroup().addTo(map);
    countriesGeojsonLayer = L.layerGroup().addTo(map);
    stateBordersLayer = L.layerGroup().addTo(map);
    mountainPolygonsLayer = L.layerGroup().addTo(map);
    mountainCrestsLayer = L.layerGroup().addTo(map);
    riversLayer = L.layerGroup().addTo(map);
    protectedAreasLayer = L.layerGroup().addTo(map);
    glaciersLayer = L.layerGroup().addTo(map);
    passesLayer = L.layerGroup().addTo(map);
    peaksLayer = L.layerGroup().addTo(map);
    markersLayer = L.layerGroup().addTo(map);
    quizLayer = L.layerGroup().addTo(map);
    recallLayer = L.layerGroup().addTo(map);

    // Map background click (for Recall spatial tap)
    map.on('click', e => {
      if (activeRecallTarget && recallCallback) {
        handleSpatialRecallClick(e.latlng.lat, e.latlng.lng, null);
      }
    });

    // Load datasets
    loadVectorCountries();
    loadStateBorders();
    buildPhysicalFeatures();
    buildOceanCurrents();
    buildPointMarkers();

    initDone = true;
    isReady = true;
    return true;
  }

  // ── Theme Switcher: Seamless Base Map Tile Swapping ──
  function setTheme(theme) {
    currentTheme = theme;
    if (!map) return;

    if (theme === 'dark') {
      if (map.hasLayer(lightTileLayer)) map.removeLayer(lightTileLayer);
      if (!map.hasLayer(darkTileLayer)) darkTileLayer.addTo(map);
      currentTileLayer = darkTileLayer;
      if (mapDiv) mapDiv.style.background = '#060e18';
    } else {
      if (map.hasLayer(darkTileLayer)) map.removeLayer(darkTileLayer);
      if (!map.hasLayer(lightTileLayer)) lightTileLayer.addTo(map);
      currentTileLayer = lightTileLayer;
      if (mapDiv) mapDiv.style.background = '#edf2f7';
    }
    updateStyles();
  }

  // ── 1. Vector Countries (Crisp Sovereign Boundaries with POK/Aksai Chin) ──
  function loadVectorCountries() {
    fetch('world-map/data/countries.geojson')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load countries.geojson');
        return res.json();
      })
      .then(geojson => {
        countriesData = geojson;
        renderVectorCountries();
      })
      .catch(err => {
        console.error('Vector countries load error:', err);
      });
  }

  function getCountryStyle(feature) {
    if (!activeCategoryFilters.country) {
      return { fill: false, stroke: false, opacity: 0, fillOpacity: 0 };
    }
    const name = feature.properties.ADMIN || feature.properties.NAME || '';
    const isSelected = selectedCountryName && isMatchName(name, selectedCountryName);

    if (isSelected) {
      return {
        fillColor: '#38bdf8',
        fillOpacity: 0.35,
        color: '#0284c7',
        weight: showBorders ? 2.2 : 0,
        opacity: showBorders ? 1 : 0
      };
    }

    const isDark = currentTheme === 'dark';
    const borderWeight = showBorders ? 1.0 : 0;
    const borderOpacity = showBorders ? (isDark ? 0.65 : 0.85) : 0;
    return {
      fillColor: isDark ? '#0f172a' : '#ffffff',
      fillOpacity: 0.04,
      color: isDark ? 'rgba(148, 163, 184, 0.40)' : 'rgba(100, 116, 139, 0.45)',
      weight: borderWeight,
      opacity: borderOpacity
    };
  }

  function renderVectorCountries() {
    if (!map || !countriesData || !countriesGeojsonLayer) return;
    countriesGeojsonLayer.clearLayers();

    const layer = L.geoJSON(countriesData, {
      style: getCountryStyle,
      onEachFeature: (feature, l) => {
        const name = feature.properties.ADMIN || feature.properties.NAME || '';

        // Floating Card Tooltip matching screenshot
        l.bindTooltip(`
          <div class="atlas-card-tooltip">
            <div class="card-accent" style="background:#2563eb;"></div>
            <div class="card-body">
              <div class="card-title">${esc(name)}</div>
              <div class="card-subtitle">Sovereign State</div>
              <div class="card-context">Click to explore details &amp; facts</div>
            </div>
          </div>
        `, {
          className: 'atlas-custom-leaflet-tooltip',
          direction: 'auto',
          sticky: true,
          offset: [15, 0]
        });

        // Hover effect
        l.on('mouseover', () => {
          const isSelected = selectedCountryName && isMatchName(name, selectedCountryName);
          if (!isSelected) {
            l.setStyle({
              fillColor: '#38bdf8',
              fillOpacity: 0.15,
              color: '#0284c7',
              weight: 1.5
            });
          }
        });

        l.on('mouseout', () => {
          l.setStyle(getCountryStyle(feature));
        });

        // Click handler
        l.on('click', () => {
          if (activeRecallTarget && recallCallback) {
            handleSpatialRecallClick(0, 0, name);
            return;
          }
          if (activeQuizTargetId) return;

          const match = findEntityByCountryName(name);
          if (match) {
            selectEntity(match.id, false);
            if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
              window.WORLD_APP.onEntitySelected(match.id);
            }
          }
        });
      }
    });

    countriesGeojsonLayer.addLayer(layer);
  }

  // ── 2. Indian State Borders (Toggleable with [State borders] button) ──
  function loadStateBorders() {
    fetch('world-map/data/india-states.geojson')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load india-states.geojson');
        return res.json();
      })
      .then(geojson => {
        stateBordersData = geojson;
        renderStateBorders();
      })
      .catch(err => {
        console.error('State borders load error:', err);
      });
  }

  function renderStateBorders() {
    if (!map || !stateBordersData || !stateBordersLayer) return;
    stateBordersLayer.clearLayers();

    if (!showBorders || !showStateBorders || !activeCategoryFilters.states) return;

    const isDark = currentTheme === 'dark';
    const layer = L.geoJSON(stateBordersData, {
      style: {
        fill: false,
        color: isDark ? 'rgba(148, 163, 184, 0.55)' : '#94a3b8',
        weight: 1.0,
        dashArray: '3, 3',
        opacity: 0.85
      },
      onEachFeature: (feature, l) => {
        const name = feature.properties.name || '';
        l.bindTooltip(`
          <div class="atlas-card-tooltip">
            <div class="card-accent" style="background:#0284c7;"></div>
            <div class="card-body">
              <div class="card-title">${esc(name)}</div>
              <div class="card-subtitle">State / Union Territory</div>
              <div class="card-context">India</div>
            </div>
          </div>
        `, {
          className: 'atlas-custom-leaflet-tooltip',
          direction: 'auto',
          sticky: true,
          offset: [12, 0]
        });
      }
    });

    stateBordersLayer.addLayer(layer);
  }

  // ── 3. Mountain Ranges (Shaded Topographic Polygons Matching Screenshot 1) ──
  // ── Mountain Topographic Shading Styles (Light & Dark Mode) ──
  function getMountainStyle(m, isSelected = false) {
    const isDark = currentTheme === 'dark';
    if (isSelected) {
      return {
        fillColor: isDark ? '#92400e' : '#a68057',
        fillOpacity: isDark ? 0.65 : 0.90,
        color: isDark ? '#eab308' : '#614124',
        weight: isDark ? 2.2 : 2.4
      };
    }
    return {
      fillColor: isDark ? '#78350f' : '#d8cca8',
      fillOpacity: isDark ? 0.35 : 0.65,
      color: isDark ? '#ca8a04' : '#b5a48b',
      weight: isDark ? 1.5 : 1.3,
      opacity: 0.95
    };
  }

  // ── 3. Mountain Ranges (Shaded Topographic Polygons Matching Target Reference) ──
  function buildPhysicalFeatures() {
    if (!window.GEOGRAPHIC_FEATURES) return;

    mountainPolygonsLayer.clearLayers();
    mountainCrestsLayer.clearLayers();
    riversLayer.clearLayers();
    peaksLayer.clearLayers();
    passesLayer.clearLayers();
    glaciersLayer.clearLayers();
    protectedAreasLayer.clearLayers();

    const feats = window.GEOGRAPHIC_FEATURES;

    // A. Mountain Ranges (Polygons & Crests)
    (feats.mountains || []).forEach(m => {
      // 1. Shaded Topographic Polygon Footprint
      if (m.polygon && m.polygon.length > 2) {
        const latlngs = m.polygon.map(p => [p[1], p[0]]);

        const poly = L.polygon(latlngs, Object.assign({
          className: 'atlas-mountain-polygon'
        }, getMountainStyle(m, selectedId === m.id)));

        // Floating Card Tooltip (Identical to Naga Hills in Screenshot 1!)
        poly.bindTooltip(`
          <div class="atlas-card-tooltip">
            <div class="card-accent" style="background:#78350f;"></div>
            <div class="card-body">
              <div class="card-title">${esc(m.name)}</div>
              <div class="card-subtitle">${esc(m.categoryName || 'Mountain range')}</div>
              <div class="card-context">${esc(m.context || '')}</div>
            </div>
          </div>
        `, {
          className: 'atlas-custom-leaflet-tooltip',
          direction: 'auto',
          sticky: true,
          offset: [15, 0]
        });

        // Hover effect
        poly.on('mouseover', () => {
          poly.setStyle(getMountainStyle(m, true));
        });

        poly.on('mouseout', () => {
          const isSelected = (selectedId === m.id);
          poly.setStyle(getMountainStyle(m, isSelected));
        });

        poly.on('click', () => {
          if (activeQuizTargetId) return;
          selectEntity(m.id, false);
          if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
            window.WORLD_APP.onEntitySelected(m.id);
          }
        });

        poly._atlasId = m.id;
        poly._atlasType = 'mountain';
        poly._atlasMountain = m;
        mountainPolygonsLayer.addLayer(poly);
      }

      // 2. Crest Line
      if (m.path && m.path.length > 1) {
        const crestCoords = m.path.map(p => [p[1], p[0]]);
        const crest = L.polyline(crestCoords, {
          className: 'atlas-mountain-crest',
          color: '#854d0e',
          weight: 1.8,
          opacity: 0.75,
          dashArray: '4, 4'
        });
        crest._atlasId = m.id;
        crest._atlasType = 'mountain';
        mountainCrestsLayer.addLayer(crest);
      }
    });

    // B. Rivers (Braided & Flowing Polylines)
    (feats.rivers || []).forEach(r => {
      const segments = r.segments && r.segments.length > 0 ? r.segments : (r.path ? [r.path] : []);

      segments.forEach(seg => {
        if (!seg || seg.length < 2) return;
        const latlngs = seg.map(p => [p[1], p[0]]);

        const poly = L.polyline(latlngs, {
          className: 'atlas-animated-river',
          color: '#38bdf8',
          weight: 2.2,
          opacity: 0.88,
          lineCap: 'round',
          lineJoin: 'round'
        });

        poly.bindTooltip(`
          <div class="atlas-card-tooltip">
            <div class="card-accent" style="background:#0284c7;"></div>
            <div class="card-body">
              <div class="card-title">${esc(r.name)}</div>
              <div class="card-subtitle">${esc(r.categoryName || 'River system')}</div>
              <div class="card-context">${esc(r.context || '')}</div>
            </div>
          </div>
        `, {
          className: 'atlas-custom-leaflet-tooltip',
          direction: 'auto',
          sticky: true,
          offset: [12, 0]
        });

        poly.on('click', () => {
          if (activeQuizTargetId) return;
          selectEntity(r.id, false);
          if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
            window.WORLD_APP.onEntitySelected(r.id);
          }
        });

        poly._atlasId = r.id;
        poly._atlasType = 'river';
        riversLayer.addLayer(poly);
      });
    });

    // C. Peaks (Magenta Triangles ▲)
    (feats.peaks || []).forEach(p => {
      if (!p.coords) return;
      const [lng, lat] = p.coords;

      const peakIcon = L.divIcon({
        className: 'atlas-peak-icon-wrapper',
        iconSize: [16, 16],
        iconAnchor: [8, 12],
        html: `<div class="atlas-peak-triangle" style="
          width: 0; height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-bottom: 12px solid #9333ea;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
          cursor: pointer;
        "></div>`
      });

      const marker = L.marker([lat, lng], { icon: peakIcon });
      marker.bindTooltip(`
        <div class="atlas-card-tooltip">
          <div class="card-accent" style="background:#9333ea;"></div>
          <div class="card-body">
            <div class="card-title">${esc(p.name)} (${esc(p.elevation)})</div>
            <div class="card-subtitle">Peak · ${esc(p.range || '')}</div>
            <div class="card-context">${esc(p.context || '')}</div>
          </div>
        </div>
      `, {
        className: 'atlas-custom-leaflet-tooltip',
        direction: 'top',
        offset: [0, -10]
      });

      marker._atlasId = p.id;
      marker._atlasType = 'peak';
      peaksLayer.addLayer(marker);
    });

    // D. Passes (Amber Bowtie / Hourglass ⧖)
    (feats.passes || []).forEach(pa => {
      if (!pa.coords) return;
      const [lng, lat] = pa.coords;

      const passIcon = L.divIcon({
        className: 'atlas-pass-icon-wrapper',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        html: `<div class="atlas-pass-symbol" style="
          font-size: 14px; line-height: 18px; text-align: center;
          color: #c2410c; font-weight: 700;
          text-shadow: 0 0 2px #fff, 0 1px 3px rgba(0,0,0,0.4);
          cursor: pointer;
        ">⧖</div>`
      });

      const marker = L.marker([lat, lng], { icon: passIcon });
      marker.bindTooltip(`
        <div class="atlas-card-tooltip">
          <div class="card-accent" style="background:#c2410c;"></div>
          <div class="card-body">
            <div class="card-title">${esc(pa.name)} (${esc(pa.elevation)})</div>
            <div class="card-subtitle">Mountain pass</div>
            <div class="card-context">${esc(pa.context || '')}</div>
          </div>
        </div>
      `, {
        className: 'atlas-custom-leaflet-tooltip',
        direction: 'top',
        offset: [0, -8]
      });

      marker._atlasId = pa.id;
      marker._atlasType = 'pass';
      passesLayer.addLayer(marker);
    });

    // E. Glaciers (Ice Cyan ❄)
    (feats.glaciers || []).forEach(g => {
      if (!g.coords) return;
      const [lng, lat] = g.coords;

      const glacierIcon = L.divIcon({
        className: 'atlas-glacier-icon-wrapper',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        html: `<div style="
          font-size: 14px; line-height: 18px; text-align: center;
          color: #0e7490; font-weight: 700;
          text-shadow: 0 0 2px #fff; cursor: pointer;
        ">❄</div>`
      });

      const marker = L.marker([lat, lng], { icon: glacierIcon });
      marker.bindTooltip(`
        <div class="atlas-card-tooltip">
          <div class="card-accent" style="background:#0e7490;"></div>
          <div class="card-body">
            <div class="card-title">${esc(g.name)} (${esc(g.length)})</div>
            <div class="card-subtitle">Glacier system</div>
            <div class="card-context">${esc(g.context || '')}</div>
          </div>
        </div>
      `, {
        className: 'atlas-custom-leaflet-tooltip',
        direction: 'top',
        offset: [0, -8]
      });

      marker._atlasId = g.id;
      marker._atlasType = 'glacier';
      glaciersLayer.addLayer(marker);
    });

    // F. Protected Areas (National Parks, Tiger Reserves, Biosphere, Ramsar)
    (feats.protectedAreas || []).forEach(pa => {
      if (!pa.coords) return;
      const [lng, lat] = pa.coords;
      const color = catColor[pa.type] || '#15803d';
      const isDark = currentTheme === 'dark';

      // Biosphere Reserves: Translucent circular halo zone matching Target State
      if (pa.type === 'biosphere_reserve') {
        const radius = (pa.radiusKm || 38) * 1000;
        const halo = L.circle([lat, lng], {
          radius: radius,
          className: 'atlas-biosphere-halo',
          fillColor: isDark ? '#a855f7' : '#6b21a8',
          fillOpacity: isDark ? 0.22 : 0.16,
          color: isDark ? '#c084fc' : '#6b21a8',
          weight: 1.5,
          dashArray: '4, 4'
        });
        halo._atlasId = pa.id;
        halo._atlasType = pa.type;
        protectedAreasLayer.addLayer(halo);
      }

      const paIcon = L.divIcon({
        className: 'atlas-pa-icon-wrapper',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        html: `<div style="
          width: 14px; height: 14px; border-radius: 50%;
          background: ${color};
          border: 2px solid #ffffff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
          cursor: pointer;
        "></div>`
      });

      const marker = L.marker([lat, lng], { icon: paIcon });
      marker.bindTooltip(`
        <div class="atlas-card-tooltip">
          <div class="card-accent" style="background:${color};"></div>
          <div class="card-body">
            <div class="card-title">${esc(pa.name)}</div>
            <div class="card-subtitle">${esc(pa.typeName || 'Protected area')} · ${esc(pa.state || '')}</div>
            <div class="card-context">${esc(pa.context || '')}</div>
          </div>
        </div>
      `, {
        className: 'atlas-custom-leaflet-tooltip',
        direction: 'top',
        offset: [0, -8]
      });

      marker.on('click', () => {
        if (activeQuizTargetId) return;
        selectEntity(pa.id, false);
        if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
          window.WORLD_APP.onEntitySelected(pa.id);
        }
      });

      marker._atlasId = pa.id;
      marker._atlasType = pa.type;
      protectedAreasLayer.addLayer(marker);
    });

    applyCategoryVisibility();
  }

  // ── 3B. Ocean Currents Layer (30 Warm/Cold/Neutral Currents from Ocean-Currents.html) ──
  function buildOceanCurrents() {
    if (!oceanCurrentsLayer) return;
    oceanCurrentsLayer.clearLayers();
    if (!window.OCEAN_CURRENTS || !Array.isArray(window.OCEAN_CURRENTS)) return;

    window.OCEAN_CURRENTS.forEach(c => {
      const isSelected = (selectedId === c.id);
      const color = c.color || (c.type === 'w' ? '#ff6a47' : (c.type === 'c' ? '#5ec9ff' : '#dfe8ee'));

      (c.segments || []).forEach(seg => {
        if (!seg || seg.length < 2) return;

        const poly = L.polyline(seg, {
          className: 'atlas-ocean-current ' + (c.type || 'w') + (isSelected ? ' selected' : ''),
          color: isSelected ? '#f59e0b' : color,
          weight: isSelected ? 4.5 : 3.0,
          opacity: isSelected ? 1.0 : 0.88,
          lineCap: 'round',
          lineJoin: 'round'
        });

        poly.bindTooltip(`
          <div class="atlas-card-tooltip">
            <div class="card-accent" style="background:${color};"></div>
            <div class="card-body">
              <div class="card-title">${esc(c.name)}</div>
              <div class="card-subtitle">${esc(c.ocean)} Ocean · ${esc(c.typeName || 'Current')}</div>
              <div class="card-context">${esc(c.flow || '')}</div>
            </div>
          </div>
        `, {
          className: 'atlas-custom-leaflet-tooltip',
          direction: 'auto',
          sticky: true,
          offset: [15, 0]
        });

        poly.on('mouseover', () => {
          if (c.id === selectedId) return;
          poly.setStyle({
            weight: 4.5,
            opacity: 1.0
          });
        });

        poly.on('mouseout', () => {
          if (c.id === selectedId) return;
          poly.setStyle({
            color: color,
            weight: 3.0,
            opacity: 0.88
          });
        });

        poly.on('click', () => {
          if (activeRecallTarget && recallCallback) {
            handleSpatialRecallClick(c.midpoint ? c.midpoint[0] : 0, c.midpoint ? c.midpoint[1] : 0, c.name);
            return;
          }
          if (activeQuizTargetId) return;

          selectEntity(c.id, false);
          if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
            window.WORLD_APP.onEntitySelected(c.id);
          }
        });

        poly._atlasId = c.id;
        poly._atlasType = 'current';
        poly._atlasCurrent = c;
        oceanCurrentsLayer.addLayer(poly);
      });
    });
  }

  function toggleOceanCurrents(visible) {
    showOceanCurrents = (visible !== undefined) ? visible : !showOceanCurrents;
    if (oceanCurrentsLayer && map) {
      if (showOceanCurrents) {
        if (!map.hasLayer(oceanCurrentsLayer)) map.addLayer(oceanCurrentsLayer);
      } else {
        if (map.hasLayer(oceanCurrentsLayer)) map.removeLayer(oceanCurrentsLayer);
      }
    }
    const legendEl = document.getElementById('currentsLegend');
    if (legendEl) legendEl.classList.toggle('hidden', !showOceanCurrents);
    return showOceanCurrents;
  }

  // ── 4. Point Markers (Lakes, Straits, Deserts, Grasslands, Capitals) ──
  function buildPointMarkers() {
    if (!map || !markersLayer) return;
    if (!window.WORLD_MAP_DATA || !Array.isArray(window.WORLD_MAP_DATA.entities)) return;

    markersLayer.clearLayers();

    window.WORLD_MAP_DATA.entities.forEach(e => {
      if (!e.coords) return;
      const [lng, lat] = e.coords;

      // Skip rivers and mountains handled by specialized vector polygons
      if (e.category === 'river' || e.category === 'mountain') return;

      const color = catColor[e.category] || '#2563eb';
      const size = 11;

      const icon = L.divIcon({
        className: 'atlas-marker-wrapper',
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        html: `<div class="atlas-marker-dot" id="fmarker-${e.id}" style="
          width:${size}px;height:${size}px;border-radius:50%;
          background:${color};
          border:1.8px solid #ffffff;
          box-shadow:0 1px 4px rgba(0,0,0,0.25);
          cursor:pointer;
          transition:transform 0.15s ease;
        "></div>`
      });

      const marker = L.marker([lat, lng], { icon: icon });
      marker._atlasEntity = e;
      marker._atlasId = e.id;

      marker.bindTooltip(`
        <div class="atlas-card-tooltip">
          <div class="card-accent" style="background:${color};"></div>
          <div class="card-body">
            <div class="card-title">${esc(e.name)}</div>
            <div class="card-subtitle">${esc(e.category)} · ${esc(e.continent)}</div>
            <div class="card-context">${esc(e.description || '')}</div>
          </div>
        </div>
      `, {
        className: 'atlas-custom-leaflet-tooltip',
        direction: 'top',
        offset: [0, -8]
      });

      marker.on('click', () => {
        if (activeRecallTarget && recallCallback) {
          handleSpatialRecallClick(lat, lng, e.name);
          return;
        }
        if (activeQuizTargetId) return;

        selectEntity(e.id, false);
        if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
          window.WORLD_APP.onEntitySelected(e.id);
        }
      });

      markersLayer.addLayer(marker);
    });

    applyCategoryVisibility();
  }

  // ── 5. Hierarchical Visibility & Toggles ──
  function applyCategoryVisibility() {
    if (mountainPolygonsLayer) {
      mountainPolygonsLayer.eachLayer(l => {
        const el = l.getElement();
        if (el) el.style.display = activeCategoryFilters.mountain ? '' : 'none';
      });
    }

    if (mountainCrestsLayer) {
      mountainCrestsLayer.eachLayer(l => {
        const el = l.getElement();
        if (el) el.style.display = activeCategoryFilters.mountain ? '' : 'none';
      });
    }

    if (riversLayer) {
      riversLayer.eachLayer(l => {
        const el = l.getElement();
        if (el) el.style.display = activeCategoryFilters.river ? '' : 'none';
      });
    }

    if (peaksLayer) {
      peaksLayer.eachLayer(l => {
        const el = l.getElement();
        if (el) el.style.display = activeCategoryFilters.peak ? '' : 'none';
      });
    }

    if (passesLayer) {
      passesLayer.eachLayer(l => {
        const el = l.getElement();
        if (el) el.style.display = activeCategoryFilters.pass ? '' : 'none';
      });
    }

    if (glaciersLayer) {
      glaciersLayer.eachLayer(l => {
        const el = l.getElement();
        if (el) el.style.display = activeCategoryFilters.glacier ? '' : 'none';
      });
    }

    if (protectedAreasLayer) {
      protectedAreasLayer.eachLayer(l => {
        const type = l._atlasType;
        const visible = activeCategoryFilters[type] !== false;
        const el = l.getElement();
        if (el) el.style.display = visible ? '' : 'none';
      });
    }

    if (markersLayer) {
      markersLayer.eachLayer(m => {
        const e = m._atlasEntity;
        if (!e) return;
        const visible = activeCategoryFilters[e.category] !== false;
        const el = m.getElement();
        if (el) el.style.display = visible ? '' : 'none';
      });
    }

    if (countriesGeojsonLayer) {
      countriesGeojsonLayer.eachLayer(l => {
        if (l.setStyle) {
          l.setStyle(getCountryStyle(l.feature));
        }
      });
    }
  }

  // ── Toggle 1: Master Borders Switch (State & Country boundaries) ──
  function toggleBorders(visible) {
    showBorders = (visible !== undefined) ? visible : !showBorders;
    showStateBorders = showBorders;
    renderStateBorders();
    if (countriesGeojsonLayer) {
      countriesGeojsonLayer.eachLayer(l => {
        if (l.setStyle && l.feature) {
          l.setStyle(getCountryStyle(l.feature));
        }
      });
    }
    return showBorders;
  }

  function toggleStateBorders(visible) {
    showStateBorders = (visible !== undefined) ? visible : !showStateBorders;
    renderStateBorders();
    return showStateBorders;
  }

  // ── Toggle 2: Master Labels Switch (Geographic text names/labels) ──
  function toggleLabels(visible) {
    showLabels = (visible !== undefined) ? visible : !showLabels;
    const tooltips = document.querySelectorAll('.atlas-custom-leaflet-tooltip');
    tooltips.forEach(t => {
      t.style.display = showLabels ? '' : 'none';
    });
    return showLabels;
  }

  function toggleFacts(visible) {
    showFacts = (visible !== undefined) ? visible : !showFacts;
    return showFacts;
  }

  // ── Element 3: Multi-Select Filter Controller ──
  function setCategoryFilter(categoryKey, isChecked) {
    activeCategoryFilters[categoryKey] = !!isChecked;

    if (categoryKey === 'current') {
      toggleOceanCurrents(!!isChecked);
    }
    if (categoryKey === 'states') {
      renderStateBorders();
    }
    if (categoryKey === 'country' && countriesGeojsonLayer) {
      countriesGeojsonLayer.eachLayer(l => {
        if (l.setStyle && l.feature) l.setStyle(getCountryStyle(l.feature));
      });
    }
    applyCategoryVisibility();
  }

  function setGroupFilter(group, isChecked) {
    const indiaKeys = ['national_park', 'tiger_reserve', 'biosphere_reserve', 'ramsar_site', 'river', 'mountain', 'peak', 'pass', 'glacier', 'states'];
    const worldKeys = ['current', 'country', 'lake', 'desert', 'grassland'];
    const targetKeys = (group === 'india') ? indiaKeys : ((group === 'world') ? worldKeys : []);

    targetKeys.forEach(k => {
      activeCategoryFilters[k] = !!isChecked;
    });

    if (targetKeys.includes('current')) {
      toggleOceanCurrents(!!isChecked);
    }
    if (targetKeys.includes('states')) {
      renderStateBorders();
    }
    if (targetKeys.includes('country') && countriesGeojsonLayer) {
      countriesGeojsonLayer.eachLayer(l => {
        if (l.setStyle && l.feature) l.setStyle(getCountryStyle(l.feature));
      });
    }
    applyCategoryVisibility();
  }

  function setAllCategories(isChecked) {
    Object.keys(activeCategoryFilters).forEach(k => {
      activeCategoryFilters[k] = !!isChecked;
    });
    toggleOceanCurrents(!!isChecked);
    renderStateBorders();
    if (countriesGeojsonLayer) {
      countriesGeojsonLayer.eachLayer(l => {
        if (l.setStyle && l.feature) l.setStyle(getCountryStyle(l.feature));
      });
    }
    applyCategoryVisibility();
  }

  // ── Ingest Custom Base Map Style (Mapbox vector tiles, custom raster/vector URLs) ──
  function setCustomBaseMap(options) {
    if (!map) return;
    if (currentTileLayer) map.removeLayer(currentTileLayer);

    if (typeof options === 'string') {
      currentTileLayer = L.tileLayer(options, { maxZoom: 19 }).addTo(map);
    } else if (options && options.url) {
      currentTileLayer = L.tileLayer(options.url, options).addTo(map);
    }
    if (currentTileLayer && currentTileLayer.setZIndex) {
      currentTileLayer.setZIndex(options && options.zIndex ? options.zIndex : 1);
    }
  }


  // ── 6. Entity Selection & Highlight ──
  function selectEntity(id, autoPan = true) {
    selectedId = id;
    selectedCountryName = null;

    if (!id) {
      updateStyles();
      return;
    }

    let targetCoords = null;
    let targetZoom = 6;

    // Check WORLD_MAP_DATA entities
    if (window.WORLD_MAP_DATA && Array.isArray(window.WORLD_MAP_DATA.entities)) {
      const e = window.WORLD_MAP_DATA.entities.find(x => x.id === id);
      if (e) {
        if (e.category === 'country') {
          selectedCountryName = e.name;
          targetZoom = 4;
        }
        if (e.coords) {
          targetCoords = [e.coords[1], e.coords[0]];
        }
      }
    }

    // Check mountain ranges
    if (window.GEOGRAPHIC_FEATURES && window.GEOGRAPHIC_FEATURES.mountains) {
      const m = window.GEOGRAPHIC_FEATURES.mountains.find(x => x.id === id);
      if (m) {
        if (m.polygon && m.polygon.length > 0) {
          targetCoords = [m.polygon[0][1], m.polygon[0][0]];
          targetZoom = 7;
        } else if (m.path && m.path.length > 0) {
          targetCoords = [m.path[0][1], m.path[0][0]];
          targetZoom = 7;
        }
      }
    }

    // Check rivers
    if (window.GEOGRAPHIC_FEATURES && window.GEOGRAPHIC_FEATURES.rivers) {
      const r = window.GEOGRAPHIC_FEATURES.rivers.find(x => x.id === id);
      if (r && r.path && r.path.length > 0) {
        targetCoords = [r.path[0][1], r.path[0][0]];
        targetZoom = 6;
      }
    }

    // Check protected areas, peaks, passes
    if (window.GEOGRAPHIC_FEATURES) {
      const allPoints = [
        ...(window.GEOGRAPHIC_FEATURES.protectedAreas || []),
        ...(window.GEOGRAPHIC_FEATURES.peaks || []),
        ...(window.GEOGRAPHIC_FEATURES.passes || []),
        ...(window.GEOGRAPHIC_FEATURES.glaciers || [])
      ];
      const match = allPoints.find(x => x.id === id);
      if (match && match.coords) {
        targetCoords = [match.coords[1], match.coords[0]];
        targetZoom = 8;
      }
    }

    // Check ocean currents
    if (window.OCEAN_CURRENTS) {
      const c = window.OCEAN_CURRENTS.find(x => x.id === id);
      if (c && c.midpoint) {
        targetCoords = [c.midpoint[0], c.midpoint[1]];
        targetZoom = 4;
      }
    }

    updateStyles();

    if (autoPan && targetCoords && map) {
      map.flyTo(targetCoords, targetZoom, { animate: true, duration: 0.85 });
    }
  }

  function updateStyles() {
    // Countries
    if (countriesGeojsonLayer) {
      countriesGeojsonLayer.eachLayer(l => {
        if (l.setStyle && l.feature) {
          l.setStyle(getCountryStyle(l.feature));
        }
      });
    }

    // Mountain polygons
    if (mountainPolygonsLayer) {
      mountainPolygonsLayer.eachLayer(l => {
        const isSelected = (l._atlasId === selectedId);
        l.setStyle(getMountainStyle(l._atlasMountain, isSelected));
      });
    }

    // Biosphere reserve halos
    if (protectedAreasLayer) {
      const isDark = currentTheme === 'dark';
      protectedAreasLayer.eachLayer(l => {
        if (l instanceof L.Circle) {
          l.setStyle({
            fillColor: isDark ? '#a855f7' : '#6b21a8',
            fillOpacity: isDark ? 0.22 : 0.16,
            color: isDark ? '#c084fc' : '#6b21a8'
          });
        }
      });
    }

    // River vectors
    if (riversLayer) {
      const isDark = currentTheme === 'dark';
      riversLayer.eachLayer(l => {
        if (l.setStyle) {
          l.setStyle({
            color: isDark ? '#38bdf8' : '#0284c7'
          });
        }
      });
    }

    // Ocean currents
    if (oceanCurrentsLayer) {
      oceanCurrentsLayer.eachLayer(l => {
        const isSelected = (l._atlasId === selectedId);
        const c = l._atlasCurrent;
        if (c) {
          const color = c.color || (c.type === 'w' ? '#ff6a47' : (c.type === 'c' ? '#5ec9ff' : '#dfe8ee'));
          l.setStyle({
            color: isSelected ? '#f59e0b' : color,
            weight: isSelected ? 5.0 : 3.0,
            opacity: isSelected ? 1.0 : 0.88
          });
        }
      });
    }

    // Point markers
    if (markersLayer) {
      markersLayer.eachLayer(m => {
        const isSelected = (m._atlasId === selectedId);
        const el = document.getElementById(`fmarker-${m._atlasId}`);
        if (el) {
          el.style.transform = isSelected ? 'scale(1.5)' : 'scale(1)';
          el.style.boxShadow = isSelected ? '0 0 12px #0284c7' : '0 1px 4px rgba(0,0,0,0.25)';
        }
      });
    }
  }

  // ── 7. Quiz Spotlight (5-7% Ambient Dimming + Pulsing Radar Pin) ──
  function setQuizTarget(targetEntityId) {
    activeQuizTargetId = targetEntityId;
    if (!map || !quizLayer) return;

    quizLayer.clearLayers();
    if (quizDimLayer) quizDimLayer.clearLayers();

    if (!targetEntityId || !window.DATA_INTEGRITY) return;
    const entity = window.DATA_INTEGRITY.getEntity(targetEntityId);
    if (!entity || !entity.coords) return;
    const [lng, lat] = entity.coords;

    // 5-7% Ambient Dimming polygon across visible map
    const dimPolygon = L.polygon([
      [-85, -180], [85, -180], [85, 180], [-85, 180]
    ], {
      fillColor: '#000000',
      fillOpacity: 0.07,
      stroke: false,
      interactive: false
    });
    quizDimLayer.addLayer(dimPolygon);

    // Prominent Pulsing Quiz Radar Spotlight Pin
    const quizIcon = L.divIcon({
      className: 'quiz-target-marker-wrapper',
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      html: `
        <div style="position:relative;width:36px;height:36px;display:flex;align-items:center;justify-content:center;">
          <div class="quiz-radar-ping"></div>
          <div style="
            position:absolute;inset:-3px;border-radius:50%;
            border:2px solid #0284c7;
            animation:atlasQuizPulse 1.4s ease-out infinite;
          "></div>
          <div style="
            width:24px;height:24px;border-radius:50%;
            background:#0284c7;color:#fff;
            display:flex;align-items:center;justify-content:center;
            font-family:'Inter',sans-serif;font-size:13px;font-weight:700;
            border:2.2px solid #fff;box-shadow:0 1px 6px rgba(0,0,0,0.3);
          ">?</div>
        </div>
      `
    });

    const quizMarker = L.marker([lat, lng], { icon: quizIcon, zIndexOffset: 1200 });
    quizLayer.addLayer(quizMarker);

    // Pan smoothly to question target
    map.flyTo([lat, lng], Math.max(map.getZoom(), 6), { animate: true, duration: 0.85 });
  }

  function revealQuizAnswer(targetEntityId, isCorrect) {
    if (!map || !quizLayer) return;
    if (quizDimLayer) quizDimLayer.clearLayers();

    if (!targetEntityId || !window.DATA_INTEGRITY) return;
    const entity = window.DATA_INTEGRITY.getEntity(targetEntityId);
    if (!entity || !entity.coords) return;
    const [lng, lat] = entity.coords;

    quizLayer.clearLayers();

    const color = isCorrect ? '#15803d' : '#dc2626';
    const symbol = isCorrect ? '✓' : '✗';

    const revealIcon = L.divIcon({
      className: 'quiz-reveal-marker-wrapper',
      iconSize: [180, 34],
      iconAnchor: [18, 17],
      html: `
        <div style="display:flex;align-items:center;gap:6px;pointer-events:none;">
          <div style="
            width:28px;height:28px;border-radius:50%;
            background:${color};color:#fff;
            display:flex;align-items:center;justify-content:center;
            font-family:'Inter',sans-serif;font-size:14px;font-weight:700;
            border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.25);flex:none;
          ">${symbol}</div>
          <div style="
            background:#ffffff;border:1px solid ${color};
            border-radius:6px;padding:5px 12px;font-family:'Inter',sans-serif;
            font-size:13px;font-weight:700;color:#1e293b;white-space:nowrap;
            box-shadow:0 4px 14px rgba(0,0,0,0.15);
          ">${esc(entity.name)}</div>
        </div>
      `
    });

    const revealMarker = L.marker([lat, lng], { icon: revealIcon, zIndexOffset: 1300 });
    quizLayer.addLayer(revealMarker);

    activeQuizTargetId = null;
  }

  // ── 8. Recall Mode ──
  function setRecallTarget(targetEntity, callback) {
    activeRecallTarget = targetEntity;
    recallCallback = callback;

    if (quizLayer) quizLayer.clearLayers();
    if (quizDimLayer) quizDimLayer.clearLayers();
    if (recallLayer) recallLayer.clearLayers();
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
      iconSize: [180, 34],
      iconAnchor: [18, 17],
      html: `
        <div style="display:flex;align-items:center;gap:6px;pointer-events:none;">
          <div style="
            width:28px;height:28px;border-radius:50%;
            background:#15803d;color:#fff;
            display:flex;align-items:center;justify-content:center;
            font-family:'Inter',sans-serif;font-size:14px;font-weight:700;
            border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.25);flex:none;
          ">✓</div>
          <div style="
            background:#ffffff;border:1px solid #15803d;
            border-radius:6px;padding:5px 12px;font-family:'Inter',sans-serif;
            font-size:13px;font-weight:700;color:#1e293b;white-space:nowrap;
            box-shadow:0 4px 14px rgba(0,0,0,0.15);
          ">${esc(targetEntity.name)}</div>
        </div>
      `
    });

    const marker = L.marker([lat, lng], { icon: icon, zIndexOffset: 1300 });
    recallLayer.addLayer(marker);
    map.flyTo([lat, lng], Math.max(map.getZoom(), 6), { animate: true, duration: 0.85 });
  }

  function clearRecallTarget() {
    activeRecallTarget = null;
    recallCallback = null;
    if (recallLayer) recallLayer.clearLayers();
    buildPointMarkers();
  }

  function setLayerVisibility(layer, visible) {
    if (layer === 'political') activeCategoryFilters.country = visible;
    if (layer === 'physical') {
      activeCategoryFilters.mountain = visible;
      activeCategoryFilters.peak = visible;
      activeCategoryFilters.pass = visible;
      activeCategoryFilters.glacier = visible;
    }
    if (layer === 'water') {
      activeCategoryFilters.river = visible;
      activeCategoryFilters.lake = visible;
      activeCategoryFilters.strait = visible;
    }
    if (layer === 'labels') {
      toggleLabels(visible);
    }
    applyCategoryVisibility();
  }

  function zoomIn() { if (map) map.zoomIn(); }
  function zoomOut() { if (map) map.zoomOut(); }

  function resetView() {
    selectedId = null;
    selectedCountryName = null;
    activeQuizTargetId = null;
    activeRecallTarget = null;
    if (quizLayer) quizLayer.clearLayers();
    if (quizDimLayer) quizDimLayer.clearLayers();
    if (recallLayer) recallLayer.clearLayers();

    updateStyles();
    if (map) map.flyTo([23.5, 85.0], 5, { animate: true, duration: 0.85 });
  }

  function resizeAndRender() {
    if (map) {
      setTimeout(() => map.invalidateSize(), 60);
    }
  }

  function setTheme(theme) {
    currentTheme = theme;
    if (!map) return;

    if (theme === 'dark') {
      if (lightTileLayer && map.hasLayer(lightTileLayer)) {
        map.removeLayer(lightTileLayer);
      }
      if (darkTileLayer && !map.hasLayer(darkTileLayer)) {
        darkTileLayer.addTo(map);
      }
      currentTileLayer = darkTileLayer;
      if (mapDiv) mapDiv.style.background = '#060e18';
    } else {
      if (darkTileLayer && map.hasLayer(darkTileLayer)) {
        map.removeLayer(darkTileLayer);
      }
      if (lightTileLayer && !map.hasLayer(lightTileLayer)) {
        lightTileLayer.addTo(map);
      }
      currentTileLayer = lightTileLayer;
      if (mapDiv) mapDiv.style.background = '#edf2f7';
    }

    // Refresh vector country boundaries with theme-adjusted borders/fills
    if (countriesGeojsonLayer) {
      countriesGeojsonLayer.eachLayer(l => {
        if (typeof l.setStyle === 'function') {
          l.setStyle(getCountryStyle);
        }
      });
    }
  }

  function findEntityByCountryName(name) {
    if (!window.WORLD_MAP_DATA || !name) return null;
    const n = name.toLowerCase().trim();
    return window.WORLD_MAP_DATA.entities.find(e =>
      e.category === 'country' && (
        e.name.toLowerCase() === n ||
        isMatchName(e.name, name)
      )
    );
  }

  function isMatchName(n1, n2) {
    if (!n1 || !n2) return false;
    const a = n1.toLowerCase().trim();
    const b = n2.toLowerCase().trim();
    return a === b || a.includes(b) || b.includes(a);
  }

  function esc(s) {
    if (!s) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    toggleBorders,
    toggleStateBorders,
    toggleLabels,
    toggleFacts,
    toggleOceanCurrents,
    setTheme,
    setCategoryFilter,
    setGroupFilter,
    setAllCategories,
    getActiveFilters: () => ({ ...activeCategoryFilters }),
    setCustomBaseMap,
    isReady: () => isReady
  };
})();
