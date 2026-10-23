/**
 * World Mapping Atlas — UPSC CSE Map Identification Quiz Engine
 * Visual Cartographic Quiz inspired by Ocean Currents Atlas:
 * 1. Pinned location pulses on the 3D globe / 2D flat map at close zoom with label hidden.
 * 2. User observes the pin and names the feature from 4 confusing, plausible options.
 * 3. Immediate feedback reveals the label on the map, explains UPSC relevance, and advances.
 * 4. Non-repetitive: quizzes all features matching selected continent/type without artificial caps.
 * 5. Full support for both 3D Globe and 2D Flat Map.
 */

window.WORLD_QUIZ = (function () {
  'use strict';

  let currentDeck = [];
  let currentIndex = 0;
  let score = 0;
  let answered = false;
  let activeQuestion = null;
  let missedItems = [];

  function init() {
    const startBtn = document.getElementById('startQuiz');
    const continentSelect = document.getElementById('quizContinent');
    const typeSelect = document.getElementById('quizType');

    if (startBtn) {
      startBtn.addEventListener('click', () => startQuiz());
    }
    if (continentSelect) {
      continentSelect.addEventListener('change', () => startQuiz());
    }
    if (typeSelect) {
      typeSelect.addEventListener('change', () => startQuiz());
    }
  }

  function startQuiz(retryDeck = null) {
    if (!window.DATA_INTEGRITY) return;

    if (Array.isArray(retryDeck) && retryDeck.length > 0) {
      currentDeck = shuffleArray(retryDeck);
    } else {
      const continentSelect = document.getElementById('quizContinent');
      const typeSelect = document.getElementById('quizType');

      const continentVal = continentSelect ? continentSelect.value.trim() : '';
      const typeVal = typeSelect ? typeSelect.value.trim() : '';

      let pool = window.DATA_INTEGRITY.getAll();

      if (continentVal) {
        pool = pool.filter(e => e.continent === continentVal);
      }
      if (typeVal && typeVal !== 'fact') {
        pool = pool.filter(e => e.category === typeVal);
      }

      if (pool.length === 0) {
        const cardEl = document.getElementById('quizCard');
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

      // Non-repetitive: full deck of all matching entities
      currentDeck = shuffleArray(pool);
    }

    currentIndex = 0;
    score = 0;
    missedItems = [];
    answered = false;

    renderQuestion();
  }

  function renderQuestion() {
    const cardEl = document.getElementById('quizCard');
    const scoreEl = document.getElementById('quizScore');
    const fillEl = document.getElementById('quizFill');
    if (!cardEl) return;

    if (currentIndex >= currentDeck.length) {
      renderSummary();
      return;
    }

    answered = false;
    const targetEntity = currentDeck[currentIndex];
    activeQuestion = generateQuestion(targetEntity);

    // Update Header
    if (scoreEl) {
      scoreEl.textContent = `Score: ${score}/${currentIndex} · Question ${currentIndex + 1} of ${currentDeck.length}`;
    }
    if (fillEl) {
      fillEl.style.width = `${((currentIndex) / currentDeck.length) * 100}%`;
    }

    // Pin location on both 3D Globe and 2D Flat Map
    if (window.WORLD_GLOBE && window.WORLD_GLOBE.setQuizTarget) {
      window.WORLD_GLOBE.setQuizTarget(targetEntity.id);
    }
    if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.setQuizTarget) {
      window.WORLD_FLAT_MAP.setQuizTarget(targetEntity.id);
    }

    // Render Question Card
    cardEl.innerHTML = `
      <div class="quiz-active-container">
        <!-- Badge row -->
        <div class="detail-top-tags">
          <span class="category-pill" style="border-color:var(--accent2); color:var(--accent2);">
            ${escapeHtml(targetEntity.category.toUpperCase())}
          </span>
          <span class="continent-pill">
            ${escapeHtml(targetEntity.continent)}
          </span>
        </div>

        <!-- Prompt Heading -->
        <div class="quiz-prompt-header">
          <span class="quiz-step-tag">Observe Pinned Location</span>
          <h2 class="quiz-question-title">What is the name of this ${escapeHtml(targetEntity.category)}?</h2>
        </div>

        <!-- 4 Options -->
        <div class="quiz-options-grid" id="quizOptionsGrid">
          ${activeQuestion.options.map((opt, i) => `
            <button class="quiz-opt-btn" data-index="${i}" tabindex="0">
              <span class="opt-badge">${String.fromCharCode(65 + i)}</span>
              <span class="opt-text">${escapeHtml(opt)}</span>
            </button>
          `).join('')}
        </div>

        <!-- Feedback section (revealed on answer) -->
        <div class="quiz-feedback-box hidden" id="quizFeedbackBox"></div>
      </div>
    `;

    // Hook option buttons
    cardEl.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        handleAnswer(parseInt(btn.dataset.index, 10));
      });
    });
  }

  function handleAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const isCorrect = selectedIndex === activeQuestion.correctIndex;
    if (isCorrect) {
      score++;
    } else {
      missedItems.push(currentDeck[currentIndex]);
    }

    // Update Score display
    const scoreEl = document.getElementById('quizScore');
    const fillEl = document.getElementById('quizFill');
    if (scoreEl) {
      scoreEl.textContent = `Score: ${score}/${currentIndex + 1} · Question ${currentIndex + 1} of ${currentDeck.length}`;
    }
    if (fillEl) {
      fillEl.style.width = `${((currentIndex + 1) / currentDeck.length) * 100}%`;
    }

    // Reveal answer on both 3D Globe and 2D Flat Map
    if (window.WORLD_GLOBE && window.WORLD_GLOBE.revealQuizAnswer) {
      window.WORLD_GLOBE.revealQuizAnswer(activeQuestion.target.id);
    }
    if (window.WORLD_FLAT_MAP && window.WORLD_FLAT_MAP.revealQuizAnswer) {
      window.WORLD_FLAT_MAP.revealQuizAnswer(activeQuestion.target.id, isCorrect);
    }

    // Style option buttons (green correct, red wrong)
    const optButtons = document.querySelectorAll('.quiz-opt-btn');
    optButtons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === activeQuestion.correctIndex) {
        btn.classList.add('btn-correct');
      } else if (i === selectedIndex && !isCorrect) {
        btn.classList.add('btn-wrong');
      }
    });

    // Reveal Feedback & UPSC Explanation
    const feedbackEl = document.getElementById('quizFeedbackBox');
    if (feedbackEl) {
      feedbackEl.classList.remove('hidden');
      const isLast = currentIndex === currentDeck.length - 1;

      feedbackEl.innerHTML = `
        <div class="feedback-card ${isCorrect ? 'status-correct' : 'status-wrong'}">
          <div class="feedback-header">
            <span class="feedback-badge">${isCorrect ? '✓ Correct' : '✗ Not quite'}</span>
            <span class="correct-name">${escapeHtml(activeQuestion.target.name)}</span>
          </div>
          <p class="feedback-text">${escapeHtml(activeQuestion.explanation)}</p>
          <button class="primary-btn feedback-next-btn" id="btnNextQuiz">
            ${isLast ? 'Complete Round →' : 'Next Question →'}
          </button>
        </div>
      `;

      feedbackEl.querySelector('#btnNextQuiz').addEventListener('click', () => {
        currentIndex++;
        renderQuestion();
      });
    }
  }

  function renderSummary() {
    const cardEl = document.getElementById('quizCard');
    const fillEl = document.getElementById('quizFill');
    if (!cardEl) return;

    if (fillEl) fillEl.style.width = '100%';

    const pct = Math.round((score / currentDeck.length) * 100);

    cardEl.innerHTML = `
      <div class="quiz-summary-card">
        <h2 class="summary-title">Round Complete</h2>
        <div class="summary-score-big">${pct}%</div>
        <p class="summary-desc">You correctly identified ${score} out of ${currentDeck.length} features.</p>
        <div class="summary-actions">
          <button class="primary-btn" id="btnRestartQuiz">Practice Again</button>
          ${missedItems.length > 0 ? `<button class="secondary-btn" id="btnRetryMissed">Retry Missed (${missedItems.length})</button>` : ''}
        </div>
      </div>
    `;

    cardEl.querySelector('#btnRestartQuiz').addEventListener('click', () => startQuiz());
    const retryBtn = cardEl.querySelector('#btnRetryMissed');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => startQuiz(missedItems));
    }
  }

  function generateQuestion(targetEntity) {
    const all = window.DATA_INTEGRITY.getAll();

    // 1. Same category distractors
    let pool = all.filter(e => e.id !== targetEntity.id && e.category === targetEntity.category);

    // 2. If not enough in category, add same continent
    if (pool.length < 3) {
      const more = all.filter(e => e.id !== targetEntity.id && e.continent === targetEntity.continent && !pool.includes(e));
      pool = pool.concat(more);
    }

    // 3. Fallback anywhere
    if (pool.length < 3) {
      const anywhere = all.filter(e => e.id !== targetEntity.id && !pool.includes(e));
      pool = pool.concat(anywhere);
    }

    // Deduplicate distractor names
    const distractorNames = Array.from(new Set(shuffleArray(pool).map(e => e.name)))
      .filter(n => n !== targetEntity.name)
      .slice(0, 3);

    const options = shuffleArray([targetEntity.name, ...distractorNames]);
    const correctIndex = options.indexOf(targetEntity.name);

    let explanation = targetEntity.description || '';
    if (targetEntity.upscNotes) {
      explanation += ` · High-Yield Insight: ${targetEntity.upscNotes}`;
    }

    return {
      target: targetEntity,
      options: options,
      correctIndex: correctIndex,
      explanation: explanation
    };
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
    startQuiz: startQuiz
  };
})();
