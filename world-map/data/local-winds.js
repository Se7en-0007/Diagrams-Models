/**
 * World Mapping Atlas — Local Winds Dataset
 * Complete UPSC CSE Climatology Dataset for Major Global Local Winds
 */
window.LOCAL_WINDS = [
  {
    id: "wind-loo",
    name: "Loo",
    category: "wind",
    categoryName: "Local Wind",
    region: "North-west India and Pakistan plains",
    nature: "Hot, dry westerly; May–June afternoons, 45–50 °C",
    effect: "Heatstroke",
    type: "warm",
    typeName: "Hot / Dry Wind",
    direction: "Westerly to North-westerly",
    season: "Summer (May–June)",
    continent: "India",
    group: "india",
    color: "#ef4444",
    coords: [77.0, 28.0],
    midpoint: [28.0, 77.0],
    segments: [
      [
        [27.5, 68.0],
        [28.2, 71.0],
        [28.8, 75.0],
        [28.5, 78.5],
        [26.8, 82.5],
        [25.5, 85.5]
      ]
    ],
    description: "Extremely hot, dry, and gusty summer afternoon wind blowing over the northern and north-western plains of India and Pakistan. Temperatures routinely reach 45–50 °C.",
    keyFacts: [
      "Region: North-west India and Pakistan plains",
      "Nature: Hot, dry westerly; May–June afternoons, 45–50 °C",
      "Primary Effect: Causes severe heatstroke and dehydration; desiccation of standing crops",
      "Direction: Westerly to North-westerly down the Indo-Gangetic trough"
    ],
    upscNotes: "Thermal advective wind of the pre-monsoon summer season; originates in the Thar Desert and Balochistan plateau. High morbidity from heatstroke; ends abruptly with the onset of the South-west Monsoon."
  },
  {
    id: "wind-fohn",
    name: "Föhn",
    altName: "Foehn",
    category: "wind",
    categoryName: "Local Wind",
    region: "Lee (north) side of the Alps",
    nature: "Warm, dry, descending",
    effect: "Melts snow, aids grazing and grape ripening",
    type: "warm",
    typeName: "Warm / Katabatic Wind",
    direction: "Southerly ascending, Northerly descending",
    season: "Spring and Autumn",
    continent: "Europe",
    group: "world",
    color: "#f97316",
    coords: [9.5, 47.0],
    midpoint: [47.0, 9.5],
    segments: [
      [
        [45.6, 8.8],
        [46.4, 9.2],
        [47.2, 9.8],
        [47.8, 11.2]
      ]
    ],
    description: "Warm, dry, gusty katabatic wind that occurs on the northern (lee) slopes of the European Alps. Air cools moist-adiabatically on the windward side and warms dry-adiabatically on the leeward descent.",
    keyFacts: [
      "Region: Northern valleys of the Alps (Switzerland, Austria, southern Germany)",
      "Nature: Warm, dry, descending katabatic wind",
      "Primary Effect: Rapidly melts snow ('snow eater'), elongates agricultural growing seasons, ripens grapes",
      "Thermodynamic Mechanism: Adiabatic compression during downslope descent"
    ],
    upscNotes: "Archetypal katabatic rain-shadow wind; warms at dry adiabatic lapse rate (~10 °C/km) after losing moisture on southern Italian alpine slopes. Can trigger avalanches due to rapid snowmelt."
  },
  {
    id: "wind-chinook",
    name: "Chinook",
    category: "wind",
    categoryName: "Local Wind",
    region: "East of the Rockies (USA, Canada)",
    nature: "Warm, dry, descending; 'snow eater'",
    effect: "Clears snow from winter pastures",
    type: "warm",
    typeName: "Warm / Katabatic Wind",
    direction: "Westerly descending onto High Plains",
    season: "Winter and Early Spring",
    continent: "North America",
    group: "world",
    color: "#f97316",
    coords: [-110.0, 48.0],
    midpoint: [48.0, -110.0],
    segments: [
      [
        [52.0, -116.0],
        [50.5, -113.0],
        [48.0, -110.0],
        [45.0, -107.0],
        [42.0, -104.5]
      ]
    ],
    description: "Warm, dry katabatic wind descending the eastern slopes of the Rocky Mountains across Alberta, Montana, Wyoming, and Colorado. Can raise temperatures by over 20 °C in mere hours.",
    keyFacts: [
      "Region: Eastern slopes of the Rocky Mountains (Canada & USA)",
      "Nature: Warm, dry, descending katabatic wind; known as the 'Snow Eater'",
      "Primary Effect: Clears heavy snow rapidly from winter rangelands, enabling livestock grazing",
      "Temperature Record: Can raise freezing winter temperatures to 15 °C within minutes"
    ],
    upscNotes: "North American equivalent of the European Föhn. Moist maritime Pacific air drops precipitation on western slopes and heats adiabatically on leeward Great Plains descent."
  },
  {
    id: "wind-santa-ana",
    name: "Santa Ana",
    category: "wind",
    categoryName: "Local Wind",
    region: "Southern California",
    nature: "Hot, dry, offshore",
    effect: "Spreads wildfires",
    type: "warm",
    typeName: "Hot / Offshore Wind",
    direction: "North-easterly offshore",
    season: "Autumn and Winter",
    continent: "North America",
    group: "world",
    color: "#ef4444",
    coords: [-118.0, 34.2],
    midpoint: [34.2, -118.0],
    segments: [
      [
        [35.5, -116.5],
        [34.8, -117.6],
        [34.0, -118.5],
        [33.2, -119.5]
      ]
    ],
    description: "Strong, extremely dry downslope winds that blow from the elevated Great Basin / Mojave Desert through Southern California mountain passes out toward the Pacific coast.",
    keyFacts: [
      "Region: Southern California & northern Baja California",
      "Nature: Hot, dry, offshore katabatic wind with relative humidity often <10%",
      "Primary Effect: Rapidly ignites and spreads catastrophic chaparral wildfires",
      "Origin: High-pressure system over the Great Basin forcing desert air through narrow mountain canyons"
    ],
    upscNotes: "Adiabatically compressed desert wind that accelerates through coastal canyons (Venturi effect). Critical fire weather hazard in Mediterranean California biome."
  },
  {
    id: "wind-sirocco",
    name: "Sirocco",
    category: "wind",
    categoryName: "Local Wind",
    region: "Sahara to southern Europe",
    nature: "Hot, dusty; humid after crossing the sea",
    effect: "Dust, crop damage",
    type: "warm",
    typeName: "Hot / Mediterranean Wind",
    direction: "Southerly from North Africa across Mediterranean",
    season: "Spring and Autumn",
    continent: "Africa",
    group: "world",
    color: "#ea580c",
    coords: [14.0, 36.0],
    midpoint: [36.0, 14.0],
    segments: [
      [
        [28.0, 10.0],
        [32.5, 12.0],
        [36.0, 14.5],
        [39.5, 16.0],
        [43.0, 16.5]
      ]
    ],
    description: "Hot, dry, dust-laden Mediterranean wind originating in the Sahara Desert. It absorbs immense moisture crossing the Mediterranean Sea, arriving in southern Europe as suffocatingly warm, humid, and dusty air.",
    keyFacts: [
      "Region: Originates in Sahara; affects Sicily, Italy, Greece, and Balkans",
      "Nature: Hot, arid and dusty at source; turns oppressively humid after crossing the sea",
      "Primary Effect: Blood rain (red desert dust in precipitation), respiratory distress, agricultural crop damage",
      "Associated Depressions: Driven by eastward-moving Mediterranean frontal cyclones"
    ],
    upscNotes: "Key Mediterranean wind system. Absorbs maritime moisture over warm seawater causing muggy conditions in Italy and Greece, and depositing Saharan red clay silt ('blood rain')."
  },
  {
    id: "wind-harmattan",
    name: "Harmattan",
    category: "wind",
    categoryName: "Local Wind",
    region: "Sahara to the Guinea coast",
    nature: "Dry, dusty north-east wind; winter",
    effect: "Relief from humid heat ('The Doctor')",
    type: "warm",
    typeName: "Dry Trade Wind",
    direction: "North-easterly trade wind",
    season: "Winter (November to March)",
    continent: "Africa",
    group: "world",
    color: "#f59e0b",
    coords: [5.0, 13.0],
    midpoint: [13.0, 5.0],
    segments: [
      [
        [22.0, 16.0],
        [18.0, 11.0],
        [13.5, 5.5],
        [8.5, 0.5],
        [5.0, -3.5]
      ]
    ],
    description: "Dry and dusty north-easterly trade wind that blows from the Sahara across West Africa into the Gulf of Guinea between late November and mid-March. Known locally as 'The Doctor' because it brings welcome relief from equatorial damp heat.",
    keyFacts: [
      "Region: West Africa, Sahel, Guinea Coast",
      "Nature: Very dry, cool-to-warm, carrying dense plumes of fine Saharan dust (Harmattan haze)",
      "Primary Effect: Lowers humidity dramatically, offering relief from oppressive muggy coastal climate ('The Doctor'); causes flight cancellations due to dust haze",
      "Origin: Winter subtropical high-pressure cell over the Sahara"
    ],
    upscNotes: "Significantly lowers relative humidity along the Gulf of Guinea. Carries Saharan mineral dust across the Atlantic, contributing vital nutrients (phosphorus) to the Amazon rainforest."
  },
  {
    id: "wind-brickfielder",
    name: "Brickfielder",
    category: "wind",
    categoryName: "Local Wind",
    region: "South-eastern Australia",
    nature: "Hot, dry, dusty northerly",
    effect: "Heat and dust",
    type: "warm",
    typeName: "Hot Desert Wind",
    direction: "Northerly from Outback to SE coast",
    season: "Summer (December to February)",
    continent: "Australia & Oceania",
    group: "world",
    color: "#ef4444",
    coords: [140.0, -33.0],
    midpoint: [-33.0, 140.0],
    segments: [
      [
        [-25.0, 135.0],
        [-29.0, 137.5],
        [-33.5, 141.0],
        [-37.5, 145.5]
      ]
    ],
    description: "Fierce, hot, dusty northerly wind blowing from the arid Central Australian deserts toward the populous south-eastern coastal plains of Victoria, New South Wales, and South Australia.",
    keyFacts: [
      "Region: South-eastern Australia (Sydney, Melbourne, Adelaide)",
      "Nature: Blisteringly hot, dry, northerly desert wind preceding a cold front",
      "Primary Effect: Extreme fire hazard, severe heat waves, intense red dust clouds ('brick dust')",
      "Historical Name: Named in early Sydney where winds blew red dust from brickworks fields"
    ],
    upscNotes: "Pre-frontal desert wind in the Australian synoptic pattern. Typically followed by the sudden, violent cold front known as the 'Southerly Buster' which drops temperatures dramatically."
  },
  {
    id: "wind-mistral",
    name: "Mistral",
    category: "wind",
    categoryName: "Local Wind",
    region: "Rhône valley to the Gulf of Lion, France",
    nature: "Cold, dry, strong northerly",
    effect: "Damages crops; fans fires",
    type: "cold",
    typeName: "Cold / Channeled Katabatic Wind",
    direction: "Northerly down Rhône Valley",
    season: "Winter and Spring",
    continent: "Europe",
    group: "world",
    color: "#0284c7",
    coords: [4.8, 44.0],
    midpoint: [44.0, 4.8],
    segments: [
      [
        [46.5, 4.8],
        [45.0, 4.8],
        [43.5, 4.7],
        [42.0, 4.5]
      ]
    ],
    description: "Strong, cold, dry north-northwesterly wind that blows down the Rhône River valley into the Gulf of Lion in the Mediterranean. Accelerated through the topographic funnel between the Alps and Massif Central.",
    keyFacts: [
      "Region: Rhône Valley, Provence, Gulf of Lion (Southern France)",
      "Nature: Very cold, bone-dry, violent gusts often exceeding 90 km/h",
      "Primary Effect: Damages orchards and olive groves, creates dangerous rough sea conditions, fans brushfires",
      "Topographic Acceleration: Channeled and amplified by the narrow Rhône trench"
    ],
    upscNotes: "Classic channeled katabatic wind caused by high pressure over the European continent and a low-pressure Genoa cyclone over the Mediterranean Sea. Traditional Provençal houses are built facing south to shield against it."
  },
  {
    id: "wind-bora",
    name: "Bora",
    category: "wind",
    categoryName: "Local Wind",
    region: "Eastern Adriatic coast",
    nature: "Cold, dry, gusty north-easterly",
    effect: "Very cold, violent gusts",
    type: "cold",
    typeName: "Cold / Gravity Fall Wind",
    direction: "North-easterly across Dinaric Alps",
    season: "Winter",
    continent: "Europe",
    group: "world",
    color: "#0284c7",
    coords: [14.8, 44.5],
    midpoint: [44.5, 14.8],
    segments: [
      [
        [46.2, 14.8],
        [45.3, 14.4],
        [44.2, 15.2],
        [42.8, 16.8]
      ]
    ],
    description: "Very cold, dry, fierce north-easterly katabatic wind that sweeps down from the cold interior plateaus of the Dinaric Alps onto the warm waters of the Adriatic Sea.",
    keyFacts: [
      "Region: Eastern Adriatic coast (Croatia, Slovenia, Montenegro, Trieste)",
      "Nature: Fierce, freezing cold, turbulent gravity wind with hurricane-force gusts (>200 km/h)",
      "Primary Effect: Halts maritime navigation, topples trucks, freezes coastal settlements with spray ice",
      "Mechanism: Dense cold air pooled over Central Europe cascades down steep coastal escarpments"
    ],
    upscNotes: "Textbook gravity fall wind (katabatic). The cold air is so intensely chilled over the interior limestone karsts that even after adiabatic heating on descent, it remains bitterly colder than the warm coastal Adriatic air."
  },
  {
    id: "wind-levanter",
    name: "Levanter",
    category: "wind",
    categoryName: "Local Wind",
    region: "Strait of Gibraltar",
    nature: "Humid easterly",
    effect: "Cloud and fog",
    type: "cold",
    typeName: "Humid Gap Wind",
    direction: "Easterly through Gibraltar Gap",
    season: "Summer and Autumn",
    continent: "Europe",
    group: "world",
    color: "#0d9488",
    coords: [-5.0, 36.1],
    midpoint: [36.1, -5.0],
    segments: [
      [
        [36.4, -2.5],
        [36.2, -4.2],
        [36.0, -5.5],
        [35.8, -7.0]
      ]
    ],
    description: "Moderate to strong easterly gap wind that blows through the narrow Strait of Gibraltar from the western Mediterranean into the Atlantic, bringing dense moisture, heavy clouds, and marine fog.",
    keyFacts: [
      "Region: Strait of Gibraltar, Alboran Sea, Andalusia, Ceuta",
      "Nature: Mild/cool, very humid easterly wind channeled through the mountain gap",
      "Primary Effect: Produces iconic banner clouds over the Rock of Gibraltar, dense sea fog, rough sea swells",
      "Venturi Effect: Wind accelerates dramatically through the 14-km wide gap between the Pillars of Hercules"
    ],
    upscNotes: "Orographically forced gap wind. As moist Mediterranean air is compressed through the narrow strait between the Betic Cordillera (Spain) and the Rif Mountains (Morocco), adiabatic lifting creates persistent banner clouds over Gibraltar."
  },
  {
    id: "wind-shamal",
    name: "Shamal",
    category: "wind",
    categoryName: "Local Wind",
    region: "Iraq and the Persian Gulf",
    nature: "Strong north-westerly",
    effect: "Sandstorms",
    type: "warm",
    typeName: "Hot Desert Gale",
    direction: "North-westerly down Mesopotamian corridor",
    season: "Summer (June–July) and Winter",
    continent: "Asia",
    group: "world",
    color: "#f59e0b",
    coords: [48.0, 30.0],
    midpoint: [30.0, 48.0],
    segments: [
      [
        [35.5, 43.5],
        [33.0, 45.8],
        [30.2, 48.5],
        [27.0, 51.5],
        [24.5, 55.0]
      ]
    ],
    description: "Persistent north-westerly gale blowing down the Tigris-Euphrates river valley in Iraq across Kuwait and the Persian Gulf. Triggers massive, blinding regional sandstorms and dust storms.",
    keyFacts: [
      "Region: Mesopotamia (Iraq), Kuwait, eastern Saudi Arabia, Persian Gulf states",
      "Nature: Fierce, gusty, dry north-westerly wind blowing for days",
      "Primary Effect: Engulfs cities in choking dust and sandstorms; disrupts oil shipping and air traffic",
      "Synoptic Cause: Steep pressure gradient between thermal low over Iran/Pakistan and high over the Levant"
    ],
    upscNotes: "Major synoptic wind system of the Middle East. Channeled down the Mesopotamian depression flanked by the Zagros Mountains to the east and the Arabian plateau to the west."
  },
  {
    id: "wind-elephanta",
    name: "Elephanta",
    category: "wind",
    categoryName: "Local Wind",
    region: "Malabar coast",
    nature: "Strong southerly to south-easterly; September–October",
    effect: "Marks the end of the south-west monsoon",
    type: "warm",
    typeName: "Monsoon Retreat Gale",
    direction: "Southerly to South-easterly",
    season: "Post-Monsoon (September–October)",
    continent: "India",
    group: "india",
    color: "#ef4444",
    coords: [75.5, 10.5],
    midpoint: [10.5, 75.5],
    segments: [
      [
        [8.5, 75.5],
        [10.0, 75.8],
        [11.5, 75.4],
        [13.0, 74.6]
      ]
    ],
    description: "Strong southerly or south-easterly gale blowing along the Malabar Coast of Kerala and coastal Karnataka in September and October, signaling the final squalls and retreat of the South-west Monsoon.",
    keyFacts: [
      "Region: Malabar Coast of Kerala and coastal Karnataka (India)",
      "Nature: Strong, moist, squally southerly/south-easterly wind in September–October",
      "Primary Effect: Severe thunderstorms and rough coastal seas marking the formal end of the SW monsoon",
      "Cultural & Climatological Milestone: Traditional indicator used by coastal fishermen for the withdrawal of the summer monsoon"
    ],
    upscNotes: "Indian climatological wind associated with the retreating monsoon phase (October heat transition). Brings turbulent squally showers to Kerala before the onset of the North-east winter monsoon."
  }
];
