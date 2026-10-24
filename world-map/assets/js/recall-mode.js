/**
 * World Mapping Atlas — Active Spatial Recall Mode (Revamped)
 * 1. Shows a prompt: "Find and tap this [category] on the map: [Name]"
 * 2. User explores the 2D vector map and taps the target location.
 * 3. Minimized top bar: When recall begins, heavy controls collapse into a sleek, 1-line
 *    summary bar to keep 100% focus on the map and active recall.
 * 4. Immediate feedback:
 *    - If correct: "✓ Correct Location!"
 *    - If wrong: "✗ Not quite · you tapped [Tapped Name]"
 *    - Zooms to location, pulses highlight ring, and reveals full UPSC study card.
 * 5. Full support for Local Winds, Ocean Currents, National Parks, Rivers, Mountains, etc.
 * 6. Enter or Space key to advance to next card.
 */

window.WORLD_RECALL = (function () {
  'use strict';

  let currentDeck = [];
  let currentIndex = 0;
  let score = 0;
  let activeEntity = null;
  let isAnswered = false;
  let missedItems = [];
  let keyboardHandlerAttached = false;
  let userOverriddenFilters = false;

  const allCategoryKeys = [
    'national_park', 'tiger_reserve', 'biosphere_reserve', 'ramsar_site',
    'river', 'mountain', 'peak', 'pass', 'glacier', 'states',
    'current', 'wind', 'country', 'lake', 'desert', 'grassland', 'strait'
  ];

  const categoryNames = {
    national_park: 'National Parks',
    tiger_reserve: 'Tiger Reserves',
    biosphere_reserve: 'Biosphere Reserves',
    ramsar_site: 'Ramsar Sites',
    river: 'Rivers',
    mountain: 'Mountain Ranges',
    peak: 'Peaks',
    pass: 'Passes',
    glacier: 'Glaciers',
    states: 'States & UTs',
    current: 'Ocean Currents',
    wind: 'Local Winds',
    country: 'Countries',
    lake: 'Lakes',
    desert: 'Deserts',
    grassland: 'Grasslands',
    strait: 'Straits'
  };

  const selectedTypes = new Set(allCategoryKeys);

  function init() {
    const startBtn = document.getElementById('startRecall');
    const continentSelect = document.getElementById('recallContinent');
    const toggleFiltersBtn = document.getElementById('recallConfigToggleBtn') || document.getElementById('btnToggleRecallFilters');

    if (startBtn) {
      startBtn.addEventListener('click', () => startRecall());
    }
    if (continentSelect) {
      continentSelect.addEventListener('change', () => {
        updateRecallConfigSummary();
      });
    }
    if (toggleFiltersBtn) {
      toggleFiltersBtn.addEventListener('click', () => toggleRecallDrawer());
    }

    initRecallTypeMultiSelect();
    attachKeyboardShortcuts();
  }

  function initRecallTypeMultiSelect() {
    const triggerBtn = document.getElementById('recallTypeBtn');
    const menuEl = document.getElementById('recallTypeMenu');
    if (!triggerBtn || !menuEl) return;

    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = menuEl.classList.toggle('hidden');
      triggerBtn.setAttribute('aria-expanded', !isHidden);
    });

    document.addEventListener('click', (e) => {
      if (!menuEl.contains(e.target) && !triggerBtn.contains(e.target)) {
        menuEl.classList.add('hidden');
        triggerBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Checkbox toggles
    menuEl.querySelectorAll('.recall-type-chk').forEach(chk => {
      chk.addEventListener('change', () => {
        userOverriddenFilters = true;
        const type = chk.dataset.type;
        if (chk.checked) selectedTypes.add(type);
        else selectedTypes.delete(type);
        updateRecallTypeUI();
      });
    });

    // Quick Action Pills
    menuEl.querySelectorAll('.quick-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        userOverriddenFilters = true;
        const action = btn.dataset.action;
        const chks = menuEl.querySelectorAll('.recall-type-chk');
        if (action === 'all') {
          chks.forEach(c => { c.checked = true; selectedTypes.add(c.dataset.type); });
        } else if (action === 'india') {
          chks.forEach(c => {
            const isInd = c.dataset.group === 'india';
            c.checked = isInd;
            if (isInd) selectedTypes.add(c.dataset.type);
            else selectedTypes.delete(c.dataset.type);
          });
        } else if (action === 'world') {
          chks.forEach(c => {
            const isWld = c.dataset.group === 'world';
            c.checked = isWld;
            if (isWld) selectedTypes.add(c.dataset.type);
            else selectedTypes.delete(c.dataset.type);
          });
        } else if (action === 'clear') {
          chks.forEach(c => { c.checked = false; selectedTypes.delete(c.dataset.type); });
        }
        updateRecallTypeUI();
      });
    });

    // Group header select buttons
    menuEl.querySelectorAll('.group-select-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        userOverriddenFilters = true;
        const grp = btn.dataset.group;
        const grpChks = menuEl.querySelectorAll(`.recall-type-chk[data-group="${grp}"]`);
        const allChecked = Array.from(grpChks).every(c => c.checked);
        grpChks.forEach(c => {
          c.checked = !allChecked;
          if (!allChecked) selectedTypes.add(c.dataset.type);
          else selectedTypes.delete(c.dataset.type);
        });
        updateRecallTypeUI();
      });
    });

    // "only" buttons per type (isolate single item alone)
    menuEl.querySelectorAll('.item-only-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        userOverriddenFilters = true;
        const targetType = btn.dataset.type;
        selectedTypes.clear();
        menuEl.querySelectorAll('.recall-type-chk').forEach(c => {
          const isMatch = (c.dataset.type === targetType);
          c.checked = isMatch;
          if (isMatch) selectedTypes.add(targetType);
        });
        updateRecallTypeUI();
      });
    });

    syncWithActiveKinds(true);
  }

  function syncWithActiveKinds(force = false) {
    if (userOverriddenFilters && !force) return;
    if (!window.WORLD_VECTOR_MAP || !window.WORLD_VECTOR_MAP.getActiveFilters) return;

    const activeMapFilters = window.WORLD_VECTOR_MAP.getActiveFilters();
    selectedTypes.clear();

    const menuEl = document.getElementById('recallTypeMenu');
    if (menuEl) {
      menuEl.querySelectorAll('.recall-type-chk').forEach(chk => {
        const type = chk.dataset.type;
        const isActive = Boolean(activeMapFilters[type]);
        chk.checked = isActive;
        if (isActive) selectedTypes.add(type);
      });
    } else {
      allCategoryKeys.forEach(k => {
        if (activeMapFilters[k]) selectedTypes.add(k);
      });
    }

    updateRecallTypeUI();
  }

  function updateRecallTypeUI() {
    const labelEl = document.getElementById('recallTypeLabel');
    const badgeEl = document.getElementById('recallTypeBadge');
    if (!labelEl || !badgeEl) return;

    if (selectedTypes.size === 0) {
      labelEl.textContent = 'None selected';
      badgeEl.textContent = '0';
    } else if (selectedTypes.size === allCategoryKeys.length) {
      labelEl.textContent = 'All Types';
      badgeEl.textContent = 'All';
    } else if (selectedTypes.size <= 2) {
      const names = Array.from(selectedTypes).map(k => categoryNames[k] || k).join(', ');
      labelEl.textContent = names;
      badgeEl.textContent = `${selectedTypes.size}`;
    } else {
      labelEl.textContent = `${selectedTypes.size} types selected`;
      badgeEl.textContent = `${selectedTypes.size}`;
    }

    updateRecallConfigSummary();
  }

  function updateRecallConfigSummary() {
    const regEl = document.getElementById('recallSummaryRegion');
    const typEl = document.getElementById('recallSummaryTypes');
    const continentSelect = document.getElementById('recallContinent');

    const reg = continentSelect ? continentSelect.value.trim() : '';
    if (regEl) regEl.textContent = reg ? (reg === 'India' ? '🇮🇳 India' : reg) : '🌐 All Continents';
    if (typEl) typEl.textContent = selectedTypes.size === allCategoryKeys.length ? 'All Types' : `${selectedTypes.size} Types`;
  }

  function toggleRecallDrawer(forceOpen = null) {
    const drawer = document.getElementById('recallFiltersDrawer');
    const toggleText = document.getElementById('recallToggleText');
    const toggleBtn = document.getElementById('recallConfigToggleBtn') || document.getElementById('btnToggleRecallFilters');
    if (!drawer) return;

    const shouldCollapse = forceOpen !== null ? !forceOpen : !drawer.classList.contains('collapsed');
    if (shouldCollapse) {
      drawer.classList.add('collapsed');
      if (toggleText) toggleText.textContent = 'Edit Filters';
      if (toggleBtn) {
        toggleBtn.classList.remove('active');
        toggleBtn.innerHTML = '⚙ Filters';
      }
    } else {
      drawer.classList.remove('collapsed');
      if (toggleText) toggleText.textContent = 'Hide Filters';
      if (toggleBtn) {
        toggleBtn.classList.add('active');
        toggleBtn.innerHTML = '✕ Close';
      }
    }
  }

  function startRecall(retryDeck = null) {
    if (!window.DATA_INTEGRITY) return;

    if (!userOverriddenFilters) {
      syncWithActiveKinds(false);
    }

    if (Array.isArray(retryDeck) && retryDeck.length > 0) {
      currentDeck = shuffleArray(retryDeck);
    } else {
      const continentSelect = document.getElementById('recallContinent');
      const continentVal = continentSelect ? continentSelect.value.trim() : '';

      let pool = window.DATA_INTEGRITY.getAll();

      // Region Filter
      if (continentVal === 'India') {
        pool = pool.filter(e => e.group === 'india' || e.state || e.continent === 'India');
      } else if (continentVal) {
        pool = pool.filter(e => e.continent === continentVal);
      }

      // Grouped Multi-Type Selection Filter
      if (selectedTypes.size > 0 && selectedTypes.size < allCategoryKeys.length) {
        pool = pool.filter(e => {
          const cat = e.category || e.type;
          return selectedTypes.has(cat);
        });
      } else if (selectedTypes.size === 0) {
        pool = [];
      }

      if (pool.length === 0) {
        const cardEl = document.getElementById('recallCard');
        if (cardEl) {
          cardEl.innerHTML = `
            <div class="empty-state">
              <div class="empty-title">No Features Found</div>
              <p class="empty-desc">No features match the selected types in "${continentVal || 'All Continents'}". Please check at least one type in the filters above.</p>
            </div>
          `;
        }
        toggleRecallDrawer(true);
        return;
      }

      currentDeck = shuffleArray(pool);
    }

    currentIndex = 0;
    score = 0;
    missedItems = [];
    isAnswered = false;

    // Minimize controls to focus 100% on Map Recall
    updateRecallConfigSummary();
    const configBar = document.getElementById('recallConfigBar');
    if (configBar) configBar.classList.remove('hidden');
    toggleRecallDrawer(false);

    renderRecallCard();
  }

  function renderRecallCard() {
    const cardEl = document.getElementById('recallCard');
    const progEl = document.getElementById('recallProgress');
    if (!cardEl) return;

    if (currentIndex >= currentDeck.length) {
      renderSummary();
      return;
    }

    activeEntity = currentDeck[currentIndex];
    isAnswered = false;

    if (progEl) {
      progEl.textContent = `Score: ${score}/${currentIndex} · Card ${currentIndex + 1} of ${currentDeck.length}`;
    }

    // Arm 2D Vector Map in Recall mode
    const handleAttempt = (isCorrect, clickedName) => {
      handleMapAttempt(isCorrect, clickedName);
    };

    if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.setRecallTarget) {
      window.WORLD_VECTOR_MAP.setRecallTarget(activeEntity, handleAttempt);
    } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.setRecallTarget) {
      window.WORLD_FLAT_MAP.setRecallTarget(activeEntity, handleAttempt);
    }

    const catName = categoryNames[activeEntity.category] || (activeEntity.categoryName || activeEntity.category).toUpperCase();
    const subLocation = activeEntity.region || activeEntity.state || activeEntity.continent || '';

    cardEl.innerHTML = `
      <div class="recall-prompt-card">
        <!-- Tag row -->
        <div class="detail-top-tags">
          <span class="category-pill" style="border-color:var(--accent2); color:var(--accent2);">
            ${escapeHtml(catName)}
          </span>
          ${subLocation ? `
            <span class="continent-pill">
              ${escapeHtml(subLocation)}
            </span>
          ` : ''}
        </div>

        <!-- Target Prompt -->
        <div class="recall-target-box">
          <span class="target-subhead">Find and tap on the map:</span>
          <h1 class="recall-target-name">${escapeHtml(activeEntity.name)}</h1>
        </div>

        <div class="recall-instruction-box">
          <svg class="instruction-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          <p class="instruction-text">Explore the map and tap where <b>${escapeHtml(activeEntity.name)}</b> is located.</p>
        </div>

        <!-- Reveal / Hint Button -->
        <div class="recall-action-row" id="recallActionRow">
          <button type="button" class="secondary-btn" id="btnRevealRecall">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" y1="12" x2="18" y2="12"></line>
              <line x1="6" y1="12" x2="2" y2="12"></line>
              <line x1="12" y1="6" x2="12" y2="2"></line>
              <line x1="12" y1="22" x2="12" y2="18"></line>
            </svg>
            <span>Reveal Location</span>
          </button>
        </div>

        <!-- Feedback & Study Notes Section (hidden until answer/reveal) -->
        <div class="recall-result-section hidden" id="recallResultSection"></div>
      </div>
    `;

    // Hook Reveal Button
    const btnReveal = cardEl.querySelector('#btnRevealRecall');
    if (btnReveal) {
      btnReveal.addEventListener('click', () => {
        handleMapAttempt(false, null, true);
      });
    }
  }

  function handleMapAttempt(isCorrect, clickedName, isExplicitReveal = false) {
    if (isAnswered) return;
    isAnswered = true;

    if (isCorrect && !isExplicitReveal) {
      score++;
    } else {
      missedItems.push(activeEntity);
    }

    const progEl = document.getElementById('recallProgress');
    if (progEl) {
      progEl.textContent = `Score: ${score}/${currentIndex + 1} · Card ${currentIndex + 1} of ${currentDeck.length}`;
    }

    // Reveal target location on 2D Vector Map
    if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.revealRecallTarget) {
      window.WORLD_VECTOR_MAP.revealRecallTarget(activeEntity);
    } else if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.revealRecallTarget) {
      window.WORLD_FLAT_MAP.revealRecallTarget(activeEntity);
    }

    // Hide reveal action button
    const actionRow = document.getElementById('recallActionRow');
    if (actionRow) actionRow.classList.add('hidden');

    // Build Study Details
    const resultSection = document.getElementById('recallResultSection');
    if (!resultSection) return;

    resultSection.classList.remove('hidden');

    let statusHeader = '';
    if (isExplicitReveal) {
      statusHeader = `
        <div class="feedback-badge status-revealed">
          <span>ℹ Location Revealed</span>
        </div>
      `;
    } else if (isCorrect) {
      statusHeader = `
        <div class="feedback-badge status-correct">
          <span>✓ Correct Location!</span>
        </div>
      `;
    } else {
      const tappedLabel = clickedName ? `You tapped: ${escapeHtml(clickedName)}` : 'You tapped off-target';
      statusHeader = `
        <div class="feedback-badge status-wrong">
          <span>✗ ${tappedLabel}</span>
        </div>
      `;
    }

    const coordsStr = activeEntity.coords ? `${Math.abs(activeEntity.coords[1]).toFixed(2)}°${activeEntity.coords[1] >= 0 ? 'N' : 'S'}, ${Math.abs(activeEntity.coords[0]).toFixed(2)}°${activeEntity.coords[0] >= 0 ? 'E' : 'W'}` : '';
    const isLast = currentIndex === currentDeck.length - 1;

    resultSection.innerHTML = `
      <div class="recall-feedback-card ${isCorrect ? 'border-correct' : 'border-wrong'}">
        <div class="feedback-header">
          ${statusHeader}
        </div>

        <div class="spec-grid" style="margin-top:10px;">
          ${activeEntity.category === 'wind' ? `
            <div class="spec-card">
              <span class="spec-label">Region</span>
              <span class="spec-value">${escapeHtml(activeEntity.region || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Nature</span>
              <span class="spec-value" style="color:${activeEntity.type === 'cold' ? '#0284c7' : '#ef4444'}; font-weight:600;">${escapeHtml(activeEntity.nature || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Primary Effect</span>
              <span class="spec-value">${escapeHtml(activeEntity.effect || '')}</span>
            </div>
          ` : activeEntity.category === 'current' ? `
            <div class="spec-card">
              <span class="spec-label">Ocean Basin</span>
              <span class="spec-value">${escapeHtml(activeEntity.ocean || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Type</span>
              <span class="spec-value">${escapeHtml(activeEntity.typeName || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Coasts</span>
              <span class="spec-value">${escapeHtml(activeEntity.coasts || 'Open Ocean')}</span>
            </div>
          ` : `
            ${activeEntity.capital ? `
              <div class="spec-card">
                <span class="spec-label">Capital</span>
                <span class="spec-value">${escapeHtml(activeEntity.capital)}</span>
              </div>
            ` : ''}
            <div class="spec-card">
              <span class="spec-label">Coordinates</span>
              <span class="spec-value mono">${coordsStr}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Category</span>
              <span class="spec-value">${escapeHtml((activeEntity.categoryName || activeEntity.category).toUpperCase())}</span>
            </div>
          `}
        </div>

        <!-- Description -->
        <div class="detail-box overview-box" style="margin-top:10px;">
          <p class="overview-text">${escapeHtml(activeEntity.description || activeEntity.flow || '')}</p>
        </div>

        <!-- Key Facts -->
        ${(activeEntity.keyFacts && activeEntity.keyFacts.length > 0) ? `
          <div class="detail-box" style="margin-top:10px;">
            <div class="box-header"><span>Key Geographical Facts</span></div>
            <ul class="clean-fact-list">
              ${activeEntity.keyFacts.map(f => `<li><span class="fact-bullet"></span><span class="fact-text">${escapeHtml(f)}</span></li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- UPSC High-Yield Insight -->
        ${activeEntity.upscNotes ? `
          <div class="detail-box upsc-box" style="margin-top:10px;">
            <div class="box-header upsc-header">
              <span class="upsc-tag">UPSC High-Yield Exam Insight</span>
            </div>
            <div class="upsc-body"><p>${escapeHtml(activeEntity.upscNotes)}</p></div>
          </div>
        ` : ''}

        <!-- Advance Button -->
        <div style="margin-top:14px;">
          <button type="button" class="primary-btn" id="btnNextRecall" style="width:100%;">
            ${isLast ? 'Complete Recall Deck →' : 'Next Feature →'}
          </button>
        </div>
      </div>
    `;

    const nextBtn = resultSection.querySelector('#btnNextRecall');
    if (nextBtn) {
      nextBtn.focus();
      nextBtn.addEventListener('click', () => {
        currentIndex++;
        renderRecallCard();
      });
    }
  }

  function renderSummary() {
    const cardEl = document.getElementById('recallCard');
    const progEl = document.getElementById('recallProgress');
    if (!cardEl) return;

    if (progEl) progEl.textContent = `Completed ${currentDeck.length} cards`;

    if (window.WORLD_VECTOR_MAP && window.WORLD_VECTOR_MAP.clearRecallTarget) {
      window.WORLD_VECTOR_MAP.clearRecallTarget();
    }

    const pct = Math.round((score / currentDeck.length) * 100);

    cardEl.innerHTML = `
      <div class="quiz-summary-card">
        <h2 class="summary-title">Recall Round Complete</h2>
        <div class="summary-score-big">${pct}%</div>
        <p class="summary-desc">You located ${score} out of ${currentDeck.length} features on your first attempt.</p>
        <div class="summary-actions">
          <button type="button" class="primary-btn" id="btnRestartRecall">Practice Again</button>
          ${missedItems.length > 0 ? `<button type="button" class="secondary-btn" id="btnRetryMissedRecall">Retry Missed (${missedItems.length})</button>` : ''}
          <button type="button" class="secondary-btn" id="btnChangeRecallSettings">Change Filters</button>
        </div>
      </div>
    `;

    cardEl.querySelector('#btnRestartRecall').addEventListener('click', () => startRecall());
    const retryBtn = cardEl.querySelector('#btnRetryMissedRecall');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => startRecall(missedItems));
    }
    const changeBtn = cardEl.querySelector('#btnChangeRecallSettings');
    if (changeBtn) {
      changeBtn.addEventListener('click', () => toggleRecallDrawer(true));
    }
  }

  function attachKeyboardShortcuts() {
    if (keyboardHandlerAttached) return;
    keyboardHandlerAttached = true;

    window.addEventListener('keydown', (e) => {
      const recallPanel = document.getElementById('recallPanel');
      if (!recallPanel || recallPanel.classList.contains('hidden')) return;

      if (isAnswered && (e.key === 'Enter' || e.key === ' ')) {
        const nextBtn = document.getElementById('btnNextRecall');
        if (nextBtn) {
          e.preventDefault();
          nextBtn.click();
        }
      }
    });
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return {
    init: init,
    startRecall: startRecall,
    toggleRecallDrawer: toggleRecallDrawer,
    syncWithActiveKinds: syncWithActiveKinds
  };
})();
