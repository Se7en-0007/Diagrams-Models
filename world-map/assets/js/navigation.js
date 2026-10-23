/**
 * World Mapping Atlas — Navigation and UI State Controller
 * Manages mode switching (Browse, Quiz, Recall), view toggles (3D/2D), layers, and hotkeys.
 */

window.WORLD_NAV = (function () {
  'use strict';

  let currentMode = 'browse';
  let isFlatMap = false;

  function init() {
    // Mode tabs
    const modeTabs = document.getElementById('modeTabs');
    if (modeTabs) {
      modeTabs.addEventListener('click', e => {
        const tab = e.target.closest('.mode-tab');
        if (!tab) return;
        setMode(tab.dataset.mode);
      });
    }

    // View toggle (3D Globe vs 2D Flat Map)
    const toggleViewBtn = document.getElementById('toggleView');
    if (toggleViewBtn) {
      toggleViewBtn.addEventListener('click', toggleMapView);
    }

    // Reset view
    const resetViewBtn = document.getElementById('resetView');
    if (resetViewBtn) {
      resetViewBtn.addEventListener('click', () => {
        if (isFlatMap && window.WORLD_FLAT_MAP) {
          window.WORLD_FLAT_MAP.resetView();
        } else if (window.WORLD_GLOBE) {
          window.WORLD_GLOBE.resetView();
        }
      });
    }

    // Zoom buttons
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => {
        if (isFlatMap && window.WORLD_FLAT_MAP) window.WORLD_FLAT_MAP.zoomIn();
        else if (window.WORLD_GLOBE) window.WORLD_GLOBE.zoomIn();
      });
    }
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => {
        if (isFlatMap && window.WORLD_FLAT_MAP) window.WORLD_FLAT_MAP.zoomOut();
        else if (window.WORLD_GLOBE) window.WORLD_GLOBE.zoomOut();
      });
    }

    // Layer controls (POL, PHY, H2O, ABC)
    const layerControls = document.getElementById('layerControls');
    if (layerControls) {
      layerControls.addEventListener('click', e => {
        const btn = e.target.closest('.layer-btn');
        if (!btn) return;
        btn.classList.toggle('active');
        const layer = btn.dataset.layer;
        const isActive = btn.classList.contains('active');

        if (window.WORLD_GLOBE) {
          window.WORLD_GLOBE.setLayerVisibility(layer, isActive);
        }
        if (window.WORLD_FLAT_MAP) {
          window.WORLD_FLAT_MAP.setLayerVisibility(layer, isActive);
        }
      });
    }

    // Toggle labels button in top bar
    const toggleLabelsBtn = document.getElementById('toggleLabels');
    if (toggleLabelsBtn) {
      toggleLabelsBtn.addEventListener('click', () => {
        toggleLabelsBtn.classList.toggle('active');
        const active = toggleLabelsBtn.classList.contains('active');
        if (window.WORLD_GLOBE) window.WORLD_GLOBE.setLayerVisibility('labels', active);
        if (window.WORLD_FLAT_MAP) window.WORLD_FLAT_MAP.setLayerVisibility('labels', active);
      });
    }

    // Keyboard shortcuts
    window.addEventListener('keydown', handleKeydown);
  }

  function setMode(mode) {
    if (!mode) return;
    currentMode = mode;

    // Update tab bar buttons
    document.querySelectorAll('#modeTabs .mode-tab').forEach(tab => {
      const active = tab.dataset.mode === mode;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active);
    });

    // Update panel sections (Browse, Quiz, Recall)
    const panels = {
      browse: document.getElementById('browsePanel'),
      quiz: document.getElementById('quizPanel'),
      recall: document.getElementById('recallPanel')
    };

    Object.entries(panels).forEach(([m, el]) => {
      if (!el) return;
      el.classList.toggle('hidden', m !== mode);
    });

    // Mode-specific reset
    if (mode === 'browse') {
      if (window.WORLD_GLOBE) window.WORLD_GLOBE.clearRecallTarget();
      if (window.WORLD_FLAT_MAP) window.WORLD_FLAT_MAP.clearRecallTarget();
    } else if (mode === 'quiz' && window.WORLD_QUIZ) {
      window.WORLD_QUIZ.startQuiz();
    } else if (mode === 'recall' && window.WORLD_RECALL) {
      window.WORLD_RECALL.startRecall();
    }
  }

  function toggleMapView() {
    isFlatMap = !isFlatMap;
    const flatContainer = document.getElementById('flatMapContainer');
    const globeElem = document.getElementById('globeContainer');
    const toggleBtn = document.getElementById('toggleView');

    if (flatContainer && globeElem) {
      flatContainer.classList.toggle('hidden', !isFlatMap);
      globeElem.classList.toggle('hidden', isFlatMap);

      if (isFlatMap && window.WORLD_FLAT_MAP) {
        if (!window.WORLD_FLAT_MAP.isReady()) {
          window.WORLD_FLAT_MAP.init();
        }
        window.WORLD_FLAT_MAP.resizeAndRender();
      }
    }

    if (toggleBtn) {
      toggleBtn.title = isFlatMap ? 'Switch to 3D Globe' : 'Switch to Flat Map';
      toggleBtn.classList.toggle('active', isFlatMap);
    }
  }

  function handleKeydown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (e.key === 'Escape') {
      if (currentMode === 'browse' && window.ENTITY_PANEL) {
        window.ENTITY_PANEL.showList();
      }
    } else if (e.key === '+' || e.key === '=') {
      const zoomInBtn = document.getElementById('zoomIn');
      if (zoomInBtn) zoomInBtn.click();
    } else if (e.key === '-' || e.key === '_') {
      const zoomOutBtn = document.getElementById('zoomOut');
      if (zoomOutBtn) zoomOutBtn.click();
    }
  }

  return {
    init: init,
    setMode: setMode,
    toggleMapView: toggleMapView,
    getMode: () => currentMode,
    isFlat: () => isFlatMap
  };
})();
