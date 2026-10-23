/**
 * World Mapping Atlas — Progress & Bookmarking Engine
 * LocalStorage persistence for user bookmarks, mastery tracking, and study history.
 */

window.WORLD_PROGRESS = (function () {
  'use strict';

  const STORAGE_KEY = 'world_mapping_atlas_progress_v1';
  let data = {
    bookmarks: [],
    mastered: [],
    viewed: [],
    quizStats: { attempted: 0, correct: 0 }
  };

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        data = Object.assign(data, JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load progress from localStorage:', e);
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save progress to localStorage:', e);
    }
  }

  function toggleBookmark(id) {
    const idx = data.bookmarks.indexOf(id);
    let state = false;
    if (idx >= 0) {
      data.bookmarks.splice(idx, 1);
      state = false;
    } else {
      data.bookmarks.push(id);
      state = true;
    }
    save();
    return state;
  }

  function isBookmarked(id) {
    return data.bookmarks.includes(id);
  }

  function markMastered(id) {
    if (!data.mastered.includes(id)) {
      data.mastered.push(id);
      save();
    }
  }

  function markViewed(id) {
    if (!data.viewed.includes(id)) {
      data.viewed.push(id);
      save();
    }
  }

  function getStats() {
    return {
      bookmarkedCount: data.bookmarks.length,
      masteredCount: data.mastered.length,
      viewedCount: data.viewed.length
    };
  }

  load();

  return {
    toggleBookmark: toggleBookmark,
    isBookmarked: isBookmarked,
    markMastered: markMastered,
    markViewed: markViewed,
    getStats: getStats
  };
})();
