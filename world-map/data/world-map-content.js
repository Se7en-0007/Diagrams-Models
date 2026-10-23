/**
 * World Mapping Atlas — Complete UPSC CSE Comprehensive Knowledge Database
 * Total Entities: 387
 * 195 Sovereign Countries + 34 Straits/Canals + 49 Mountains/Peaks + 38 Rivers + 25 Deserts + 35 Lakes + 11 Grasslands
 */

window.WORLD_MAP_DATA = (function () {
  'use strict';

  const entities = [
  {
    "id": "sa-argentina",
    "name": "Argentina",
    "category": "country",
    "continent": "South America",
    "coords": [
      -58.38,
      -34.6
    ],
    "capital": "Buenos Aires",
    "description": "Second largest nation in South America; spans from Subtropical Chaco to Subantarctic Patagonia.",
    "keyFacts": [
      "Pampas: Breadbasket of Argentina, famed for Humid Pampa and cattle/wheat production",
      "Patagonian Desert in rain shadow of southern Andes",
      "Hosts Mount Aconcagua, highest peak outside Asia (~6,961 m)"
    ],
    "upscNotes": "Pampas alfalfa bunchgrass; Patagonian rain-shadow desert; Falkland (Malvinas) Islands claim."
  },
  {
    "id": "sa-bolivia",
    "name": "Bolivia",
    "category": "country",
    "continent": "South America",
    "coords": [
      -68.12,
      -16.5
    ],
    "capital": "Sucre / La Paz",
    "description": "Landlocked Andean nation characterized by high Altiplano and immense lithium salt flats.",
    "keyFacts": [
      "One of two landlocked countries in South America (along with Paraguay)",
      "Salar de Uyuni: World's largest salt flat holding substantial portion of global lithium reserves",
      "Shares Lake Titicaca with Peru at 3,812 m elevation"
    ],
    "upscNotes": "Lithium Triangle member (with Chile & Argentina); Altiplano high-altitude intermontane plateau."
  },
  {
    "id": "sa-brazil",
    "name": "Brazil",
    "category": "country",
    "continent": "South America",
    "coords": [
      -47.88,
      -15.79
    ],
    "capital": "Brasília",
    "description": "Largest country in South America and fifth largest globally by area and population.",
    "keyFacts": [
      "Borders every South American country except Chile and Ecuador",
      "Amazon River basin covers vast equatorial northern Brazil",
      "Biomes: Amazon Rainforest, Cerrado savanna, Pantanal wetland, Caatinga scrub, Atlantic Forest"
    ],
    "upscNotes": "BRICS founding member; Cerrado agricultural expansion; borders 10 nations."
  },
  {
    "id": "sa-chile",
    "name": "Chile",
    "category": "country",
    "continent": "South America",
    "coords": [
      -70.67,
      -33.45
    ],
    "capital": "Santiago",
    "description": "Extremely long, ribbon-like country occupying the western flank of southern Andes along Pacific.",
    "keyFacts": [
      "Longest north-south nation relative to width (~4,300 km long, avg 175 km wide)",
      "Atacama Desert in north is the driest non-polar desert on Earth",
      "Central Chile features Mediterranean climate; Southern Chile features glaciated fjords"
    ],
    "upscNotes": "World's top copper producer (Chuquicamata, Escondida); Mediterranean climate zone; Southern Ocean fjords."
  },
  {
    "id": "sa-colombia",
    "name": "Colombia",
    "category": "country",
    "continent": "South America",
    "coords": [
      -74.07,
      4.71
    ],
    "capital": "Bogotá",
    "description": "Northwestern South American nation connecting to Central America via Isthmus of Panama.",
    "keyFacts": [
      "Only South American nation with coastlines on both Pacific Ocean and Caribbean Sea",
      "Andes divide into three distinct cordilleras: Occidental, Central, Oriental",
      "Magdalena River flows north between cordilleras into Caribbean"
    ],
    "upscNotes": "Strategic dual-ocean maritime access; connects to Darien Gap."
  },
  {
    "id": "sa-ecuador",
    "name": "Ecuador",
    "category": "country",
    "continent": "South America",
    "coords": [
      -78.47,
      -0.18
    ],
    "capital": "Quito",
    "description": "Equatorial Andean country named after the Equator, which runs directly through it.",
    "keyFacts": [
      "Capital Quito is the closest capital city to the Equator",
      "Mount Chimborazo summit is the furthest terrestrial point from Earth's center due to equatorial bulge",
      "Galápagos Islands located ~1,000 km offshore in the Pacific Ocean"
    ],
    "upscNotes": "Galapagos biodiversity hotspot; Chimborazo geoid phenomenon; major banana & oil exporter."
  },
  {
    "id": "sa-guyana",
    "name": "Guyana",
    "category": "country",
    "continent": "South America",
    "coords": [
      -58.15,
      6.8
    ],
    "capital": "Georgetown",
    "description": "English-speaking nation in northern South America, part of the ancient Guiana Shield.",
    "keyFacts": [
      "Essequibo territory dispute with Venezuela",
      "Significant offshore oil discoveries in the Stabroek block",
      "Kaieteur Falls: One of the world's most powerful single-drop waterfalls on Potaro River"
    ],
    "upscNotes": "Essequibo border dispute; offshore Stabroek block deepwater oil reserves."
  },
  {
    "id": "sa-paraguay",
    "name": "Paraguay",
    "category": "country",
    "continent": "South America",
    "coords": [
      -57.58,
      -25.26
    ],
    "capital": "Asunción",
    "description": "Landlocked nation in central South America bisected by the Paraguay River into Chaco and Paraneña.",
    "keyFacts": [
      "Itaipu Dam on Paraná River shared with Brazil (one of world's largest hydroelectric plants)",
      "Gran Chaco covers western half with semi-arid scrub",
      "Paraguay-Paraná waterway provides maritime outlet to Atlantic"
    ],
    "upscNotes": "Hydroelectric exporter; landlocked trade dependence on Paraná river system."
  },
  {
    "id": "sa-peru",
    "name": "Peru",
    "category": "country",
    "continent": "South America",
    "coords": [
      -77.04,
      -12.04
    ],
    "capital": "Lima",
    "description": "Western South American country famed for ancient Inca civilization, Andes, and Amazon headwaters.",
    "keyFacts": [
      "Three distinct geographical regions: Costa (coastal desert), Sierra (Andes), and Selva (Amazon rainforest)",
      "Amazon River headwaters originate in Peruvian Andes (Ucayali-Marañón-Mantaro)",
      "Lake Titicaca shared with Bolivia; Huascarán (6,768 m) highest peak"
    ],
    "upscNotes": "Humboldt current anchovy fishery; Amazon river source headwaters."
  },
  {
    "id": "sa-suriname",
    "name": "Suriname",
    "category": "country",
    "continent": "South America",
    "coords": [
      -55.2,
      5.85
    ],
    "capital": "Paramaribo",
    "description": "Small Dutch-speaking country on northeast Atlantic coast with >90% intact rainforest cover.",
    "keyFacts": [
      "Capital: Paramaribo on Suriname River",
      "Dense pristine tropical rainforest canopy covering >90% of land surface",
      "Substantial historical Indo-Surinamese population (Bhojpuri heritage)"
    ],
    "upscNotes": "Highest forest cover percentage globally; bauxite mining and offshore oil exploration."
  },
  {
    "id": "sa-uruguay",
    "name": "Uruguay",
    "category": "country",
    "continent": "South America",
    "coords": [
      -56.16,
      -34.9
    ],
    "capital": "Montevideo",
    "description": "Second smallest South American country, characterized by rolling plains and Atlantic coastline.",
    "keyFacts": [
      "Situated between Brazil and Argentina along Río de la Plata estuary",
      "Almost entirely covered by fertile temperate grassland (Pampas continuation)",
      "High reliance on renewable energy (wind and hydro)"
    ],
    "upscNotes": "Rio de la Plata estuary geography; temperate livestock agriculture."
  },
  {
    "id": "sa-venezuela",
    "name": "Venezuela",
    "category": "country",
    "continent": "South America",
    "coords": [
      -66.9,
      10.48
    ],
    "capital": "Caracas",
    "description": "Northern South American country on Caribbean coast, home to world's largest proven crude oil reserves.",
    "keyFacts": [
      "Lake Maracaibo: Largest lake in South America, major petroleum basin with Catatumbo lightning",
      "Orinoco River basin hosts the Llanos tropical savannas and Orinoco Heavy Oil Belt",
      "Angel Falls: World's highest uninterrupted waterfall (979 m) on Churun River from Auyán-tepui"
    ],
    "upscNotes": "Catatumbo lightning phenomenon; Orinoco belt extra-heavy crude; tepui table mountains."
  },
  {
    "id": "na-antigua-barbuda",
    "name": "Antigua and Barbuda",
    "category": "country",
    "continent": "North America",
    "coords": [
      -61.85,
      17.12
    ],
    "capital": "St. John's",
    "description": "Twin-island nation in the Leeward Islands of the Lesser Antilles.",
    "keyFacts": [
      "Boundary of Caribbean Sea and Atlantic Ocean",
      "Tourism and offshore financial services drive economy"
    ],
    "upscNotes": "Lesser Antilles volcanic and coral limestone geology."
  },
  {
    "id": "na-bahamas",
    "name": "Bahamas",
    "category": "country",
    "continent": "North America",
    "coords": [
      -77.34,
      25.04
    ],
    "capital": "Nassau",
    "description": "Lucayan Archipelago nation of ~700 coral islands in Atlantic Ocean north of Cuba.",
    "keyFacts": [
      "Great Bahama Bank shallow limestone platforms",
      "Straits of Florida separate it from mainland USA"
    ],
    "upscNotes": "Karst ocean blue holes; Gulf Stream transit."
  },
  {
    "id": "na-barbados",
    "name": "Barbados",
    "category": "country",
    "continent": "North America",
    "coords": [
      -59.54,
      13.19
    ],
    "capital": "Bridgetown",
    "description": "Easternmost island in the Lesser Antilles, situated entirely in Atlantic Ocean.",
    "keyFacts": [
      "Geologically distinct coral limestone formation outside primary volcanic arc",
      "Bridgetown is a historic natural deepwater port"
    ],
    "upscNotes": "Coral reef terrace uplift; outermost Caribbean outpost."
  },
  {
    "id": "na-belize",
    "name": "Belize",
    "category": "country",
    "continent": "North America",
    "coords": [
      -88.77,
      17.25
    ],
    "capital": "Belmopan",
    "description": "Central American nation on Caribbean coast with dense jungles and Belize Barrier Reef.",
    "keyFacts": [
      "Only English-speaking country in Central America",
      "Belize Barrier Reef is the second largest coral reef system globally",
      "Great Blue Hole: Giant marine sinkhole off coast"
    ],
    "upscNotes": "Mesoamerican Barrier Reef System; Maya civilization heartland."
  },
  {
    "id": "na-canada",
    "name": "Canada",
    "category": "country",
    "continent": "North America",
    "coords": [
      -75.7,
      45.42
    ],
    "capital": "Ottawa",
    "description": "Second largest country by land area, stretching from Atlantic to Pacific and north to Arctic.",
    "keyFacts": [
      "Longest coastline of any country in the world (>202,000 km)",
      "Contains more freshwater lakes than all other countries combined",
      "Canadian Shield: Ancient Precambrian crystalline core rich in minerals and nickel/uranium"
    ],
    "upscNotes": "Arctic sovereignty and Northwest Passage; Canadian Shield mineral belt; Great Lakes shared boundary."
  },
  {
    "id": "na-costa-rica",
    "name": "Costa Rica",
    "category": "country",
    "continent": "North America",
    "coords": [
      -84.08,
      9.93
    ],
    "capital": "San José",
    "description": "Central American nation known for pioneering environmental conservation and biodiversity.",
    "keyFacts": [
      "Abolished standing military in 1948",
      "Holds ~5% of world's biodiversity in 0.03% of Earth's surface",
      "Over 25% of land area preserved in national parks and reserves"
    ],
    "upscNotes": "Pioneer in ecotourism and payment for ecosystem services (PES); volcanic arc."
  },
  {
    "id": "na-cuba",
    "name": "Cuba",
    "category": "country",
    "continent": "North America",
    "coords": [
      -82.37,
      23.11
    ],
    "capital": "Havana",
    "description": "Largest island in the Caribbean, commanding the entrance to Gulf of Mexico and Caribbean Sea.",
    "keyFacts": [
      "Guantanamo Bay leased by USA in southeast",
      "Yucatán Channel separates it from Mexico; Straits of Florida from USA",
      "Rich nickel reserves and fertile sugar/tobacco plains"
    ],
    "upscNotes": "Strategic Caribbean chokepoint controlling Florida and Yucatan channels."
  },
  {
    "id": "na-dominica",
    "name": "Dominica",
    "category": "country",
    "continent": "North America",
    "coords": [
      -61.37,
      15.3
    ],
    "capital": "Roseau",
    "description": "Rugged mountainous Caribbean island nation known as the Nature Isle of the Caribbean.",
    "keyFacts": [
      "Morne Trois Pitons National Park and Boiling Lake (flooded fumarole)",
      "Youngest island in Lesser Antilles with active geothermal activity"
    ],
    "upscNotes": "Caribbean volcanic island arc tectonics; geothermal energy potential."
  },
  {
    "id": "na-dominican-republic",
    "name": "Dominican Republic",
    "category": "country",
    "continent": "North America",
    "coords": [
      -69.93,
      18.49
    ],
    "capital": "Santo Domingo",
    "description": "Nation occupying eastern two-thirds of Hispaniola, shared with Haiti.",
    "keyFacts": [
      "Pico Duarte: Highest peak in the Caribbean (~3,098 m)",
      "Lake Enriquillo: Largest hypersaline lake in Caribbean, ~46 m below sea level"
    ],
    "upscNotes": "Hispaniola tectonic boundary between North American and Caribbean plates."
  },
  {
    "id": "na-el-salvador",
    "name": "El Salvador",
    "category": "country",
    "continent": "North America",
    "coords": [
      -89.22,
      13.69
    ],
    "capital": "San Salvador",
    "description": "Smallest and most densely populated country in Central America; only one without a Caribbean coast.",
    "keyFacts": [
      "Known as the Land of Volcanoes due to frequent seismic and volcanic activity",
      "Fronts entirely on the Pacific Ocean (Gulf of Fonseca to the south)"
    ],
    "upscNotes": "Central America volcanic arc subduction zone."
  },
  {
    "id": "na-grenada",
    "name": "Grenada",
    "category": "country",
    "continent": "North America",
    "coords": [
      -61.75,
      12.05
    ],
    "capital": "St. George's",
    "description": "Island nation at southern end of Grenadines chain, famed as the Island of Spice.",
    "keyFacts": [
      "Major global producer of nutmeg, mace, and cloves",
      "Kick 'em Jenny: Active submarine volcano located 8 km north of main island"
    ],
    "upscNotes": "Submarine volcanism in Caribbean arc."
  },
  {
    "id": "na-guatemala",
    "name": "Guatemala",
    "category": "country",
    "continent": "North America",
    "coords": [
      -90.51,
      14.63
    ],
    "capital": "Guatemala City",
    "description": "Heart of the ancient Maya civilization in Central America, bordered by Mexico, Belize, Honduras, El Salvador.",
    "keyFacts": [
      "Volcán Tajumulco: Highest point in Central America (~4,220 m)",
      "Motagua Fault zone forms plate boundary between North American and Caribbean plates"
    ],
    "upscNotes": "Motagua Fault seismicity; coffee and cardamom export economy."
  },
  {
    "id": "na-haiti",
    "name": "Haiti",
    "category": "country",
    "continent": "North America",
    "coords": [
      -72.33,
      18.59
    ],
    "capital": "Port-au-Prince",
    "description": "Nation occupying western third of Hispaniola; world's first independent Black-led republic (1804).",
    "keyFacts": [
      "Windward Passage separates it from Cuba to the northwest",
      "Traversed by Enriquillo-Plantain Garden Fault zone (source of severe earthquakes)"
    ],
    "upscNotes": "Caribbean plate strike-slip fault seismic risk; extreme deforestation."
  },
  {
    "id": "na-honduras",
    "name": "Honduras",
    "category": "country",
    "continent": "North America",
    "coords": [
      -87.21,
      14.07
    ],
    "capital": "Tegucigalpa",
    "description": "Central American nation with extensive Caribbean coastline and small Pacific frontage on Gulf of Fonseca.",
    "keyFacts": [
      "Mosquito Coast: Vast tropical rainforest wetland shared with Nicaragua",
      "Extensive mineral resources (silver, zinc, lead)"
    ],
    "upscNotes": "Mesoamerican biological corridor; banana republic historical economy."
  },
  {
    "id": "na-jamaica",
    "name": "Jamaica",
    "category": "country",
    "continent": "North America",
    "coords": [
      -76.79,
      17.97
    ],
    "capital": "Kingston",
    "description": "Third-largest island in the Greater Antilles, situated south of Cuba.",
    "keyFacts": [
      "Blue Mountains: Famous for high-altitude coffee cultivation",
      "Cockpit Country: Classic example of tropical karst cockpit topography",
      "One of world's leading bauxite and alumina producers"
    ],
    "upscNotes": "Cockpit karst topography; bauxite mining in tropical weathered limestone."
  },
  {
    "id": "na-mexico",
    "name": "Mexico",
    "category": "country",
    "continent": "North America",
    "coords": [
      -99.13,
      19.43
    ],
    "capital": "Mexico City",
    "description": "Bridge between North and Central America, characterized by high central plateau flanked by Sierra Madre ranges.",
    "keyFacts": [
      "Sierra Madre Occidental and Oriental enclose the high Mexican Plateau",
      "Pico de Orizaba (Citlaltépetl): Highest peak (~5,636 m) and dormant stratovolcano",
      "Yucatán Peninsula: Flat limestone platform famed for cenotes and Chicxulub crater"
    ],
    "upscNotes": "Chicxulub asteroid impact site; silver production; USMCA trade corridor."
  },
  {
    "id": "na-nicaragua",
    "name": "Nicaragua",
    "category": "country",
    "continent": "North America",
    "coords": [
      -86.27,
      12.11
    ],
    "capital": "Managua",
    "description": "Largest country in Central America, featuring vast freshwater lakes along Pacific depression.",
    "keyFacts": [
      "Lake Nicaragua (Cocibolca): Largest freshwater lake in Central America, hosts freshwater sharks",
      "Historic proposed site for alternative inter-oceanic canal route"
    ],
    "upscNotes": "Nicaragua canal proposal; Central American graben rift zone."
  },
  {
    "id": "na-panama",
    "name": "Panama",
    "category": "country",
    "continent": "North America",
    "coords": [
      -79.52,
      8.98
    ],
    "capital": "Panama City",
    "description": "S-shaped isthmus nation connecting North and South America, bisected by Panama Canal.",
    "keyFacts": [
      "Isthmus formed ~3 million years ago, closing Central American Seaway and initiating Gulf Stream",
      "Panama Canal: 82-km lock-based maritime waterway bypassing Cape Horn",
      "Darien Gap: Impassable rainforest/swamp break in Pan-American Highway on Colombian border"
    ],
    "upscNotes": "Geological formation of isthmus triggered Quaternary glaciation via Gulf Stream; canal transit."
  },
  {
    "id": "na-saint-kitts",
    "name": "Saint Kitts and Nevis",
    "category": "country",
    "continent": "North America",
    "coords": [
      -62.72,
      17.3
    ],
    "capital": "Basseterre",
    "description": "Smallest independent state in the Western Hemisphere by area and population.",
    "keyFacts": [
      "Composed of two volcanic islands separated by The Narrows strait (3 km wide)",
      "Dominated by dormant stratovolcano Mount Liamuiga"
    ],
    "upscNotes": "Small Island Developing States (SIDS) climate vulnerability."
  },
  {
    "id": "na-saint-lucia",
    "name": "Saint Lucia",
    "category": "country",
    "continent": "North America",
    "coords": [
      -60.98,
      14.01
    ],
    "capital": "Castries",
    "description": "Windward Island in Lesser Antilles famed for the volcanic Pitons landmark.",
    "keyFacts": [
      "The Pitons (Gros Piton and Petit Piton) are UNESCO World Heritage volcanic spires",
      "Qualibou caldera features active sulfur fumaroles (Sulphur Springs)"
    ],
    "upscNotes": "Volcanic plug geomorphology; Caribbean geothermal energy."
  },
  {
    "id": "na-saint-vincent",
    "name": "Saint Vincent and the Grenadines",
    "category": "country",
    "continent": "North America",
    "coords": [
      -61.22,
      13.16
    ],
    "capital": "Kingstown",
    "description": "Island nation in southern Windward Islands comprising Saint Vincent and 32 Grenadine cays.",
    "keyFacts": [
      "La Soufrière: Highly active stratovolcano on northern Saint Vincent (major 2021 eruption)",
      "Tobago Cays marine park protects coral reef lagoon"
    ],
    "upscNotes": "Volcanic hazard mitigation and ash fall impacts in Caribbean."
  },
  {
    "id": "na-trinidad-tobago",
    "name": "Trinidad and Tobago",
    "category": "country",
    "continent": "North America",
    "coords": [
      -61.51,
      10.66
    ],
    "capital": "Port of Spain",
    "description": "Twin-island republic situated just 11 km off the coast of northeastern Venezuela.",
    "keyFacts": [
      "Geologically an extension of South American mainland (Orinoco delta)",
      "Pitch Lake: World's largest natural asphalt deposit at La Brea",
      "Leading Caribbean producer of oil and liquefied natural gas (LNG)"
    ],
    "upscNotes": "Pitch Lake natural asphalt; natural gas export hub of Caribbean."
  },
  {
    "id": "na-usa",
    "name": "United States",
    "category": "country",
    "continent": "North America",
    "coords": [
      -77.04,
      38.91
    ],
    "capital": "Washington, D.C.",
    "description": "Federal republic spanning North America from Atlantic to Pacific, plus Alaska and Hawaii.",
    "keyFacts": [
      "Third largest country globally by land area and population",
      "Physiographic provinces: Atlantic Coastal Plain, Appalachians, Interior Plains, Great Plains, Rocky Mountains, Basin and Range, Pacific Coast Range",
      "Mississippi-Missouri river basin drains over 40% of contiguous territory",
      "Denali in Alaska (~6,190 m) is highest peak in North America"
    ],
    "upscNotes": "Great Plains Ogallala Aquifer; Laurentian Great Lakes; Mississippi bird-foot delta."
  },
  {
    "id": "eu-albania",
    "name": "Albania",
    "category": "country",
    "continent": "Europe",
    "coords": [
      19.82,
      41.33
    ],
    "capital": "Tirana",
    "description": "Balkan nation on Adriatic and Ionian seas with rugged Dinaric Alps.",
    "keyFacts": [
      "Strait of Otranto separates it from Italian peninsula (~72 km)",
      "Significant hydropower generation along Drin River"
    ],
    "upscNotes": "Adriatic maritime gateway; Balkan karst topography."
  },
  {
    "id": "eu-andorra",
    "name": "Andorra",
    "category": "country",
    "continent": "Europe",
    "coords": [
      1.52,
      42.51
    ],
    "capital": "Andorra la Vella",
    "description": "Tiny landlocked co-principality in eastern Pyrenees between France and Spain.",
    "keyFacts": [
      "Highest capital city in Europe (1,023 m)",
      "Enclosed by rugged granitic peaks of Pyrenees"
    ],
    "upscNotes": "Pyrenees microstate; watershed between Ebro and Garonne basins."
  },
  {
    "id": "eu-austria",
    "name": "Austria",
    "category": "country",
    "continent": "Europe",
    "coords": [
      16.37,
      48.21
    ],
    "capital": "Vienna",
    "description": "Central European Alpine nation traversed by the Danube River.",
    "keyFacts": [
      "Over 60% of territory covered by the Alps (Grossglockner 3,798 m)",
      "Danube flows past capital Vienna toward Black Sea"
    ],
    "upscNotes": "Alpine passes (Brenner Pass); Danube river navigation."
  },
  {
    "id": "eu-belarus",
    "name": "Belarus",
    "category": "country",
    "continent": "Europe",
    "coords": [
      27.57,
      53.9
    ],
    "capital": "Minsk",
    "description": "Landlocked Eastern European nation of low-lying plains and dense marshlands.",
    "keyFacts": [
      "Pinsk (Pripet) Marshes: Largest wetland complex in Europe",
      "Bialowieza Forest: Shared with Poland, primeval European bison habitat"
    ],
    "upscNotes": "Pripet Marshes natural military barrier; potash mineral export."
  },
  {
    "id": "eu-belgium",
    "name": "Belgium",
    "category": "country",
    "continent": "Europe",
    "coords": [
      4.35,
      50.85
    ],
    "capital": "Brussels",
    "description": "Lowland Western European nation hosting headquarters of European Union and NATO.",
    "keyFacts": [
      "Ardennes plateau in south; flat coastal plain in north",
      "Port of Antwerp on Scheldt estuary is second busiest port in Europe"
    ],
    "upscNotes": "Scheldt estuary navigation; European institutional core."
  },
  {
    "id": "eu-bosnia",
    "name": "Bosnia and Herzegovina",
    "category": "country",
    "continent": "Europe",
    "coords": [
      18.41,
      43.85
    ],
    "capital": "Sarajevo",
    "description": "Balkan nation dominated by Dinaric Alps with narrow 20-km Adriatic access at Neum.",
    "keyFacts": [
      "Dinaric Karst: World's type locality for karst topography (poljes, sinkholes)",
      "Neum corridor provides sole maritime access"
    ],
    "upscNotes": "Karst geomorphology type region; Dinaric mountain barrier."
  },
  {
    "id": "eu-bulgaria",
    "name": "Bulgaria",
    "category": "country",
    "continent": "Europe",
    "coords": [
      23.32,
      42.7
    ],
    "capital": "Sofia",
    "description": "Balkan country fronting the Black Sea, traversed by Balkan and Rhodope mountains.",
    "keyFacts": [
      "Danube River forms northern border with Romania",
      "Balkan Mountains (Stara Planina) bisect country east-west to Black Sea"
    ],
    "upscNotes": "Black Sea littoral; Balkan mountain divide."
  },
  {
    "id": "eu-croatia",
    "name": "Croatia",
    "category": "country",
    "continent": "Europe",
    "coords": [
      15.98,
      45.81
    ],
    "capital": "Zagreb",
    "description": "Crescent-shaped nation with famed Dalmatian coast of over 1,000 islands on Adriatic.",
    "keyFacts": [
      "Dalmatian coastline: Classic geomorphic example of submerged parallel longitudinal coastline",
      "Plitvice Lakes: Travertine cascade lake system"
    ],
    "upscNotes": "Dalmatian concordant coastline; Adriatic tourism economy."
  },
  {
    "id": "eu-cyprus",
    "name": "Cyprus",
    "category": "country",
    "continent": "Europe",
    "coords": [
      33.36,
      35.17
    ],
    "capital": "Nicosia",
    "description": "Eastern Mediterranean island nation south of Turkey and west of Syria.",
    "keyFacts": [
      "Troodos Mountains host the famous Troodos Ophiolite (exposed oceanic crust)",
      "Divided island with UN Green Line buffer zone"
    ],
    "upscNotes": "Troodos Ophiolite plate tectonic reference; Eastern Med offshore gas."
  },
  {
    "id": "eu-czech-republic",
    "name": "Czech Republic",
    "category": "country",
    "continent": "Europe",
    "coords": [
      14.42,
      50.08
    ],
    "capital": "Prague",
    "description": "Landlocked Central European nation occupying the ancient Bohemian Massif plateau.",
    "keyFacts": [
      "Bohemian Basin enclosed by Sudeten, Ore, and Bohemian Forest mountains",
      "Elbe (Labe) River drains Bohemia north to North Sea"
    ],
    "upscNotes": "Hercynian Bohemian Massif; European continental divide."
  },
  {
    "id": "eu-denmark",
    "name": "Denmark",
    "category": "country",
    "continent": "Europe",
    "coords": [
      12.57,
      55.68
    ],
    "capital": "Copenhagen",
    "description": "Nordic nation comprising Jutland peninsula and over 400 islands controlling Baltic exits.",
    "keyFacts": [
      "Danish Straits (Øresund, Great Belt, Little Belt) control Baltic-North Sea passage",
      "Greenland and Faroe Islands are autonomous territories within the Kingdom of Denmark"
    ],
    "upscNotes": "Baltic Sea chokepoints; pioneer in offshore wind power."
  },
  {
    "id": "eu-estonia",
    "name": "Estonia",
    "category": "country",
    "continent": "Europe",
    "coords": [
      24.75,
      59.44
    ],
    "capital": "Tallinn",
    "description": "Northernmost Baltic nation with extensive coastline on Gulf of Finland and Baltic Sea.",
    "keyFacts": [
      "Glacially flat terrain with over 2,000 islands",
      "World leader in oil shale mining and digital governance"
    ],
    "upscNotes": "Baltic littoral; oil shale energy; post-glacial rebound."
  },
  {
    "id": "eu-finland",
    "name": "Finland",
    "category": "country",
    "continent": "Europe",
    "coords": [
      24.94,
      60.17
    ],
    "capital": "Helsinki",
    "description": "Nordic country known as the Land of a Thousand Lakes (~188,000 lakes).",
    "keyFacts": [
      "Salpausselkä: Massive glacial terminal moraine ridges across southern Finland",
      "Post-glacial isostatic rebound continually lifts land from the Baltic Sea"
    ],
    "upscNotes": "Isostatic rebound; boreal taiga shield forestry."
  },
  {
    "id": "eu-france",
    "name": "France",
    "category": "country",
    "continent": "Europe",
    "coords": [
      2.35,
      48.86
    ],
    "capital": "Paris",
    "description": "Hexagonal nation in Western Europe with coastlines on North Sea, Channel, Atlantic, and Med.",
    "keyFacts": [
      "Frontiers defined by natural barriers: Pyrenees, Alps, Jura, Rhine",
      "Mont Blanc (~4,809 m) on French-Italian border is highest in Western Europe",
      "Four major river basins: Seine, Loire, Garonne, Rhône"
    ],
    "upscNotes": "Rhône graben corridor; Paris Basin agricultural core; nuclear power dominant."
  },
  {
    "id": "eu-germany",
    "name": "Germany",
    "category": "country",
    "continent": "Europe",
    "coords": [
      13.4,
      52.52
    ],
    "capital": "Berlin",
    "description": "Central Europe's largest economy, spanning from North/Baltic seas to the Alps.",
    "keyFacts": [
      "North European Plain in north; Central Uplands (Black Forest, Harz) in center; Alps in south",
      "Rhine River flows through industrial Ruhr basin into Netherlands",
      "Kiel Canal cuts across base of Jutland connecting North Sea to Baltic"
    ],
    "upscNotes": "Ruhr coal and industrial basin; Rhine Rift Valley; Kiel Canal."
  },
  {
    "id": "eu-greece",
    "name": "Greece",
    "category": "country",
    "continent": "Europe",
    "coords": [
      23.73,
      37.98
    ],
    "capital": "Athens",
    "description": "Southernmost Balkan nation comprising rugged mainland peninsula and ~2,000 Aegean/Ionian islands.",
    "keyFacts": [
      "Over 80% mountainous; Mount Olympus (~2,917 m) is highest point",
      "Corinth Canal cuts through narrow Isthmus of Corinth connecting Aegean to Ionian Sea"
    ],
    "upscNotes": "Aegean archipelago shipping; Mediterranean olive/vine agriculture."
  },
  {
    "id": "eu-holy-see",
    "name": "Holy See (Vatican City)",
    "category": "country",
    "continent": "Europe",
    "coords": [
      12.45,
      41.9
    ],
    "capital": "Vatican City",
    "description": "Smallest independent state in the world (0.49 km²), completely landlocked within Rome, Italy.",
    "keyFacts": [
      "UN permanent observer state; sovereign ecclesiastical territory of Catholic Church",
      "Completely enclosed by ancient Vatican walls within Rome"
    ],
    "upscNotes": "Sovereign microstate; international law status."
  },
  {
    "id": "eu-hungary",
    "name": "Hungary",
    "category": "country",
    "continent": "Europe",
    "coords": [
      19.04,
      47.5
    ],
    "capital": "Budapest",
    "description": "Landlocked Central European country occupying the fertile Pannonian (Carpathian) Basin.",
    "keyFacts": [
      "Lake Balaton: Largest freshwater lake in Central Europe",
      "Danube River bisects country and capital Budapest from north to south"
    ],
    "upscNotes": "Pannonian Basin subsidence; fertile chernozem soils (Alföld)."
  },
  {
    "id": "eu-iceland",
    "name": "Iceland",
    "category": "country",
    "continent": "Europe",
    "coords": [
      -21.94,
      64.15
    ],
    "capital": "Reykjavik",
    "description": "Volcanic island nation straddling the Mid-Atlantic Ridge hot spot in North Atlantic.",
    "keyFacts": [
      "Constructive divergent plate boundary exposed on land (Thingvellir)",
      "Nearly 100% of electricity and heating generated from geothermal and hydro sources",
      "Vatnajökull: Largest ice cap in Europe by volume"
    ],
    "upscNotes": "Mid-Atlantic Ridge rift zone; jökulhlaup glacial outburst floods."
  },
  {
    "id": "eu-ireland",
    "name": "Ireland",
    "category": "country",
    "continent": "Europe",
    "coords": [
      -6.26,
      53.35
    ],
    "capital": "Dublin",
    "description": "Island nation in North Atlantic known as the Emerald Isle, west of Great Britain.",
    "keyFacts": [
      "Central lowland limestone plain surrounded by coastal mountain rim",
      "River Shannon: Longest river in British Isles (~360 km)"
    ],
    "upscNotes": "Atlantic peat bogs; North Atlantic Drift warming influence."
  },
  {
    "id": "eu-italy",
    "name": "Italy",
    "category": "country",
    "continent": "Europe",
    "coords": [
      12.5,
      41.9
    ],
    "capital": "Rome",
    "description": "Boot-shaped Mediterranean peninsula framed by the Alps and bisected by Apennine spine.",
    "keyFacts": [
      "Po River Valley (Plain of Lombardy): Industrial and agricultural heartland",
      "Active volcanism: Mount Vesuvius (Campania), Mount Etna (Sicily), Stromboli",
      "Strait of Messina separates tip of Calabria from Sicily"
    ],
    "upscNotes": "Apennine seismic zone; Po valley fertile plain; Mediterranean agriculture."
  },
  {
    "id": "eu-latvia",
    "name": "Latvia",
    "category": "country",
    "continent": "Europe",
    "coords": [
      24.11,
      56.95
    ],
    "capital": "Riga",
    "description": "Middle Baltic nation on the Gulf of Riga and Baltic Sea.",
    "keyFacts": [
      "Daugava River flows through country into Gulf of Riga",
      "Extensive amber deposits along Baltic coastline"
    ],
    "upscNotes": "Gulf of Riga maritime corridor; Baltic timber/amber trade."
  },
  {
    "id": "eu-liechtenstein",
    "name": "Liechtenstein",
    "category": "country",
    "continent": "Europe",
    "coords": [
      9.52,
      47.14
    ],
    "capital": "Vaduz",
    "description": "Doubly landlocked Alpine microstate between Switzerland and Austria along Rhine River.",
    "keyFacts": [
      "One of only two doubly landlocked countries in the world (with Uzbekistan)",
      "Sits entirely in the upper Rhine Valley"
    ],
    "upscNotes": "Doubly landlocked political geography; Rhine valley alpine microclimate."
  },
  {
    "id": "eu-lithuania",
    "name": "Lithuania",
    "category": "country",
    "continent": "Europe",
    "coords": [
      25.28,
      54.69
    ],
    "capital": "Vilnius",
    "description": "Southernmost Baltic country fronting the Curonian Spit and Baltic Sea.",
    "keyFacts": [
      "Curonian Spit: 98-km sand dune barrier spit separating Curonian Lagoon from Baltic Sea",
      "Klaipėda: Year-round ice-free seaport"
    ],
    "upscNotes": "Curonian Spit coastal dune dynamics; Amber Coast."
  },
  {
    "id": "eu-luxembourg",
    "name": "Luxembourg",
    "category": "country",
    "continent": "Europe",
    "coords": [
      6.13,
      49.61
    ],
    "capital": "Luxembourg City",
    "description": "Landlocked Western European grand duchy bordered by Belgium, France, and Germany.",
    "keyFacts": [
      "Part of the Low Countries (Benelux)",
      "Divided into Oesling (Ardennes plateau in north) and Gutland (fertile south)"
    ],
    "upscNotes": "Benelux economic union; Ardennes geomorphology."
  },
  {
    "id": "eu-malta",
    "name": "Malta",
    "category": "country",
    "continent": "Europe",
    "coords": [
      14.51,
      35.9
    ],
    "capital": "Valletta",
    "description": "Archipelago nation in central Mediterranean south of Sicily, commanding maritime chokepoints.",
    "keyFacts": [
      "Strategically commands the narrows between eastern and western Mediterranean basins",
      "Grand Harbour at Valletta is one of world's finest natural deepwater harbors"
    ],
    "upscNotes": "Central Mediterranean strategic naval chokepoint."
  },
  {
    "id": "eu-moldova",
    "name": "Moldova",
    "category": "country",
    "continent": "Europe",
    "coords": [
      28.86,
      47.01
    ],
    "capital": "Chisinau",
    "description": "Landlocked Eastern European nation between Romania and Ukraine, drained by Dniester and Prut.",
    "keyFacts": [
      "Occupies historic region of Bessarabia on fertile black chernozem soils",
      "Transnistria breakaway territory along eastern Dniester border"
    ],
    "upscNotes": "Chernozem soil agricultural productivity; Transnistria geopolitical corridor."
  },
  {
    "id": "eu-monaco",
    "name": "Monaco",
    "category": "country",
    "continent": "Europe",
    "coords": [
      7.42,
      43.74
    ],
    "capital": "Monaco",
    "description": "Second smallest sovereign state globally (2.08 km²), on French Riviera (Côte d'Azur).",
    "keyFacts": [
      "Most densely populated sovereign country in the world",
      "Enclosed by France and Mediterranean Sea"
    ],
    "upscNotes": "Mediterranean microstate; high-density urban reclamation."
  },
  {
    "id": "eu-montenegro",
    "name": "Montenegro",
    "category": "country",
    "continent": "Europe",
    "coords": [
      19.26,
      42.44
    ],
    "capital": "Podgorica",
    "description": "Balkan nation famed for the Bay of Kotor and steep limestone Dinaric cliffs.",
    "keyFacts": [
      "Bay of Kotor: Famed submerged river canyon (ria) resembling a southern European fjord",
      "Tara River Canyon: Deepest canyon in Europe (~1,300 m)"
    ],
    "upscNotes": "Tara river canyon geomorphology; Kotor ria formation."
  },
  {
    "id": "eu-netherlands",
    "name": "Netherlands",
    "category": "country",
    "continent": "Europe",
    "coords": [
      4.9,
      52.37
    ],
    "capital": "Amsterdam",
    "description": "Low-lying nation where over 25% of land area lies below sea level, protected by dikes and polders.",
    "keyFacts": [
      "Rhine-Meuse-Scheldt delta forms vast gateway into Western Europe",
      "Rotterdam is Europe's largest seaport by freight tonnage",
      "Zuiderzee Works and Delta Works: World's foremost coastal flood defense system"
    ],
    "upscNotes": "Polder reclamation; coastal sea-level rise vulnerability; Rotterdam port."
  },
  {
    "id": "eu-north-macedonia",
    "name": "North Macedonia",
    "category": "country",
    "continent": "Europe",
    "coords": [
      21.43,
      42.0
    ],
    "capital": "Skopje",
    "description": "Landlocked Balkan nation along the Vardar River valley corridor.",
    "keyFacts": [
      "Vardar River forms primary transport corridor connecting Central Europe to Aegean Sea",
      "Lake Ohrid: One of Europe's deepest and oldest tectonic lakes (~288 m)"
    ],
    "upscNotes": "Vardar corridor geopolitical transit route; Lake Ohrid endemism."
  },
  {
    "id": "eu-norway",
    "name": "Norway",
    "category": "country",
    "continent": "Europe",
    "coords": [
      10.75,
      59.91
    ],
    "capital": "Oslo",
    "description": "Glaciated western spine of Scandinavia famed for deep coastal fjords and North Sea petroleum.",
    "keyFacts": [
      "Fjords: Classic examples of deep U-shaped glacial valleys submerged by rising sea level",
      "Major global oil and natural gas exporter (North Sea / Norwegian Sea fields)",
      "Spitsbergen (Svalbard) hosts the Global Seed Vault in the high Arctic"
    ],
    "upscNotes": "Fjord geomorphology; North Sea oil & sovereign wealth fund; Arctic Svalbard treaty."
  },
  {
    "id": "eu-poland",
    "name": "Poland",
    "category": "country",
    "continent": "Europe",
    "coords": [
      21.01,
      52.23
    ],
    "capital": "Warsaw",
    "description": "Central European nation spanning from Carpathian Mountains to the Baltic Sea.",
    "keyFacts": [
      "Vistula River drains vast fertile basin through Krakow and Warsaw to Gdańsk",
      "Silesian coal basin in south historically fueled Central European heavy industry"
    ],
    "upscNotes": "North European Plain transit corridor; Vistula drainage basin."
  },
  {
    "id": "eu-portugal",
    "name": "Portugal",
    "category": "country",
    "continent": "Europe",
    "coords": [
      -9.14,
      38.72
    ],
    "capital": "Lisbon",
    "description": "Westernmost nation of mainland Europe on the Iberian Peninsula, fronting Atlantic Ocean.",
    "keyFacts": [
      "Tagus River enters Atlantic through large estuary at capital Lisbon",
      "Azores and Madeira: Autonomous volcanic archipelagos in the Atlantic Ocean"
    ],
    "upscNotes": "Iberian Atlantic frontage; Azores triple junction plate tectonics."
  },
  {
    "id": "eu-romania",
    "name": "Romania",
    "category": "country",
    "continent": "Europe",
    "coords": [
      26.1,
      44.43
    ],
    "capital": "Bucharest",
    "description": "Southeast European nation encircling the Carpathian Mountain arc, drained by Danube.",
    "keyFacts": [
      "Danube Delta: Second largest and best preserved delta in Europe, emptying into Black Sea",
      "Iron Gates: Spectacular gorge on the Danube between Romania and Serbia"
    ],
    "upscNotes": "Carpathian fold arc; Danube delta wetland biosphere reserve."
  },
  {
    "id": "eu-san-marino",
    "name": "San Marino",
    "category": "country",
    "continent": "Europe",
    "coords": [
      12.45,
      43.94
    ],
    "capital": "San Marino",
    "description": "World's oldest surviving constitutional republic (founded 301 AD), enclaved by Italy on Mount Titano.",
    "keyFacts": [
      "Completely surrounded by Italy on eastern slopes of the Apennines",
      "Perched on three-peaked limestone ridge of Mount Titano"
    ],
    "upscNotes": "Enclaved microstate; historic republican constitutionalism."
  },
  {
    "id": "eu-serbia",
    "name": "Serbia",
    "category": "country",
    "continent": "Europe",
    "coords": [
      20.46,
      44.79
    ],
    "capital": "Belgrade",
    "description": "Landlocked Balkan nation at the crossroads of Central and Southeast Europe along Danube.",
    "keyFacts": [
      "Confluence of Sava and Danube rivers at capital Belgrade",
      "Vojvodina in north represents fertile Pannonian plain; south is mountainous"
    ],
    "upscNotes": "Danube-Sava river confluence; Balkan crossroads."
  },
  {
    "id": "eu-slovakia",
    "name": "Slovakia",
    "category": "country",
    "continent": "Europe",
    "coords": [
      17.11,
      48.15
    ],
    "capital": "Bratislava",
    "description": "Landlocked Central European nation dominated by the rugged Western Carpathians.",
    "keyFacts": [
      "High Tatras: Highest section of the Carpathians (Gerlachovský štít 2,655 m)",
      "Danube forms part of southwestern border with capital Bratislava on its banks"
    ],
    "upscNotes": "Tatra mountain alpine glaciation; automotive industrial manufacturing hub."
  },
  {
    "id": "eu-slovenia",
    "name": "Slovenia",
    "category": "country",
    "continent": "Europe",
    "coords": [
      14.51,
      46.06
    ],
    "capital": "Ljubljana",
    "description": "Sub-Alpine and karst country at junction of Alps, Dinarides, and Pannonian Basin.",
    "keyFacts": [
      "Kras (Karst) Plateau is the international scientific type locality for karst limestone landforms",
      "Short 47-km Adriatic coastline with Port of Koper"
    ],
    "upscNotes": "Kras type region; Postojna and Škocjan caves."
  },
  {
    "id": "eu-spain",
    "name": "Spain",
    "category": "country",
    "continent": "Europe",
    "coords": [
      -3.7,
      40.42
    ],
    "capital": "Madrid",
    "description": "Occupies ~85% of Iberian Peninsula; high interior Meseta plateau bordered by cordilleras.",
    "keyFacts": [
      "Meseta Central: High semi-arid central plateau divided by Sistema Central",
      "Pyrenees form natural land barrier with France; Strait of Gibraltar separates it from Africa",
      "Canary Islands: Volcanic archipelago off northwest African coast (hosts Teide 3,715 m)"
    ],
    "upscNotes": "Meseta plateau topography; Strait of Gibraltar control; Canary Islands volcanism."
  },
  {
    "id": "eu-sweden",
    "name": "Sweden",
    "category": "country",
    "continent": "Europe",
    "coords": [
      18.06,
      59.33
    ],
    "capital": "Stockholm",
    "description": "Largest Scandinavian nation, sloping eastward from Scandinavian Mountains to Baltic Sea.",
    "keyFacts": [
      "Kiruna in the Arctic north holds one of world's largest underground iron ore mines",
      "Lake Vänern and Lake Vättern are the largest lakes in the European Union"
    ],
    "upscNotes": "Kiruna iron ore deposits; Baltic Sea drainage; Swedish forestry."
  },
  {
    "id": "eu-switzerland",
    "name": "Switzerland",
    "category": "country",
    "continent": "Europe",
    "coords": [
      7.45,
      46.95
    ],
    "capital": "Bern",
    "description": "Landlocked Alpine federal republic renowned for neutrality and alpine hydrography.",
    "keyFacts": [
      "Hydrological Water Tower of Europe: Headwaters of Rhine, Rhône, Inn, Ticino",
      "Swiss Alps (60%), Swiss Plateau (30%), Jura Mountains (10%)",
      "Gotthard Base Tunnel: World's longest rail tunnel (57 km)"
    ],
    "upscNotes": "Alpine headwaters of major European rivers; Gotthard transit corridor."
  },
  {
    "id": "eu-ukraine",
    "name": "Ukraine",
    "category": "country",
    "continent": "Europe",
    "coords": [
      30.52,
      50.45
    ],
    "capital": "Kyiv",
    "description": "Second largest country in Europe by area, renowned for fertile black earth belt (Chernozem).",
    "keyFacts": [
      "Chernozem (black soil): Vast fertile steppe belt making it a global breadbasket for wheat and sunflower",
      "Dnieper River: Major waterway bisecting country north-to-south into Black Sea",
      "Crimean Peninsula: Strategic maritime projection into Black Sea; Donbas coal basin in east"
    ],
    "upscNotes": "Chernozem belt agriculture; Dnieper hydro plants; Black Sea ports (Odesa)."
  },
  {
    "id": "eu-united-kingdom",
    "name": "United Kingdom",
    "category": "country",
    "continent": "Europe",
    "coords": [
      -0.13,
      51.51
    ],
    "capital": "London",
    "description": "Island nation in northwestern Europe comprising England, Scotland, Wales, and Northern Ireland.",
    "keyFacts": [
      "Separated from continental Europe by English Channel and Strait of Dover",
      "Channel Tunnel: 50.5-km undersea rail link connecting Folkestone to Coquelles (France)",
      "Highlands and Lowlands split by Highland Boundary Fault in Scotland"
    ],
    "upscNotes": "Greenwich Prime Meridian (0°); North Sea oil/gas; Channel chokepoint."
  },
  {
    "id": "af-algeria",
    "name": "Algeria",
    "category": "country",
    "continent": "Africa",
    "coords": [
      3.06,
      36.75
    ],
    "capital": "Algiers",
    "description": "Largest country in Africa by area; over 80% covered by the Sahara Desert.",
    "keyFacts": [
      "Tell Atlas along Mediterranean coast; Saharan Atlas inland; Ahaggar volcanic massif in south",
      "Major petroleum and natural gas producer supplying southern Europe via undersea pipelines"
    ],
    "upscNotes": "Hassi Messaoud oil; Trans-Mediterranean gas pipelines; Ahaggar massif."
  },
  {
    "id": "af-angola",
    "name": "Angola",
    "category": "country",
    "continent": "Africa",
    "coords": [
      13.23,
      -8.84
    ],
    "capital": "Luanda",
    "description": "Southwest African nation on Atlantic coast with major offshore oil and diamond reserves.",
    "keyFacts": [
      "Cabinda exclave separated from mainland by DRC territory along Congo estuary",
      "Bié Plateau: High central watershed giving rise to Zambezi, Okavango, and Cuanza rivers"
    ],
    "upscNotes": "Cabinda exclave offshore petroleum; Bié plateau watershed."
  },
  {
    "id": "af-benin",
    "name": "Benin",
    "category": "country",
    "continent": "Africa",
    "coords": [
      2.63,
      6.5
    ],
    "capital": "Porto-Novo",
    "description": "West African nation on Gulf of Guinea (historic Slave Coast).",
    "keyFacts": [
      "Part of the Dahomey Gap: An anomalous dry savanna break in the West African rainforest belt",
      "Port of Cotonou serves as transit hub for landlocked Niger and Burkina Faso"
    ],
    "upscNotes": "Dahomey Gap ecological anomaly; Gulf of Guinea trade corridor."
  },
  {
    "id": "af-botswana",
    "name": "Botswana",
    "category": "country",
    "continent": "Africa",
    "coords": [
      25.92,
      -24.66
    ],
    "capital": "Gaborone",
    "description": "Landlocked Southern African nation dominated by the Kalahari Desert and Okavango Delta.",
    "keyFacts": [
      "Okavango Delta: World's premier inland delta where Okavango River terminates in Kalahari sand basin",
      "Leading global producer of gem-quality diamonds by value (Jwaneng and Orapa mines)",
      "Makgadikgadi Pan: Vast salt flat complex in northeast"
    ],
    "upscNotes": "Okavango endorheic delta; diamond mining economy; Kalahari basin."
  },
  {
    "id": "af-burkina-faso",
    "name": "Burkina Faso",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -1.52,
      12.37
    ],
    "capital": "Ouagadougou",
    "description": "Landlocked West African nation in the Sahel-Savanna transition zone.",
    "keyFacts": [
      "Source of headwaters for Black, White, and Red Volta rivers (formerly Upper Volta)",
      "Gold mining has become principal export earner"
    ],
    "upscNotes": "Sahelian desertification; Volta river headwaters."
  },
  {
    "id": "af-burundi",
    "name": "Burundi",
    "category": "country",
    "continent": "Africa",
    "coords": [
      29.36,
      -3.38
    ],
    "capital": "Gitega",
    "description": "Landlocked East African nation in Great Lakes region fronting northeastern Lake Tanganyika.",
    "keyFacts": [
      "Southernmost headwaters of the Nile River basin (Luvironza River)",
      "Dense population along fertile volcanic highlands of Western Rift Valley"
    ],
    "upscNotes": "Western (Albertine) Rift Valley; Nile southernmost headwaters."
  },
  {
    "id": "af-cabo-verde",
    "name": "Cabo Verde",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -23.51,
      14.93
    ],
    "capital": "Praia",
    "description": "Volcanic archipelago nation of 10 islands in Atlantic Ocean, ~570 km west of Senegal.",
    "keyFacts": [
      "Pico do Fogo: Active stratovolcano on Fogo Island (~2,829 m)",
      "Located in the path of Atlantic hurricane nursery systems"
    ],
    "upscNotes": "Macaronesian biogeographic zone; tropical cyclone cyclogenesis."
  },
  {
    "id": "af-cameroon",
    "name": "Cameroon",
    "category": "country",
    "continent": "Africa",
    "coords": [
      11.52,
      3.85
    ],
    "capital": "Yaoundé",
    "description": "Called Africa in Miniature due to presence of all major African climates and biomes.",
    "keyFacts": [
      "Mount Cameroon (4,040 m): Active stratovolcano on Gulf of Guinea coast",
      "Lake Nyos: Volcanic crater lake notorious for 1986 limnic eruption (deadly CO2 release)",
      "Extends from Atlantic coast north to Lake Chad"
    ],
    "upscNotes": "Limnic eruptions (Lake Nyos/Monoun); Cameroon volcanic line."
  },
  {
    "id": "af-car",
    "name": "Central African Republic",
    "category": "country",
    "continent": "Africa",
    "coords": [
      18.55,
      4.36
    ],
    "capital": "Bangui",
    "description": "Landlocked nation in interior Africa straddling the Congo and Chad drainage basins.",
    "keyFacts": [
      "Ubangi River forms southern border with DRC; flows into Congo River",
      "Dense tropical rainforest in south; dry savanna in north"
    ],
    "upscNotes": "Ubangi River transport; Congo-Chad watershed divide."
  },
  {
    "id": "af-chad",
    "name": "Chad",
    "category": "country",
    "continent": "Africa",
    "coords": [
      15.04,
      12.13
    ],
    "capital": "N'Djamena",
    "description": "Vast landlocked nation spanning from the Sahara Desert south to tropical savannas.",
    "keyFacts": [
      "Tibesti Mountains in north host Emi Koussi (~3,415 m), highest peak in Sahara",
      "Lake Chad in southwest has shrunk by >90% since 1960s",
      "Bodélé Depression in north is the single largest dust source on Earth, fertilizing Amazon"
    ],
    "upscNotes": "Bodélé Depression dust transport to Amazon; Lake Chad desiccation."
  },
  {
    "id": "af-comoros",
    "name": "Comoros",
    "category": "country",
    "continent": "Africa",
    "coords": [
      43.26,
      -11.7
    ],
    "capital": "Moroni",
    "description": "Volcanic island nation at northern end of Mozambique Channel, west of Madagascar.",
    "keyFacts": [
      "Mount Karthala: Active shield volcano on Grande Comore with one of world's largest calderas",
      "Major producer of ylang-ylang perfume essence and vanilla"
    ],
    "upscNotes": "Mozambique Channel maritime choke; hot-spot volcanism."
  },
  {
    "id": "af-congo-rep",
    "name": "Republic of the Congo",
    "category": "country",
    "continent": "Africa",
    "coords": [
      15.28,
      -4.26
    ],
    "capital": "Brazzaville",
    "description": "Equatorial country on western bank of Congo River with extensive tropical rainforests.",
    "keyFacts": [
      "Capital Brazzaville sits directly across Malebo Pool from Kinshasa (DRC)",
      "Cuvette Centrale: Massive peatland complex discovered in Congo Basin stores ~30B tonnes carbon"
    ],
    "upscNotes": "Congo Basin peatland carbon sink; Malebo Pool twin capitals."
  },
  {
    "id": "af-drc",
    "name": "Democratic Republic of the Congo",
    "category": "country",
    "continent": "Africa",
    "coords": [
      15.31,
      -4.33
    ],
    "capital": "Kinshasa",
    "description": "Second largest country in Africa, occupying the core of the equatorial Congo River basin.",
    "keyFacts": [
      "Holds world's largest reserves of cobalt and substantial coltan, copper, and diamonds",
      "Congo River: Deepest river on Earth (>220 m) and second in discharge volume after Amazon",
      "Virunga National Park: Volcanic rift mountains hosting mountain gorillas and active Nyiragongo"
    ],
    "upscNotes": "Cobalt monopoly for energy transition; Congo Basin rainforest lungs; Virunga volcanism."
  },
  {
    "id": "af-djibouti",
    "name": "Djibouti",
    "category": "country",
    "continent": "Africa",
    "coords": [
      43.15,
      11.59
    ],
    "capital": "Djibouti City",
    "description": "Strategic Horn of Africa nation commanding Bab-el-Mandeb strait between Red Sea and Gulf of Aden.",
    "keyFacts": [
      "Afar Triple Junction: Convergence of Red Sea, Gulf of Aden, and East African Rift rifts",
      "Lake Assal: Lowest land point in Africa (-155 m) and one of the saltiest water bodies on Earth",
      "Hosts military bases for USA, France, China, and Japan due to vital maritime chokepoint"
    ],
    "upscNotes": "Bab-el-Mandeb chokepoint; Afar depression triple junction geology."
  },
  {
    "id": "af-egypt",
    "name": "Egypt",
    "category": "country",
    "continent": "Africa",
    "coords": [
      31.24,
      30.04
    ],
    "capital": "Cairo",
    "description": "Transcontinental nation linking Northeast Africa to the Middle East via Sinai Peninsula.",
    "keyFacts": [
      "Nile River valley and delta: 'Gift of the Nile', where >95% of population lives on ~4% of land area",
      "Suez Canal: 193-km artificial sea-level canal linking Mediterranean to Red Sea",
      "Aswan High Dam impounds Lake Nasser, controlling annual floods and generating power",
      "Sinai Peninsula hosts Mount Catherine (highest in Egypt, 2,629 m)"
    ],
    "upscNotes": "Suez Canal maritime transit; Grand Ethiopian Renaissance Dam (GERD) dispute on Blue Nile."
  },
  {
    "id": "af-equatorial-guinea",
    "name": "Equatorial Guinea",
    "category": "country",
    "continent": "Africa",
    "coords": [
      8.78,
      3.75
    ],
    "capital": "Malabo / Ciudad de la Paz",
    "description": "Only Spanish-speaking African nation, split between mainland Río Muni and Bioko Island.",
    "keyFacts": [
      "Capital Malabo located on volcanic Bioko Island in the Gulf of Guinea",
      "Major offshore crude oil and natural gas producer"
    ],
    "upscNotes": "Gulf of Guinea petroleum province; Cameroon volcanic line."
  },
  {
    "id": "af-eritrea",
    "name": "Eritrea",
    "category": "country",
    "continent": "Africa",
    "coords": [
      38.93,
      15.34
    ],
    "capital": "Asmara",
    "description": "Red Sea coastal nation along the strategic approaches to the Bab-el-Mandeb strait.",
    "keyFacts": [
      "Dahlak Archipelago: Famed historical pearl diving and marine biodiversity",
      "Extensive Red Sea coastline (>1,150 km) facing Arabian Peninsula"
    ],
    "upscNotes": "Red Sea maritime security; Danakil Depression northern margin."
  },
  {
    "id": "af-eswatini",
    "name": "Eswatini",
    "category": "country",
    "continent": "Africa",
    "coords": [
      31.13,
      -26.31
    ],
    "capital": "Mbabane",
    "description": "Small landlocked monarchy in Southern Africa bordered by South Africa and Mozambique.",
    "keyFacts": [
      "Descends from highveld mountains in west to subtropical lowveld in east",
      "Traversed by Great Usutu and Komati rivers"
    ],
    "upscNotes": "Drakensberg escarpment; Southern Africa river basin cooperation."
  },
  {
    "id": "af-ethiopia",
    "name": "Ethiopia",
    "category": "country",
    "continent": "Africa",
    "coords": [
      38.76,
      9.03
    ],
    "capital": "Addis Ababa",
    "description": "Landlocked Horn of Africa nation characterized by high volcanic plateaus and Great Rift Valley.",
    "keyFacts": [
      "Roof of Africa: Over 70% of Africa's land above 2,000 m is in Ethiopian Highlands",
      "Source of the Blue Nile (Abay River) at Lake Tana, contributing ~85% of Nile flow at Khartoum",
      "Grand Ethiopian Renaissance Dam (GERD): Africa's largest hydroelectric project on Blue Nile",
      "Danakil Depression: Active volcanism (Erta Ale lava lake) and salt pans below sea level"
    ],
    "upscNotes": "GERD geopolitical dispute with Egypt/Sudan; Blue Nile source at Lake Tana; Great Rift Valley."
  },
  {
    "id": "af-gabon",
    "name": "Gabon",
    "category": "country",
    "continent": "Africa",
    "coords": [
      9.45,
      0.42
    ],
    "capital": "Libreville",
    "description": "Equatorial West African coastal country with >85% tropical rainforest cover and oil wealth.",
    "keyFacts": [
      "Lopé National Park: UNESCO site preserving forest-savanna ecotone",
      "Leading manganese producer (Moanda mine) and offshore petroleum exporter"
    ],
    "upscNotes": "Congo basin biodiversity; manganese mineral reserves; forest carbon sink."
  },
  {
    "id": "af-gambia",
    "name": "Gambia",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -16.58,
      13.45
    ],
    "capital": "Banjul",
    "description": "Narrow strip country following the lower Gambia River, completely surrounded by Senegal except Atlantic coast.",
    "keyFacts": [
      "Smallest country in mainland Africa (less than 50 km wide)",
      "Gambia River is navigable along its entire national length"
    ],
    "upscNotes": "Enclave geometry; Senegambia confederation history; riverine boundaries."
  },
  {
    "id": "af-ghana",
    "name": "Ghana",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -0.19,
      5.6
    ],
    "capital": "Accra",
    "description": "West African nation on Gulf of Guinea, historic Gold Coast and cocoa producer.",
    "keyFacts": [
      "Lake Volta: World's largest artificial reservoir by surface area (~8,500 km²), formed by Akosombo Dam",
      "Top gold producer in Africa and major cocoa exporter",
      "Prime Meridian (0° longitude) passes through industrial port city of Tema"
    ],
    "upscNotes": "Akosombo Dam / Lake Volta; Prime Meridian transit; gold and cocoa export."
  },
  {
    "id": "af-guinea",
    "name": "Guinea",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -13.68,
      9.54
    ],
    "capital": "Conakry",
    "description": "West African nation holding the world's largest reserves of high-grade bauxite (aluminum ore).",
    "keyFacts": [
      "Fouta Djallon highlands: Water Tower of West Africa, source of Niger, Senegal, and Gambia rivers",
      "Simandou iron ore deposit: One of the world's largest untapped high-grade hematite reserves"
    ],
    "upscNotes": "Fouta Djallon water tower; Simandou iron ore geopolitics; global bauxite supply dominance."
  },
  {
    "id": "af-guinea-bissau",
    "name": "Guinea-Bissau",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -15.58,
      11.86
    ],
    "capital": "Bissau",
    "description": "Low-lying coastal West African nation famed for mangrove swamps and Bijagós Archipelago.",
    "keyFacts": [
      "Bijagós Archipelago: UNESCO biosphere reserve of 88 offshore islands",
      "Mangrove swamps cover vast portions of drowned river estuaries (rias)"
    ],
    "upscNotes": "Ria coast; mangrove ecology; cashew export economy."
  },
  {
    "id": "af-ivory-coast",
    "name": "Ivory Coast (Côte d'Ivoire)",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -5.27,
      6.83
    ],
    "capital": "Yamoussoukro / Abidjan",
    "description": "West African nation on Gulf of Guinea, the world's largest producer of cocoa beans (~40%).",
    "keyFacts": [
      "Port of Abidjan on Ébrié Lagoon is one of the busiest deepwater ports in West Africa",
      "Basilica of Our Lady of Peace in Yamoussoukro is among world's largest churches"
    ],
    "upscNotes": "Global cocoa supply chain dominance; lagoon coast geomorphology."
  },
  {
    "id": "af-kenya",
    "name": "Kenya",
    "category": "country",
    "continent": "Africa",
    "coords": [
      36.82,
      -1.29
    ],
    "capital": "Nairobi",
    "description": "East African nation bisected by Equator and the Gregory (Eastern) Rift Valley.",
    "keyFacts": [
      "Mount Kenya (5,199 m): Second highest peak in Africa, sits directly on the Equator",
      "Great Rift Valley lakes: Lake Turkana (world's largest desert lake), Lake Naivasha, Lake Nakuru",
      "Maasai Mara: Northern continuation of Serengeti ecosystem, famed for Great Wildebeest Migration",
      "Shares Lake Victoria with Tanzania and Uganda"
    ],
    "upscNotes": "Great Rift Valley geothermal energy; Great Migration; Port of Mombasa trade gateway."
  },
  {
    "id": "af-lesotho",
    "name": "Lesotho",
    "category": "country",
    "continent": "Africa",
    "coords": [
      27.48,
      -29.31
    ],
    "capital": "Maseru",
    "description": "Kingdom in the Sky — only sovereign state in the world situated entirely above 1,000 m elevation.",
    "keyFacts": [
      "Completely enclaved within South Africa",
      "Lowest point is 1,400 m above sea level (highest low-point of any country)",
      "Lesotho Highlands Water Project (LHWP): Diverts water from Orange River headwaters to South Africa's Gauteng"
    ],
    "upscNotes": "Enclaved state; high-altitude basaltic plateau; water export geopolitics."
  },
  {
    "id": "af-liberia",
    "name": "Liberia",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -10.8,
      6.3
    ],
    "capital": "Monrovia",
    "description": "West African nation founded in 1822 by freed American slaves; oldest modern republic in Africa.",
    "keyFacts": [
      "One of the largest merchant shipping flag-of-convenience registries in the world",
      "Hosts significant portion of remaining Upper Guinean tropical rainforest"
    ],
    "upscNotes": "Upper Guinean biodiversity hotspot; maritime flag registry."
  },
  {
    "id": "af-libya",
    "name": "Libya",
    "category": "country",
    "continent": "Africa",
    "coords": [
      13.19,
      32.89
    ],
    "capital": "Tripoli",
    "description": "North African desert nation with extensive Mediterranean coastline and vast light sweet crude oil.",
    "keyFacts": [
      "Great Man-Made River: World's largest irrigation project, piping fossil water from Nubian Sandstone Aquifer",
      "Over 90% of territory covered by the Sahara Desert (Libyan Erg)"
    ],
    "upscNotes": "Nubian Sandstone Aquifer System fossil water; Sirte basin sweet crude."
  },
  {
    "id": "af-madagascar",
    "name": "Madagascar",
    "category": "country",
    "continent": "Africa",
    "coords": [
      47.51,
      -18.88
    ],
    "capital": "Antananarivo",
    "description": "World's fourth largest island (~587,000 km²), isolated from Africa for ~88 million years.",
    "keyFacts": [
      "Over 90% of wildlife is endemic (lemurs, baobabs, tenrecs)",
      "Separated from mainland Africa by the deep Mozambique Channel (~400 km wide)",
      "Avenue of the Baobabs on western plains; humid rainforest along steep eastern escarpment"
    ],
    "upscNotes": "Megadiverse island evolution; endemic biodiversity hotspot; Mozambique Channel."
  },
  {
    "id": "af-malawi",
    "name": "Malawi",
    "category": "country",
    "continent": "Africa",
    "coords": [
      33.79,
      -13.96
    ],
    "capital": "Lilongwe",
    "description": "Narrow landlocked country dominated by Lake Malawi along the southern East African Rift.",
    "keyFacts": [
      "Lake Malawi (Lake Nyasa): Third largest lake in Africa, holds more fish species than any other lake (~1,000 cichlids)",
      "Shire River drains Lake Malawi south into the Zambezi River"
    ],
    "upscNotes": "Lake Malawi graben geology; cichlid adaptive radiation."
  },
  {
    "id": "af-mali",
    "name": "Mali",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -8.0,
      12.64
    ],
    "capital": "Bamako",
    "description": "Landlocked West African nation spanning the Sahara, Sahel, and fertile Niger River bend.",
    "keyFacts": [
      "Inner Niger Delta: Massive seasonal inland wetland in central semi-arid Mali",
      "Historic caravan cities: Timbuktu and Djenné at the junction of Sahara trade and Niger River"
    ],
    "upscNotes": "Inner Niger Delta hydrological role; trans-Saharan trade geography; Sahel security."
  },
  {
    "id": "af-mauritania",
    "name": "Mauritania",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -15.98,
      18.07
    ],
    "capital": "Nouakchott",
    "description": "Bridge nation between Maghreb and Sub-Saharan Africa, dominated by Saharan dunes and Atlantic coast.",
    "keyFacts": [
      "Richat Structure (Eye of the Sahara): Prominent 40-km circular eroded geological dome",
      "Banc d'Arguin National Park: Major Atlantic coastal wetland for migratory shorebirds",
      "Zouérat iron ore transported to coast via world's longest train (~2.5 km)"
    ],
    "upscNotes": "Richat Structure geological origin; Banc d'Arguin upwelling fishery."
  },
  {
    "id": "af-mauritius",
    "name": "Mauritius",
    "category": "country",
    "continent": "Africa",
    "coords": [
      57.5,
      -20.16
    ],
    "capital": "Port Louis",
    "description": "Volcanic island nation in southwest Indian Ocean, ~900 km east of Madagascar.",
    "keyFacts": [
      "Part of the Mascarene Islands formed by the Réunion hot spot",
      "Chagos Archipelago dispute with UK settled in 2024"
    ],
    "upscNotes": "Mascarene Plateau; Indian Ocean maritime Exclusive Economic Zone (EEZ)."
  },
  {
    "id": "af-morocco",
    "name": "Morocco",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -6.85,
      34.02
    ],
    "capital": "Rabat",
    "description": "Northwest African kingdom with both Atlantic and Mediterranean coastlines.",
    "keyFacts": [
      "Commands southern shore of the Strait of Gibraltar",
      "Atlas Mountains (High, Middle, Anti-Atlas) form climatic barrier with Toubkal (4,167 m)",
      "World's largest proven reserves of phosphate rock (~70% of global total, OCP Group)"
    ],
    "upscNotes": "Global food security via phosphate reserves; Strait of Gibraltar chokepoint."
  },
  {
    "id": "af-mozambique",
    "name": "Mozambique",
    "category": "country",
    "continent": "Africa",
    "coords": [
      32.57,
      -25.97
    ],
    "capital": "Maputo",
    "description": "Southeast African nation with 2,500 km of Indian Ocean coastline along Mozambique Channel.",
    "keyFacts": [
      "Zambezi River empties into Indian Ocean via massive delta in central Mozambique",
      "Cahora Bassa Dam on Zambezi: Major hydroelectric supplier to Southern Africa",
      "Cabo Delgado province in north holds major deepwater offshore natural gas reserves (Rovuma Basin)"
    ],
    "upscNotes": "Rovuma Basin LNG developments; Zambezi delta ecosystem; Mozambique Channel shipping."
  },
  {
    "id": "af-namibia",
    "name": "Namibia",
    "category": "country",
    "continent": "Africa",
    "coords": [
      17.07,
      -22.56
    ],
    "capital": "Windhoek",
    "description": "Arid southwest African nation renowned for the ancient coastal Namib Desert and diamond coast.",
    "keyFacts": [
      "Namib Desert: Oldest desert in the world (~55-80 million years), shaped by cold Benguela Current",
      "Sossusvlei: World's tallest red sand dunes (Big Daddy, Dune 45)",
      "Caprivi Strip: 450-km narrow salient giving access to the Zambezi River"
    ],
    "upscNotes": "Benguela current cold upwelling; uranium mining (Husab, Rössing); Caprivi panhandle."
  },
  {
    "id": "af-niger",
    "name": "Niger",
    "category": "country",
    "continent": "Africa",
    "coords": [
      2.12,
      13.51
    ],
    "capital": "Niamey",
    "description": "Landlocked Sahelian-Saharan country named after the Niger River that flows through southwest.",
    "keyFacts": [
      "Major global producer of uranium ore (Arlit and Akouta mines in Aïr Mountains)",
      "Aïr Mountains and Ténéré Desert form vast Saharan wilderness reserve"
    ],
    "upscNotes": "Sahel uranium geopolitics; Lake Chad basin; desertification."
  },
  {
    "id": "af-nigeria",
    "name": "Nigeria",
    "category": "country",
    "continent": "Africa",
    "coords": [
      7.49,
      9.06
    ],
    "capital": "Abuja / Lagos",
    "description": "Most populous country in Africa (>220M) and largest economy, occupying Niger River delta.",
    "keyFacts": [
      "Niger Delta: One of world's largest river deltas, epicenter of African oil and gas production",
      "Jos Plateau: Mineral-rich central upland plateau (tin and columbite)",
      "Confluence of Niger and Benue rivers at Lokoja"
    ],
    "upscNotes": "Niger Delta petroleum geography and environmental degradation; demographic powerhouse."
  },
  {
    "id": "af-rwanda",
    "name": "Rwanda",
    "category": "country",
    "continent": "Africa",
    "coords": [
      30.06,
      -1.94
    ],
    "capital": "Kigali",
    "description": "Land of a Thousand Hills — densely populated highland nation in East African Albertine Rift.",
    "keyFacts": [
      "Virunga volcanic chain in northwest hosts Mount Karisimbi (4,507 m) and mountain gorillas",
      "Lake Kivu on border with DRC stores massive dissolved methane gas exploited for power"
    ],
    "upscNotes": "Lake Kivu methane harvesting; Albertine Rift montane biodiversity."
  },
  {
    "id": "af-sao-tome",
    "name": "Sao Tome and Principe",
    "category": "country",
    "continent": "Africa",
    "coords": [
      6.73,
      0.34
    ],
    "capital": "São Tomé",
    "description": "Volcanic twin-island nation in Gulf of Guinea straddling the Equator.",
    "keyFacts": [
      "Part of Cameroon Volcanic Line extending into Atlantic Ocean",
      "Pico Cão Grande: Dramatic volcanic plug spire rising 370 m above rainforest"
    ],
    "upscNotes": "Gulf of Guinea maritime boundaries; Cameroon Volcanic Line."
  },
  {
    "id": "af-senegal",
    "name": "Senegal",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -17.44,
      14.69
    ],
    "capital": "Dakar",
    "description": "Westernmost country of mainland Africa, terminating in the Cap-Vert peninsula.",
    "keyFacts": [
      "Cap-Vert: Westernmost point of the African continent",
      "Senegal River forms northern border with Mauritania; Lake Retba (Pink Lake) due to Dunaliella salina algae"
    ],
    "upscNotes": "Cap-Vert continental extreme; Senegal River basin development authority (OMVS)."
  },
  {
    "id": "af-seychelles",
    "name": "Seychelles",
    "category": "country",
    "continent": "Africa",
    "coords": [
      55.45,
      -4.68
    ],
    "capital": "Victoria",
    "description": "Archipelago of 115 islands in western Indian Ocean, including rare granitic microcontinents.",
    "keyFacts": [
      "Granitic Inner Islands (Mahé, Praslin) are fragments of ancient Gondwana continental crust",
      "Aldabra Atoll: Second largest coral atoll in the world, home to giant tortoises"
    ],
    "upscNotes": "Continental crust granitic islands; Blue Economy leadership; Indian Ocean security."
  },
  {
    "id": "af-sierra-leone",
    "name": "Sierra Leone",
    "category": "country",
    "continent": "Africa",
    "coords": [
      -13.23,
      8.47
    ],
    "capital": "Freetown",
    "description": "West African nation on Atlantic coast with natural deepwater port at Freetown.",
    "keyFacts": [
      "Queen Elizabeth II Quay in Freetown is the third largest natural harbor in the world",
      "Rich diamond deposits along Kono and Kenema river alluvium"
    ],
    "upscNotes": "Alluvial diamond mining; Atlantic coastal mangrove belt."
  },
  {
    "id": "af-somalia",
    "name": "Somalia",
    "category": "country",
    "continent": "Africa",
    "coords": [
      45.34,
      2.05
    ],
    "capital": "Mogadishu",
    "description": "Commands the Horn of Africa with the longest coastline in mainland Africa (>3,300 km).",
    "keyFacts": [
      "Fronts both the Gulf of Aden in north and Indian Ocean in east",
      "Ras Hafun: Easternmost point of the African continent"
    ],
    "upscNotes": "Horn of Africa maritime piracy and choke points; Indian Ocean monsoon fishery."
  },
  {
    "id": "af-south-africa",
    "name": "South Africa",
    "category": "country",
    "continent": "Africa",
    "coords": [
      28.23,
      -25.75
    ],
    "capital": "Pretoria / Cape Town",
    "description": "Southernmost nation on continent, rich in strategic minerals and diverse biomes.",
    "keyFacts": [
      "Cape Agulhas: Official geographic dividing point between Atlantic and Indian oceans",
      "Witwatersrand basin holds world's richest gold reef deposits; Bushveld Complex holds ~75% of global platinum",
      "Drakensberg Escarpment rises over 3,400 m, forming watershed for Orange River"
    ],
    "upscNotes": "Bushveld platinum group metals (PGM); Cape Agulhas boundary; Fynbos biome."
  },
  {
    "id": "af-south-sudan",
    "name": "South Sudan",
    "category": "country",
    "continent": "Africa",
    "coords": [
      31.58,
      4.85
    ],
    "capital": "Juba",
    "description": "World's newest internationally recognized sovereign state (gained independence from Sudan in 2011).",
    "keyFacts": [
      "The Sudd: One of world's largest wetlands along the White Nile (Bahr al Jabal)",
      "Traversed by the White Nile system; heavily dependent on oil exports piped via Port Sudan"
    ],
    "upscNotes": "Sudd wetland water evaporation; Jonglei Canal dispute; White Nile transit."
  },
  {
    "id": "af-sudan",
    "name": "Sudan",
    "category": "country",
    "continent": "Africa",
    "coords": [
      32.53,
      15.5
    ],
    "capital": "Khartoum",
    "description": "Third largest country in Africa, situated at the historic confluence of the White and Blue Niles.",
    "keyFacts": [
      "Confluence of White Nile and Blue Nile at capital Khartoum forming the main Nile River",
      "Extensive Red Sea coastline with Port Sudan as principal economic maritime gateway",
      "Gezira Scheme: One of world's largest gravity-fed irrigation projects between Blue and White Niles"
    ],
    "upscNotes": "Nile confluence hydrography; Gezira cotton scheme; Red Sea coastal logistics."
  },
  {
    "id": "af-tanzania",
    "name": "Tanzania",
    "category": "country",
    "continent": "Africa",
    "coords": [
      35.74,
      -6.16
    ],
    "capital": "Dodoma / Dar es Salaam",
    "description": "East African nation hosting Africa's highest peak, deepest lake, and premier wildlife reserves.",
    "keyFacts": [
      "Mount Kilimanjaro (5,895 m): Highest free-standing volcanic mountain in the world",
      "Lake Tanganyika (world's second deepest lake) and Lake Victoria (Africa's largest lake)",
      "Serengeti National Park and Ngorongoro Crater caldera",
      "Zanzibar Archipelago: Historic spice islands famed for cloves"
    ],
    "upscNotes": "Kilimanjaro retreating glaciers; Great Rift Valley lakes; Olduvai Gorge early hominid fossils."
  },
  {
    "id": "af-togo",
    "name": "Togo",
    "category": "country",
    "continent": "Africa",
    "coords": [
      1.22,
      6.14
    ],
    "capital": "Lomé",
    "description": "Narrow West African country on Gulf of Guinea with deepwater port at Lomé.",
    "keyFacts": [
      "Port of Lomé is one of the only natural deepwater container ports in West Africa",
      "Phosphate mining is a primary mineral export"
    ],
    "upscNotes": "Dahomey Gap ecotone; Lomé transshipment hub."
  },
  {
    "id": "af-tunisia",
    "name": "Tunisia",
    "category": "country",
    "continent": "Africa",
    "coords": [
      10.18,
      36.8
    ],
    "capital": "Tunis",
    "description": "Northernmost country in Africa, situated at the maritime narrows between western and eastern Mediterranean.",
    "keyFacts": [
      "Cape Angela: Northernmost point of the African continent",
      "Sicilian Narrows: Strait of Sicily separates it from Italy by just 145 km",
      "Chott el Djerid: Large endorheic salt lake in south"
    ],
    "upscNotes": "Northernmost African continental extreme; Sicilian Narrows chokepoint."
  },
  {
    "id": "af-uganda",
    "name": "Uganda",
    "category": "country",
    "continent": "Africa",
    "coords": [
      32.58,
      0.35
    ],
    "capital": "Kampala",
    "description": "Pearl of Africa — landlocked equatorial nation on northern shores of Lake Victoria.",
    "keyFacts": [
      "Victoria Nile flows out of Lake Victoria at Jinja (historic Source of the Nile)",
      "Rwenzori Mountains (Mountains of the Moon): Glaciated non-volcanic block mountains rising to 5,109 m (Mount Stanley)",
      "Lake Albert basin in Albertine Rift contains commercial petroleum reserves"
    ],
    "upscNotes": "Rwenzori horst block tectonics; Lake Albert oil corridor; Nile headwaters."
  },
  {
    "id": "af-zambia",
    "name": "Zambia",
    "category": "country",
    "continent": "Africa",
    "coords": [
      28.28,
      -15.42
    ],
    "capital": "Lusaka",
    "description": "Landlocked Southern African country centered on the upper Zambezi River and rich Copperbelt.",
    "keyFacts": [
      "Copperbelt: World-class stratiform copper-cobalt mineral belt",
      "Victoria Falls (Mosi-oa-Tunya): Shared with Zimbabwe on the Zambezi River",
      "Kariba Dam impounds Lake Kariba, providing primary hydroelectric supply"
    ],
    "upscNotes": "Copperbelt geology; Victoria Falls cataract formation; Zambezi river basin."
  },
  {
    "id": "af-zimbabwe",
    "name": "Zimbabwe",
    "category": "country",
    "continent": "Africa",
    "coords": [
      31.05,
      -17.83
    ],
    "capital": "Harare",
    "description": "Landlocked country between Zambezi and Limpopo rivers, occupying high mineral-rich plateau.",
    "keyFacts": [
      "Highveld plateau bisects country from southwest to northeast (Great Dyke mineral complex)",
      "Great Dyke: 550-km layered intrusion rich in chromium, platinum, and nickel",
      "Victoria Falls and Lake Kariba along northern boundary on Zambezi River"
    ],
    "upscNotes": "Great Dyke layered intrusion mineralogy; Zambezi-Limpopo watershed."
  },
  {
    "id": "as-afghanistan",
    "name": "Afghanistan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      69.17,
      34.53
    ],
    "capital": "Kabul",
    "description": "Landlocked mountainous nation at the crossroads of Central and South Asia, dominated by Hindu Kush.",
    "keyFacts": [
      "Hindu Kush range traverses country from northeast to southwest",
      "Wakhan Corridor: Narrow strip connecting to China, separating Tajikistan from Pakistan",
      "Amu Darya forms northern border with Tajikistan and Uzbekistan"
    ],
    "upscNotes": "Heartland of Asia; Wakhan Corridor border with China; Amu Darya basin."
  },
  {
    "id": "as-armenia",
    "name": "Armenia",
    "category": "country",
    "continent": "Asia",
    "coords": [
      44.51,
      40.18
    ],
    "capital": "Yerevan",
    "description": "Landlocked mountainous nation in the South Caucasus, dominated by Armenian Highland.",
    "keyFacts": [
      "Lake Sevan: One of the largest high-altitude freshwater lakes in Eurasia (~1,900 m)",
      "Mount Ararat sits just across closed border in Turkey but dominates Yerevan skyline"
    ],
    "upscNotes": "South Caucasus transit corridor; Zangezur corridor geopolitics; Lake Sevan hydrography."
  },
  {
    "id": "as-azerbaijan",
    "name": "Azerbaijan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      49.87,
      40.41
    ],
    "capital": "Baku",
    "description": "Caspian Sea littoral nation in the Caucasus rich in historic oil and natural gas fields.",
    "keyFacts": [
      "Baku-Tbilisi-Ceyhan (BTC) pipeline pumps Caspian oil to Mediterranean",
      "Nakhchivan exclave separated by Armenian territory; Gobustan mud volcanoes"
    ],
    "upscNotes": "Caspian energy resources; Southern Gas Corridor to Europe; mud volcanoes."
  },
  {
    "id": "as-bahrain",
    "name": "Bahrain",
    "category": "country",
    "continent": "Asia",
    "coords": [
      50.59,
      26.23
    ],
    "capital": "Manama",
    "description": "Island kingdom in the Persian Gulf connected to Saudi Arabia by King Fahd Causeway.",
    "keyFacts": [
      "First Persian Gulf state where petroleum was discovered (1932)",
      "Commands maritime approaches in western Persian Gulf"
    ],
    "upscNotes": "Persian Gulf financial hub; King Fahd Causeway logistics."
  },
  {
    "id": "as-bangladesh",
    "name": "Bangladesh",
    "category": "country",
    "continent": "Asia",
    "coords": [
      90.41,
      23.81
    ],
    "capital": "Dhaka",
    "description": "Occupies the Ganges-Brahmaputra Delta (Bengal Delta), world's largest delta.",
    "keyFacts": [
      "Sundarbans: World's largest contiguous mangrove forest, home to Royal Bengal Tiger",
      "Ganges (Padma), Brahmaputra (Jamuna), and Meghna confluence before entering Bay of Bengal",
      "Extremely fertile alluvial soils, but highly vulnerable to tropical cyclones and sea-level rise"
    ],
    "upscNotes": "Bengal Delta geomorphology; Sundarbans tidal mangrove ecology; Ganges water sharing treaty."
  },
  {
    "id": "as-bhutan",
    "name": "Bhutan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      89.64,
      27.47
    ],
    "capital": "Thimphu",
    "description": "Landlocked Himalayan Buddhist kingdom pioneering Gross National Happiness (GNH).",
    "keyFacts": [
      "Carbon-negative country: Forest cover mandated at >60% (currently ~72%)",
      "Gangkhar Puensum (~7,570 m): Highest unclimbed mountain in the world",
      "Hydropower generated on south-flowing rivers (Chukha, Tala, Mangdechhu) exported to India"
    ],
    "upscNotes": "Doklam plateau tri-junction with India and China; run-of-the-river hydropower export."
  },
  {
    "id": "as-brunei",
    "name": "Brunei",
    "category": "country",
    "continent": "Asia",
    "coords": [
      114.95,
      4.9
    ],
    "capital": "Bandar Seri Begawan",
    "description": "Sultanate on the northern coast of Borneo, completely surrounded by Malaysian state of Sarawak.",
    "keyFacts": [
      "Divided into two non-contiguous parts by Sarawak's Limbang district",
      "Economy almost entirely powered by offshore petroleum and natural gas (Shell)"
    ],
    "upscNotes": "South China Sea maritime claims; Borneo oil and gas reserves."
  },
  {
    "id": "as-cambodia",
    "name": "Cambodia",
    "category": "country",
    "continent": "Asia",
    "coords": [
      104.92,
      11.56
    ],
    "capital": "Phnom Penh",
    "description": "Southeast Asian nation centered on the fertile lowlands of the Mekong River and Tonle Sap lake.",
    "keyFacts": [
      "Tonle Sap: Largest freshwater lake in Southeast Asia; unique hydrological pulse where flow reverses seasonally",
      "Angkor Wat: World's largest religious monument complex, built on vast hydraulic engineering system"
    ],
    "upscNotes": "Tonle Sap flow reversal phenomenon; Mekong River Commission dams impact."
  },
  {
    "id": "as-china",
    "name": "China",
    "category": "country",
    "continent": "Asia",
    "coords": [
      116.41,
      39.9
    ],
    "capital": "Beijing",
    "description": "World's second most populous country and second largest by land area, rising from Pacific to Himalayas.",
    "keyFacts": [
      "Tibetan Plateau ('Roof of the World' / 'Third Pole'): Source of Yangtze, Yellow, Mekong, Brahmaputra, Indus",
      "Yangtze River (Chang Jiang): Longest river in Asia (~6,300 km), hosts Three Gorges Dam",
      "Taklamakan and Gobi deserts in west and north; Loess Plateau drained by Yellow River (Huang He)"
    ],
    "upscNotes": "Third Pole glaciology and river headwaters; South China Sea nine-dash line; Belt and Road corridors."
  },
  {
    "id": "as-georgia",
    "name": "Georgia",
    "category": "country",
    "continent": "Asia",
    "coords": [
      44.83,
      41.72
    ],
    "capital": "Tbilisi",
    "description": "Transcaucasian nation on eastern coast of Black Sea, framed by Greater and Lesser Caucasus.",
    "keyFacts": [
      "Krubera-Voronya and Veryovkina: World's deepest explored limestone caves (>2,200 m deep) in Arabika Massif",
      "Suram Mountain ridge separates Black Sea drainage from Caspian drainage"
    ],
    "upscNotes": "Deepest karst cave systems globally; Black Sea energy transit corridor."
  },
  {
    "id": "as-india",
    "name": "India",
    "category": "country",
    "continent": "Asia",
    "coords": [
      77.21,
      28.61
    ],
    "capital": "New Delhi",
    "description": "Seventh largest country globally and most populous nation; spans from the glaciated Karakoram and Himalayas to Cape Comorin.",
    "keyFacts": [
      "Northern Crown: Entire territory of Jammu, Kashmir, and Ladakh (including Gilgit-Baltistan and Aksai Chin) forms the sovereign northern frontier",
      "Physiographic divisions: Northern Himalayan Mountain Wall, Great Indo-Gangetic Plains, Peninsular Plateau, Coastal Plains, Thar Desert, and Islands",
      "Ganges and Brahmaputra drainage basins sustain over 500 million people",
      "Deccan Traps: Massive Cretaceous volcanic basalt plateau in west-central India"
    ],
    "upscNotes": "Indira Col (northernmost), Indira Point (southernmost in Nicobar), Kibithu (east), Ghuar Moti (west); Survey of India official map; Himalayan tectonic collision."
  },
  {
    "id": "as-indonesia",
    "name": "Indonesia",
    "category": "country",
    "continent": "Asia",
    "coords": [
      106.85,
      -6.21
    ],
    "capital": "Jakarta (Current) / Nusantara (New)",
    "description": "World's largest archipelagic state (>17,000 islands) straddling the Equator along the Pacific Ring of Fire.",
    "keyFacts": [
      "Wallace Line: Deepwater biological divide separating Asian fauna (Borneo/Bali) from Australasian fauna (Sulawesi/Lombok)",
      "Krakatoa (Anak Krakatau) in Sunda Strait; Lake Toba in Sumatra (world's largest volcanic caldera lake)",
      "Commands critical global straits: Malacca, Sunda, Makassar, Lombok straits",
      "World's largest producer and exporter of nickel and palm oil"
    ],
    "upscNotes": "Wallace and Weber biogeographical lines; maritime chokepoints (Malacca, Sunda, Lombok); Ring of Fire volcanism."
  },
  {
    "id": "as-iran",
    "name": "Iran",
    "category": "country",
    "continent": "Asia",
    "coords": [
      51.39,
      35.69
    ],
    "capital": "Tehran",
    "description": "High plateau nation bordered by Caspian Sea in north and Persian Gulf / Gulf of Oman in south.",
    "keyFacts": [
      "Strait of Hormuz: Northern shore controlled entirely by Iran; premier global oil chokepoint",
      "Alborz Mountains in north host Mount Damavand (~5,610 m, highest volcano in Asia); Zagros in west",
      "Dasht-e Kavir (salt desert) and Dasht-e Lut (hottest Earth skin temperatures) occupy interior plateau"
    ],
    "upscNotes": "Strait of Hormuz petroleum chokepoint; Chabahar Port connectivity to Central Asia; Qanat ancient irrigation."
  },
  {
    "id": "as-iraq",
    "name": "Iraq",
    "category": "country",
    "continent": "Asia",
    "coords": [
      44.36,
      33.31
    ],
    "capital": "Baghdad",
    "description": "Cradle of civilization (ancient Mesopotamia) formed by the alluvial basin of Tigris and Euphrates.",
    "keyFacts": [
      "Tigris and Euphrates rivers unite at Al-Qurnah to form the Shatt al-Arab waterway entering Persian Gulf",
      "Mesopotamian Marshes (Hawizeh/Hammar): Historic wetland ecosystem restored after draining",
      "Southern oil fields (Rumaila, Basra) and northern Kirkuk fields"
    ],
    "upscNotes": "Tigris-Euphrates upstream damming (GAP project in Turkey); Shatt al-Arab boundary; Mesopotamian marshland ecology."
  },
  {
    "id": "as-israel",
    "name": "Israel",
    "category": "country",
    "continent": "Asia",
    "coords": [
      35.21,
      31.77
    ],
    "capital": "Jerusalem",
    "description": "Eastern Mediterranean country occupying the northern segment of the Great Rift Valley (Jordan Rift).",
    "keyFacts": [
      "Dead Sea: Lowest exposed land elevation on Earth (-430 m); hypersaline water body",
      "Sea of Galilee (Lake Kinneret): Lowest freshwater lake on Earth (-214 m)",
      "Negev Desert covers southern half, terminating at Gulf of Aqaba (Red Sea) port of Eilat"
    ],
    "upscNotes": "Jordan Rift Valley geomorphology; Dead Sea desiccation; National Water Carrier drip irrigation innovations."
  },
  {
    "id": "as-japan",
    "name": "Japan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      139.69,
      35.69
    ],
    "capital": "Tokyo",
    "description": "Stratovolcanic archipelago of 6,852 islands along the Pacific Ring of Fire, dominated by four main islands.",
    "keyFacts": [
      "Four main islands from north to south: Hokkaido, Honshu, Shikoku, Kyushu",
      "Mount Fuji (3,776 m): Sacred active stratovolcano on Honshu",
      "Located at the convergence of four tectonic plates: Pacific, Philippine Sea, Eurasian, and North American (Okhotsk)",
      "Tsugaru Strait (Honshu-Hokkaido) and Kanmon Strait (Honshu-Kyushu) connected by undersea tunnels"
    ],
    "upscNotes": "Triple plate junction seismic risk; Seikan Tunnel; Kuroshio and Oyashio ocean current convergence fishery."
  },
  {
    "id": "as-jordan",
    "name": "Jordan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      35.93,
      31.95
    ],
    "capital": "Amman",
    "description": "Arab kingdom bordered by Israel, Syria, Iraq, and Saudi Arabia, with sole sea outlet at Aqaba.",
    "keyFacts": [
      "Jordan River forms western border, emptying into the hypersaline Dead Sea",
      "Port of Aqaba provides narrow 26-km access to the Red Sea",
      "Wadi Rum (Valley of the Moon): Famous desert landscape of sandstone arches and granite monoliths"
    ],
    "upscNotes": "Jordan River basin water scarcity; Dead Sea-Red Sea canal proposals; Aqaba maritime access."
  },
  {
    "id": "as-kazakhstan",
    "name": "Kazakhstan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      71.45,
      51.17
    ],
    "capital": "Astana",
    "description": "World's largest landlocked country (ninth largest overall), spanning from Volga to Altai Mountains.",
    "keyFacts": [
      "Kazakh Steppe: Vast temperate grassland making it a premier global wheat exporter",
      "Aral Sea desiccation in southwest; Lake Balkhash (half fresh, half saline)",
      "World's largest producer of uranium (~40% of global supply) and major oil producer (Kashagan, Tengiz)"
    ],
    "upscNotes": "Largest landlocked state; Caspian energy littoral; Semipalatinsk nuclear polygon; Baikonur Cosmodrome."
  },
  {
    "id": "as-kuwait",
    "name": "Kuwait",
    "category": "country",
    "continent": "Asia",
    "coords": [
      47.98,
      29.38
    ],
    "capital": "Kuwait City",
    "description": "Small petroleum-rich nation on northwestern shore of Persian Gulf at mouth of Shatt al-Arab.",
    "keyFacts": [
      "Burgan oil field: Second largest conventional oil field in the world",
      "Flat arid desert plains with zero permanent surface rivers or lakes"
    ],
    "upscNotes": "Persian Gulf petroleum geology; reverse-osmosis thermal desalination dependency."
  },
  {
    "id": "as-kyrgyzstan",
    "name": "Kyrgyzstan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      74.57,
      42.87
    ],
    "capital": "Bishkek",
    "description": "Landlocked Central Asian mountain nation dominated by the massive Tian Shan range.",
    "keyFacts": [
      "Over 85% of territory is mountainous; Jengish Chokusu (Pik Pobedy, 7,439 m) is highest peak",
      "Lake Issyk-Kul: Second largest high-altitude alpine lake in world (~1,607 m elevation), never freezes",
      "Source of Naryn River, primary headstream of the Syr Darya"
    ],
    "upscNotes": "Tian Shan alpine glaciology; Syr Darya headwaters; Kumtor high-altitude gold mine."
  },
  {
    "id": "as-laos",
    "name": "Laos",
    "category": "country",
    "continent": "Asia",
    "coords": [
      102.63,
      17.98
    ],
    "capital": "Vientiane",
    "description": "Only landlocked country in Southeast Asia, traversed by the Mekong River.",
    "keyFacts": [
      "Aims to be the 'Battery of Southeast Asia' through intensive damming of the Mekong and its tributaries",
      "Annamite Range forms rugged eastern border with Vietnam",
      "Plain of Jars: Megalithic archaeological landscape in Xiangkhoang Plateau"
    ],
    "upscNotes": "Mekong cascade dams impact on downstream delta; landlocked to land-linked transit via Boten-Vientiane railway."
  },
  {
    "id": "as-lebanon",
    "name": "Lebanon",
    "category": "country",
    "continent": "Asia",
    "coords": [
      35.5,
      33.89
    ],
    "capital": "Beirut",
    "description": "Eastern Mediterranean coastal country defined by two parallel mountain chains enclosing the Beqaa Valley.",
    "keyFacts": [
      "Mount Lebanon range along coast and Anti-Lebanon range along Syrian border",
      "Beqaa Valley: Fertile agricultural graben between the two mountain chains",
      "Litani River: Only major river in Lebanon flowing entirely within its borders"
    ],
    "upscNotes": "Beqaa Valley graben geology; Litani river hydrography; Mediterranean cedar forest relicts."
  },
  {
    "id": "as-malaysia",
    "name": "Malaysia",
    "category": "country",
    "continent": "Asia",
    "coords": [
      101.69,
      3.14
    ],
    "capital": "Kuala Lumpur (Official) / Putrajaya (Admin)",
    "description": "Southeast Asian nation split into Peninsular Malaysia and Malaysian Borneo by South China Sea.",
    "keyFacts": [
      "Peninsular Malaysia borders Thailand in north and commands Strait of Malacca in west",
      "East Malaysia (Sabah and Sarawak) on Borneo hosts Mount Kinabalu (4,095 m, highest in Malaysia)",
      "Leading global producer of palm oil, electronics, and offshore natural gas"
    ],
    "upscNotes": "Strait of Malacca maritime chokepoint; Borneo Sundaland biodiversity; Tanjung Piai southernmost mainland Asia point."
  },
  {
    "id": "as-maldives",
    "name": "Maldives",
    "category": "country",
    "continent": "Asia",
    "coords": [
      73.51,
      4.18
    ],
    "capital": "Malé",
    "description": "Archipelagic nation of 26 natural atolls (1,192 coral islands) in Indian Ocean southwest of India.",
    "keyFacts": [
      "Lowest-lying country in the world (average ground level 1.5 m above sea level)",
      "Straddles the Eight Degree Channel (separating Minicoy/India from Maldives)",
      "Formed on the Chagos-Laccadive Ridge volcanic submarine plateau"
    ],
    "upscNotes": "Climate change sea-level rise frontline; Chagos-Laccadive Ridge; Eight Degree Channel transit."
  },
  {
    "id": "as-mongolia",
    "name": "Mongolia",
    "category": "country",
    "continent": "Asia",
    "coords": [
      106.91,
      47.92
    ],
    "capital": "Ulaanbaatar",
    "description": "Vast landlocked nation between Russia and China; world's most sparsely populated sovereign state.",
    "keyFacts": [
      "Gobi Desert occupies southern third; Altai Mountains in west; steppes in east",
      "Extreme continental climate with harsh winter freeze (Zud) and hot dry summers",
      "Oyu Tolgoi: One of world's largest known copper-gold porphyry deposits"
    ],
    "upscNotes": "Extreme continentality; Gobi desertification; pastoral nomadic culture; mineral wealth (copper, coking coal)."
  },
  {
    "id": "as-myanmar",
    "name": "Myanmar (Burma)",
    "category": "country",
    "continent": "Asia",
    "coords": [
      96.08,
      19.76
    ],
    "capital": "Naypyidaw",
    "description": "Largest country in mainland Southeast Asia, centered on the fertile Irrawaddy River basin.",
    "keyFacts": [
      "Irrawaddy River: Primary artery flowing north-to-south through Mandalay and Yangon into Andaman Sea",
      "Arakan Yoma mountain chain along western border separates it from India and Bangladesh",
      "World's foremost source of imperial jadeite and rubies (Mogok Stone Tract)"
    ],
    "upscNotes": "Kaladan Multi-Modal Transit project with India; Sittwe port; Irrawaddy delta rice bowl."
  },
  {
    "id": "as-nepal",
    "name": "Nepal",
    "category": "country",
    "continent": "Asia",
    "coords": [
      85.32,
      27.72
    ],
    "capital": "Kathmandu",
    "description": "Landlocked Himalayan country hosting eight of the world's ten highest peaks, including Everest.",
    "keyFacts": [
      "Mount Everest (Sagarmatha, 8,848.86 m): Highest point on Earth on border with China (Tibet)",
      "Three physiographic zones: Terai (fertile plain), Pahad (middle hills), Himal (high mountains)",
      "Rivers (Kosi, Gandak, Karnali) cut deep transverse gorges through Himalayas into Ganges"
    ],
    "upscNotes": "Himalayan antecedent rivers; Indo-Eurasian continental collision zone; transit trade dependence on India."
  },
  {
    "id": "as-north-korea",
    "name": "North Korea (DPRK)",
    "category": "country",
    "continent": "Asia",
    "coords": [
      125.76,
      39.04
    ],
    "capital": "Pyongyang",
    "description": "Northern half of Korean Peninsula, bordered by China along Yalu and Tumen rivers.",
    "keyFacts": [
      "Paektu Mountain (Changbai): Active volcanic caldera peak (2,744 m) sacred in Korean culture",
      "Separated from South Korea by the 250-km-long Demilitarized Zone (DMZ) along 38th parallel",
      "Rich deposits of magnesite, zinc, iron ore, and rare earth minerals in northern mountains"
    ],
    "upscNotes": "Korean Peninsula DMZ geography; Yalu/Tumen border with China; mineral endowments."
  },
  {
    "id": "as-oman",
    "name": "Oman",
    "category": "country",
    "continent": "Asia",
    "coords": [
      58.59,
      23.59
    ],
    "capital": "Muscat",
    "description": "Sultanate on southeastern Arabian Peninsula commanding Strait of Hormuz and Arabian Sea.",
    "keyFacts": [
      "Musandam Peninsula exclave: Forms southern jaw of strategic Strait of Hormuz",
      "Semail Ophiolite: World's largest and best-exposed section of oceanic crust and mantle",
      "Dhofar in south catches summer monsoon (Khareef), transforming desert into lush green mist"
    ],
    "upscNotes": "Strait of Hormuz southern control; Semail Ophiolite geology; Duqm deepwater port on Indian Ocean."
  },
  {
    "id": "as-pakistan",
    "name": "Pakistan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      73.05,
      33.68
    ],
    "capital": "Islamabad",
    "description": "South Asian country centered on the Indus River basin, fronting the Arabian Sea.",
    "keyFacts": [
      "Indus River and its five Punjab tributaries (Jhelum, Chenab, Ravi, Beas, Sutlej) sustain economy",
      "K2 (Godwin-Austen, 8,611 m): Second highest mountain in the world, in Karakoram Range",
      "Gwadar Port on Makran coast developed as flagship terminal of CPEC (China-Pakistan Economic Corridor)"
    ],
    "upscNotes": "Indus Waters Treaty (1960) with India; Gwadar deepwater port; Makran subduction zone."
  },
  {
    "id": "as-palestine",
    "name": "Palestine",
    "category": "country",
    "continent": "Asia",
    "coords": [
      35.23,
      31.9
    ],
    "capital": "Jerusalem (Claimed) / Ramallah",
    "description": "UN observer state comprising the West Bank (adjacent to Jordan River) and the coastal Gaza Strip.",
    "keyFacts": [
      "West Bank occupies central Judean and Samarian hills bordering Jordan River and Dead Sea",
      "Gaza Strip fronts the southeastern Mediterranean Sea coast bordering Egypt's Sinai Peninsula"
    ],
    "upscNotes": "UN non-member observer state; Jordan Valley geography; Gaza maritime blockade."
  },
  {
    "id": "as-philippines",
    "name": "Philippines",
    "category": "country",
    "continent": "Asia",
    "coords": [
      120.98,
      14.6
    ],
    "capital": "Manila",
    "description": "Archipelago nation of 7,641 islands in the western Pacific Ocean along the Ring of Fire.",
    "keyFacts": [
      "Three island groups: Luzon (north), Visayas (central), Mindanao (south)",
      "Philippine Trench (Mindanao Trench): One of deepest oceanic trenches on Earth (~10,540 m)",
      "Active volcanoes: Mayon (perfect stratovolcano cone), Taal (caldera lake), Mount Pinatubo (1991 eruption)"
    ],
    "upscNotes": "Philippine Sea plate subduction; Western Pacific typhoon belt; South China Sea maritime disputes."
  },
  {
    "id": "as-qatar",
    "name": "Qatar",
    "category": "country",
    "continent": "Asia",
    "coords": [
      51.53,
      25.29
    ],
    "capital": "Doha",
    "description": "Peninsular nation jutting into Persian Gulf, holding world's largest non-associated gas field.",
    "keyFacts": [
      "North Field: Shared with Iran (South Pars), world's largest single natural gas condensate reservoir",
      "Leading global exporter of Liquefied Natural Gas (LNG)",
      "Entirely arid low-lying limestone desert with inland sea (Khor Al Adaid)"
    ],
    "upscNotes": "North Field LNG global market dominance; Persian Gulf peninsula geography."
  },
  {
    "id": "as-russia",
    "name": "Russia",
    "category": "country",
    "continent": "Asia",
    "coords": [
      37.62,
      55.75
    ],
    "capital": "Moscow",
    "description": "Largest country in the world by land area (~17.1M km²), spanning eleven time zones across Eurasia.",
    "keyFacts": [
      "Ural Mountains: Traditional continental boundary between Europe and Asia",
      "Lake Baikal in Siberia: Deepest (1,642 m) and oldest lake on Earth, holding 20% of unfrozen freshwater",
      "Major north-flowing Siberian rivers: Ob-Irtysh, Yenisey, Lena emptying into Arctic Ocean",
      "Mount Elbrus (5,642 m) in Caucasus is highest peak in Europe; Kamchatka Peninsula hosts active volcanoes"
    ],
    "upscNotes": "Northern Sea Route (NSR) Arctic transit; Siberian permafrost methane release; transcontinental transport (Trans-Siberian Railway)."
  },
  {
    "id": "as-saudi-arabia",
    "name": "Saudi Arabia",
    "category": "country",
    "continent": "Asia",
    "coords": [
      46.68,
      24.71
    ],
    "capital": "Riyadh",
    "description": "Occupies ~80% of Arabian Peninsula, bordered by Red Sea in west and Persian Gulf in east.",
    "keyFacts": [
      "Rub' al Khali (Empty Quarter): World's largest continuous sand desert (erg) in south",
      "Ghawar Field: World's largest conventional onshore oil field",
      "Zero permanent rivers; dependent on deep fossil aquifers and world's largest desalination capacity"
    ],
    "upscNotes": "OPEC leader; Ghawar oil province; Rub' al Khali erg geomorphology; Red Sea NEOM development."
  },
  {
    "id": "as-singapore",
    "name": "Singapore",
    "category": "country",
    "continent": "Asia",
    "coords": [
      103.82,
      1.35
    ],
    "capital": "Singapore",
    "description": "Island city-state at the southern tip of the Malay Peninsula commanding the Malacca/Singapore straits.",
    "keyFacts": [
      "Connected to Malaysia by Johor-Singapore Causeway and Malaysia-Singapore Second Link",
      "World's busiest transshipment container port and premier global maritime bunkering hub",
      "Extensive land reclamation has expanded land area by over 25% since independence (1965)"
    ],
    "upscNotes": "Malacca and Singapore straits chokepoint; global maritime transshipment hub; urban water reclamation (NEWater)."
  },
  {
    "id": "as-south-korea",
    "name": "South Korea (ROK)",
    "category": "country",
    "continent": "Asia",
    "coords": [
      126.98,
      37.57
    ],
    "capital": "Seoul",
    "description": "Southern half of Korean Peninsula, bounded by Yellow Sea in west and Sea of Japan in east.",
    "keyFacts": [
      "Taebaek Mountains form backbone along eastern coast; plains in west drained by Han River",
      "Jeju Island: Volcanic island south of peninsula hosting Hallasan (1,947 m) and lava tubes",
      "Global powerhouse in semiconductor manufacturing, shipbuilding, and automotive exports"
    ],
    "upscNotes": "Korea Strait maritime corridor; Yellow Sea mudflats (Getbol); semiconductor supply chain."
  },
  {
    "id": "as-sri-lanka",
    "name": "Sri Lanka",
    "category": "country",
    "continent": "Asia",
    "coords": [
      79.86,
      6.93
    ],
    "capital": "Sri Jayawardenepura Kotte / Colombo",
    "description": "Teardrop-shaped island nation in Indian Ocean, separated from India by Palk Strait.",
    "keyFacts": [
      "Palk Strait and Gulf of Mannar: Narrow shallow water body crossed by Adam's Bridge (Rama Setu)",
      "Central Highlands host Pidurutalagala (2,524 m) and Adam's Peak (Sri Pada)",
      "Port of Colombo is principal transshipment hub for South Asian container traffic; Hambantota Port in south"
    ],
    "upscNotes": "Palk Strait and Adam's Bridge geomorphology; Indian Ocean maritime silk route; Colombo and Hambantota ports."
  },
  {
    "id": "as-syria",
    "name": "Syria",
    "category": "country",
    "continent": "Asia",
    "coords": [
      36.28,
      33.51
    ],
    "capital": "Damascus",
    "description": "Middle Eastern nation fronting Mediterranean in west, traversed by the Euphrates River.",
    "keyFacts": [
      "Euphrates River flows southeast through country; impounded by Tabqa Dam forming Lake Assad",
      "Golan Heights in southwest occupied by Israel since 1967 (strategic high ground and water source)"
    ],
    "upscNotes": "Euphrates river water allocation; Golan Heights strategic topography; Syrian Desert transit."
  },
  {
    "id": "as-tajikistan",
    "name": "Tajikistan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      68.78,
      38.56
    ],
    "capital": "Dushanbe",
    "description": "Landlocked Central Asian country over 90% mountainous, dominated by the high Pamir Mountains.",
    "keyFacts": [
      "Pamir Knot ('Roof of the World'): Convergence of Himalayas, Karakoram, Tian Shan, Hindu Kush",
      "Ismoil Somoni Peak (7,495 m): Highest mountain in Tajikistan and former Soviet Union",
      "Nurek and Rogun dams on Vakhsh River: Among world's highest embankment dams (~335 m)"
    ],
    "upscNotes": "Pamir orogenic knot; Fedchenko Glacier (longest outside polar regions, 77 km); Amu Darya headwaters."
  },
  {
    "id": "as-thailand",
    "name": "Thailand",
    "category": "country",
    "continent": "Asia",
    "coords": [
      100.5,
      13.76
    ],
    "capital": "Bangkok",
    "description": "Heart of mainland Southeast Asia, centered on the fertile Chao Phraya River delta.",
    "keyFacts": [
      "Chao Phraya River: Lifeline of central Thailand, flowing through Bangkok into Gulf of Thailand",
      "Khorat Plateau in northeast drained by Mun and Chi rivers into Mekong",
      "Kra Isthmus: Narrow neck on Malay Peninsula (historic proposed canal bypassing Malacca)"
    ],
    "upscNotes": "Chao Phraya rice bowl delta; Kra Isthmus canal proposal; Mekong river border with Laos."
  },
  {
    "id": "as-timor-leste",
    "name": "Timor-Leste",
    "category": "country",
    "continent": "Asia",
    "coords": [
      125.57,
      -8.56
    ],
    "capital": "Dili",
    "description": "Nation occupying the eastern half of Timor island in Maritime Southeast Asia.",
    "keyFacts": [
      "Gained independence in 2002; includes Oecusse exclave and Ataúro Island",
      "Greater Sunrise and Bayu-Undan offshore petroleum fields in the Timor Sea"
    ],
    "upscNotes": "Timor Sea treaty and maritime boundary delimitation with Australia; Wallacea biodiversity."
  },
  {
    "id": "as-turkey",
    "name": "Turkey (Türkiye)",
    "category": "country",
    "continent": "Asia",
    "coords": [
      32.85,
      39.93
    ],
    "capital": "Ankara",
    "description": "Transcontinental Eurasian nation bridging Europe (Thrace) and Asia (Anatolian Peninsula).",
    "keyFacts": [
      "Turkish Straits: Bosporus and Dardanelles control sole maritime access to Black Sea from Mediterranean",
      "Taurus Mountains in south and Pontic Mountains in north enclose high Anatolian Plateau",
      "Source of Tigris and Euphrates rivers in eastern Anatolian mountains (GAP development project)",
      "Lake Van: World's largest soda/alkaline lake; Mount Ararat (5,137 m) on eastern frontier"
    ],
    "upscNotes": "Montreux Convention (1936) governing Turkish Straits; Anatolian tectonic fault lines (North Anatolian Fault); GAP dam project."
  },
  {
    "id": "as-turkmenistan",
    "name": "Turkmenistan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      58.38,
      37.96
    ],
    "capital": "Ashgabat",
    "description": "Central Asian country fronting Caspian Sea, ~70% covered by the black sands of Karakum Desert.",
    "keyFacts": [
      "Galkynysh gas field: Second largest natural gas field in the world",
      "Darvaza Gas Crater ('Gates of Hell'): Continuously burning natural gas crater ignited in 1971",
      "Garabogazköl: Vast hypersaline lagoon on Caspian Sea with major sodium sulfate deposits"
    ],
    "upscNotes": "Karakum canal diversion of Amu Darya; TAPI pipeline corridor; Caspian Sea legal status."
  },
  {
    "id": "as-uae",
    "name": "United Arab Emirates",
    "category": "country",
    "continent": "Asia",
    "coords": [
      54.37,
      24.45
    ],
    "capital": "Abu Dhabi",
    "description": "Federation of seven emirates along the southeastern coast of the Persian Gulf and Gulf of Oman.",
    "keyFacts": [
      "Seven Emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah",
      "Fujairah provides strategic bypass outlet on the Gulf of Oman outside the Strait of Hormuz",
      "Major global aviation and financial hub; world's tallest building (Burj Khalifa, 828 m)"
    ],
    "upscNotes": "Habshan-Fujairah oil pipeline bypassing Strait of Hormuz; Persian Gulf maritime infrastructure."
  },
  {
    "id": "as-uzbekistan",
    "name": "Uzbekistan",
    "category": "country",
    "continent": "Asia",
    "coords": [
      69.24,
      41.3
    ],
    "capital": "Tashkent",
    "description": "Central Asian heartland nation; one of only two doubly landlocked countries in the world.",
    "keyFacts": [
      "Doubly landlocked: Surrounded entirely by landlocked nations (Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, Turkmenistan)",
      "Fergana Valley: Densely populated agricultural basin in east shared with Kyrgyzstan and Tajikistan",
      "Aral Sea in northwest severely desiccated due to Soviet diversion of Amu Darya and Syr Darya for cotton"
    ],
    "upscNotes": "Doubly landlocked status; Aral Sea environmental catastrophe; Fergana Valley ethnic/water geography."
  },
  {
    "id": "as-vietnam",
    "name": "Vietnam",
    "category": "country",
    "continent": "Asia",
    "coords": [
      105.83,
      21.03
    ],
    "capital": "Hanoi",
    "description": "S-shaped nation in eastern Indochina Peninsula fronting the South China Sea.",
    "keyFacts": [
      "Red River Delta (Song Hong) in north around Hanoi; Mekong River Delta in south around Ho Chi Minh City",
      "Annamite Range (Truong Son) forms mountainous spine along western border with Laos",
      "Ha Long Bay: UNESCO World Heritage site famed for thousands of karst limestone pillars"
    ],
    "upscNotes": "Mekong Delta salinization and climate vulnerability; South China Sea Paracel/Spratly claims; Ha Long Bay karst."
  },
  {
    "id": "as-yemen",
    "name": "Yemen",
    "category": "country",
    "continent": "Asia",
    "coords": [
      44.21,
      15.35
    ],
    "capital": "Sanaa / Aden",
    "description": "Nation occupying southwestern corner of Arabian Peninsula, commanding Bab-el-Mandeb strait.",
    "keyFacts": [
      "Bab-el-Mandeb strait ('Gate of Tears') separates it from Djibouti/Eritrea in Africa",
      "Socotra Archipelago: UNESCO World Heritage island famed for Dragon's Blood tree and high endemism",
      "Sarat Mountains in west catch monsoon rains, supporting ancient terrace farming in Sanaa highlands"
    ],
    "upscNotes": "Bab-el-Mandeb southern Red Sea chokepoint; Socotra Island strategic location; Houthi maritime interdiction zone."
  },
  {
    "id": "oc-australia",
    "name": "Australia",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      149.13,
      -35.28
    ],
    "capital": "Canberra",
    "description": "Island continent and sixth largest country globally; dominated by arid interior (Outback).",
    "keyFacts": [
      "Great Barrier Reef: World's largest coral reef system (>2,300 km) off Queensland coast",
      "Great Dividing Range along eastern margin hosts Mount Kosciuszko (2,228 m, highest mainland peak)",
      "Murray-Darling Basin: Principal agricultural river system sustaining the Downs wheat and wool belt",
      "World leader in iron ore (Pilbara), lithium (Greenbushes), bauxite, coal, and gold exports"
    ],
    "upscNotes": "Artesian Basin hydrology; Great Barrier Reef coral bleaching; Pilbara iron ore export; critical minerals leader."
  },
  {
    "id": "oc-fiji",
    "name": "Fiji",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      178.44,
      -18.14
    ],
    "capital": "Suva",
    "description": "Melanesian archipelago of over 300 islands in South Pacific Ocean.",
    "keyFacts": [
      "Two largest islands: Viti Levu (hosts capital Suva) and Vanua Levu",
      "Substantial Indo-Fijian population descended from colonial sugarcane indentured laborers"
    ],
    "upscNotes": "South Pacific diplomatic hub; climate adaptation leadership; sugarcane economy."
  },
  {
    "id": "oc-kiribati",
    "name": "Kiribati",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      -157.36,
      1.87
    ],
    "capital": "South Tarawa",
    "description": "Only country in the world situated in all four hemispheres (North, South, East, West).",
    "keyFacts": [
      "Comprises 33 coral atolls spanning 3.5 million km² of ocean in Gilbert, Phoenix, and Line island groups",
      "Kiritimati (Christmas Island): World's largest coral atoll by land area (~388 km²)",
      "Extremely vulnerable to sea-level rise; average elevation <2 m above sea level"
    ],
    "upscNotes": "Four-hemisphere geography; exclusive economic zone (EEZ); climate relocation planning."
  },
  {
    "id": "oc-marshall-islands",
    "name": "Marshall Islands",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      171.38,
      7.11
    ],
    "capital": "Majuro",
    "description": "Micronesian nation of 29 atolls and five solitary islands in central Pacific Ocean.",
    "keyFacts": [
      "Kwajalein Atoll: World's largest coral lagoon by enclosed water area (~2,174 km²)",
      "Bikini and Enewetak atolls were sites of 67 US nuclear tests between 1946 and 1958"
    ],
    "upscNotes": "Kwajalein missile test range; nuclear testing environmental legacy; Compact of Free Association with USA."
  },
  {
    "id": "oc-micronesia",
    "name": "Micronesia (FSM)",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      158.16,
      6.92
    ],
    "capital": "Palikir",
    "description": "Federation of four island states (Yap, Chuuk, Pohnpei, Kosrae) in western Pacific Ocean.",
    "keyFacts": [
      "Nan Madol on Pohnpei: Ancient megalithic stone city built on artificial islets over coral reefs",
      "Chuuk Lagoon: Vast sheltered lagoon containing dozens of sunken WWII Japanese warships"
    ],
    "upscNotes": "Nan Madol archaeological engineering; tuna purse-seine fishery licensing."
  },
  {
    "id": "oc-nauru",
    "name": "Nauru",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      166.92,
      -0.52
    ],
    "capital": "Yaren (De facto)",
    "description": "World's smallest island nation (21 km²) and third smallest sovereign state overall.",
    "keyFacts": [
      "Raised phosphate-rock island once holding world's richest guano deposits (now heavily mined out)",
      "Interior plateau ('Topside') severely degraded by intensive surface mining"
    ],
    "upscNotes": "Extensive strip-mining environmental devastation; deep-sea nodule mining pioneer."
  },
  {
    "id": "oc-new-zealand",
    "name": "New Zealand",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      174.78,
      -41.29
    ],
    "capital": "Wellington",
    "description": "South Pacific nation comprising North Island and South Island, part of submerged continent Zealandia.",
    "keyFacts": [
      "Southern Alps on South Island host Mount Cook (Aoraki, 3,724 m) and active Alpine Fault",
      "Taupo Volcanic Zone on North Island: Highly active geothermal zone, Lake Taupo caldera",
      "Cook Strait separates North and South islands; Foveaux Strait separates South and Stewart islands"
    ],
    "upscNotes": "Zealandia microcontinent geology; Alpine Fault plate boundary; Whanganui River legal personhood."
  },
  {
    "id": "oc-palau",
    "name": "Palau",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      134.48,
      7.34
    ],
    "capital": "Ngerulmud",
    "description": "Archipelago of over 500 islands in western Pacific, pioneer in marine conservation.",
    "keyFacts": [
      "Rock Islands: Famed UNESCO mushroom-shaped limestone islets and Jellyfish Lake",
      "Created the world's first national shark sanctuary in 2009"
    ],
    "upscNotes": "Marine protected areas; Compact of Free Association with USA."
  },
  {
    "id": "oc-papua-new-guinea",
    "name": "Papua New Guinea",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      147.18,
      -9.44
    ],
    "capital": "Port Moresby",
    "description": "Occupies eastern half of New Guinea island and offshore archipelagos; one of world's most culturally diverse states.",
    "keyFacts": [
      "New Guinea Highlands: Rugged mountain spine rising to Mount Wilhelm (4,509 m)",
      "Fly River and Sepik River: Major tropical river systems draining dense rainforests",
      "Bougainville autonomous island voted for independence in 2019 referendum"
    ],
    "upscNotes": "Torres Strait boundary with Australia; Ok Tedi copper mine environmental impact; Bougainville copper."
  },
  {
    "id": "oc-samoa",
    "name": "Samoa",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      -171.76,
      -13.83
    ],
    "capital": "Apia",
    "description": "Polynesian island nation comprising two main volcanic islands: Upolu and Savai'i.",
    "keyFacts": [
      "Mount Silisili on Savai'i is the highest peak (1,858 m)",
      "Skipped a day in December 2011 by crossing west of the International Date Line to align with Australia"
    ],
    "upscNotes": "International Date Line realignment; Polynesian volcanic hotspot chain."
  },
  {
    "id": "oc-solomon-islands",
    "name": "Solomon Islands",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      159.95,
      -9.43
    ],
    "capital": "Honiara",
    "description": "Melanesian nation of six major islands and over 900 smaller islands east of Papua New Guinea.",
    "keyFacts": [
      "Guadalcanal: Major island hosting capital Honiara; historic WWII battleground",
      "Kavachi: Active shallow submarine volcano in New Georgia group ('Sharkcano')"
    ],
    "upscNotes": "Submarine volcanism; South Pacific geopolitical competition; logging and fisheries."
  },
  {
    "id": "oc-tonga",
    "name": "Tonga",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      -175.2,
      -21.13
    ],
    "capital": "Nuku'alofa",
    "description": "Polynesian kingdom of 169 islands along the subduction zone of the Tonga Trench.",
    "keyFacts": [
      "Tonga Trench: Second deepest oceanic trench in the world (~10,882 m Horizon Deep)",
      "Hunga Tonga-Hunga Ha'apai: Massive January 2022 submarine volcanic eruption triggered global tsunamis and atmospheric shockwaves"
    ],
    "upscNotes": "Hunga Tonga eruption atmospheric impact; Tonga Trench subduction tectonics."
  },
  {
    "id": "oc-tuvalu",
    "name": "Tuvalu",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      179.2,
      -8.52
    ],
    "capital": "Funafuti",
    "description": "Fourth smallest sovereign nation in the world (26 km²), comprising nine low-lying coral atolls.",
    "keyFacts": [
      "Highest elevation is merely 4.6 m above sea level",
      "Falepili Union treaty signed with Australia in 2023 providing climate mobility visas"
    ],
    "upscNotes": "Sea-level rise existence threat; digital nation preservation plan; Australia Falepili treaty."
  },
  {
    "id": "oc-vanuatu",
    "name": "Vanuatu",
    "category": "country",
    "continent": "Australia & Oceania",
    "coords": [
      168.32,
      -17.73
    ],
    "capital": "Port Vila",
    "description": "Y-shaped volcanic archipelago of 83 islands in the South Pacific Ocean.",
    "keyFacts": [
      "Mount Yasur on Tanna Island: World's most accessible continuously active volcano",
      "Regularly ranked as the world's most disaster-prone country due to cyclones and volcanic activity"
    ],
    "upscNotes": "Disaster risk management; ICJ advisory opinion initiative on climate obligations."
  },
  {
    "id": "strait-gibraltar",
    "name": "Strait of Gibraltar",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      -5.6,
      35.95
    ],
    "description": "Primary entrance to Mediterranean Sea; critical global chokepoint.",
    "keyFacts": [
      "Water Bodies Connected: Atlantic Ocean / Alboran Sea and Mediterranean Sea",
      "Landmasses Separated: Europe (Spain / Gibraltar) and Africa (Morocco / Ceuta)",
      "Narrows to just 14.3 km wide at its narrowest point"
    ],
    "upscNotes": "Commands entry to Mediterranean basin; major NATO naval chokepoint."
  },
  {
    "id": "strait-bab-el-mandeb",
    "name": "Bab-el-Mandeb",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      43.33,
      12.58
    ],
    "description": "Southern maritime chokepoint to Red Sea and Suez Canal route.",
    "keyFacts": [
      "Water Bodies Connected: Red Sea and Gulf of Aden (Arabian Sea)",
      "Landmasses Separated: Asia (Yemen) and Africa (Djibouti / Eritrea)",
      "Divided into two channels by Perim Island"
    ],
    "upscNotes": "Strategic choke point controlling Gulf of Aden - Red Sea tanker corridor."
  },
  {
    "id": "canal-suez",
    "name": "Suez Canal",
    "category": "strait",
    "continent": "Africa",
    "coords": [
      32.34,
      30.7
    ],
    "description": "Artificial sea-level canal bypassing the Cape of Good Hope.",
    "keyFacts": [
      "Water Bodies Connected: Red Sea (Gulf of Suez) and Mediterranean Sea",
      "Landmasses Separated: Cuts through Isthmus of Suez (Egypt)",
      "Opened in 1869; 193 km long with no locks"
    ],
    "upscNotes": "Handles ~12% of global trade; bypasses ~7,000 km around Africa."
  },
  {
    "id": "strait-florida",
    "name": "Straits of Florida",
    "category": "strait",
    "continent": "North America",
    "coords": [
      -80.5,
      24.0
    ],
    "description": "Main outflow corridor for Gulf Stream; connects Gulf Coast to Atlantic.",
    "keyFacts": [
      "Water Bodies Connected: Gulf of Mexico and Atlantic Ocean / Sargasso Sea",
      "Landmasses Separated: Florida Peninsula (USA) and Cuba"
    ],
    "upscNotes": "Primary conduit for Florida Current / Gulf Stream; key US shipping corridor."
  },
  {
    "id": "channel-yucatan",
    "name": "Yucatán Channel",
    "category": "strait",
    "continent": "North America",
    "coords": [
      -85.5,
      21.5
    ],
    "description": "Primary marine transit between Gulf of Mexico and Caribbean.",
    "keyFacts": [
      "Water Bodies Connected: Gulf of Mexico and Caribbean Sea",
      "Landmasses Separated: Yucatán Peninsula (Mexico) and Cuba"
    ],
    "upscNotes": "Conveys Yucatán Current northward into Gulf of Mexico Loop Current."
  },
  {
    "id": "strait-nares",
    "name": "Nares Strait",
    "category": "strait",
    "continent": "North America",
    "coords": [
      -70.0,
      80.0
    ],
    "description": "High-latitude northern polar passage.",
    "keyFacts": [
      "Water Bodies Connected: Arctic Ocean (Lincoln Sea) and Baffin Bay",
      "Landmasses Separated: Ellesmere Island (Canada) and Greenland"
    ],
    "upscNotes": "Cold Arctic water export corridor; Hans Island boundary treaty (2022)."
  },
  {
    "id": "strait-davis",
    "name": "Davis Strait",
    "category": "strait",
    "continent": "North America",
    "coords": [
      -58.0,
      67.0
    ],
    "description": "Wide subarctic strait linking Arctic waters to North Atlantic.",
    "keyFacts": [
      "Water Bodies Connected: Baffin Bay and Labrador Sea",
      "Landmasses Separated: Baffin Island (Canada) and Greenland"
    ],
    "upscNotes": "Cold Labrador Current origin; critical iceberg transit lane."
  },
  {
    "id": "strait-hudson",
    "name": "Hudson Strait",
    "category": "strait",
    "continent": "North America",
    "coords": [
      -70.0,
      62.5
    ],
    "description": "Marine gateway to Hudson Bay.",
    "keyFacts": [
      "Water Bodies Connected: Hudson Bay and Labrador Sea",
      "Landmasses Separated: Baffin Island and Ungava Peninsula (Canada)"
    ],
    "upscNotes": "Arctic grain shipping lane out of Port of Churchill; sea ice barrier."
  },
  {
    "id": "strait-juan-de-fuca",
    "name": "Strait of Juan de Fuca",
    "category": "strait",
    "continent": "North America",
    "coords": [
      -124.0,
      48.3
    ],
    "description": "International shipping lane for Vancouver and Seattle.",
    "keyFacts": [
      "Water Bodies Connected: Salish Sea / Puget Sound and Pacific Ocean",
      "Landmasses Separated: Vancouver Island (Canada) and Washington (USA)"
    ],
    "upscNotes": "International maritime boundary; Cascadia subduction zone mouth."
  },
  {
    "id": "strait-bering",
    "name": "Bering Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      -169.0,
      65.8
    ],
    "description": "Separates two continents; traversed by International Date Line.",
    "keyFacts": [
      "Water Bodies Connected: Chukchi Sea (Arctic) and Bering Sea (Pacific)",
      "Landmasses Separated: Asia (Chukotka, Russia) and North America (Alaska, USA)",
      "Only ~82 km wide; contains Diomede Islands"
    ],
    "upscNotes": "Separates Asia from North America; gateway to Northern Sea Route."
  },
  {
    "id": "canal-panama",
    "name": "Panama Canal",
    "category": "strait",
    "continent": "North America",
    "coords": [
      -79.9,
      9.1
    ],
    "description": "Lock-based inter-oceanic canal bypassing Cape Horn.",
    "keyFacts": [
      "Water Bodies Connected: Caribbean Sea (Atlantic) and Gulf of Panama (Pacific)",
      "Landmasses Separated: Bisects Isthmus of Panama",
      "Utilizes freshwater Lake Gatun to elevate ships 26 m above sea level"
    ],
    "upscNotes": "Drought in Lake Gatun impacts global transit; Neopanamax expansion locks."
  },
  {
    "id": "strait-dover",
    "name": "Strait of Dover",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      1.45,
      51.0
    ],
    "description": "Busiest international shipping lane; underlain by Channel Tunnel.",
    "keyFacts": [
      "Water Bodies Connected: English Channel and North Sea",
      "Landmasses Separated: Great Britain (UK) and mainland France",
      "Narrowest part of English Channel (~33 km wide)"
    ],
    "upscNotes": "Channel Tunnel undersea transit; world's highest traffic density strait."
  },
  {
    "id": "channel-english",
    "name": "English Channel",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      -1.0,
      50.0
    ],
    "description": "Major maritime corridor separating Britain from continental Europe.",
    "keyFacts": [
      "Water Bodies Connected: Atlantic Ocean and North Sea",
      "Landmasses Separated: Southern England (UK) and northern France"
    ],
    "upscNotes": "Dover strait entrance; tidal energy resources; historic defensive moat."
  },
  {
    "id": "canal-kiel",
    "name": "Kiel Canal",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      9.6,
      54.3
    ],
    "description": "Artificial canal bypassing the passage around Denmark.",
    "keyFacts": [
      "Water Bodies Connected: North Sea and Baltic Sea",
      "Landmasses Separated: Cuts across base of Jutland Peninsula (Germany)",
      "98 km long; saves ~460 km compared to navigating around Jutland"
    ],
    "upscNotes": "Busiest artificial canal globally by vessel transits; Baltic trade corridor."
  },
  {
    "id": "strait-messina",
    "name": "Strait of Messina",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      15.65,
      38.25
    ],
    "description": "Deep marine channel noted for tidal whirlpools.",
    "keyFacts": [
      "Water Bodies Connected: Tyrrhenian Sea and Ionian Sea",
      "Landmasses Separated: Mainland Italy (Calabria) and Sicily",
      "Associated with classical Scylla and Charybdis legends"
    ],
    "upscNotes": "Strong alternating tidal currents; proposed suspension bridge project."
  },
  {
    "id": "strait-bonifacio",
    "name": "Strait of Bonifacio",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      9.25,
      41.3
    ],
    "description": "Narrow strait separating two large Mediterranean islands.",
    "keyFacts": [
      "Water Bodies Connected: Western Mediterranean and Tyrrhenian Sea",
      "Landmasses Separated: Corsica (France) and Sardinia (Italy)",
      "Width ~11 km; notoriously hazardous rocky navigation"
    ],
    "upscNotes": "International marine sanctuary protecting cetaceans; hazardous weather gap."
  },
  {
    "id": "strait-bosporus",
    "name": "Bosporus Strait",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      29.07,
      41.1
    ],
    "description": "Strategic chokepoint; bisects Istanbul.",
    "keyFacts": [
      "Water Bodies Connected: Sea of Marmara and Black Sea",
      "Landmasses Separated: European Turkey and Asian Turkey (Anatolia)",
      "Narrowest strait used for international navigation (~700 m at narrowest)"
    ],
    "upscNotes": "Montreux Convention (1936) governs naval transit; Black Sea export gate."
  },
  {
    "id": "strait-dardanelles",
    "name": "Dardanelles Strait",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      26.4,
      40.2
    ],
    "description": "Historic maritime gateway to Sea of Marmara and Black Sea.",
    "keyFacts": [
      "Water Bodies Connected: Aegean Sea and Sea of Marmara",
      "Landmasses Separated: Gallipoli Peninsula (Europe) and Asian Turkey (Hellespont)"
    ],
    "upscNotes": "1915 Gallipoli campaign site; 1915 Çanakkale suspension bridge."
  },
  {
    "id": "strait-kerch",
    "name": "Strait of Kerch",
    "category": "strait",
    "continent": "Europe",
    "coords": [
      36.6,
      45.3
    ],
    "description": "Chokepoint connecting Sea of Azov to the Black Sea; site of Crimean Bridge.",
    "keyFacts": [
      "Water Bodies Connected: Black Sea and Sea of Azov",
      "Landmasses Separated: Crimean Peninsula and Taman Peninsula (Russia)"
    ],
    "upscNotes": "Crimean Bridge geopolitical chokepoint; access to Don river basin ports."
  },
  {
    "id": "strait-tatar",
    "name": "Tatar Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      141.5,
      50.0
    ],
    "description": "Longest and narrowest strait in northern Asian waters.",
    "keyFacts": [
      "Water Bodies Connected: Sea of Okhotsk and Sea of Japan",
      "Landmasses Separated: Russian Far East mainland and Sakhalin Island",
      "Length ~660 km; freezes over in winter"
    ],
    "upscNotes": "Amur River mouth outflow; Sakhalin rail tunnel proposals."
  },
  {
    "id": "strait-la-perouse",
    "name": "La Pérouse (Soya) Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      142.0,
      45.7
    ],
    "description": "Separates Russian and Japanese territories.",
    "keyFacts": [
      "Water Bodies Connected: Sea of Japan and Sea of Okhotsk",
      "Landmasses Separated: Sakhalin Island (Russia) and Hokkaido (Japan)",
      "Width ~43 km; depth 20-40 m"
    ],
    "upscNotes": "Cold Liman Current and warm Tsushima Current interactions."
  },
  {
    "id": "strait-korea",
    "name": "Tsushima / Korea Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      129.5,
      34.5
    ],
    "description": "Major naval transit lane between Yellow/East China seas and Sea of Japan.",
    "keyFacts": [
      "Water Bodies Connected: Sea of Japan and East China Sea",
      "Landmasses Separated: Korean Peninsula and Kyushu/Honshu (Japan)",
      "Divided by Tsushima Island into western (Korea Strait) and eastern (Tsushima Strait) channels"
    ],
    "upscNotes": "1905 Battle of Tsushima; Tsushima Current branch of Kuroshio."
  },
  {
    "id": "strait-taiwan",
    "name": "Taiwan (Formosa) Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      119.5,
      24.5
    ],
    "description": "Crucial international shipping lane and geopolitical flashpoint.",
    "keyFacts": [
      "Water Bodies Connected: East China Sea and South China Sea",
      "Landmasses Separated: Mainland China (Fujian) and Taiwan",
      "Average width ~180 km; shallow continental shelf depth (<100 m)"
    ],
    "upscNotes": "Major global trade artery; semiconductor supply transit; median line."
  },
  {
    "id": "strait-luzon",
    "name": "Luzon Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      121.5,
      20.5
    ],
    "description": "Deep passage vital for international shipping and undersea data cables.",
    "keyFacts": [
      "Water Bodies Connected: South China Sea and Philippine Sea",
      "Landmasses Separated: Taiwan and Luzon (Philippines)",
      "Features internal solitary ocean waves over 200 m amplitude"
    ],
    "upscNotes": "Subsea fiber-optic cable convergence hub; Kuroshio current intrusion."
  },
  {
    "id": "strait-malacca",
    "name": "Strait of Malacca",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      101.5,
      2.5
    ],
    "description": "Principal global maritime chokepoint between Indian and Pacific oceans.",
    "keyFacts": [
      "Water Bodies Connected: Andaman Sea and South China Sea",
      "Landmasses Separated: Malay Peninsula (Malaysia) and Sumatra (Indonesia)",
      "Handles ~25% of global trade and ~80% of China's oil imports (Malacca Dilemma)"
    ],
    "upscNotes": "Malacca Dilemma; Philips Channel bottleneck (2.8 km wide); piratical history."
  },
  {
    "id": "strait-sunda",
    "name": "Sunda Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      105.7,
      -5.9
    ],
    "description": "Volcanic strait hosting Krakatoa; secondary Indonesian chokepoint.",
    "keyFacts": [
      "Water Bodies Connected: Java Sea and Indian Ocean",
      "Landmasses Separated: Sumatra and Java (Indonesia)",
      "Contains volcanic island of Krakatoa (1883 cataclysmic eruption)"
    ],
    "upscNotes": "Alternative bypass to Malacca for deep-draft capesize vessels; volcanic hazard."
  },
  {
    "id": "strait-makassar",
    "name": "Makassar Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      118.5,
      -1.0
    ],
    "description": "Deepwater transit lane through central Indonesia.",
    "keyFacts": [
      "Water Bodies Connected: Celebes Sea and Java / Flores Sea",
      "Landmasses Separated: Borneo (Kalimantan) and Sulawesi (Indonesia)",
      "Part of Indonesian Throughflow (ITF) transferring Pacific water to Indian Ocean"
    ],
    "upscNotes": "Deepwater transit route for submarines and VLCC supertankers; Wallace Line."
  },
  {
    "id": "strait-johor",
    "name": "Strait of Johor",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      103.8,
      1.45
    ],
    "description": "Narrow body of water crossed by the Johor-Singapore Causeway.",
    "keyFacts": [
      "Water Bodies Connected: Western and eastern approaches to Singapore",
      "Landmasses Separated: Malay Peninsula (Malaysia) and Singapore",
      "Crossed by 1-km-long Johor-Singapore Causeway"
    ],
    "upscNotes": "Busiest international border crossing in world (Woodlands-Johor Bahru)."
  },
  {
    "id": "strait-palk",
    "name": "Palk Strait",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      79.7,
      9.5
    ],
    "description": "Shallow historical strait containing Adam's Bridge.",
    "keyFacts": [
      "Water Bodies Connected: Palk Bay and Bay of Bengal",
      "Landmasses Separated: Tamil Nadu (India) and Northern Province (Sri Lanka)",
      "Contains chain of limestone shoals known as Adam's Bridge (Rama Setu)"
    ],
    "upscNotes": "Sethusamudram shipping canal proposal; shallow depth (<10 m) prevents large ship transit."
  },
  {
    "id": "strait-hormuz",
    "name": "Strait of Hormuz",
    "category": "strait",
    "continent": "Asia",
    "coords": [
      56.4,
      26.5
    ],
    "description": "Premier petroleum chokepoint handling ~20% of global oil shipments.",
    "keyFacts": [
      "Water Bodies Connected: Persian Gulf and Gulf of Oman (Arabian Sea)",
      "Landmasses Separated: Iran and Musandam Peninsula (Oman / UAE)",
      "Navigable shipping lanes are only two 3-km-wide channels separated by 3-km buffer"
    ],
    "upscNotes": "Global oil lifeline (~21 million barrels/day); Iranian naval interdiction risk."
  },
  {
    "id": "strait-torres",
    "name": "Torres Strait",
    "category": "strait",
    "continent": "Australia & Oceania",
    "coords": [
      142.5,
      -10.4
    ],
    "description": "Shallow, reef-strewn international waterway.",
    "keyFacts": [
      "Water Bodies Connected: Arafura Sea and Coral Sea (Pacific)",
      "Landmasses Separated: Cape York (Australia) and New Guinea (Papua New Guinea)",
      "Dotted with over 270 islands (Torres Strait Islanders)"
    ],
    "upscNotes": "Submerged continental shelf bridge during Last Glacial Maximum (Sahul)."
  },
  {
    "id": "strait-bass",
    "name": "Bass Strait",
    "category": "strait",
    "continent": "Australia & Oceania",
    "coords": [
      146.0,
      -39.5
    ],
    "description": "Broad, shallow strait separating Tasmania from the mainland.",
    "keyFacts": [
      "Water Bodies Connected: Great Australian Bight / Southern Ocean and Tasman Sea",
      "Landmasses Separated: Victoria (mainland Australia) and Tasmania",
      "Hosts rich offshore oil and natural gas fields (Gippsland Basin)"
    ],
    "upscNotes": "Roaring Forties westerly winds create notoriously rough shallow seas; oil basin."
  },
  {
    "id": "strait-cook",
    "name": "Cook Strait",
    "category": "strait",
    "continent": "Australia & Oceania",
    "coords": [
      174.5,
      -41.3
    ],
    "description": "Narrow windy strait bisecting New Zealand; connects to Wellington.",
    "keyFacts": [
      "Water Bodies Connected: Tasman Sea and South Pacific Ocean",
      "Landmasses Separated: North Island and South Island (New Zealand)",
      "Named after James Cook; narrowest width ~22 km"
    ],
    "upscNotes": "Funnel effect produces world's most wind-swept maritime narrows; inter-island ferries."
  },
  {
    "id": "strait-foveaux",
    "name": "Foveaux Strait",
    "category": "strait",
    "continent": "Australia & Oceania",
    "coords": [
      168.0,
      -46.7
    ],
    "description": "Rough, shallow southern strait of New Zealand.",
    "keyFacts": [
      "Water Bodies Connected: Tasman Sea and South Pacific Ocean",
      "Landmasses Separated: South Island and Stewart Island (New Zealand)",
      "World-renowned for Bluff oyster fisheries"
    ],
    "upscNotes": "Subantarctic storm track influence; Roaring Forties sea conditions."
  },
  {
    "id": "mountain-andes",
    "name": "Andes Mountain Range",
    "category": "mountain",
    "continent": "South America",
    "coords": [
      -71.0,
      -21.0
    ],
    "description": "Longest continental mountain chain on Earth (~7,200+ km); subduction of Nazca Plate.",
    "keyFacts": [
      "Location: Venezuela, Colombia, Ecuador, Peru, Bolivia, Chile, Argentina",
      "Tectonic Type: Cenozoic Fold Mountains formed by Nazca Plate subduction under South American Plate",
      "Hosts highest volcano in world (Ojos del Salado) and highest peak in Western Hemisphere (Aconcagua)"
    ],
    "upscNotes": "Longest fold mountain chain; Altiplano plateau; mineral richness (copper, lithium)."
  },
  {
    "id": "peak-aconcagua",
    "name": "Mount Aconcagua",
    "category": "mountain",
    "continent": "South America",
    "coords": [
      -70.01,
      -32.65
    ],
    "description": "Highest peak in South America, Western Hemisphere, and Southern Hemisphere (~6,961 m).",
    "keyFacts": [
      "Location: Argentina (Mendoza Province) in Principal Cordillera of Andes",
      "Extinct volcanic peak formed by volcanic activity and tectonic uplift",
      "Highest peak in world outside the Himalayas and Karakoram ranges"
    ],
    "upscNotes": "Highest mountain outside Asia; Seven Summits pinnacle of Western Hemisphere."
  },
  {
    "id": "peak-ojos-del-salado",
    "name": "Ojos del Salado",
    "category": "mountain",
    "continent": "South America",
    "coords": [
      -68.54,
      -27.11
    ],
    "description": "Highest active volcano on Earth (~6,893 m).",
    "keyFacts": [
      "Location: Argentina-Chile border in the Atacama Desert region of Andes",
      "Active stratovolcano with fumarolic activity; second highest peak in Andes",
      "Hosts world's highest permanent crater lake (~6,390 m)"
    ],
    "upscNotes": "Highest volcano on Earth; hyper-arid volcanic glaciology."
  },
  {
    "id": "peak-chimborazo",
    "name": "Mount Chimborazo",
    "category": "mountain",
    "continent": "South America",
    "coords": [
      -78.81,
      -1.47
    ],
    "description": "Farthest point on Earth's surface from Earth's center due to equatorial bulge (~6,263 m).",
    "keyFacts": [
      "Location: Ecuador (Cordillera Occidental of Andes)",
      "Inactive stratovolcano; summit is 6,384.4 km from Earth's center (>2 km farther than Everest)",
      "Sits merely 1° south of the Equator"
    ],
    "upscNotes": "Earth oblate spheroid equatorial bulge benchmark; Alexander von Humboldt historic ascent."
  },
  {
    "id": "peak-cotopaxi",
    "name": "Mount Cotopaxi",
    "category": "mountain",
    "continent": "South America",
    "coords": [
      -78.44,
      -0.68
    ],
    "description": "One of the highest active volcanoes in the world (~5,897 m).",
    "keyFacts": [
      "Location: Ecuador (Cordillera Real of Andes)",
      "Almost symmetrical stratovolcano cone; frequent explosive eruptions",
      "Part of the Pacific Ring of Fire volcanic arc along Avenue of the Volcanoes"
    ],
    "upscNotes": "Avenue of the Volcanoes; lahar hazard to Quito metropolitan area."
  },
  {
    "id": "peak-huascaran",
    "name": "Mount Huascarán",
    "category": "mountain",
    "continent": "South America",
    "coords": [
      -77.61,
      -9.12
    ],
    "description": "Highest point in Peru (~6,768 m).",
    "keyFacts": [
      "Location: Peru (Cordillera Blanca in western Andes)",
      "Granitic batholith uplifted peak in the highest tropical mountain range in the world",
      "Site of catastrophic 1970 Ancash earthquake avalanche burying town of Yungay"
    ],
    "upscNotes": "Highest tropical mountain range; glacial retreat in Cordillera Blanca."
  },
  {
    "id": "mountain-atlas",
    "name": "Atlas Mountains",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      -5.0,
      31.5
    ],
    "description": "Northwest African mountain barrier; highest peak is Jebel Toubkal (Morocco, ~4,167 m).",
    "keyFacts": [
      "Location: Morocco, Algeria, Tunisia",
      "Cenozoic fold mountains formed by collision of African and Eurasian plates",
      "Acts as formidable climatic barrier separating Mediterranean coast from the Sahara Desert"
    ],
    "upscNotes": "Maghreb climatic divide; Toubkal national park; alpine fold system in Africa."
  },
  {
    "id": "peak-toubkal",
    "name": "Jebel Toubkal",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      -7.92,
      31.06
    ],
    "description": "Highest peak in the Atlas Mountains and all of North Africa (~4,167 m).",
    "keyFacts": [
      "Location: Southwestern Morocco (High Atlas range)",
      "Composed of volcanic and metamorphic rocks deeply carved by Quaternary glaciers"
    ],
    "upscNotes": "Apex of the High Atlas; prominent winter snowpack supporting river systems."
  },
  {
    "id": "mountain-ahaggar",
    "name": "Ahaggar Mountains",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      5.5,
      23.3
    ],
    "description": "Prominent Saharan highland plateau.",
    "keyFacts": [
      "Location: Southern Algeria (Central Sahara)",
      "Crystalline Precambrian basement shield capped by dramatic tertiary volcanic plugs and basalt sheets",
      "Hosts Mount Tahat (~2,908 m), highest peak in Algeria; home to Tuareg people"
    ],
    "upscNotes": "Precambrian Saharan shield geology; basaltic landscape relict."
  },
  {
    "id": "mountain-tibesti",
    "name": "Tibesti Mountains",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      17.5,
      20.8
    ],
    "description": "High volcanic range in central Sahara.",
    "keyFacts": [
      "Location: Northern Chad / Southern Libya",
      "Volcanic massif rising sharply from the surrounding desert plains",
      "Hosts Emi Koussi (~3,415 m), highest mountain in the Sahara Desert and in Chad"
    ],
    "upscNotes": "Highest volcanic peak in Sahara (Emi Koussi); Trou au Natron caldera."
  },
  {
    "id": "peak-ras-dashen",
    "name": "Ras Dashen",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      38.37,
      13.24
    ],
    "description": "Highest peak in Ethiopia (~4,550 m); source of Atbara headwaters.",
    "keyFacts": [
      "Location: Northern Ethiopia (Simien Mountains National Park)",
      "Massive basaltic volcanic shield dissected by sheer canyons and gorges",
      "Eastern headwaters contribute to Tekezé/Atbara river flowing into Nile"
    ],
    "upscNotes": "Simien Mountains UNESCO site; endemic Walia ibex and Gelada baboons; Nile tributary source."
  },
  {
    "id": "peak-mount-kenya",
    "name": "Mount Kenya",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      37.31,
      -0.15
    ],
    "description": "Second-highest peak in Africa (~5,199 m); sits on the Equator.",
    "keyFacts": [
      "Location: Central Kenya",
      "Extinct stratovolcano with deeply eroded volcanic plug peaks (Batian, Nelion)",
      "Equatorial glaciers rapidly retreating due to climate change; UNESCO World Heritage site"
    ],
    "upscNotes": "Equatorial glaciation; water tower for Tana and Ewaso Ng'iro rivers."
  },
  {
    "id": "peak-mount-kilimanjaro",
    "name": "Mount Kilimanjaro",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      37.35,
      -3.07
    ],
    "description": "Highest peak in Africa (~5,895 m at Kibo cone); highest free-standing mountain in the world.",
    "keyFacts": [
      "Location: Northeastern Tanzania near Kenyan border",
      "Free-standing volcanic massif composed of three volcanic cones: Kibo, Mawenzi, Shira",
      "Kibo cone retains famed equatorial glaciers (Furtwängler Glacier) predicted to disappear"
    ],
    "upscNotes": "Highest free-standing mountain on Earth; retreating summit ice cap; Seven Summits icon."
  },
  {
    "id": "mountain-drakensberg",
    "name": "Drakensberg Mountains",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      29.3,
      -29.3
    ],
    "description": "Ancient Basaltic Escarpment facing the Indian Ocean.",
    "keyFacts": [
      "Location: South Africa and Lesotho",
      "Great Escarpment composed of thick plateau basalts (Karoo Supergroup)",
      "Tugela Falls: Second highest waterfall in the world (~948 m) drops from the Amphitheatre cliff"
    ],
    "upscNotes": "Tugela Falls; Lesotho Highlands Water Project; source of Orange and Vaal rivers."
  },
  {
    "id": "peak-mount-cameroon",
    "name": "Mount Cameroon",
    "category": "mountain",
    "continent": "Africa",
    "coords": [
      9.17,
      4.22
    ],
    "description": "Highest peak in West Africa (~4,040 m); part of Cameroon Volcanic Line.",
    "keyFacts": [
      "Location: Coastal Cameroon along Gulf of Guinea",
      "Active stratovolcano with frequent effusive basaltic eruptions",
      "Rises directly from sea level to over 4,000 m; one of the wettest places on Earth (Debundscha)"
    ],
    "upscNotes": "Cameroon Volcanic Line hot line; extreme orographic rainfall (>10,000 mm/year)."
  },
  {
    "id": "mountain-brooks-range",
    "name": "Brooks Range",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -152.0,
      68.2
    ],
    "description": "Entirely north of the Arctic Circle.",
    "keyFacts": [
      "Location: Northern Alaska (USA)",
      "Ancient Paleozoic fold mountain chain separating Arctic tundra from interior Yukon basin",
      "Continental divide between Arctic Ocean drainage and Pacific (Bering) drainage"
    ],
    "upscNotes": "Arctic National Wildlife Refuge (ANWR); northernmost mountain chain in North America."
  },
  {
    "id": "mountain-alaska-range",
    "name": "Alaska Range",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -151.0,
      63.0
    ],
    "description": "Hosts Mount Denali (McKinley), the highest peak in North America (~6,190 m).",
    "keyFacts": [
      "Location: Southern Alaska (USA)",
      "Arcuate mountain chain formed by Pacific Plate subduction along Aleutian Trench",
      "Extensively glaciated (Kahiltna, Ruth glaciers)"
    ],
    "upscNotes": "Contains Denali; greatest topographic relief on land from base to summit (~5,500 m)."
  },
  {
    "id": "peak-denali",
    "name": "Mount Denali (McKinley)",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -151.0,
      63.07
    ],
    "description": "Highest peak in North America (~6,190 m).",
    "keyFacts": [
      "Location: Alaska Range, Alaska (USA)",
      "Granitic pluton uplifted by strike-slip and convergent faulting along Denali Fault",
      "Third most prominent peak on Earth after Everest and Aconcagua"
    ],
    "upscNotes": "North American apex; Seven Summits; extreme arctic sub-zero climbing conditions."
  },
  {
    "id": "peak-mount-logan",
    "name": "Mount Logan",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -140.4,
      60.57
    ],
    "description": "Highest peak in Canada; second highest in North America (~5,959 m).",
    "keyFacts": [
      "Location: Saint Elias Mountains, Yukon, Canada",
      "Massive granitic block with largest base circumference of any non-volcanic mountain",
      "Surrounded by vast icefields of Kluane National Park"
    ],
    "upscNotes": "Canadian highest peak; Saint Elias orogeny; world's largest non-polar icefield."
  },
  {
    "id": "mountain-rocky",
    "name": "Rocky Mountains",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -110.0,
      44.0
    ],
    "description": "Massive continental backbone; highest peak is Mount Elbert (Colorado, ~4,401 m).",
    "keyFacts": [
      "Location: Canada (British Columbia, Alberta) and USA (Idaho, Montana, Wyoming, Colorado, New Mexico)",
      "Cenozoic fold mountains formed during Laramide Orogeny (~80-55 Ma)",
      "Forms Great Continental Divide of North America separating Atlantic and Pacific drainages"
    ],
    "upscNotes": "Laramide orogeny low-angle subduction; Continental Divide Trail; national parks (Yellowstone, Banff)."
  },
  {
    "id": "peak-mount-elbert",
    "name": "Mount Elbert",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -106.44,
      39.12
    ],
    "description": "Highest peak in the Rocky Mountains and highest in Colorado (~4,401 m).",
    "keyFacts": [
      "Location: Sawatch Range of the Rocky Mountains, Colorado (USA)",
      "Classic rounded summit shaped by Pleistocene alpine glaciation"
    ],
    "upscNotes": "Highest peak of North American Rockies; headwaters of Arkansas River."
  },
  {
    "id": "mountain-appalachian",
    "name": "Appalachian Mountains",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -80.0,
      37.0
    ],
    "description": "Rich in coking coal; associated with Pittsburgh iron and steel basin.",
    "keyFacts": [
      "Location: Eastern USA and Atlantic Canada",
      "Ancient Paleozoic fold/residual mountain system formed during Alleghenian Orogeny (~480 Ma)",
      "Heavily eroded into parallel ridges and valleys (Ridge and Valley Province)"
    ],
    "upscNotes": "Anthracite and bituminous coal deposits; historic industrial rust belt catalyst; folded strata."
  },
  {
    "id": "mountain-sierra-nevada",
    "name": "Sierra Nevada",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -119.0,
      37.0
    ],
    "description": "Hosts Mount Whitney, highest peak in contiguous USA (~4,421 m).",
    "keyFacts": [
      "Location: California, USA",
      "Massive tilted fault-block mountain (horst) composed of granitic batholiths",
      "Yosemite Valley: World-famous glacial U-shaped valley with sheer granite cliffs (El Capitan)"
    ],
    "upscNotes": "Asymmetrical fault-block uplift; rain shadow creating Great Basin desert; California water source."
  },
  {
    "id": "peak-mount-whitney",
    "name": "Mount Whitney",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -118.29,
      36.58
    ],
    "description": "Highest summit in the contiguous United States (~4,421 m).",
    "keyFacts": [
      "Location: Sierra Nevada, California (USA)",
      "Situated just 136 km northwest of Badwater Basin in Death Valley (lowest point in North America)"
    ],
    "upscNotes": "Extreme proximity to Death Valley depression; granitic batholith geology."
  },
  {
    "id": "mountain-cascade",
    "name": "Cascade Range",
    "category": "mountain",
    "continent": "North America",
    "coords": [
      -121.7,
      46.8
    ],
    "description": "Volcanic arc featuring Mount Rainier, Mount Shasta, and Mount Saint Helens.",
    "keyFacts": [
      "Location: Pacific Northwest (British Columbia, Washington, Oregon, California)",
      "Active continental volcanic arc formed by subduction of Juan de Fuca Plate under North American Plate",
      "Mount Rainier (~4,392 m) is the highest and most topographically prominent volcano in the range"
    ],
    "upscNotes": "Cascadia subduction zone volcanism; 1980 Mount St. Helens lateral blast eruption; crater lake."
  },
  {
    "id": "mountain-scandinavian",
    "name": "Scandinavian Mountains",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      13.0,
      63.0
    ],
    "description": "Glaciated spine of Scandinavia (Kjølen).",
    "keyFacts": [
      "Location: Norway and Sweden",
      "Ancient Caledonian orogenic residual range uplifted in Cenozoic",
      "Steep western drop into Norwegian fjords; gentle eastern slope into Baltic basin"
    ],
    "upscNotes": "Caledonian orogeny relict; glacial cirque and fjord geomorphology; iron ore in Kiruna."
  },
  {
    "id": "mountain-black-forest",
    "name": "Black Forest (Schwarzwald)",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      8.2,
      48.0
    ],
    "description": "Fault-Block Mountain bordered by Rhine Rift Valley; source of Danube River.",
    "keyFacts": [
      "Location: Southwestern Germany (Baden-Württemberg)",
      "Horst block facing the Vosges Mountains across the Rhine Graben rift valley",
      "Headstream confluence of Brigach and Breg rivers forms the Danube River"
    ],
    "upscNotes": "Rhine Graben rift valley horst-graben tectonics; source of the Danube."
  },
  {
    "id": "mountain-vosges",
    "name": "Vosges Mountains",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      7.0,
      48.1
    ],
    "description": "Fault-Block Mountain facing Black Forest across the Rhine Graben.",
    "keyFacts": [
      "Location: Northeastern France (Grand Est)",
      "Western shoulder of the Rhine Rift Valley; crystalline granitic core with rounded summits (ballons)"
    ],
    "upscNotes": "Mirror horst to Black Forest; Alsace wine rain-shadow climate."
  },
  {
    "id": "mountain-pyrenees",
    "name": "Pyrenees",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      0.5,
      42.7
    ],
    "description": "Forms natural frontier of Iberian Peninsula; encloses Andorra.",
    "keyFacts": [
      "Location: France-Spain border (also enclosing microstate of Andorra)",
      "Cenozoic fold mountains formed by collision of microplate Iberia with Eurasian plate",
      "Pico Aneto (~3,404 m) is the highest peak in the range"
    ],
    "upscNotes": "Iberian boundary barrier; Cirque de Gavarnie glacial amphitheatre; limestone karst."
  },
  {
    "id": "mountain-alps",
    "name": "The Alps",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      8.5,
      46.5
    ],
    "description": "Preeminent European fold range; highest peak is Mont Blanc (~4,809 m, France/Italy).",
    "keyFacts": [
      "Location: France, Switzerland, Monaco, Italy, Liechtenstein, Austria, Germany, Slovenia",
      "Cenozoic Alpine Orogeny formed by collision of African and Eurasian tectonic plates",
      "Complex nappe thrust-sheet structures and classic glaciated valleys (Matterhorn horn)"
    ],
    "upscNotes": "Classic nappe tectonics; horn, arête, and U-shaped valley type locality; trans-European rail tunnels."
  },
  {
    "id": "peak-mont-blanc",
    "name": "Mont Blanc (Monte Bianco)",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      6.86,
      45.83
    ],
    "description": "Highest mountain in the Alps and in Western Europe (~4,809 m).",
    "keyFacts": [
      "Location: France-Italy border in the Graian Alps",
      "Massive crystalline granitic dome covered by perennial glaciers",
      "Mont Blanc Tunnel under the mountain connects Chamonix (France) to Courmayeur (Italy)"
    ],
    "upscNotes": "Western European topographic apex; Mont Blanc Tunnel transport axis."
  },
  {
    "id": "mountain-apennines",
    "name": "Apennines",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      13.5,
      42.4
    ],
    "description": "Limestone Fold / Karst Range forming the spine of Italian peninsula.",
    "keyFacts": [
      "Location: Entire length of peninsular Italy",
      "Fold and thrust belt formed by subduction of Adriatic microplate",
      "Corno Grande (~2,912 m) in Gran Sasso massif is highest peak, hosting Calderone glacier"
    ],
    "upscNotes": "Active seismic zone in central Italy (L'Aquila, Amatrice); karst aquifers."
  },
  {
    "id": "peak-mount-vesuvius",
    "name": "Mount Vesuvius",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      14.43,
      40.82
    ],
    "description": "Active/Dormant Stratovolcano overlooking Bay of Naples; destroyed Pompeii.",
    "keyFacts": [
      "Location: Mainland Italy (Campania region)",
      "Complex stratovolcano (somma-volcano) within the caldera of older Mount Somma",
      "Historic 79 AD plinian eruption buried Roman cities of Pompeii and Herculaneum"
    ],
    "upscNotes": "Type locality for Plinian explosive eruptions; high-density hazard zone in Naples."
  },
  {
    "id": "peak-mount-etna",
    "name": "Mount Etna",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      15.0,
      37.75
    ],
    "description": "Highest active volcano in Europe outside Caucasus (~3,357 m).",
    "keyFacts": [
      "Location: Eastern coast of Sicily, Italy",
      "Europe's most active stratovolcano, in almost continuous eruptive state",
      "Formed at complex tectonic convergence of African Plate and Eurasian Plate"
    ],
    "upscNotes": "Basaltic effusive and explosive volcanism; fertile volcanic volcanic viticulture."
  },
  {
    "id": "peak-stromboli",
    "name": "Stromboli",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      15.21,
      38.79
    ],
    "description": "Continuously Active Volcano known as the 'Lighthouse of the Mediterranean'.",
    "keyFacts": [
      "Location: Aeolian Islands north of Sicily, Italy",
      "Continuously erupting for over 2,000 years with rhythmic gas bursts ejecting glowing cinders",
      "Sciara del Fuoco: Steep scar on northwestern flank where volcanic debris tumbles into sea"
    ],
    "upscNotes": "Type locality for Strombolian volcanic activity; Aeolian volcanic arc."
  },
  {
    "id": "mountain-caucasus",
    "name": "Caucasus Mountains",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      44.0,
      42.5
    ],
    "description": "Cenozoic Fold Mountains hosting Mount Elbrus (~5,642 m, Russia), highest peak in Europe.",
    "keyFacts": [
      "Location: Russia, Georgia, Azerbaijan, Armenia",
      "Alpine fold belt between Black Sea and Caspian Sea, forming boundary between Europe and Asia",
      "Greater Caucasus in north and Lesser Caucasus in south separated by Transcaucasian depression"
    ],
    "upscNotes": "Continental divide; Mount Elbrus (Europe's highest summit); transit passes (Darial Gorge)."
  },
  {
    "id": "peak-mount-elbrus",
    "name": "Mount Elbrus",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      42.44,
      43.35
    ],
    "description": "Highest peak in Europe and highest in Russia (~5,642 m).",
    "keyFacts": [
      "Location: Greater Caucasus range, Kabardino-Balkaria / Karachay-Cherkessia, Russia",
      "Dormant twin-coned stratovolcano with permanent ice cap feeding 22 major glaciers",
      "Highest of the Seven Summits of Europe"
    ],
    "upscNotes": "European continental apex; Seven Summits; glaciated volcanic dome."
  },
  {
    "id": "mountain-ural",
    "name": "Ural Mountains",
    "category": "mountain",
    "continent": "Europe",
    "coords": [
      60.0,
      60.0
    ],
    "description": "Hercynian Residual Range; historic continental divide between Europe and Asia.",
    "keyFacts": [
      "Location: Western Russia (running north-south from Arctic Ocean to Kazakhstan)",
      "Ancient Paleozoic fold belt formed during Uralian Orogeny (~300 Ma)",
      "Exceptionally rich in iron ore, copper, platinum, gold, and gems (Magnitogorsk iron hub)"
    ],
    "upscNotes": "Traditional Europe-Asia boundary; Magnitogorsk industrial core; residual mountain chain."
  },
  {
    "id": "mountain-taurus-pontic",
    "name": "Taurus & Pontic Ranges",
    "category": "mountain",
    "continent": "Asia",
    "coords": [
      34.0,
      37.5
    ],
    "description": "Fold Mountains enclosing the high interior Anatolian Plateau.",
    "keyFacts": [
      "Location: Southern (Taurus) and Northern (Pontic) Turkey",
      "Part of the extensive Alpide Himalayan mountain belt",
      "Taurus drains south to Mediterranean; Pontic drops steeply to Black Sea"
    ],
    "upscNotes": "Anatolian Plateau enclosure; source of Tigris and Euphrates headwaters."
  },
  {
    "id": "peak-mount-damavand",
    "name": "Mount Damavand",
    "category": "mountain",
    "continent": "Asia",
    "coords": [
      52.11,
      35.95
    ],
    "description": "Highest peak in Iran and highest volcano in Asia (~5,610 m).",
    "keyFacts": [
      "Location: Alborz Range, northern Iran overlooking Caspian Sea",
      "Potentially active stratovolcano with sulfur fumaroles near summit crater",
      "Highest volcano in Asia and part of the Volcanic Seven Summits"
    ],
    "upscNotes": "Asian volcanic apex (Volcanic Seven Summits); Iranian national cultural icon."
  },
  {
    "id": "mountain-alborz-zagros",
    "name": "Alborz & Zagros Ranges",
    "category": "mountain",
    "continent": "Asia",
    "coords": [
      50.0,
      33.5
    ],
    "description": "Alborz fronts Caspian Sea; Zagros fronts Persian Gulf.",
    "keyFacts": [
      "Location: Northern (Alborz) and Western/Southern (Zagros) Iran",
      "Zagros fold-and-thrust belt is world's premier example of whaleback anticline hydrocarbon traps",
      "Enclose the arid, endorheic Central Iranian Plateau"
    ],
    "upscNotes": "Zagros anticlines petroleum traps; Alborz rain shadow; Qanat irrigation systems."
  },
  {
    "id": "mountain-hindu-kush",
    "name": "Hindu Kush",
    "category": "mountain",
    "continent": "Asia",
    "coords": [
      71.0,
      36.0
    ],
    "description": "Radiates from Pamir Knot; termed the Third Pole due to dense glacial ice.",
    "keyFacts": [
      "Location: Afghanistan, Pakistan, and Tajikistan",
      "Tirich Mir (~7,708 m) in Chitral, Pakistan is the highest peak in the range",
      "Historically famous mountain passes: Khyber Pass, Salang Pass"
    ],
    "upscNotes": "Third Pole glaciology; Khyber Pass historical invasion corridor; Indus basin headwaters."
  },
  {
    "id": "mountain-pamir-knot",
    "name": "Pamir Knot",
    "category": "mountain",
    "continent": "Asia",
    "coords": [
      73.5,
      38.5
    ],
    "description": "'Roof of the World'; convergence of Himalayas, Karakoram, Tian Shan, Hindu Kush.",
    "keyFacts": [
      "Location: Tajikistan, China, Afghanistan, Kyrgyzstan",
      "Orogenic structural knot where major Central and South Asian mountain belts converge",
      "Fedchenko Glacier: Longest non-polar glacier in the world (77 km)"
    ],
    "upscNotes": "Central Asian orogenic hub; Fedchenko Glacier; Amu Darya headwaters."
  },
  {
    "id": "mountain-tian-kunlun",
    "name": "Tian Shan & Kunlun Shan",
    "category": "mountain",
    "continent": "Asia",
    "coords": [
      80.0,
      42.0
    ],
    "description": "Flank Tarim Basin, Taklamakan Desert, and Tibetan Plateau.",
    "keyFacts": [
      "Location: Central and East Asia (China, Kyrgyzstan, Kazakhstan, Tajikistan)",
      "Tian Shan ('Celestial Mountains') forms northern boundary of Tarim Basin",
      "Kunlun Shan forms northern rampart of high Tibetan Plateau"
    ],
    "upscNotes": "Endorheic basin enclosure; Tarim Basin petroleum; glacial meltwater rivers."
  },
  {
    "id": "mountain-arakan-pegu",
    "name": "Arakan Yoma & Pegu Yoma",
    "category": "mountain",
    "continent": "Asia",
    "coords": [
      94.0,
      20.0
    ],
    "description": "Arakan Yoma fronts Bay of Bengal; Pegu Yoma forms central divide in Myanmar.",
    "keyFacts": [
      "Location: Western and Central Myanmar",
      "Arakan Yoma (Rakhine Mountains) is an accretionary prism continuation of Himalayas into Andaman Sea",
      "Nat Ma Taung (Mount Victoria, ~3,053 m) is highest peak"
    ],
    "upscNotes": "Indo-Burman Ranges accretionary prism; Kaladan River corridor; Bay of Bengal barrier."
  },
  {
    "id": "mountain-great-dividing",
    "name": "Great Dividing Range",
    "category": "mountain",
    "continent": "Australia & Oceania",
    "coords": [
      148.0,
      -35.0
    ],
    "description": "Australia's major watershed divide; hosts Mount Kosciuszko (~2,228 m).",
    "keyFacts": [
      "Location: Eastern Australia (Queensland, New South Wales, Victoria)",
      "Ancient Paleozoic highland complex stretching >3,500 km along Pacific coast",
      "Separates coastal rivers from the interior Murray-Darling river basin"
    ],
    "upscNotes": "Snowy Mountains Hydroelectric Scheme; rain shadow creating the dry interior; coal basins."
  },
  {
    "id": "peak-mount-kosciuszko",
    "name": "Mount Kosciuszko",
    "category": "mountain",
    "continent": "Australia & Oceania",
    "coords": [
      148.26,
      -36.45
    ],
    "description": "Highest peak on the Australian mainland (~2,228 m).",
    "keyFacts": [
      "Location: Snowy Mountains, New South Wales, Australia",
      "Pleistocene glacial cirques and moraines; rounded alpine herbfield summit",
      "Part of the Seven Summits (Bass list)"
    ],
    "upscNotes": "Australian continental mainland apex; Seven Summits; alpine flora endemism."
  },
  {
    "id": "mountain-southern-alps",
    "name": "Southern Alps",
    "category": "mountain",
    "continent": "Australia & Oceania",
    "coords": [
      170.5,
      -43.5
    ],
    "description": "Alpine spine of South Island; hosts Mount Cook (Aoraki) (~3,724 m).",
    "keyFacts": [
      "Location: South Island, New Zealand",
      "Active tectonic fold range formed along the transpressional Alpine Fault plate boundary",
      "Franz Josef and Fox glaciers descend into temperate rainforest near sea level"
    ],
    "upscNotes": "Alpine Fault dextral strike-slip rate; extreme orographic rainfall (>10,000 mm on west flank)."
  },
  {
    "id": "peak-aoraki-mount-cook",
    "name": "Mount Cook (Aoraki)",
    "category": "mountain",
    "continent": "Australia & Oceania",
    "coords": [
      170.14,
      -43.59
    ],
    "description": "Highest peak in New Zealand (~3,724 m).",
    "keyFacts": [
      "Location: Southern Alps, South Island, New Zealand",
      "Glaciated alpine horn with Tasman Glacier (longest in New Zealand, 23 km) on eastern flank",
      "Sacred ancestor mountain in indigenous Māori mythology"
    ],
    "upscNotes": "Zealandia highest peak; rapid tectonic uplift balanced by erosion."
  },
  {
    "id": "river-amazon",
    "name": "Amazon River",
    "category": "river",
    "continent": "South America",
    "coords": [
      -50.0,
      0.0
    ],
    "description": "Largest in world by volume; second longest; Madeira (longest tributary); Selvas.",
    "keyFacts": [
      "Source / Headwaters: Mantaro River / Andes (Peru)",
      "Riparian Countries: Peru, Colombia, Brazil ('PCB')",
      "Mouth / Outflow: Atlantic Ocean (at Macapá on Equator)",
      "Tributaries: Rio Negro (left), Madeira, Purus, Xingu (right)"
    ],
    "upscNotes": "Amazon Basin Selvas; Casiquiare natural canal connection to Orinoco; discharge exceeds next 7 largest rivers combined."
  },
  {
    "id": "river-orinoco",
    "name": "Orinoco River",
    "category": "river",
    "continent": "South America",
    "coords": [
      -62.0,
      8.5
    ],
    "description": "Angel Falls on Carrao-Churún tributary; Llanos tropical grassland.",
    "keyFacts": [
      "Source / Headwaters: Guiana Highlands / Parima Mountains",
      "Riparian Countries: Venezuela, Colombia",
      "Mouth / Outflow: Atlantic Ocean (massive delta)",
      "Casiquiare canal naturally bifurcates into Rio Negro (Amazon basin)"
    ],
    "upscNotes": "Casiquiare bifurcation hydrologic anomaly; Orinoco Oil Belt heavy crude; Llanos savanna."
  },
  {
    "id": "river-parana",
    "name": "Paraná River",
    "category": "river",
    "continent": "South America",
    "coords": [
      -58.5,
      -34.0
    ],
    "description": "Itaipu Dam (Brazil-Paraguay); forms Argentine-Paraguayan border.",
    "keyFacts": [
      "Source / Headwaters: Brazilian Highlands (confluence of Grande and Paranaíba)",
      "Riparian Countries: Brazil, Paraguay, Argentina",
      "Mouth / Outflow: Río de la Plata estuary into Atlantic Ocean",
      "Iguazu Falls on tributary Iguazu River at Brazil-Argentina border"
    ],
    "upscNotes": "Itaipu Hydroelectric Dam; Río de la Plata estuary; agricultural grain export corridor."
  },
  {
    "id": "river-nile",
    "name": "Nile River",
    "category": "river",
    "continent": "Africa",
    "coords": [
      31.5,
      31.0
    ],
    "description": "Longest river in world (~6,650 km); confluence at Khartoum; Aswan Dam / Lake Nasser.",
    "keyFacts": [
      "Source / Headwaters: White Nile (Lake Victoria) & Blue Nile (Lake Tana)",
      "Riparian Countries: Uganda, South Sudan, Sudan, Egypt (main course)",
      "Mouth / Outflow: Mediterranean Sea (Alexandria / Damietta delta)",
      "Blue Nile provides ~85% of water and fertile silt during flood season"
    ],
    "upscNotes": "Blue and White Nile confluence at Khartoum; Aswan High Dam; GERD dam geopolitics."
  },
  {
    "id": "river-niger",
    "name": "Niger River",
    "category": "river",
    "continent": "Africa",
    "coords": [
      6.0,
      4.5
    ],
    "description": "Arcs into Sahara near Timbuktu; primary river of West Africa.",
    "keyFacts": [
      "Source / Headwaters: Guinea Highlands (Fouta Djallon, just 240 km from Atlantic)",
      "Riparian Countries: Guinea, Mali, Niger, Benin, Nigeria",
      "Mouth / Outflow: Gulf of Guinea (Port Harcourt Delta in Nigeria)",
      "Crescent-shaped course flowing northeast into Sahara before turning south"
    ],
    "upscNotes": "Inner Niger Delta wetland; Niger Delta oil and gas environmental degradation."
  },
  {
    "id": "river-congo",
    "name": "Congo (Zaire) River",
    "category": "river",
    "continent": "Africa",
    "coords": [
      12.5,
      -6.0
    ],
    "description": "Deepest river in world (>220 m); crosses Equator twice; Boyoma Falls; Pygmies.",
    "keyFacts": [
      "Source / Headwaters: East African Highlands (Lualaba River / Chambeshi)",
      "Riparian Countries: Democratic Republic of the Congo, Republic of the Congo",
      "Mouth / Outflow: Atlantic Ocean",
      "Only major river to cross the Equator twice; second largest discharge volume globally"
    ],
    "upscNotes": "Inga Falls hydroelectric potential (Grand Inga proposal); Congo Basin rainforest drainage."
  },
  {
    "id": "river-zambezi",
    "name": "Zambezi River",
    "category": "river",
    "continent": "Africa",
    "coords": [
      36.3,
      -18.8
    ],
    "description": "Victoria Falls; Kariba Dam / Lake Kariba; forms Zambia-Zimbabwe border.",
    "keyFacts": [
      "Source / Headwaters: Katanga Plateau (northwestern Zambia)",
      "Riparian Countries: Zambia, Angola, Namibia, Botswana, Zimbabwe, Mozambique",
      "Mouth / Outflow: Indian Ocean (Mozambique Channel)",
      "Victoria Falls (Mosi-oa-Tunya): Largest sheet of falling water in the world (1,708 m wide)"
    ],
    "upscNotes": "Victoria Falls cataract geomorphology; Kariba and Cahora Bassa hydroelectric dams."
  },
  {
    "id": "river-limpopo",
    "name": "Limpopo River",
    "category": "river",
    "continent": "Africa",
    "coords": [
      33.5,
      -25.2
    ],
    "description": "Crosses the Tropic of Capricorn twice in a broad arc.",
    "keyFacts": [
      "Source / Headwaters: Witwatersrand, northern South Africa",
      "Riparian Countries: South Africa, Botswana, Zimbabwe, Mozambique",
      "Mouth / Outflow: Indian Ocean at Xai-Xai, Mozambique",
      "Forms international border between South Africa and Botswana/Zimbabwe"
    ],
    "upscNotes": "Twice crosses Tropic of Capricorn; Southern Africa agricultural irrigation lifeline."
  },
  {
    "id": "river-orange",
    "name": "Orange River",
    "category": "river",
    "continent": "Africa",
    "coords": [
      16.4,
      -28.6
    ],
    "description": "Forms the natural international boundary between South Africa and Namibia.",
    "keyFacts": [
      "Source / Headwaters: Drakensberg Mountains (Lesotho Highlands)",
      "Riparian Countries: Lesotho, South Africa, Namibia",
      "Mouth / Outflow: Atlantic Ocean at Alexander Bay",
      "Major tributary is Vaal River; Gariep Dam is largest reservoir in South Africa"
    ],
    "upscNotes": "Augrabies Falls granite gorge; diamond-bearing gravels along lower reaches; border river."
  },
  {
    "id": "river-mississippi-missouri",
    "name": "Mississippi-Missouri River",
    "category": "river",
    "continent": "North America",
    "coords": [
      -89.2,
      29.1
    ],
    "description": "Longest river system in North America; bird-foot delta; vast interior drainage.",
    "keyFacts": [
      "Source / Headwaters: Lake Itasca, Minnesota (Mississippi) / Rocky Mountains, Montana (Missouri)",
      "Riparian Countries: United States",
      "Mouth / Outflow: Gulf of Mexico (south of New Orleans)",
      "Drains 31 US states and 2 Canadian provinces; bird-foot delta (Balize lobe)"
    ],
    "upscNotes": "Bird-foot delta type locality; Dead Zone hypoxia in Gulf of Mexico; inland navigation spine."
  },
  {
    "id": "river-colorado",
    "name": "Colorado River",
    "category": "river",
    "continent": "North America",
    "coords": [
      -114.8,
      31.8
    ],
    "description": "Carves Grand Canyon; Hoover Dam and Lake Mead; heavily utilized for irrigation.",
    "keyFacts": [
      "Source / Headwaters: Rocky Mountains (La Poudre Pass, Colorado)",
      "Riparian Countries: United States, Mexico",
      "Mouth / Outflow: Gulf of California (heavily desiccated, rarely reaches sea)",
      "Hoover Dam (Lake Mead) and Glen Canyon Dam (Lake Powell) regulate flow"
    ],
    "upscNotes": "Grand Canyon epigenetic antecedent gorge; Colorado River Compact allocation dispute; delta desiccation."
  },
  {
    "id": "river-columbia",
    "name": "Columbia River",
    "category": "river",
    "continent": "North America",
    "coords": [
      -124.0,
      46.2
    ],
    "description": "Largest hydroelectric power river in North America; major tributary is Snake River.",
    "keyFacts": [
      "Source / Headwaters: Columbia Lake, Canadian Rockies (British Columbia)",
      "Riparian Countries: Canada, United States",
      "Mouth / Outflow: Pacific Ocean (Oregon-Washington border)",
      "Grand Coulee Dam: Largest power-producing facility in the United States"
    ],
    "upscNotes": "Pacific Northwest salmon migration; Columbia River Treaty with Canada; Columbia Plateau basalts."
  },
  {
    "id": "river-rio-grande",
    "name": "Rio Grande (Río Bravo)",
    "category": "river",
    "continent": "North America",
    "coords": [
      -97.1,
      25.9
    ],
    "description": "Forms international border between Texas (USA) and Mexico.",
    "keyFacts": [
      "Source / Headwaters: San Juan Mountains (Canby Mountain, Colorado)",
      "Riparian Countries: United States, Mexico",
      "Mouth / Outflow: Gulf of Mexico",
      "Forms ~2,000 km of the US-Mexico international border"
    ],
    "upscNotes": "International Boundary and Water Commission (IBWC); border security corridor."
  },
  {
    "id": "river-saint-lawrence",
    "name": "Saint Lawrence River",
    "category": "river",
    "continent": "North America",
    "coords": [
      -69.0,
      48.5
    ],
    "description": "Major outlet of Laurentian Great Lakes; commercial Saint Lawrence Seaway.",
    "keyFacts": [
      "Source / Headwaters: Lake Ontario",
      "Riparian Countries: Canada, United States",
      "Mouth / Outflow: Gulf of Saint Lawrence (Atlantic Ocean)",
      "Saint Lawrence Seaway system of locks enables ocean-going ships to enter Lake Superior"
    ],
    "upscNotes": "Saint Lawrence Seaway industrial corridor; Thousand Islands; estuary whale habitat."
  },
  {
    "id": "river-mackenzie",
    "name": "Mackenzie River",
    "category": "river",
    "continent": "North America",
    "coords": [
      -135.0,
      69.0
    ],
    "description": "Longest river in Canada; drains subarctic northwest.",
    "keyFacts": [
      "Source / Headwaters: Great Slave Lake, Northwest Territories",
      "Riparian Countries: Canada",
      "Mouth / Outflow: Beaufort Sea (Arctic Ocean)",
      "Entire drainage basin covers ~1.8 million km² (one-fifth of Canada)"
    ],
    "upscNotes": "Arctic drainage basin; permafrost thaw impacts; Mackenzie Delta oil and gas."
  },
  {
    "id": "river-yukon",
    "name": "Yukon River",
    "category": "river",
    "continent": "North America",
    "coords": [
      -164.5,
      62.5
    ],
    "description": "Bisects Alaska between Brooks and Alaska ranges.",
    "keyFacts": [
      "Source / Headwaters: Llewellyn Glacier, Atlin Lake, British Columbia (Canada)",
      "Riparian Countries: Canada, United States (Alaska)",
      "Mouth / Outflow: Bering Sea (Yukon-Kuskokwim Delta)",
      "Historic route of the 1896 Klondike Gold Rush"
    ],
    "upscNotes": "Klondike gold placer deposits; longest Pacific salmon migration runs; subarctic hydrology."
  },
  {
    "id": "river-rhine",
    "name": "Rhine River",
    "category": "river",
    "continent": "Europe",
    "coords": [
      4.1,
      51.9
    ],
    "description": "Busiest commercial waterway in Europe; flows through Rhine Rift Valley.",
    "keyFacts": [
      "Source / Headwaters: Tomasee, Swiss Alps",
      "Riparian Countries: Switzerland, Liechtenstein, Austria, Germany, France, Netherlands",
      "Mouth / Outflow: North Sea at Port of Rotterdam",
      "Flows through Upper Rhine Graben rift valley and German industrial heartland"
    ],
    "upscNotes": "Rhine-Main-Danube canal connects North Sea to Black Sea; Rotterdam delta gateway."
  },
  {
    "id": "river-danube",
    "name": "Danube River",
    "category": "river",
    "continent": "Europe",
    "coords": [
      29.6,
      45.2
    ],
    "description": "Second-longest in Europe; traverses 10 countries; passes 4 national capitals.",
    "keyFacts": [
      "Source / Headwaters: Black Forest (Breg and Brigach confluence, Germany)",
      "Riparian Countries: Germany, Austria, Slovakia, Hungary, Croatia, Serbia, Bulgaria, Romania, Moldova, Ukraine",
      "Mouth / Outflow: Black Sea (Danube Delta biosphere reserve)",
      "Passes four national capitals: Vienna, Bratislava, Budapest, Belgrade"
    ],
    "upscNotes": "Most international river basin in the world (10 countries); Iron Gates gorge; Danube Delta."
  },
  {
    "id": "river-volga",
    "name": "Volga River",
    "category": "river",
    "continent": "Europe",
    "coords": [
      48.0,
      46.0
    ],
    "description": "Longest river in Europe (~3,530 km); flows entirely in Russia into landlocked basin.",
    "keyFacts": [
      "Source / Headwaters: Valdai Hills northwest of Moscow",
      "Riparian Countries: Russia",
      "Mouth / Outflow: Caspian Sea (Astrakhan Delta)",
      "Carries over half of Russian river freight; Volga-Don Canal links to Black Sea"
    ],
    "upscNotes": "Endorheic Caspian drainage; Volga-Don Canal; sturgeon caviar fisheries."
  },
  {
    "id": "river-po",
    "name": "Po River",
    "category": "river",
    "continent": "Europe",
    "coords": [
      12.3,
      44.9
    ],
    "description": "Longest in Italy; drains the fertile Plain of Lombardy ('Ganges of Italy').",
    "keyFacts": [
      "Source / Headwaters: Monte Viso, Cottian Alps",
      "Riparian Countries: Italy",
      "Mouth / Outflow: Adriatic Sea near Venice",
      "Plain of Lombardy accounts for over a third of Italian agricultural production"
    ],
    "upscNotes": "Po Valley industrial/agricultural core; severe summer drought and delta subsidence."
  },
  {
    "id": "river-elbe",
    "name": "Elbe River",
    "category": "river",
    "continent": "Europe",
    "coords": [
      9.3,
      53.9
    ],
    "description": "Major north-flowing Central European river.",
    "keyFacts": [
      "Source / Headwaters: Krkonoše (Giant Mountains), Czech Republic",
      "Riparian Countries: Czech Republic, Germany",
      "Mouth / Outflow: North Sea at Cuxhaven (past Hamburg)",
      "Major historic line of demarcation during the Cold War in Germany"
    ],
    "upscNotes": "Port of Hamburg estuary; Bohemian basin drainage; Cold War historic divide."
  },
  {
    "id": "river-vistula",
    "name": "Vistula River",
    "category": "river",
    "continent": "Europe",
    "coords": [
      18.9,
      54.3
    ],
    "description": "Longest river in Poland; passes Krakow and Warsaw.",
    "keyFacts": [
      "Source / Headwaters: Barania Góra, Silesian Beskids (Western Carpathians)",
      "Riparian Countries: Poland",
      "Mouth / Outflow: Baltic Sea (Gdansk Bay)",
      "Drains over half of Poland's land area"
    ],
    "upscNotes": "National river of Poland; Baltic Sea marine environmental protection."
  },
  {
    "id": "river-ob-irtysh",
    "name": "Ob-Irtysh River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      73.0,
      66.5
    ],
    "description": "Drains West Siberian Plain; major north-flowing Siberian river.",
    "keyFacts": [
      "Source / Headwaters: Altai Mountains (Biya and Katun confluence)",
      "Riparian Countries: Russia, Kazakhstan, China (Irtysh tributary)",
      "Mouth / Outflow: Gulf of Ob, Kara Sea (Arctic Ocean)",
      "Ob-Irtysh system is the seventh longest river system in the world (~5,410 km)"
    ],
    "upscNotes": "Spring ice jams produce massive flooding on West Siberian Plain; Vasyugan Swamp drainage."
  },
  {
    "id": "river-yenisey",
    "name": "Yenisey River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      86.0,
      70.0
    ],
    "description": "Central Siberian river; receives Angara River from Lake Baikal.",
    "keyFacts": [
      "Source / Headwaters: Sayan Mountains (Mongolia/Tuva)",
      "Riparian Countries: Mongolia, Russia",
      "Mouth / Outflow: Kara Sea (Arctic Ocean)",
      "Sayano-Shushenskaya: Russia's largest hydroelectric power station on Upper Yenisey"
    ],
    "upscNotes": "Angara River outlet from Lake Baikal; Sayano-Shushenskaya dam; Northern Sea Route terminal."
  },
  {
    "id": "river-lena",
    "name": "Lena River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      127.0,
      72.5
    ],
    "description": "Eastern Siberian river; immense delta on Laptev Sea.",
    "keyFacts": [
      "Source / Headwaters: Baikal Mountains just 7 km west of Lake Baikal",
      "Riparian Countries: Russia",
      "Mouth / Outflow: Laptev Sea, Arctic Ocean (immense 32,000 km² delta)",
      "Lena Pillars: UNESCO World Heritage sheer limestone rock formations along riverbanks"
    ],
    "upscNotes": "Lena Delta Arctic wildlife refuge; continuous permafrost basin; timber rafting."
  },
  {
    "id": "river-amur",
    "name": "Amur (Heilong) River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      141.2,
      53.0
    ],
    "description": "Forms natural international boundary between Russian Far East and Northeast China.",
    "keyFacts": [
      "Source / Headwaters: Confluence of Shilka and Argun rivers",
      "Riparian Countries: Russia, China, Mongolia",
      "Mouth / Outflow: Sea of Okhotsk / Tatar Strait",
      "Tenth longest river in the world (~4,444 km); free-flowing with zero mainstem dams"
    ],
    "upscNotes": "Sino-Russian border demarcated along thalweg; Heilongjiang ('Black Dragon River') culture."
  },
  {
    "id": "river-yellow",
    "name": "Yellow (Huang He) River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      118.8,
      38.0
    ],
    "description": "Carries yellow loess sediment; 'Sorrow of China' due to catastrophic flooding.",
    "keyFacts": [
      "Source / Headwaters: Bayan Har Mountains, Qinghai (Tibetan Plateau)",
      "Riparian Countries: China",
      "Mouth / Outflow: Bohai Sea (Yellow Sea)",
      "Cuts through Loess Plateau, carrying world's highest sediment load (hence yellow color)"
    ],
    "upscNotes": "Loess Plateau soil conservation; elevated suspended riverbed ('hanging river'); ancient civilization cradle."
  },
  {
    "id": "river-yangtze",
    "name": "Yangtze River (Chang Jiang)",
    "category": "river",
    "continent": "Asia",
    "coords": [
      121.8,
      31.5
    ],
    "description": "Longest river in Asia (~6,300 km); third longest on Earth; Three Gorges Dam.",
    "keyFacts": [
      "Source / Headwaters: Tanggula Mountains, Qinghai (Tibetan Plateau)",
      "Riparian Countries: China",
      "Mouth / Outflow: East China Sea at Shanghai",
      "Three Gorges Dam: World's largest hydroelectric power station (~22,500 MW)"
    ],
    "upscNotes": "Three Gorges Dam engineering; Yangtze River Economic Belt; endangered Yangtze finless porpoise."
  },
  {
    "id": "river-mekong",
    "name": "Mekong River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      106.5,
      10.2
    ],
    "description": "Longest in Southeast Asia; forms Laos-Thailand border; international river basin.",
    "keyFacts": [
      "Source / Headwaters: Lasagongma Spring, Tibetan Plateau, Qinghai (China, where called Lancang)",
      "Riparian Countries: China, Myanmar, Laos, Thailand, Cambodia, Vietnam",
      "Mouth / Outflow: South China Sea (Nine Dragons Delta in southern Vietnam)",
      "Supports world's most productive inland freshwater fishery and Tonle Sap reverse pulse"
    ],
    "upscNotes": "Upstream Chinese cascade dams impact downstream delta; Mekong River Commission; rice bowl delta."
  },
  {
    "id": "river-chao-phraya",
    "name": "Chao Phraya River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      100.6,
      13.5
    ],
    "description": "Principal river of Thailand; flows through Bangkok.",
    "keyFacts": [
      "Source / Headwaters: Confluence of Ping and Nan rivers at Nakhon Sawan",
      "Riparian Countries: Thailand",
      "Mouth / Outflow: Gulf of Thailand",
      "Central plains along river form the agricultural heartland and primary wet-rice bowl of Thailand"
    ],
    "upscNotes": "Bangkok canal (khlong) network; central Thailand rice paddies; monsoon flood dynamics."
  },
  {
    "id": "river-irrawaddy",
    "name": "Irrawaddy (Ayeyarwady) River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      95.0,
      16.0
    ],
    "description": "'Lifeline of Myanmar'; major rice-producing delta; flows past Mandalay and Yangon.",
    "keyFacts": [
      "Source / Headwaters: Confluence of N'mai and Mali rivers in northern Kachin State",
      "Riparian Countries: Myanmar",
      "Mouth / Outflow: Andaman Sea (Irrawaddy Delta)",
      "Navigable for over 1,600 km into the interior of Myanmar"
    ],
    "upscNotes": "Irrawaddy dolphin habitat; Myitsone Dam controversy; primary rice granary of Myanmar."
  },
  {
    "id": "river-salween",
    "name": "Salween (Thanlwin) River",
    "category": "river",
    "continent": "Asia",
    "coords": [
      97.6,
      16.5
    ],
    "description": "Deeply incised river flowing through Shan Plateau and along Thai border.",
    "keyFacts": [
      "Source / Headwaters: Tanggula Mountains, Tibetan Plateau (China, where called Nu River)",
      "Riparian Countries: China, Myanmar, Thailand",
      "Mouth / Outflow: Andaman Sea at Mawlamyine",
      "Three Parallel Rivers of Yunnan: Nu (Salween), Lancang (Mekong), and Jinsha (Yangtze) flow in parallel gorges"
    ],
    "upscNotes": "UNESCO Three Parallel Rivers protected area; longest undammed river in mainland Southeast Asia."
  },
  {
    "id": "river-tigris-euphrates",
    "name": "Tigris & Euphrates",
    "category": "river",
    "continent": "Asia",
    "coords": [
      48.5,
      30.0
    ],
    "description": "Cradled Mesopotamian civilization; Euphrates (western), Tigris (eastern/Baghdad).",
    "keyFacts": [
      "Source / Headwaters: Armenian Highlands / Taurus Mountains, eastern Turkey",
      "Riparian Countries: Turkey, Syria, Iraq",
      "Mouth / Outflow: Persian Gulf via confluence at Shatt al-Arab",
      "Euphrates is longer (~2,800 km); Tigris is swifter and carries more water"
    ],
    "upscNotes": "Southeastern Anatolia Project (GAP) dams in Turkey; Mesopotamian marshland restoration."
  },
  {
    "id": "river-syr-darya",
    "name": "Syr Darya",
    "category": "river",
    "continent": "Asia",
    "coords": [
      61.0,
      46.0
    ],
    "description": "Northern Central Asian river; heavily diverted for cotton irrigation.",
    "keyFacts": [
      "Source / Headwaters: Tian Shan Mountains (Naryn and Qara Darya confluence)",
      "Riparian Countries: Kyrgyzstan, Uzbekistan, Tajikistan, Kazakhstan",
      "Mouth / Outflow: Northern (Small) Aral Sea",
      "Historically known to Greeks as Jaxartes; Kokaral Dam built to preserve North Aral Sea"
    ],
    "upscNotes": "Soviet cotton mono-cropping diversion; Kokaral Dam North Aral Sea stabilization."
  },
  {
    "id": "river-amu-darya",
    "name": "Amu Darya",
    "category": "river",
    "continent": "Asia",
    "coords": [
      59.0,
      43.5
    ],
    "description": "Southern Central Asian river; historically known as the Oxus.",
    "keyFacts": [
      "Source / Headwaters: Pamir Mountains (confluence of Vakhsh and Panj rivers)",
      "Riparian Countries: Tajikistan, Afghanistan, Turkmenistan, Uzbekistan",
      "Mouth / Outflow: Southern Aral Sea (now completely desiccated terminal marshes)",
      "Karakum Canal diverts massive volume west through Turkmenistan"
    ],
    "upscNotes": "Historic Oxus River; Karakum Canal diversion; South Aral Sea extinction; Qosh Tepa canal in Afghanistan."
  },
  {
    "id": "river-murray-darling",
    "name": "Murray-Darling River",
    "category": "river",
    "continent": "Australia & Oceania",
    "coords": [
      139.0,
      -35.5
    ],
    "description": "Principal river system of Australia; supports Downs agricultural belt.",
    "keyFacts": [
      "Source / Headwaters: Great Dividing Range (Snowy Mountains / New England)",
      "Riparian Countries: Australia",
      "Mouth / Outflow: Southern Ocean at Encounter Bay / Lake Alexandrina",
      "Murray-Darling Basin accounts for ~40% of Australian agricultural production by value"
    ],
    "upscNotes": "Murray-Darling Basin water rights allocation; severe salinity and environmental flow challenges."
  },
  {
    "id": "river-waikato",
    "name": "Waikato River",
    "category": "river",
    "continent": "Australia & Oceania",
    "coords": [
      174.7,
      -37.4
    ],
    "description": "Longest river in New Zealand (~425 km).",
    "keyFacts": [
      "Source / Headwaters: Mount Ruapehu, drains out of Lake Taupo caldera",
      "Riparian Countries: New Zealand",
      "Mouth / Outflow: Tasman Sea at Port Waikato",
      "Generates significant portion of New Zealand's hydroelectric power along Waikato River dam chain"
    ],
    "upscNotes": "Lake Taupo volcanic caldera drainage; Māori cultural significance (Tainui confederation)."
  },
  {
    "id": "river-whanganui",
    "name": "Whanganui River",
    "category": "river",
    "continent": "Australia & Oceania",
    "coords": [
      175.0,
      -39.9
    ],
    "description": "World's first river granted legal personhood status for environmental protection.",
    "keyFacts": [
      "Source / Headwaters: Mount Tongariro, North Island, New Zealand",
      "Riparian Countries: New Zealand",
      "Mouth / Outflow: Tasman Sea at Whanganui",
      "Granted legal personality status as a living entity (Te Awa Tupua) in New Zealand law (2017)"
    ],
    "upscNotes": "Environmental jurisprudence breakthrough: river recognized as legal person with rights; rights of nature."
  },
  {
    "id": "desert-atacama",
    "name": "Atacama Desert",
    "category": "desert",
    "continent": "South America",
    "coords": [
      -69.5,
      -23.5
    ],
    "description": "Driest non-polar desert on Earth.",
    "keyFacts": [
      "Location: South America (Northern Chile / Peru)",
      "Type: Cold Coastal Desert",
      "Formative Factors: Cold Humboldt Current, offshore trade winds, double rain-shadow (Andes & Coastal Range)",
      "Parts of desert have recorded zero rainfall throughout recorded human history"
    ],
    "upscNotes": "Astronomical observatory hub (ALMA, VLT) due to clear skies; lithium salars; Humboldt inversion."
  },
  {
    "id": "desert-patagonian",
    "name": "Patagonian Desert",
    "category": "desert",
    "continent": "South America",
    "coords": [
      -68.0,
      -45.0
    ],
    "description": "Rain-shadow desert in southern South America.",
    "keyFacts": [
      "Location: South America (Southern Argentina)",
      "Type: Cold Temperate Rain-Shadow Desert",
      "Formative Factors: Rain-shadow effect of southern Andes blocking moisture-bearing mid-latitude westerlies",
      "Covered by gravelly plains and low scrub; strong persistent westerly winds"
    ],
    "upscNotes": "Classic orographic rain-shadow mechanism; sheep grazing; petrified wood forests."
  },
  {
    "id": "desert-sahara",
    "name": "Sahara Desert",
    "category": "desert",
    "continent": "Africa",
    "coords": [
      12.0,
      23.0
    ],
    "description": "World's largest hot desert (~9.2 million km²).",
    "keyFacts": [
      "Location: Northern Africa (spans 11 countries)",
      "Type: Hot Subtropical Desert",
      "Formative Factors: Subtropical high-pressure belt (Hadley Cell), distance from moisture, reinforced by cold Canary Current",
      "Comprises ergs (sand dunes, ~20%), regs (gravel plains), and hamadas (bare rock plateaus)"
    ],
    "upscNotes": "Hadley cell subtropical descending air; Bodélé Depression dust fertilization; Nubian sandstone aquifer."
  },
  {
    "id": "desert-sahel",
    "name": "Sahel",
    "category": "desert",
    "continent": "Africa",
    "coords": [
      15.0,
      15.0
    ],
    "description": "Semi-Arid Transition Ecotone south of the Sahara.",
    "keyFacts": [
      "Location: Northern Africa (Mauritania, Senegal, Mali, Burkina Faso, Niger, Nigeria, Chad, Sudan, Eritrea)",
      "Type: Semi-Arid Transition Ecotone",
      "Formative Factors: Border zone undergoing desertification; site of African Union's Great Green Wall initiative",
      "Severe rainfall variability driven by the West African Monsoon (ITCZ migration)"
    ],
    "upscNotes": "Great Green Wall initiative; desertification; ITCZ seasonal displacement vulnerability."
  },
  {
    "id": "desert-namib",
    "name": "Namib Desert",
    "category": "desert",
    "continent": "Africa",
    "coords": [
      15.0,
      -24.0
    ],
    "description": "Cold Coastal Desert; oldest desert in the world (~55-80 million years).",
    "keyFacts": [
      "Location: Southwestern Africa (Namibia, coastal Angola)",
      "Type: Cold Coastal Desert",
      "Formative Factors: Desiccating effect of the cold upwelling Benguela Current and persistent offshore trade winds",
      "Dense coastal fog (Cassimbo) provides critical moisture for endemic Welwitschia mirabilis"
    ],
    "upscNotes": "Benguela Current cold upwelling; Sossusvlei star dunes; Welwitschia mirabilis living fossil."
  },
  {
    "id": "desert-kalahari",
    "name": "Kalahari Desert",
    "category": "desert",
    "continent": "Africa",
    "coords": [
      22.0,
      -23.0
    ],
    "description": "Semi-Arid Interior Basin of red sand plains.",
    "keyFacts": [
      "Location: Southern Africa (Botswana, Namibia, South Africa)",
      "Type: Semi-Arid Interior Basin ('Fossil Desert')",
      "Formative Factors: Subtropical high pressure; red sand plains; ancestral home of San (Bushmen)",
      "Receives more rainfall than true deserts; supports extensive savanna grasslands and thornveld"
    ],
    "upscNotes": "Fossil erg sands; San hunter-gatherer adaptation; Okavango Delta inland terminal drainage."
  },
  {
    "id": "desert-great-basin",
    "name": "Great Basin Desert",
    "category": "desert",
    "continent": "North America",
    "coords": [
      -116.0,
      39.0
    ],
    "description": "Cold Mid-Latitude Desert in high-elevation interior basin.",
    "keyFacts": [
      "Location: North America (Nevada/Utah, USA)",
      "Type: Cold Mid-Latitude Desert",
      "Formative Factors: Rain-shadow of Sierra Nevada and Cascade ranges; high-elevation interior basin",
      "Basin and Range topography with endorheic drainage into Great Salt Lake and Pyramid Lake"
    ],
    "upscNotes": "Basin and Range crustal extension; sagebrush biome; pluvial Lake Bonneville remnants."
  },
  {
    "id": "desert-mojave",
    "name": "Mojave Desert",
    "category": "desert",
    "continent": "North America",
    "coords": [
      -116.0,
      35.0
    ],
    "description": "Hot Subtropical Desert; contains Death Valley.",
    "keyFacts": [
      "Location: North America (California/Nevada, USA)",
      "Type: Hot Subtropical Desert",
      "Formative Factors: Rain-shadow of coastal ranges; contains Death Valley (lowest point in North America at -86 m)",
      "Indicator plant is the endemic Joshua Tree (Yucca brevifolia)"
    ],
    "upscNotes": "Death Valley Badwater Basin; world record surface air temperature (56.7°C); Joshua Tree national park."
  },
  {
    "id": "desert-sonoran",
    "name": "Sonoran Desert",
    "category": "desert",
    "continent": "North America",
    "coords": [
      -112.0,
      30.0
    ],
    "description": "Subtropical Hot Desert with iconic Saguaro cactus.",
    "keyFacts": [
      "Location: North America (Arizona/California, USA and Sonora/Baja, Mexico)",
      "Type: Subtropical Hot Desert",
      "Formative Factors: Subtropical high pressure and rain shadow; coastal influence of cold California Current",
      "Bimodal rainfall (winter rains and summer North American Monsoon) supports high biodiversity"
    ],
    "upscNotes": "Saguaro cactus endemism; North American Monsoon (NAM); Colorado River Delta."
  },
  {
    "id": "desert-chihuahuan",
    "name": "Chihuahuan Desert",
    "category": "desert",
    "continent": "North America",
    "coords": [
      -104.0,
      28.0
    ],
    "description": "Subtropical Plateau Desert between Sierra Madre ranges.",
    "keyFacts": [
      "Location: North America (New Mexico/Texas, USA and Chihuahua/Coahuila, Mexico)",
      "Type: Subtropical Plateau Desert",
      "Formative Factors: High-elevation inland plateau blocked by Sierra Madre Oriental and Occidental",
      "Contains White Sands National Park (world's largest gypsum sand dunefield)"
    ],
    "upscNotes": "White Sands gypsum dunes; Sierra Madre rain shadow; high species richness in cacti."
  },
  {
    "id": "desert-rub-al-khali",
    "name": "Rub' al Khali (Empty Quarter)",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      51.0,
      20.0
    ],
    "description": "World's largest continuous sand desert (erg).",
    "keyFacts": [
      "Location: Asia (Saudi Arabia, Oman, UAE, Yemen)",
      "Type: Hyper-Arid Sand Desert (Erg)",
      "Formative Factors: Continental interior of Arabian Peninsula under subtropical high pressure",
      "Vast longitudinal and star dunes reaching heights of over 250 meters"
    ],
    "upscNotes": "Largest erg on Earth; subterranean petroleum fields (Shaybah); hyper-arid sand transport."
  },
  {
    "id": "desert-an-nafud",
    "name": "An Nafud",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      41.0,
      28.5
    ],
    "description": "Hot Sand Desert in northern Arabian Peninsula.",
    "keyFacts": [
      "Location: Asia (Northern Saudi Arabia)",
      "Type: Hot Sand Desert (Erg)",
      "Formative Factors: Subtropical high pressure; red crescentic barchan dunes",
      "Connected to the Rub' al Khali by the long, narrow Ad-Dahna sand belt"
    ],
    "upscNotes": "Ad-Dahna sand corridor; red eolian dunes; Jubbah rock art UNESCO site."
  },
  {
    "id": "desert-negev",
    "name": "Negev Desert",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      35.0,
      30.8
    ],
    "description": "Arid Subtropical Desert occupying southern Israel.",
    "keyFacts": [
      "Location: Asia (Southern Israel)",
      "Type: Arid Subtropical Desert",
      "Formative Factors: Extends south to Gulf of Aqaba; transition between Mediterranean and Sinai deserts",
      "Contains unique erosion cirques known as makhteshim (Makhtesh Ramon, largest in world)"
    ],
    "upscNotes": "Makhtesh erosion craters; solar power tower projects; drip irrigation agricultural reclaim."
  },
  {
    "id": "desert-dasht-e-kavir",
    "name": "Dasht-e Kavir",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      54.0,
      34.5
    ],
    "description": "Great Salt Desert (Playa) in north-central Iran.",
    "keyFacts": [
      "Location: Asia (North-Central Iran)",
      "Type: Great Salt Desert (Playa / Kavir)",
      "Formative Factors: Rain-shadow of Alborz Mountains; high evaporation producing encrusted salt flats",
      "Hazardous salt marshes (kavirs) and mud crusts underlain by quicksand-like brine"
    ],
    "upscNotes": "Rain shadow of Alborz range; salt crust geomorphology; endorheic drainage."
  },
  {
    "id": "desert-dasht-e-lut",
    "name": "Dasht-e Lut",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      58.5,
      30.5
    ],
    "description": "Hyper-Arid Sand and Salt Desert; highest recorded Earth skin temperatures.",
    "keyFacts": [
      "Location: Asia (Southeastern Iran)",
      "Type: Hyper-Arid Sand and Salt Desert",
      "Formative Factors: Sits in enclosed Iranian basin; records highest Earth surface skin temperatures (>70.7°C)",
      "Features massive wind-carved yardangs (kaluts) rising up to 150 meters high"
    ],
    "upscNotes": "World's hottest land surface skin temperature (MODIS satellite data); yardangs (kaluts)."
  },
  {
    "id": "desert-kyzylkum",
    "name": "Kyzylkum Desert",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      63.5,
      42.5
    ],
    "description": "Temperate Sand Desert ('Red Sand') between Amu Darya and Syr Darya.",
    "keyFacts": [
      "Location: Asia (Uzbekistan and Kazakhstan)",
      "Type: Temperate Sand Desert ('Red Sand')",
      "Formative Factors: Continental interior between Amu Darya and Syr Darya under rain shadow",
      "Hosts Muruntau gold mine: One of the world's largest open-pit gold mines"
    ],
    "upscNotes": "Muruntau gold deposit; uranium mining; Amu Darya / Syr Darya interfluve."
  },
  {
    "id": "desert-karakum",
    "name": "Karakum Desert",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      59.0,
      39.5
    ],
    "description": "Temperate Sand Desert ('Black Sand') occupying ~70% of Turkmenistan.",
    "keyFacts": [
      "Location: Asia (Turkmenistan)",
      "Type: Temperate Sand Desert ('Black Sand')",
      "Formative Factors: Occupies ~70% of Turkmenistan east of the Caspian Sea",
      "Karakum Canal brings water from Amu Darya across desert to Caspian coast"
    ],
    "upscNotes": "Karakum Canal irrigation diversion; Darvaza Gas Crater ('Door to Hell')."
  },
  {
    "id": "desert-taklamakan",
    "name": "Taklamakan Desert",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      82.0,
      39.0
    ],
    "description": "Cold Hyper-Arid Basin Desert in Tarim Basin.",
    "keyFacts": [
      "Location: Asia (Xinjiang, China)",
      "Type: Cold Hyper-Arid Basin Desert",
      "Formative Factors: Deep continental basin (Tarim Basin) enclosed by high mountains (Tian Shan, Kunlun, Pamirs)",
      "Second largest shifting sand desert in the world; Silk Road routes skirted northern and southern rims"
    ],
    "upscNotes": "Deep rain shadow of Himalayas and Tibetan Plateau; Tarim Basin petroleum; Silk Road oasis cities."
  },
  {
    "id": "desert-gobi",
    "name": "Gobi Desert",
    "category": "desert",
    "continent": "Asia",
    "coords": [
      105.0,
      44.0
    ],
    "description": "Cold Temperate Rain-Shadow Desert in Mongolia and Northern China.",
    "keyFacts": [
      "Location: Asia (Mongolia and Northern China)",
      "Type: Cold Temperate Rain-Shadow Desert",
      "Formative Factors: Extreme continentality and rain-shadow of the Himalayas and Tibetan Plateau",
      "Mostly rocky gravel plains and bare rock rather than sand dunes; frost and snow in winter"
    ],
    "upscNotes": "Dinosaur fossil beds (Flaming Cliffs); severe continentality; desertification threatening Beijing."
  },
  {
    "id": "desert-great-sandy",
    "name": "Great Sandy Desert",
    "category": "desert",
    "continent": "Australia & Oceania",
    "coords": [
      123.0,
      -21.0
    ],
    "description": "Arid Sand Desert in northern Western Australia.",
    "keyFacts": [
      "Location: Australia (Western Australia)",
      "Type: Arid Sand Desert",
      "Formative Factors: Subtropical high pressure and descending air of the interior plateau",
      "Covered by red longitudinal sand dunes and spinifex grasslands; contains Wolfe Creek meteorite crater"
    ],
    "upscNotes": "Canning Stock Route; Wolfe Creek impact crater; red sand ridge topography."
  },
  {
    "id": "desert-gibson",
    "name": "Gibson Desert",
    "category": "desert",
    "continent": "Australia & Oceania",
    "coords": [
      125.0,
      -25.0
    ],
    "description": "Central desert between Great Sandy and Great Victoria deserts.",
    "keyFacts": [
      "Location: Australia (Western Australia)",
      "Type: Arid Sand/Gravel Desert",
      "Formative Factors: Central desert between Great Sandy and Great Victoria",
      "Dominated by lateritic buckshot plains, red dunes, and spinifex grasslands"
    ],
    "upscNotes": "Laterite desert pavement; Pintupi indigenous homelands; arid zone fauna."
  },
  {
    "id": "desert-great-victoria",
    "name": "Great Victoria Desert",
    "category": "desert",
    "continent": "Australia & Oceania",
    "coords": [
      129.0,
      -29.0
    ],
    "description": "Largest desert in Australia.",
    "keyFacts": [
      "Location: Australia (Western and South Australia)",
      "Type: Arid Sand Desert",
      "Formative Factors: Subtropical high-pressure belt; covers ~348,750 km²",
      "Site of Maralinga where British atmospheric nuclear tests were conducted in 1950s"
    ],
    "upscNotes": "Largest Australian desert; UNESCO Mamungari Conservation Park; Maralinga test site."
  },
  {
    "id": "desert-tanami",
    "name": "Tanami Desert",
    "category": "desert",
    "continent": "Australia & Oceania",
    "coords": [
      130.0,
      -20.0
    ],
    "description": "Northern desert characterized by red soil and spinifex grass.",
    "keyFacts": [
      "Location: Australia (Northern Territory)",
      "Type: Arid Rocky/Sand Desert",
      "Formative Factors: Subtropical high pressure; transition to tropical monsoon north",
      "Hosts The Granites and Callie major underground gold mines"
    ],
    "upscNotes": "Australian arid zone gold mining; Warlpiri indigenous lands; spinifex ecology."
  },
  {
    "id": "desert-simpson",
    "name": "Simpson Desert",
    "category": "desert",
    "continent": "Australia & Oceania",
    "coords": [
      137.0,
      -25.5
    ],
    "description": "Famed for long, continuous, parallel red longitudinal dunes.",
    "keyFacts": [
      "Location: Australia (NT, SA, Queensland)",
      "Type: Arid Sand Desert",
      "Formative Factors: Subtropical high pressure; contains world's longest parallel sand dunes",
      "Over 1,100 parallel dunes up to 200 km long, aligned south-southeast to north-northwest"
    ],
    "upscNotes": "Longest parallel longitudinal sand dunes in the world; Big Red dune; Lake Eyre drainage."
  },
  {
    "id": "desert-sturt-stony",
    "name": "Sturt Stony Desert",
    "category": "desert",
    "continent": "Australia & Oceania",
    "coords": [
      140.0,
      -27.5
    ],
    "description": "Stony Desert (Gibber Plain) in central Australia.",
    "keyFacts": [
      "Location: Australia (South Australia / Queensland)",
      "Type: Stony Desert (Gibber Plain)",
      "Formative Factors: Surface covered by dense, polished stone lag gravels (gibber)",
      "Named after explorer Charles Sturt; wind deflation removes fine sand, leaving stone armor"
    ],
    "upscNotes": "Gibber plain desert pavement formation; deflation lag gravels; Diamantina channel country."
  },
  {
    "id": "lake-maracaibo",
    "name": "Lake Maracaibo",
    "category": "lake",
    "continent": "South America",
    "coords": [
      -71.6,
      9.8
    ],
    "description": "Largest lake surface area in South America; rich petroleum reserves; Catatumbo lightning.",
    "keyFacts": [
      "Location: South America (Venezuela)",
      "Classification: Tidal Estuarine Lake / Lagoon",
      "Connected to Gulf of Venezuela via Tablazo Strait; major oil extraction basin",
      "Catatumbo Lightning: Unique atmospheric phenomenon generating continuous nocturnal lightning"
    ],
    "upscNotes": "Catatumbo lightning ozone generator; petroleum subsidence; largest South American lake."
  },
  {
    "id": "lake-titicaca",
    "name": "Lake Titicaca",
    "category": "lake",
    "continent": "South America",
    "coords": [
      -69.3,
      -15.8
    ],
    "description": "Highest commercially navigable lake in the world (~3,812 m); situated on Altiplano.",
    "keyFacts": [
      "Location: South America (Peru-Bolivia)",
      "Classification: High-Altitude Tectonic Lake",
      "Largest freshwater lake in South America by volume",
      "Desaguadero River serves as sole outlet, flowing into Lake Poopó"
    ],
    "upscNotes": "Altiplano intermontane basin; Uros indigenous floating reed islands; thermal buffering."
  },
  {
    "id": "lake-poopo",
    "name": "Lake Poopó",
    "category": "lake",
    "continent": "South America",
    "coords": [
      -67.1,
      -18.7
    ],
    "description": "Endorheic Saline Lake subject to severe desiccation.",
    "keyFacts": [
      "Location: South America (Bolivia)",
      "Classification: Endorheic Saline Lake",
      "High-altitude Altiplano lake fed by Desaguadero River from Lake Titicaca",
      "Virtually completely dried up in 2015 due to drought, glacier retreat, and irrigation"
    ],
    "upscNotes": "Climate change and water diversion ecological collapse; endorheic lake desiccation."
  },
  {
    "id": "lake-lagoa-dos-patos",
    "name": "Lagoa dos Patos",
    "category": "lake",
    "continent": "South America",
    "coords": [
      -51.3,
      -31.3
    ],
    "description": "Massive coastal barrier lagoon in southern Brazil.",
    "keyFacts": [
      "Location: South America (Brazil - Rio Grande do Sul)",
      "Classification: Coastal Barrier Lagoon",
      "Largest barrier lagoon in South America (~265 km long)",
      "Separated from Atlantic Ocean by wide sandy barrier beach complex"
    ],
    "upscNotes": "Coastal lagoon sedimentation; Port of Rio Grande at southern entrance."
  },
  {
    "id": "lake-nasser",
    "name": "Lake Nasser",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      32.8,
      22.5
    ],
    "description": "Impounded by Aswan High Dam on the Nile River.",
    "keyFacts": [
      "Location: Africa (Egypt-Sudan, where called Lake Nubia)",
      "Classification: Artificial Hydroelectric Reservoir",
      "Created by impoundment of Nile River by Aswan High Dam in 1960s",
      "Flooded historic Nubian temples (Abu Simbel was relocated by UNESCO)"
    ],
    "upscNotes": "Aswan High Dam flood control and irrigation; Nubian monuments relocation."
  },
  {
    "id": "lake-tana",
    "name": "Lake Tana",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      37.3,
      12.0
    ],
    "description": "Source of the Blue Nile River.",
    "keyFacts": [
      "Location: Africa (Ethiopian Highlands)",
      "Classification: Volcanic Highland Lake",
      "Formed by volcanic lava damming of streams in early Pleistocene",
      "Blue Nile (Abay River) flows out of southern tip toward Tis Issat Falls"
    ],
    "upscNotes": "Blue Nile source; Ethiopian Orthodox island monasteries; GERD water origin."
  },
  {
    "id": "lake-assal",
    "name": "Lake Assal",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      42.4,
      11.6
    ],
    "description": "Lowest point in Africa (~155 m below sea level); hyper-saline.",
    "keyFacts": [
      "Location: Africa (Djibouti - Afar Depression)",
      "Classification: Endorheic Crater Lake",
      "Lowest land point on African continent (-155 m); world's second lowest after Dead Sea",
      "Salinity (~35%) is ten times higher than seawater; surrounded by massive salt fields"
    ],
    "upscNotes": "Afar Depression continental rifting; hyper-saline mineral extraction."
  },
  {
    "id": "lake-turkana",
    "name": "Lake Turkana",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      36.0,
      3.5
    ],
    "description": "World's largest permanent desert lake and largest alkaline lake.",
    "keyFacts": [
      "Location: Africa (Kenya-Ethiopia)",
      "Classification: Endorheic Rift Lake ('Jade Sea')",
      "Located in northern Gregory Rift; fed by Omo River from Ethiopia",
      "Koobi Fora on eastern shore is a premier fossil site for early hominids (Leakey family)"
    ],
    "upscNotes": "Gibe III dam on Omo River impact; early hominid fossil sites; Jade Sea color."
  },
  {
    "id": "lake-albert-edward",
    "name": "Lake Albert & Edward",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      31.0,
      1.7
    ],
    "description": "Situated in the Western (Albertine) Rift Valley.",
    "keyFacts": [
      "Location: Africa (Uganda-DRC border)",
      "Classification: Graben Rift Valley Lakes",
      "Lake Edward drains into Lake Albert via the Semliki River",
      "Albert Nile flows out of the northern end of Lake Albert toward South Sudan"
    ],
    "upscNotes": "Albertine Rift petroleum discoveries; Semliki river connection; Nile river chain."
  },
  {
    "id": "lake-tanganyika",
    "name": "Lake Tanganyika",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      29.6,
      -6.0
    ],
    "description": "Longest freshwater lake in world; second deepest globally after Baikal.",
    "keyFacts": [
      "Location: Africa (DRC, Tanzania, Burundi, Zambia)",
      "Classification: Graben Rift Valley Lake",
      "Maximum depth 1,470 m (second deepest on Earth); length 673 km (longest freshwater lake)",
      "Holds ~16% of world's available surface freshwater; anoxic below 200 m depth"
    ],
    "upscNotes": "Western Rift graben; high cichlid endemism; Lukuga River outlet to Congo basin."
  },
  {
    "id": "lake-malawi",
    "name": "Lake Malawi (Nyasa)",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      34.3,
      -12.2
    ],
    "description": "Southernmost lake in the East African Rift system; high cichlid fish endemism.",
    "keyFacts": [
      "Location: Africa (Malawi, Mozambique, Tanzania)",
      "Classification: Graben Rift Valley Lake",
      "Third largest and second deepest lake in Africa (max depth ~706 m)",
      "Holds more species of fish than any other lake on Earth (>1,000 cichlid species)"
    ],
    "upscNotes": "Meromictic rift lake; adaptive radiation of cichlids; Shire river outlet to Zambezi."
  },
  {
    "id": "lake-victoria",
    "name": "Lake Victoria",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      33.0,
      -1.0
    ],
    "description": "Not in a rift valley; largest lake in Africa; crossed by Equator; source of White Nile.",
    "keyFacts": [
      "Location: Africa (Uganda, Kenya, Tanzania)",
      "Classification: Shallow Crustal Downwarp Lake",
      "World's largest tropical lake (~68,800 km²); second largest freshwater lake by area after Superior",
      "Sits on a shallow plateau depression between the Eastern and Western rifts"
    ],
    "upscNotes": "Crustal sagging origin (NOT rift graben); Nile Perch invasive species ecological crash; White Nile source."
  },
  {
    "id": "lake-kariba",
    "name": "Lake Kariba",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      28.0,
      -17.0
    ],
    "description": "Impounded by Kariba Dam on the Zambezi River.",
    "keyFacts": [
      "Location: Africa (Zambia-Zimbabwe border)",
      "Classification: Artificial Reservoir",
      "World's largest artificial reservoir by water storage volume (~180 km³)",
      "Operated by Zambezi River Authority providing hydroelectric power to both nations"
    ],
    "upscNotes": "Operation Noah animal rescue; induced seismicity; Zambezi hydroelectric governance."
  },
  {
    "id": "lake-volta",
    "name": "Lake Volta",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      0.1,
      7.5
    ],
    "description": "One of world's largest reservoirs by area; created by Akosombo Dam on Volta River.",
    "keyFacts": [
      "Location: Africa (Ghana)",
      "Classification: Artificial Reservoir",
      "World's largest artificial reservoir by surface area (~8,500 km², ~3.6% of Ghana's area)",
      "Akosombo Dam supplies electricity to domestic grid and Valco aluminum smelter"
    ],
    "upscNotes": "Akosombo Dam; inland water transport spine; Volta River basin."
  },
  {
    "id": "lake-chad",
    "name": "Lake Chad",
    "category": "lake",
    "continent": "Africa",
    "coords": [
      14.0,
      13.0
    ],
    "description": "Endorheic Freshwater Basin Lake heavily reduced in surface area.",
    "keyFacts": [
      "Location: Africa (Chad, Niger, Nigeria, Cameroon)",
      "Classification: Endorheic Freshwater Basin Lake",
      "Sits in central Sahelian depression; fed primarily by Chari and Logone rivers",
      "Has shrunk by over 90% since 1960 due to reduced monsoon rainfall and intensive irrigation"
    ],
    "upscNotes": "Sahel ecological and security crisis; Lake Chad Basin Commission; freshwater despite endorheic drainage."
  },
  {
    "id": "lake-great-bear",
    "name": "Great Bear Lake",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -121.0,
      66.0
    ],
    "description": "Crossed directly by the Arctic Circle; northernmost Canadian Shield lake.",
    "keyFacts": [
      "Location: North America (Canada - Northwest Territories)",
      "Classification: Glacial Scour Lake",
      "Largest lake entirely within Canada; eighth largest lake in the world",
      "Drained by Great Bear River into the Mackenzie River"
    ],
    "upscNotes": "Arctic Circle crosses northern arm; Port Radium historic uranium mine (Manhattan Project)."
  },
  {
    "id": "lake-great-slave",
    "name": "Great Slave Lake",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -114.0,
      61.5
    ],
    "description": "Deepest lake in North America (~614 m); source of Mackenzie River.",
    "keyFacts": [
      "Location: North America (Canada - Northwest Territories)",
      "Classification: Glacial Scour Lake",
      "Deepest lake in North America (614 m at Christie Bay)",
      "Mackenzie River flows out of western arm toward Arctic Ocean"
    ],
    "upscNotes": "Deepest North American lake; ice road winter transport; Mackenzie headwater."
  },
  {
    "id": "lake-athabasca",
    "name": "Lake Athabasca",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -109.0,
      59.3
    ],
    "description": "Uranium and oil-sand mining nearby in Alberta/Saskatchewan.",
    "keyFacts": [
      "Location: North America (Canada - Saskatchewan and Alberta)",
      "Classification: Glacial Lake",
      "Peace-Athabasca Delta at western end is one of world's largest inland freshwater deltas",
      "Athabasca Sand Dunes on southern shore are northernmost active dunes in North America"
    ],
    "upscNotes": "Athabasca oil sands; Peace-Athabasca Delta Ramsar site; uranium deposits."
  },
  {
    "id": "lake-winnipeg",
    "name": "Lake Winnipeg",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -97.5,
      52.0
    ],
    "description": "Remnant of glacial Lake Agassiz; drained by Nelson River into Hudson Bay.",
    "keyFacts": [
      "Location: North America (Canada - Manitoba)",
      "Classification: Glacial Remnant Lake",
      "Remnant of ancient proglacial Lake Agassiz which covered central North America",
      "Drained north by Nelson River into Hudson Bay for major hydroelectric power"
    ],
    "upscNotes": "Lake Agassiz glacial history; Nelson River hydroelectric corridor; eutrophication."
  },
  {
    "id": "lake-superior",
    "name": "Lake Superior",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -87.5,
      47.7
    ],
    "description": "Largest freshwater lake in world by area (~82,100 km²); second largest overall.",
    "keyFacts": [
      "Location: North America (USA-Canada)",
      "Classification: Glacial Tectonic Great Lake",
      "Contains more water than all other four Great Lakes combined",
      "Drains into Lake Huron via St. Marys River and Soo Locks"
    ],
    "upscNotes": "Largest freshwater lake by surface area; Soo Locks shipping chokepoint; Mesabi iron range."
  },
  {
    "id": "lake-huron",
    "name": "Lake Huron",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -82.4,
      44.8
    ],
    "description": "Connected to Superior via Soo Locks; second largest Great Lake.",
    "keyFacts": [
      "Location: North America (USA-Canada)",
      "Classification: Glacial Tectonic Great Lake",
      "Contains Manitoulin Island (world's largest freshwater island)",
      "Hydrologically connected to Lake Michigan at same elevation via Straits of Mackinac"
    ],
    "upscNotes": "Lake Michigan-Huron single hydrological entity; Manitoulin Island; Georgian Bay."
  },
  {
    "id": "lake-michigan",
    "name": "Lake Michigan",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -87.0,
      44.0
    ],
    "description": "Only Great Lake entirely within US; hosts city of Chicago on southern shore.",
    "keyFacts": [
      "Location: North America (USA entirely)",
      "Classification: Glacial Tectonic Great Lake",
      "Second largest Great Lake by volume; third largest by surface area",
      "Chicago Sanitary and Ship Canal reverses Chicago River flow away from lake into Mississippi basin"
    ],
    "upscNotes": "Only Great Lake wholly in USA; Chicago canal diversion connecting Great Lakes to Mississippi."
  },
  {
    "id": "lake-erie",
    "name": "Lake Erie",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -81.2,
      42.2
    ],
    "description": "Shallowest Great Lake; borders Detroit automotive manufacturing hub.",
    "keyFacts": [
      "Location: North America (USA-Canada)",
      "Classification: Glacial Tectonic Great Lake",
      "Shallowest (average depth 19 m) and warmest of the Great Lakes",
      "Drains into Lake Ontario via Niagara River and Niagara Falls (bypassed by Welland Canal)"
    ],
    "upscNotes": "Niagara Falls cataract; Welland Canal ship transit; seasonal algae blooms."
  },
  {
    "id": "lake-ontario",
    "name": "Lake Ontario",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -77.7,
      43.7
    ],
    "description": "Smallest Great Lake by area; drained by Saint Lawrence River.",
    "keyFacts": [
      "Location: North America (USA-Canada)",
      "Classification: Glacial Tectonic Great Lake",
      "Lowest elevation of Great Lakes (75 m above sea level)",
      "Outlet is Saint Lawrence River leading to Atlantic Ocean"
    ],
    "upscNotes": "Great Lakes outlet to Atlantic; Niagara River inflow; Toronto industrial shoreline."
  },
  {
    "id": "lake-great-salt",
    "name": "Great Salt Lake",
    "category": "lake",
    "continent": "North America",
    "coords": [
      -112.5,
      41.0
    ],
    "description": "Remnant of pluvial Lake Bonneville; highest salinity in North America.",
    "keyFacts": [
      "Location: North America (USA - Utah)",
      "Classification: Endorheic Hypersaline Lake",
      "Salinity varies between 5% and 27% (much saltier than ocean)",
      "Shrinking rapidly due to drought and river diversion, exposing toxic heavy metal dust beds"
    ],
    "upscNotes": "Pluvial Lake Bonneville history; brine shrimp aquaculture; Great Basin terminal sink."
  },
  {
    "id": "lake-baikal",
    "name": "Lake Baikal",
    "category": "lake",
    "continent": "Asia",
    "coords": [
      107.7,
      53.5
    ],
    "description": "Deepest (~1,642 m) and oldest lake in world; largest freshwater volume globally.",
    "keyFacts": [
      "Location: Asia (Siberia, Russia)",
      "Classification: Tectonic Rift Lake",
      "Holds ~20% of world's unfrozen surface freshwater (>all Great Lakes combined)",
      "Age ~25-30 million years; over 80% of species are endemic (Nerpa Baikal freshwater seal)"
    ],
    "upscNotes": "Baikal Rift Zone active continental rifting; Nerpa freshwater seal; Angara River outlet."
  },
  {
    "id": "lake-aral-sea",
    "name": "Aral Sea",
    "category": "lake",
    "continent": "Asia",
    "coords": [
      59.5,
      45.0
    ],
    "description": "Endorheic Basin Lake severely desiccated due to river diversion.",
    "keyFacts": [
      "Location: Asia (Kazakhstan-Uzbekistan)",
      "Classification: Endorheic Basin Lake",
      "Formerly world's fourth largest lake; lost >90% of volume since 1960",
      "Soviet diversion of Amu Darya and Syr Darya for cotton created Aralkum desert"
    ],
    "upscNotes": "Worst human-made environmental catastrophe; Aralkum toxic dust storms; Kokaral Dam stabilization in north."
  },
  {
    "id": "lake-balkhash",
    "name": "Lake Balkhash",
    "category": "lake",
    "continent": "Asia",
    "coords": [
      75.0,
      46.5
    ],
    "description": "Unique hydrology: western half is fresh water, eastern half is saline water.",
    "keyFacts": [
      "Location: Asia (Kazakhstan)",
      "Classification: Endorheic Basin Lake",
      "Narrow Saryesik Peninsula divides lake into shallow fresh western part and deep saline eastern part",
      "Fed primarily by the Ili River originating in Xinjiang, China"
    ],
    "upscNotes": "Dual freshwater/saline hydrology; Ili River transboundary water diversion concerns with China."
  },
  {
    "id": "lake-caspian-sea",
    "name": "Caspian Sea",
    "category": "lake",
    "continent": "Asia",
    "coords": [
      51.0,
      42.0
    ],
    "description": "Largest enclosed inland water body on Earth by surface area (~371,000 km²); saline.",
    "keyFacts": [
      "Location: Asia / Europe (Turkmenistan, Kazakhstan, Azerbaijan, Russia, Iran)",
      "Classification: Endorheic Inland Sea / Lake",
      "Accounts for ~40-44% of total lacustrine waters of the world; water level is ~28 m below sea level",
      "Main inflow is Volga River (~80% of water); major oil/gas deposits (Kashagan, Shah Deniz)"
    ],
    "upscNotes": "2018 Convention on Legal Status of Caspian Sea; beluga sturgeon caviar; offshore petroleum."
  },
  {
    "id": "lake-urmia",
    "name": "Lake Urmia",
    "category": "lake",
    "continent": "Asia",
    "coords": [
      45.3,
      37.7
    ],
    "description": "Large salt lake in northwest Iran; severely degraded by water diversion.",
    "keyFacts": [
      "Location: Asia (Northwestern Iran)",
      "Classification: Endorheic Hypersaline Lake",
      "Formerly largest lake in Middle East; shrunk to ~10% of former size due to damming and climate",
      "Dunaliella salina microalgae frequently turns remaining brine deep red"
    ],
    "upscNotes": "Middle East environmental desiccation crisis; brine shrimp Artemia habitat; salt dust health hazard."
  },
  {
    "id": "lake-van",
    "name": "Lake Van",
    "category": "lake",
    "continent": "Asia",
    "coords": [
      43.0,
      38.6
    ],
    "description": "World's largest soda lake; highest alkaline salinity among large lakes.",
    "keyFacts": [
      "Location: Asia (Eastern Turkey)",
      "Classification: Endorheic Saline Alkaline Lake",
      "Formed when lava flows from Mount Nemrut blocked the Mus basin drainage",
      "Highly alkaline water (pH ~9.7-9.8) rich in sodium carbonate"
    ],
    "upscNotes": "Volcanic damming origin; alkaline soda lake microbialites; Lake Van train ferry."
  },
  {
    "id": "lake-dead-sea",
    "name": "Dead Sea",
    "category": "lake",
    "continent": "Asia",
    "coords": [
      35.5,
      31.5
    ],
    "description": "Lowest land surface elevation on Earth (~430 m below sea level); fed by Jordan River.",
    "keyFacts": [
      "Location: Asia (Israel, West Bank, Jordan)",
      "Classification: Endorheic Hypersaline Lake",
      "Deepest hypersaline lake in world (depth ~304 m); surface sits ~430 m below sea level",
      "Salinity ~34% (nearly 10x ocean); rich in potash, bromine, and therapeutic minerals"
    ],
    "upscNotes": "Lowest terrestrial elevation on Earth; Jordan Rift pull-apart basin; sinkholes along receding shores."
  },
  {
    "id": "lake-sea-of-galilee",
    "name": "Sea of Galilee (Lake Kinneret)",
    "category": "lake",
    "continent": "Asia",
    "coords": [
      35.6,
      32.8
    ],
    "description": "Lowest freshwater lake on Earth (~214 m below sea level); drained by Jordan River.",
    "keyFacts": [
      "Location: Asia (Northern Israel)",
      "Classification: Freshwater Tectonic Lake",
      "Fed and drained by the Jordan River; primary freshwater reservoir for Israel",
      "National Water Carrier pipes water from Kinneret to the coastal plain and Negev Desert"
    ],
    "upscNotes": "Lowest freshwater lake on Earth; Jordan River basin hydro-politics; National Water Carrier."
  },
  {
    "id": "lake-eyre",
    "name": "Lake Eyre (Kati Thanda)",
    "category": "lake",
    "continent": "Australia & Oceania",
    "coords": [
      -137.4,
      -28.4
    ],
    "description": "Lowest point in Australia (~15 m below sea level); fills fully only during extreme floods.",
    "keyFacts": [
      "Location: Australia (South Australia)",
      "Classification: Endorheic Ephemeral Salt Lake",
      "Lowest natural point in Australia (-15 m); covers vast endorheic basin of ~1.2 million km²",
      "Fills completely only a few times per century during major La Niña monsoon flood events"
    ],
    "upscNotes": "Endorheic Lake Eyre Basin; episodic pelican breeding migrations during flood fills; gibber plains."
  },
  {
    "id": "lake-taupo",
    "name": "Lake Taupo",
    "category": "lake",
    "continent": "Australia & Oceania",
    "coords": [
      175.9,
      -38.8
    ],
    "description": "Largest lake in New Zealand; source of Waikato River.",
    "keyFacts": [
      "Location: Oceania (North Island, New Zealand)",
      "Classification: Volcanic Caldera Lake",
      "Occupies the caldera of the Taupo supervolcano (historic 232 AD Hatepe eruption)",
      "Drained at northern end by Waikato River (New Zealand's longest river)"
    ],
    "upscNotes": "Supervolcano caldera collapse origin; geothermal power generation in Taupo Volcanic Zone."
  },
  {
    "id": "grassland-llanos",
    "name": "Llanos",
    "category": "grassland",
    "continent": "South America",
    "coords": [
      -67.0,
      6.0
    ],
    "description": "Located in the Orinoco River drainage basin; seasonal inundation and drought.",
    "keyFacts": [
      "Location: South America (Venezuela, Colombia)",
      "Climatic Classification: Tropical Savanna (Aw)",
      "Vast alluvial plain in Orinoco basin undergoing alternate extreme seasonal flooding and drought",
      "Home to capybaras, anacondas, Orinoco crocodiles, and cattle ranching culture (llaneros)"
    ],
    "upscNotes": "Tropical savanna biome; Orinoco river seasonal inundation; oil exploration overlap."
  },
  {
    "id": "grassland-campos",
    "name": "Campos",
    "category": "grassland",
    "continent": "South America",
    "coords": [
      -54.0,
      -30.0
    ],
    "description": "Undulating plains supporting cattle and sheep pastoralism.",
    "keyFacts": [
      "Location: South America (Southern Brazil, Uruguay)",
      "Climatic Classification: Subtropical Grassland",
      "Rolling grassy hills (coxilhas) with patches of forest; transition between Cerrado and Pampas",
      "Traditional home of the gaúcho pastoral culture"
    ],
    "upscNotes": "Pampa biome Brazilian extension; livestock pastoralism; soybean expansion."
  },
  {
    "id": "grassland-cerrado",
    "name": "Cerrado",
    "category": "grassland",
    "continent": "South America",
    "coords": [
      -48.0,
      -14.0
    ],
    "description": "High biodiversity; heavily transformed for commercial soybean and cattle farming.",
    "keyFacts": [
      "Location: South America (Central Brazil)",
      "Climatic Classification: Tropical Woody Savanna",
      "World's most biologically rich savanna (~10,000 plant species, 44% endemic)",
      "Acidic, nutrient-poor latosol soils transformed into global agricultural powerhouse via liming"
    ],
    "upscNotes": "Biodiversity hotspot; agricultural frontier transformation (soybean, beef); headwaters of major rivers."
  },
  {
    "id": "grassland-caatinga",
    "name": "Caatinga",
    "category": "grassland",
    "continent": "South America",
    "coords": [
      -39.0,
      -8.0
    ],
    "description": "Drought-deciduous scrub adapted to low, erratic precipitation.",
    "keyFacts": [
      "Location: South America (Northeastern Brazil - Sertão)",
      "Climatic Classification: Tropical Semi-Arid Thorn Scrub",
      "Name means 'white forest' in Tupi due to white/grey appearance during dry season when leaves drop",
      "Dominated by thorny cactuses (Mandacaru), bromeliads, and drought-resistant legumes"
    ],
    "upscNotes": "Unique semi-arid thorn biome endemic to Brazil; severe recurring droughts (Secas)."
  },
  {
    "id": "grassland-gran-chaco",
    "name": "Gran Chaco",
    "category": "grassland",
    "continent": "South America",
    "coords": [
      -61.0,
      -23.0
    ],
    "description": "Straddles the Tropic of Capricorn; vast alluvial plain with dense scrub and open savanna.",
    "keyFacts": [
      "Location: South America (Bolivia, Paraguay, Argentina, Brazil)",
      "Climatic Classification: Mixed Tropical to Temperate Scrub / Savanna",
      "Extremely hot interior lowland plain; highest temperatures in South America (up to 49°C)",
      "Home to the quebracho tree ('axe-breaker'), historically prized for tannin extraction"
    ],
    "upscNotes": "Quebracho tannin extraction; Chaco War historical geography; deforestation hot spot."
  },
  {
    "id": "grassland-pampas",
    "name": "Pampas",
    "category": "grassland",
    "continent": "South America",
    "coords": [
      -62.0,
      -35.0
    ],
    "description": "Treeless fertile plains; deep soils; nutritious alfalfa bunchgrass; intensive wheat and cattle.",
    "keyFacts": [
      "Location: South America (Argentina, Uruguay)",
      "Climatic Classification: Temperate Grassland (Humid Pampa in east, Dry Pampa in west)",
      "Deep fertile black soils (Mollisols) formed by windblown loess deposits",
      "Heartland of Argentine agricultural economy: beef, wheat, corn, soybeans"
    ],
    "upscNotes": "Mollisol/loess fertile soils; Humid vs Dry Pampa divide; alfalfa pastoralism."
  },
  {
    "id": "grassland-savanna",
    "name": "African Savanna",
    "category": "grassland",
    "continent": "Africa",
    "coords": [
      25.0,
      5.0
    ],
    "description": "Broad belt of tall grasses and scattered umbrella acacias; supports large mammalian herbivores.",
    "keyFacts": [
      "Location: Africa (Sudan, East Africa, Central Africa, Southern Africa)",
      "Climatic Classification: Tropical Savanna (Aw)",
      "Characterized by distinct wet season and dry season governed by ITCZ migration",
      "Supports greatest diversity and concentration of large wild ungulates on Earth (Serengeti, Mara)"
    ],
    "upscNotes": "Tropical wet-and-dry climate; umbrella thorn acacia adaptation; wildlife migrations."
  },
  {
    "id": "grassland-veld",
    "name": "Veld (Highveld)",
    "category": "grassland",
    "continent": "Africa",
    "coords": [
      27.0,
      -28.0
    ],
    "description": "High-elevation plateau grasslands situated south of the Tropic of Capricorn; pastoralism and maize.",
    "keyFacts": [
      "Location: Africa (South Africa, Lesotho)",
      "Climatic Classification: Temperate Grassland",
      "Divided into Highveld (>1,500 m elevation, cool open grassland) and Lowveld (warm subtropical savanna)",
      "Highveld contains the Witwatersrand gold reef and major maize-producing agricultural belt"
    ],
    "upscNotes": "Highveld vs Lowveld altitudinal zones; Witwatersrand gold basin; Maize Triangle."
  },
  {
    "id": "grassland-prairies",
    "name": "Prairies",
    "category": "grassland",
    "continent": "North America",
    "coords": [
      -98.0,
      43.0
    ],
    "description": "Deep mollisol soils; divided into tallgrass, mixed, and shortgrass prairies; commercial wheat.",
    "keyFacts": [
      "Location: North America (Central USA, Canadian Prairie Provinces)",
      "Climatic Classification: Temperate Grassland",
      "Divided west-to-east based on rainfall: Shortgrass (Steppe), Mixed-grass, Tallgrass Prairie",
      "Underlain by deep, dark Mollisol soils; breadbasket of North America (Spring and Winter wheat belts)"
    ],
    "upscNotes": "Tallgrass vs Shortgrass prairie moisture gradient; 100th Meridian climatic boundary; Dust Bowl history."
  },
  {
    "id": "grassland-downs",
    "name": "Downs",
    "category": "grassland",
    "continent": "Australia & Oceania",
    "coords": [
      148.0,
      -27.5
    ],
    "description": "Located in the interior basin of the Murray-Darling river system; prime merino wool and wheat.",
    "keyFacts": [
      "Location: Australia (Darling Downs in Queensland, Liverpool Plains in NSW)",
      "Climatic Classification: Temperate to Subtropical Grassland",
      "Fertile black basaltic soils (Vertisols) with high clay content and water-holding capacity",
      "Center of Australia's intensive wheat, sorghum, cotton, and prime beef/merino wool production"
    ],
    "upscNotes": "Murray-Darling agricultural heartland; Vertisol cracking clay soils; Great Artesian Basin overlap."
  },
  {
    "id": "grassland-canterbury",
    "name": "Canterbury Plains",
    "category": "grassland",
    "continent": "Australia & Oceania",
    "coords": [
      172.0,
      -43.6
    ],
    "description": "Situated east of the Southern Alps; subject to warm foehn winds (Nor'wester); intensive sheep/dairy.",
    "keyFacts": [
      "Location: Oceania (South Island, New Zealand)",
      "Climatic Classification: Temperate Alluvial Grassland / Plain",
      "Vast gravelly alluvial fan created by braided rivers flowing out of the glaciated Southern Alps (Rakaia, Waimakariri)",
      "Subject to the Nor'wester: Warm, dry föhn wind that descends off the Southern Alps"
    ],
    "upscNotes": "Braided river alluvial geomorphology; Föhn wind climatic effect; dairy and wool agriculture."
  }
];

  return {
    entities: entities,
    getById: function (id) {
      return entities.find(e => e.id === id);
    },
    getByCategory: function (cat) {
      return cat === 'all' ? entities : entities.filter(e => e.category === cat);
    },
    getByContinent: function (cont) {
      return !cont ? entities : entities.filter(e => e.continent === cont);
    }
  };
})();
