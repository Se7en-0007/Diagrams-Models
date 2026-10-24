/**
 * Mapping Atlas — Navigation and UI State Controller
 * Manages mode switching (Browse, Practice, Game), theme toggling (Light/Dark),
 * layer pill controls (State borders, Labels, Facts, Ocean Currents), and keyboard shortcuts.
 */

window.WORLD_NAV = (function () {
  'use strict';

  let currentMode = 'browse';

  function init() {
    // 1. Initialize Theme
    initTheme();

    // 2. Mode tabs (Browse, Practice, Game)
    const modeTabs = document.getElementById('modeTabs');
    if (modeTabs) {
      modeTabs.addEventListener('click', e => {
        const tab = e.target.closest('.mode-tab');
        if (!tab) return;
        setMode(tab.dataset.mode);
      });
    }

    // 3. Theme Toggle Button
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // 4. Reset View Button
    const resetViewBtn = document.getElementById('resetView');
    if (resetViewBtn) {
      resetViewBtn.addEventListener('click', () => {
        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.resetView) {
          window.WORLD_VECTOR_MAP.resetView();
        } else if (window.WORLD_FLAT_MAP) {
          window.WORLD_FLAT_MAP.resetView();
        }
      });
    }

    // 5. Zoom buttons
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => {
        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.zoomIn) {
          window.WORLD_VECTOR_MAP.zoomIn();
        } else if (window.WORLD_FLAT_MAP) {
          window.WORLD_FLAT_MAP.zoomIn();
        }
      });
    }
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => {
        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.zoomOut) {
          window.WORLD_VECTOR_MAP.zoomOut();
        } else if (window.WORLD_FLAT_MAP) {
          window.WORLD_FLAT_MAP.zoomOut();
        }
      });
    }

    // 6. Refactored Top-Right Map Controls: Strict 3-Element Bar
    // ─────────────────────────────────────────────────────────────
    // Toggle 1: Borders (Master switch to hide/unhide all state and country boundaries)
    const toggleBordersBtn = document.getElementById('toggleBorders');
    if (toggleBordersBtn) {
      toggleBordersBtn.addEventListener('click', () => {
        toggleBordersBtn.classList.toggle('active');
        const active = toggleBordersBtn.classList.contains('active');
        toggleBordersBtn.setAttribute('aria-pressed', active);
        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.toggleBorders) {
          window.WORLD_VECTOR_MAP.toggleBorders(active);
        } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.toggleBorders) {
          window.WORLD_FLAT_MAP.toggleBorders(active);
        }
      });
    }

    // Toggle 2: Labels (Master switch to hide/unhide all geographic text names/labels)
    const toggleLabelsBtn = document.getElementById('toggleLabels');
    if (toggleLabelsBtn) {
      toggleLabelsBtn.addEventListener('click', () => {
        toggleLabelsBtn.classList.toggle('active');
        const active = toggleLabelsBtn.classList.contains('active');
        toggleLabelsBtn.setAttribute('aria-pressed', active);
        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.toggleLabels) {
          window.WORLD_VECTOR_MAP.toggleLabels(active);
        } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.toggleLabels) {
          window.WORLD_FLAT_MAP.toggleLabels(active);
        }
      });
    }

    // Element 3: Multi-Select Grouped Dropdown (India & World)
    const layerDropdownWrapper = document.getElementById('layerDropdownWrapper');
    const layerDropdownBtn = document.getElementById('layerDropdownBtn');
    const layerDropdownMenu = document.getElementById('layerDropdownMenu');
    const layerDropdownLabel = document.getElementById('layerDropdownLabel');
    const chkSelectAllLayers = document.getElementById('chkSelectAllLayers');
    const layerCheckboxes = document.querySelectorAll('.layer-chk');
    const groupToggles = document.querySelectorAll('.group-quick-toggle');

    function updateDropdownTriggerLabel() {
      if (!layerDropdownLabel) return;
      const total = layerCheckboxes.length;
      const checkedCount = document.querySelectorAll('.layer-chk:checked').length;
      if (checkedCount === total) {
        layerDropdownLabel.textContent = 'Everything';
      } else if (checkedCount === 0) {
        layerDropdownLabel.textContent = 'None';
      } else {
        layerDropdownLabel.textContent = `${checkedCount} kinds`;
      }
      if (chkSelectAllLayers) {
        chkSelectAllLayers.checked = (checkedCount === total);
        chkSelectAllLayers.indeterminate = (checkedCount > 0 && checkedCount < total);
      }
      if (window.WORLD_QUIZ && window.WORLD_QUIZ.syncWithActiveKinds) {
        window.WORLD_QUIZ.syncWithActiveKinds();
      }
      if (window.WORLD_RECALL && window.WORLD_RECALL.syncWithActiveKinds) {
        window.WORLD_RECALL.syncWithActiveKinds();
      }
      if (window.WORLD_SEARCH && window.WORLD_SEARCH.applyFilters) {
        window.WORLD_SEARCH.applyFilters();
      }
    }

    if (layerDropdownBtn && layerDropdownMenu) {
      layerDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = layerDropdownMenu.classList.contains('hidden');
        layerDropdownMenu.classList.toggle('hidden', !isHidden);
        layerDropdownBtn.setAttribute('aria-expanded', isHidden);
      });

      // Prevent clicks inside the menu from closing it
      layerDropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (layerDropdownWrapper && !layerDropdownWrapper.contains(e.target)) {
          layerDropdownMenu.classList.add('hidden');
          layerDropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Master "Everything" toggle
    if (chkSelectAllLayers) {
      chkSelectAllLayers.addEventListener('change', () => {
        const isChecked = chkSelectAllLayers.checked;
        layerCheckboxes.forEach(chk => {
          chk.checked = isChecked;
        });
        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.setAllCategories) {
          window.WORLD_VECTOR_MAP.setAllCategories(isChecked);
        } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.setAllCategories) {
          window.WORLD_FLAT_MAP.setAllCategories(isChecked);
        }
        updateDropdownTriggerLabel();
      });
    }

    // Group quick-toggles (All button for India or World)
    groupToggles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const group = btn.dataset.targetGroup;
        const groupCheckboxes = document.querySelectorAll(`.layer-chk[data-group="${group}"]`);
        const allChecked = Array.from(groupCheckboxes).every(c => c.checked);
        const newState = !allChecked;

        groupCheckboxes.forEach(c => {
          c.checked = newState;
        });

        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.setGroupFilter) {
          window.WORLD_VECTOR_MAP.setGroupFilter(group, newState);
        } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.setGroupFilter) {
          window.WORLD_FLAT_MAP.setGroupFilter(group, newState);
        }
        updateDropdownTriggerLabel();
      });
    });

    // Individual category checkboxes
    layerCheckboxes.forEach(chk => {
      chk.addEventListener('change', () => {
        const cat = chk.dataset.category;
        const isChecked = chk.checked;
        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.setCategoryFilter) {
          window.WORLD_VECTOR_MAP.setCategoryFilter(cat, isChecked);
        } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.setCategoryFilter) {
          window.WORLD_FLAT_MAP.setCategoryFilter(cat, isChecked);
        }
        updateDropdownTriggerLabel();
      });
    });

    // "only" buttons inside Kinds layer dropdown
    document.querySelectorAll('#layerDropdownMenu .item-only-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const cat = btn.dataset.category;
        layerCheckboxes.forEach(chk => {
          chk.checked = (chk.dataset.category === cat);
        });
        if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.setAllCategories) {
          window.WORLD_VECTOR_MAP.setAllCategories(false);
          window.WORLD_VECTOR_MAP.setCategoryFilter(cat, true);
        } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.setAllCategories) {
          window.WORLD_FLAT_MAP.setAllCategories(false);
          window.WORLD_FLAT_MAP.setCategoryFilter(cat, true);
        }
        updateDropdownTriggerLabel();
      });
    });

    updateDropdownTriggerLabel();

    // 7. Back to List button in browse detail subview
    const browseBackBtn = document.getElementById('browseBackToList');
    if (browseBackBtn) {
      browseBackBtn.addEventListener('click', () => {
        if (window.ENTITY_PANEL && window.ENTITY_PANEL.showList) {
          window.ENTITY_PANEL.showList();
        }
      });
    }

    // 8. Keyboard shortcuts
    window.addEventListener('keydown', handleKeydown);
  }

  function initTheme() {
    const saved = localStorage.getItem('mapping_atlas_theme') || 'light';
    applyTheme(saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mapping_atlas_theme', theme);

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ` : `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.setTheme) {
      window.WORLD_VECTOR_MAP.setTheme(theme);
    } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.setTheme) {
      window.WORLD_FLAT_MAP.setTheme(theme);
    }
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

    // Update panel sections (Browse, Practice/Quiz, Game/Recall)
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
      if (window.WORLD_VECTOR_MAP) {
        window.WORLD_VECTOR_MAP.clearQuizTarget();
        window.WORLD_VECTOR_MAP.clearRecallTarget();
      }
      if (window.WORLD_FLAT_MAP) window.WORLD_FLAT_MAP.clearRecallTarget();
    } else if (mode === 'quiz' && window.WORLD_QUIZ) {
      if (window.WORLD_VECTOR_MAP) window.WORLD_VECTOR_MAP.clearRecallTarget();
      if (window.WORLD_QUIZ.syncWithActiveKinds) window.WORLD_QUIZ.syncWithActiveKinds();
      window.WORLD_QUIZ.startQuiz();
    } else if (mode === 'recall' && window.WORLD_RECALL) {
      if (window.WORLD_VECTOR_MAP) window.WORLD_VECTOR_MAP.clearQuizTarget();
      if (window.WORLD_RECALL.syncWithActiveKinds) window.WORLD_RECALL.syncWithActiveKinds();
      window.WORLD_RECALL.startRecall();
    }
  }

  function handleKeydown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (e.key === 'Escape') {
      const layerDropdownMenu = document.getElementById('layerDropdownMenu');
      const layerDropdownBtn = document.getElementById('layerDropdownBtn');
      if (layerDropdownMenu && !layerDropdownMenu.classList.contains('hidden')) {
        layerDropdownMenu.classList.add('hidden');
        if (layerDropdownBtn) layerDropdownBtn.setAttribute('aria-expanded', 'false');
      }
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
    getMode: () => currentMode,
    isFlat: () => true,
    toggleTheme: toggleTheme,
    setTheme: applyTheme
  };
})();
