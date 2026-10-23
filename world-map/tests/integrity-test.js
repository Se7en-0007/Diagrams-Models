/**
 * World Mapping Atlas — Automated Data Integrity and Syntax Verification Test
 * Run with Node.js to validate data completeness, coordinate validity, and indexing.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function runTest() {
  console.log('🧪 Starting World Mapping Atlas Integrity Tests...\n');

  // Mock browser window
  const sandbox = {
    window: {},
    console: console,
    document: {
      addEventListener: () => {},
      getElementById: () => null,
      createElement: () => ({ getContext: () => null })
    },
    localStorage: {
      getItem: () => null,
      setItem: () => {}
    }
  };
  sandbox.window = sandbox;

  const files = [
    '../data/world-map-content.js',
    '../data/geographic-features.js',
    '../data/country-boundaries.js',
    '../assets/js/data-integrity.js',
    '../assets/js/search.js',
    '../assets/js/progress.js',
    '../assets/js/quiz-engine.js',
    '../assets/js/recall-mode.js'
  ];

  // 1. Verify files exist and execute in sandbox
  files.forEach(relPath => {
    const fullPath = path.resolve(__dirname, relPath);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Missing file: ${relPath}`);
    }
    const code = fs.readFileSync(fullPath, 'utf8');
    vm.runInNewContext(code, sandbox);
    console.log(`  ✓ Loaded and evaluated: ${relPath}`);
  });

  const data = sandbox.WORLD_MAP_DATA;
  if (!data || !Array.isArray(data.entities)) {
    throw new Error('WORLD_MAP_DATA.entities is missing or not an array!');
  }

  const entities = data.entities;
  console.log(`\n📊 Total Entities loaded: ${entities.length}`);

  // 2. Validate Entities
  const idSet = new Set();
  const validCategories = new Set(['country', 'mountain', 'river', 'lake', 'strait', 'desert', 'sea', 'grassland', 'plateau', 'island']);
  const validContinents = new Set(['South America', 'Africa', 'North America', 'Europe', 'Asia', 'Australia & Oceania']);

  entities.forEach((e, idx) => {
    if (!e.id || typeof e.id !== 'string') {
      throw new Error(`Entity at index ${idx} is missing a string ID`);
    }
    if (idSet.has(e.id)) {
      throw new Error(`Duplicate ID detected: ${e.id}`);
    }
    idSet.add(e.id);

    if (!e.name) throw new Error(`Entity ${e.id} missing name`);
    if (!validCategories.has(e.category)) {
      throw new Error(`Entity ${e.id} has invalid category: ${e.category}`);
    }
    if (!validContinents.has(e.continent)) {
      throw new Error(`Entity ${e.id} has invalid continent: ${e.continent}`);
    }

    if (!Array.isArray(e.coords) || e.coords.length !== 2) {
      throw new Error(`Entity ${e.id} missing valid coords [lon, lat]`);
    }
    const [lon, lat] = e.coords;
    if (lon < -180 || lon > 180 || lat < -90 || lat > 90) {
      throw new Error(`Entity ${e.id} coordinates out of geographic range: [${lon}, ${lat}]`);
    }

    if (!e.upscNotes || typeof e.upscNotes !== 'string') {
      throw new Error(`Entity ${e.id} missing upscNotes`);
    }
  });

  console.log(`  ✓ All ${entities.length} entities have unique IDs, valid categories, continents, and coordinate ranges.`);

  // 3. Test Data Integrity Engine
  sandbox.DATA_INTEGRITY.init();
  const testEntity = sandbox.DATA_INTEGRITY.getEntity('sa-brazil');
  if (!testEntity || testEntity.name !== 'Brazil') {
    throw new Error('DATA_INTEGRITY.getEntity failed to retrieve Brazil');
  }

  const searchResults = sandbox.DATA_INTEGRITY.search('equator', '', 'all');
  if (searchResults.length === 0) {
    throw new Error('Search for "equator" returned 0 results');
  }
  console.log(`  ✓ Search index verified: "equator" matched ${searchResults.length} entities.`);

  const saCountries = sandbox.DATA_INTEGRITY.search('', 'South America', 'country');
  console.log(`  ✓ Filter verified: South America countries found: ${saCountries.length}`);

  // 4. Test Geographic Features
  const features = sandbox.GEOGRAPHIC_FEATURES;
  if (!features || !Array.isArray(features.rivers) || !Array.isArray(features.mountains)) {
    throw new Error('GEOGRAPHIC_FEATURES missing rivers or mountains');
  }
  console.log(`  ✓ Geographic features verified: ${features.rivers.length} rivers, ${features.mountains.length} mountain ranges, ${features.referenceLines.length} reference lines.`);

  console.log('\n🎉 ALL INTEGRITY TESTS PASSED SUCCESSFULLY!\n');
}

try {
  runTest();
} catch (err) {
  console.error('\n❌ TEST FAILED:', err.message);
  process.exit(1);
}
