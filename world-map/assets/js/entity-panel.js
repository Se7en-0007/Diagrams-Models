/**
 * Mapping Atlas — Entity Detail and List Panel
 * Streamlined UI/UX matching target design: Clean list items with title and subtitle,
 * dynamic item counter, and structured study spec cards.
 */

window.ENTITY_PANEL = (function () {
  'use strict';

  let currentEntities = [];
  let currentIndex = -1;

  // Category labels and display colors
  const categoryConfig = {
    country:          { label: 'Countries & Borders', color: '#2563eb', badgeClass: 'country' },
    mountain:         { label: 'Mountain Ranges', color: '#78350f', badgeClass: 'mountain' },
    river:            { label: 'Rivers & Basins', color: '#0284c7', badgeClass: 'river' },
    peak:             { label: 'Peaks & Summits', color: '#9333ea', badgeClass: 'peak' },
    pass:             { label: 'Mountain Passes', color: '#c2410c', badgeClass: 'pass' },
    glacier:          { label: 'Glaciers', color: '#0e7490', badgeClass: 'glacier' },
    current:          { label: 'Ocean Currents', color: '#0284c7', badgeClass: 'current' },
    wind:             { label: 'Local Winds', color: '#ea580c', badgeClass: 'wind' },
    national_park:    { label: 'National Parks', color: '#15803d', badgeClass: 'national_park' },
    tiger_reserve:    { label: 'Tiger Reserves', color: '#78350f', badgeClass: 'tiger_reserve' },
    biosphere_reserve:{ label: 'Biosphere Reserves', color: '#6b21a8', badgeClass: 'biosphere_reserve' },
    ramsar_site:      { label: 'Ramsar Sites', color: '#0f766e', badgeClass: 'ramsar_site' },
    lake:             { label: 'Lakes & Waters', color: '#0ea5e9', badgeClass: 'lake' },
    strait:           { label: 'Straits & Passages', color: '#14b8a6', badgeClass: 'strait' },
    desert:           { label: 'Deserts & Arid Zones', color: '#d97706', badgeClass: 'desert' },
    sea:              { label: 'Seas & Bays', color: '#0284c7', badgeClass: 'sea' },
    grassland:        { label: 'Grasslands & Plateaus', color: '#16a34a', badgeClass: 'grassland' },
    island:           { label: 'Islands', color: '#ea580c', badgeClass: 'island' }
  };

  function renderList(entities, activeId) {
    currentEntities = entities || [];
    const listEl = document.getElementById('entityList');
    const infoEl = document.getElementById('resultsInfo');
    if (!listEl) return;

    if (infoEl) {
      infoEl.textContent = `${currentEntities.length}`;
    }
    const locationHeader = document.getElementById('locationHeaderTitle');
    if (locationHeader) {
      locationHeader.textContent = 'Location';
    }

    if (currentEntities.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <svg class="empty-icon-svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <div class="empty-title">No matching places or rivers</div>
          <p class="empty-desc">Try clearing filters or search query.</p>
        </div>`;
      return;
    }

    // Clean, direct list matching Screenshot 1 layout
    listEl.innerHTML = currentEntities.map(e => renderListItem(e, activeId)).join('');

    // Attach click listeners to all items
    listEl.querySelectorAll('.entity-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        listEl.querySelectorAll('.entity-item').forEach(item => item.classList.remove('selected'));
        el.classList.add('selected');
        if (window.WORLD_APP && window.WORLD_APP.onEntitySelected) {
          window.WORLD_APP.onEntitySelected(id, true);
        }
      });
    });
  }

  function renderListItem(e, activeId) {
    const isSelected = e.id === activeId;
    const subText = e.subtitle || (e.capital ? `${e.continent} · Cap: ${e.capital}` : (e.continent || ''));

    return `
      <div class="entity-item${isSelected ? ' selected' : ''}" data-id="${e.id}" role="button" tabindex="0">
        <div class="entity-info">
          <span class="entity-title">${escapeHtml(e.name)}</span>
          <span class="entity-sub">${escapeHtml(subText)}</span>
        </div>
      </div>
    `;
  }

  function renderDetail(entity, index = -1, targetContainerId = 'entityDetail') {
    const detailEl = document.getElementById(targetContainerId);
    if (!detailEl) return;

    if (!entity) {
      detailEl.innerHTML = `
        <div class="empty-state">
          <p class="empty-desc">Select a feature on the map or from the list to view comprehensive UPSC study notes.</p>
        </div>`;
      return;
    }

    currentIndex = index >= 0 ? index : currentEntities.findIndex(e => e.id === entity.id);

    const cfg = categoryConfig[entity.category] || { label: entity.category, color: '#94a3b8' };
    const coordsStr = entity.coords ? `${Math.abs(entity.coords[1]).toFixed(2)}°${entity.coords[1] >= 0 ? 'N' : 'S'}, ${Math.abs(entity.coords[0]).toFixed(2)}°${entity.coords[0] >= 0 ? 'E' : 'W'}` : 'N/A';

    // Key facts list
    const keyFactsHtml = (entity.keyFacts && entity.keyFacts.length > 0)
      ? `
        <div class="detail-box">
          <div class="box-header">
            <svg class="box-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span>Key Geographical Facts</span>
          </div>
          <ul class="clean-fact-list">
            ${entity.keyFacts.map(f => `<li><span class="fact-bullet"></span><span class="fact-text">${escapeHtml(f)}</span></li>`).join('')}
          </ul>
        </div>
      `
      : '';

    // UPSC High-yield notes
    const upscNotesHtml = entity.upscNotes
      ? `
        <div class="detail-box upsc-box">
          <div class="box-header upsc-header">
            <svg class="box-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <span class="upsc-tag">UPSC Prelims &amp; Mains High-Yield Insights</span>
          </div>
          <div class="upsc-body">
            <p>${escapeHtml(entity.upscNotes)}</p>
          </div>
        </div>
      `
      : '';

    detailEl.innerHTML = `
      <div class="apple-detail-view">
        <!-- Header pill bar -->
        <div class="detail-top-tags">
          <span class="category-pill" style="border-color:${cfg.color}; color:${cfg.color};">
            ${cfg.label}
          </span>
          <span class="continent-pill">
            ${escapeHtml(entity.continent)}
          </span>
        </div>

        <!-- Entity Name -->
        <h1 class="detail-title">${escapeHtml(entity.name)}</h1>

        <!-- Quick Spec Grid Boxes -->
        <div class="spec-grid">
          ${entity.category === 'current' ? `
            <div class="spec-card">
              <span class="spec-label">Ocean Basin</span>
              <span class="spec-value">${escapeHtml(entity.ocean || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Current Type</span>
              <span class="spec-value" style="color:${entity.color}; font-weight:600;">${escapeHtml(entity.typeName || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Coasts / Regions</span>
              <span class="spec-value">${escapeHtml(entity.coasts || 'Open Ocean')}</span>
            </div>
          ` : entity.category === 'wind' ? `
            <div class="spec-card">
              <span class="spec-label">Region</span>
              <span class="spec-value">${escapeHtml(entity.region || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Nature</span>
              <span class="spec-value" style="color:${entity.type === 'cold' ? '#0284c7' : '#ef4444'}; font-weight:600;">${escapeHtml(entity.nature || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Primary Effect</span>
              <span class="spec-value">${escapeHtml(entity.effect || '')}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Season &amp; Direction</span>
              <span class="spec-value">${escapeHtml((entity.season || '') + (entity.direction ? ' · ' + entity.direction : ''))}</span>
            </div>
          ` : `
            ${entity.capital ? `
              <div class="spec-card">
                <span class="spec-label">Capital</span>
                <span class="spec-value">${escapeHtml(entity.capital)}</span>
              </div>
            ` : ''}
            <div class="spec-card">
              <span class="spec-label">Coordinates</span>
              <span class="spec-value mono">${coordsStr}</span>
            </div>
            <div class="spec-card">
              <span class="spec-label">Category</span>
              <span class="spec-value">${escapeHtml((entity.categoryName || entity.category).toUpperCase())}</span>
            </div>
          `}
        </div>

        <!-- Overview Box -->
        <div class="detail-box overview-box">
          <div class="box-header">
            <svg class="box-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Overview &amp; Location</span>
          </div>
          <p class="overview-text">${escapeHtml(entity.description || entity.flow || '')}</p>
        </div>

        ${keyFactsHtml}
        ${upscNotesHtml}

        <!-- Clean Action Toolbar -->
        <div class="detail-action-bar">
          <button class="action-btn" id="btnFocusMap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" y1="12" x2="18" y2="12"></line>
              <line x1="6" y1="12" x2="2" y2="12"></line>
              <line x1="12" y1="6" x2="12" y2="2"></line>
              <line x1="12" y1="22" x2="12" y2="18"></line>
            </svg>
            <span>Center on Map</span>
          </button>
          <button class="action-btn" id="btnBookmark">
            <svg id="bookmarkSvg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span id="bookmarkText">Bookmark</span>
          </button>
        </div>
      </div>
    `;

    // Hook focus button
    const btnFocus = detailEl.querySelector('#btnFocusMap');
    if (btnFocus) {
      btnFocus.addEventListener('click', () => {
        if (!entity.coords && !entity.midpoint) return;
        if (window.WORLD_VECTOR_MAP) {
          window.WORLD_VECTOR_MAP.selectEntity(entity.id, true);
        } else if (window.WORLD_FLAT_MAP) {
          window.WORLD_FLAT_MAP.selectEntity(entity.id, true);
        }
      });
    }

    // Hook bookmark button
    const btnBookmark = detailEl.querySelector('#btnBookmark');
    if (btnBookmark && window.WORLD_PROGRESS) {
      const isBookmarked = window.WORLD_PROGRESS.isBookmarked(entity.id);
      updateBookmarkBtnState(btnBookmark, isBookmarked);

      btnBookmark.addEventListener('click', () => {
        const newState = window.WORLD_PROGRESS.toggleBookmark(entity.id);
        updateBookmarkBtnState(btnBookmark, newState);
      });
    }

    // If rendering into main Browse panel, ensure detail subview is visible
    if (targetContainerId === 'entityDetail') {
      showDetail();
    }

    // Update bottom sheet if mobile
    const bSheet = document.getElementById('bottomSheetContent');
    if (bSheet && targetContainerId === 'entityDetail') {
      bSheet.innerHTML = detailEl.innerHTML;
    }
  }

  function showDetail() {
    const detailView = document.getElementById('browseDetailSubview');
    const listView = document.getElementById('browseListSubview');
    if (detailView) detailView.classList.remove('hidden');
    if (listView) listView.classList.add('hidden');
  }

  function showList() {
    const detailView = document.getElementById('browseDetailSubview');
    const listView = document.getElementById('browseListSubview');
    if (detailView) detailView.classList.add('hidden');
    if (listView) listView.classList.remove('hidden');
    if (window.WORLD_VECTOR_MAP) {
      window.WORLD_VECTOR_MAP.selectEntity(null);
    }
  }

  // Hook back to list button once
  function initListeners() {
    const backBtn = document.getElementById('browseBackToList');
    if (backBtn) {
      backBtn.addEventListener('click', showList);
    }

    const prevBtn = document.getElementById('prevEntity');
    const nextBtn = document.getElementById('nextEntity');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prev = getPrevEntity();
        if (prev && window.WORLD_APP) window.WORLD_APP.onEntitySelected(prev.id);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const next = getNextEntity();
        if (next && window.WORLD_APP) window.WORLD_APP.onEntitySelected(next.id);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initListeners);
  } else {
    initListeners();
  }

  function updateBookmarkBtnState(btn, isBookmarked) {
    btn.classList.toggle('bookmarked', isBookmarked);
    const svg = btn.querySelector('#bookmarkSvg');
    const txt = btn.querySelector('#bookmarkText');
    if (isBookmarked) {
      svg.setAttribute('fill', 'var(--gold)');
      svg.setAttribute('stroke', 'var(--gold)');
      if (txt) txt.textContent = 'Bookmarked';
    } else {
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      if (txt) txt.textContent = 'Bookmark';
    }
  }

  function getNextEntity() {
    if (currentEntities.length === 0) return null;
    const nextIdx = (currentIndex + 1) % currentEntities.length;
    return currentEntities[nextIdx];
  }

  function getPrevEntity() {
    if (currentEntities.length === 0) return null;
    const prevIdx = (currentIndex - 1 + currentEntities.length) % currentEntities.length;
    return currentEntities[prevIdx];
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  return {
    renderList: renderList,
    renderDetail: renderDetail,
    showDetail: showDetail,
    showList: showList,
    getNextEntity: getNextEntity,
    getPrevEntity: getPrevEntity
  };
})();
