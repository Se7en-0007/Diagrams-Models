/**
 * World Mapping Atlas — Search and Filter Controller
 * Real-time fuzzy query filtering with continent and category facet support.
 */

window.WORLD_SEARCH = (function () {
  'use strict';

  let currentCategory = 'all';
  let currentContinent = '';
  let currentQuery = '';
  let debounceTimer = null;

  function init() {
    const searchInput = document.getElementById('searchInput');
    const continentSelect = document.getElementById('continentSelect');
    const filterChips = document.getElementById('browseFilters');

    if (searchInput) {
      searchInput.addEventListener('input', e => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          currentQuery = e.target.value;
          applyFilters();
        }, 150);
      });
    }

    if (continentSelect) {
      continentSelect.addEventListener('change', e => {
        currentContinent = e.target.value;
        applyFilters();
      });
    }

    if (filterChips) {
      filterChips.addEventListener('click', e => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        filterChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        currentCategory = chip.dataset.filter || 'all';
        applyFilters();
      });
    }

    applyFilters();
  }

  function applyFilters() {
    if (!window.DATA_INTEGRITY || !window.ENTITY_PANEL) return;

    if (window.ENTITY_PANEL.showList) {
      window.ENTITY_PANEL.showList();
    }
    const filtered = window.DATA_INTEGRITY.search(currentQuery, currentContinent, currentCategory);
    window.ENTITY_PANEL.renderList(filtered);
  }

  function setFilter(category, continent) {
    if (category) currentCategory = category;
    if (continent !== undefined) currentContinent = continent;

    // Update UI chips
    const filterChips = document.getElementById('browseFilters');
    if (filterChips) {
      filterChips.querySelectorAll('.chip').forEach(c => {
        c.classList.toggle('active', c.dataset.filter === currentCategory);
      });
    }

    const continentSelect = document.getElementById('continentSelect');
    if (continentSelect && continent !== undefined) {
      continentSelect.value = continent;
    }

    applyFilters();
  }

  return {
    init: init,
    applyFilters: applyFilters,
    setFilter: setFilter
  };
})();
