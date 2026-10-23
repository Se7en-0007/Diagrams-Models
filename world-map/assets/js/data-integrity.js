/**
 * World Mapping Atlas — Data Integrity and Indexing Engine
 * Validates datasets, creates fast indices, and cross-references features.
 */

window.DATA_INTEGRITY = (function () {
  'use strict';

  let initialized = false;
  const index = {
    byId: new Map(),
    byContinent: new Map(),
    byCategory: new Map(),
    searchIndex: []
  };

  function init() {
    if (initialized) return;

    if (!window.WORLD_MAP_DATA || !Array.isArray(window.WORLD_MAP_DATA.entities)) {
      console.error('WORLD_MAP_DATA not loaded properly!');
      return false;
    }

    const entities = window.WORLD_MAP_DATA.entities;
    entities.forEach(entity => {
      // Index by ID
      index.byId.set(entity.id, entity);

      // Index by Continent
      if (!index.byContinent.has(entity.continent)) {
        index.byContinent.set(entity.continent, []);
      }
      index.byContinent.get(entity.continent).push(entity);

      // Index by Category
      if (!index.byCategory.has(entity.category)) {
        index.byCategory.set(entity.category, []);
      }
      index.byCategory.get(entity.category).push(entity);

      // Search tokens
      const searchTokens = [
        entity.name,
        entity.capital || '',
        entity.category,
        entity.continent,
        ...(entity.keyFacts || []),
        entity.upscNotes || '',
        entity.description || ''
      ].join(' ').toLowerCase();

      index.searchIndex.push({
        id: entity.id,
        entity: entity,
        tokens: searchTokens
      });
    });

    initialized = true;
    console.info(`World Mapping Atlas: Indexed ${entities.length} entities successfully.`);
    return true;
  }

  function getEntity(id) {
    if (!initialized) init();
    return index.byId.get(id) || null;
  }

  function getByContinent(continent) {
    if (!initialized) init();
    return continent ? (index.byContinent.get(continent) || []) : window.WORLD_MAP_DATA.entities;
  }

  function getByCategory(category) {
    if (!initialized) init();
    return category && category !== 'all' ? (index.byCategory.get(category) || []) : window.WORLD_MAP_DATA.entities;
  }

  function search(query, continentFilter, categoryFilter) {
    if (!initialized) init();
    const q = (query || '').trim().toLowerCase();

    return index.searchIndex.filter(item => {
      const e = item.entity;
      if (continentFilter && e.continent !== continentFilter) return false;
      if (categoryFilter && categoryFilter !== 'all' && e.category !== categoryFilter) return false;
      if (!q) return true;
      return item.tokens.includes(q);
    }).map(item => item.entity);
  }

  return {
    init: init,
    getEntity: getEntity,
    getByContinent: getByContinent,
    getByCategory: getByCategory,
    search: search,
    getAll: () => (initialized ? window.WORLD_MAP_DATA.entities : (init(), window.WORLD_MAP_DATA.entities))
  };
})();
