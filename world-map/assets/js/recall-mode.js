/**
 * World Mapping Atlas — Active Spatial Recall Mode
 * Directly modeled on Ocean Currents Atlas:
 * 1. Shows a plain simple feature name: "Tap this [category] on the map: [Name]"
 * 2. User rotates the 3D globe or navigates the 2D flat map and clicks on the target.
 * 3. On click (correct or wrong), stays 100% in Recall mode:
 *    - If correct: "✓ Correct!"
 *    - If wrong: "✗ Not quite · you tapped [Tapped Name]"
 *    - Zooms camera to the location, pulses ring/marker, and reveals full UPSC study card.
 * 4. Functional dropdown filters (Continent + Feature Type) with non-repetitive complete decks.
 * 5. Full support for both 3D Globe and 2D Flat Map.
 */

window.WORLD_RECALL = (function () {
  'use strict';

  let currentDeck = [];
  let currentIndex = 0;
  let score = 0;
  let activeEntity = null;
  let isAnswered = false;
  let missedItems = [];

  function init() {
    const startBtn = document.getElementById('startRecall');
    const continentSelect = document.getElementById('recallContinent');
    const typeSelect = document.getElementById('recallType');

    if (startBtn) {
      startBtn.addEventListener('click', () => startRecall());
    }
    if (continentSelect) {
      continentSelect.addEventListener('change', () => startRecall());
    }
    if (typeSelect) {
      typeSelect.addEventListener('change', () => startRecall());
    }
  }

  function startRecall(retryDeck = null) {
    if (!window.DATA_INTEGRITY) return;

    if (Array.isArray(retryDeck) && retryDeck.length > 0) {
      currentDeck = shuffleArray(retryDeck);
    } else {
      const continentSelect = document.getElementById('recallContinent');
      const typeSelect = document.getElementById('recallType');

      const continentVal = continentSelect ? continentSelect.value.trim() : '';
      const typeVal = typeSelect ? typeSelect.value.trim() : '';

      let pool = window.DATA_INTEGRITY.getAll();

      if (continentVal) {
        pool = pool.filter(e => e.continent === continentVal);
      }
      if (typeVal) {
        pool = pool.filter(e => e.category === typeVal);
      }

      if (pool.length === 0) {
        const cardEl = document.getElementById('recallCard');
        if (cardEl) {
          cardEl.innerHTML = `
            <div class="empty-state">
              <div class="empty-title">No Features Found</div>
              <p class="empty-desc">No features match "${typeVal || 'All Types'}" in "${continentVal || 'All Continents'}". Please choose another combination.</p>
            </div>
          `;
        }
        return;
      }

      // Non-repetitive: full deck of matching entities
      currentDeck = shuffleArray(pool);
    }

    currentIndex = 0;
    score = 0;
    missedItems = [];
    isAnswered = false;

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

    // Arm both 3D Globe and 2D Flat Map in Recall mode
    const handleAttempt = (isCorrect, clickedName) => {
      handleMapAttempt(isCorrect, clickedName);
    };

    if (window.WORLD_GLOBE && window.WORLD_GLOBE.setRecallTarget) {
      window.WORLD_GLOBE.setRecallTarget(activeEntity, handleAttempt);
    }
    if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.setRecallTarget) {
      window.WORLD_FLAT_MAP.setRecallTarget(activeEntity, handleAttempt);
    }

    cardEl.innerHTML = `
      <div class="recall-prompt-card">
        <!-- Tag row -->
        <div class="detail-top-tags">
          <span class="category-pill" style="border-color:var(--accent2); color:var(--accent2);">
            ${escapeHtml(activeEntity.category.toUpperCase())}
          </span>
          <span class="continent-pill">
            ${escapeHtml(activeEntity.continent)}
          </span>
        </div>

        <!-- Plain Simple Feature Name -->
        <div class="recall-target-box">
          <span class="target-subhead">Locate this ${escapeHtml(activeEntity.category)} on the map:</span>
          <h1 class="recall-target-name">${escapeHtml(activeEntity.name)}</h1>
        </div>

        <div class="recall-instruction-box">
          <svg class="instruction-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          <p class="instruction-text">Rotate the globe or flat map and tap where <b>${escapeHtml(activeEntity.name)}</b> is located.</p>
        </div>

        <!-- Reveal / Hint Button -->
        <div class="recall-action-row" id="recallActionRow">
          <button class="secondary-btn" id="btnRevealRecall">
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

    // Reveal target location on both 3D Globe and 2D Flat Map
    if (window.WORLD_GLOBE && window.WORLD_GLOBE.revealRecallTarget) {
      window.WORLD_GLOBE.revealRecallTarget(activeEntity);
    }
    if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.revealRecallTarget) {
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
      const tappedLabel = clickedName ? `You tapped: ${escapeHtml(clickedName)}` : 'You clicked off-target';
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
            <span class="spec-value">${escapeHtml(activeEntity.category.toUpperCase())}</span>
          </div>
        </div>

        <!-- Description -->
        <div class="detail-box overview-box" style="margin-top:10px;">
          <p class="overview-text">${escapeHtml(activeEntity.description || '')}</p>
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
          <button class="primary-btn" id="btnNextRecall" style="width:100%;">
            ${isLast ? 'Complete Recall Deck →' : 'Next Feature →'}
          </button>
        </div>
      </div>
    `;

    resultSection.querySelector('#btnNextRecall').addEventListener('click', () => {
      currentIndex++;
      renderRecallCard();
    });
  }

  function renderSummary() {
    const cardEl = document.getElementById('recallCard');
    const progEl = document.getElementById('recallProgress');
    if (!cardEl) return;

    if (progEl) progEl.textContent = `Completed ${currentDeck.length} cards`;

    const pct = Math.round((score / currentDeck.length) * 100);

    cardEl.innerHTML = `
      <div class="quiz-summary-card">
        <h2 class="summary-title">Recall Round Complete</h2>
        <div class="summary-score-big">${pct}%</div>
        <p class="summary-desc">You located ${score} out of ${currentDeck.length} features on your first attempt.</p>
        <div class="summary-actions">
          <button class="primary-btn" id="btnRestartRecall">Practice Again</button>
          ${missedItems.length > 0 ? `<button class="secondary-btn" id="btnRetryMissedRecall">Retry Missed (${missedItems.length})</button>` : ''}
        </div>
      </div>
    `;

    cardEl.querySelector('#btnRestartRecall').addEventListener('click', () => startRecall());
    const retryBtn = cardEl.querySelector('#btnRetryMissedRecall');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => startRecall(missedItems));
    }
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
    startRecall: startRecall
  };
})();
