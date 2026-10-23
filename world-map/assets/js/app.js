/**
 * World Mapping Atlas — Main Application Orchestrator
 * Bootstraps data indices, 3D cartographic globe, 2D Leaflet map, and UI controllers.
 */

window.WORLD_APP = (function () {
  'use strict';

  function updateLoading(pct, statusText) {
    const fillEl = document.getElementById('loadingFill');
    const statusEl = document.getElementById('loadingStatus');
    if (fillEl) fillEl.style.width = pct + '%';
    if (statusEl) statusEl.textContent = statusText;
  }

  function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 300ms ease';
      setTimeout(() => overlay.classList.add('hidden'), 320);
    }
  }

  function init() {
    updateLoading(20, 'Loading geographic database…');

    // 1. Data Integrity & Indexing
    if (window.DATA_INTEGRITY) {
      window.DATA_INTEGRITY.init();
    }

    updateLoading(40, 'Initialising navigation and controls…');

    // 2. Navigation & UI Controls
    if (window.WORLD_NAV) window.WORLD_NAV.init();

    updateLoading(65, 'Initialising 3D cartographic globe…');

    // 3. Initialize 3D Globe
    let globeOk = false;
    if (window.WORLD_GLOBE) {
      globeOk = window.WORLD_GLOBE.init('globeContainer');
    }

    // WebGL fallback -> smoothly switch to 2D Leaflet flat map
    if (!globeOk) {
      console.warn('3D Globe unavailable — activating 2D Leaflet flat map.');
      const fallbackEl = document.getElementById('webglFallback');
      if (fallbackEl) fallbackEl.classList.remove('hidden');
      const dismissBtn = document.getElementById('dismissFallback');
      if (dismissBtn) dismissBtn.addEventListener('click', () => fallbackEl.classList.add('hidden'));
      if (window.WORLD_NAV) window.WORLD_NAV.toggleMapView();
    }

    // 4. Search & Filtering
    if (window.WORLD_SEARCH) window.WORLD_SEARCH.init();

    // 5. Quiz & Recall Engines
    if (window.WORLD_QUIZ) window.WORLD_QUIZ.init();
    if (window.WORLD_RECALL) window.WORLD_RECALL.init();

    updateLoading(100, 'Atlas ready!');

    setTimeout(() => {
      hideLoading();
      checkUrlHash();
    }, 250);

    window.addEventListener('hashchange', checkUrlHash);
  }

  function onEntitySelected(id, shouldPan = true) {
    if (!id || !window.DATA_INTEGRITY) return;

    const currentMode = window.WORLD_NAV ? window.WORLD_NAV.getMode() : 'browse';
    if (currentMode !== 'browse') return;

    const entity = window.DATA_INTEGRITY.getEntity(id);
    if (!entity) return;

    // Track progress
    if (window.WORLD_PROGRESS) window.WORLD_PROGRESS.markViewed(id);

    // Update active map (Globe or Flat Map)
    const isFlat = window.WORLD_NAV && window.WORLD_NAV.isFlat();
    if (isFlat && window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.isReady()) {
      window.WORLD_FLAT_MAP.selectEntity(id, shouldPan);
    } else if (window.WORLD_GLOBE && window.WORLD_GLOBE.isReady()) {
      window.WORLD_GLOBE.selectEntity(id, shouldPan);
    }

    // Render detail panel in Browse mode
    if (window.ENTITY_PANEL) window.ENTITY_PANEL.renderDetail(entity);

    // URL hash
    if (window.location.hash !== '#' + id) {
      history.replaceState(null, '', '#' + id);
    }
  }

  function checkUrlHash() {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && window.DATA_INTEGRITY) {
      const entity = window.DATA_INTEGRITY.getEntity(hash);
      if (entity) onEntitySelected(hash, true);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init, onEntitySelected };
})();
