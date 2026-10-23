/**
 * World Mapping Atlas — Geographic Features (Lines, Chains, Graticules)
 * Exact IDs synchronized with WORLD_MAP_DATA for seamless highlighting
 */

window.GEOGRAPHIC_FEATURES = (function () {
  'use strict';

  const rivers = [
  {
    "id": "river-amazon",
    "name": "Amazon River",
    "color": "#38bdf8",
    "path": [
      [
        -75.8,
        -10.5
      ],
      [
        -73.5,
        -4.5
      ],
      [
        -70.0,
        -4.2
      ],
      [
        -60.0,
        -3.1
      ],
      [
        -54.0,
        -2.5
      ],
      [
        -51.0,
        -0.1
      ],
      [
        -49.5,
        0.5
      ]
    ]
  },
  {
    "id": "river-orinoco",
    "name": "Orinoco River",
    "color": "#38bdf8",
    "path": [
      [
        -63.5,
        2.3
      ],
      [
        -66.8,
        4.0
      ],
      [
        -67.8,
        6.0
      ],
      [
        -67.5,
        7.5
      ],
      [
        -64.0,
        8.1
      ],
      [
        -62.0,
        8.6
      ],
      [
        -60.5,
        9.2
      ]
    ]
  },
  {
    "id": "river-parana",
    "name": "Paran\u00e1 River",
    "color": "#38bdf8",
    "path": [
      [
        -48.0,
        -19.0
      ],
      [
        -51.0,
        -20.5
      ],
      [
        -54.5,
        -24.0
      ],
      [
        -54.6,
        -25.6
      ],
      [
        -58.8,
        -27.5
      ],
      [
        -60.5,
        -31.7
      ],
      [
        -59.5,
        -33.8
      ],
      [
        -58.4,
        -34.4
      ]
    ]
  },
  {
    "id": "river-nile",
    "name": "Nile River",
    "color": "#38bdf8",
    "path": [
      [
        33.0,
        -1.0
      ],
      [
        32.5,
        2.0
      ],
      [
        31.5,
        9.5
      ],
      [
        32.55,
        15.6
      ],
      [
        33.0,
        19.5
      ],
      [
        31.0,
        22.0
      ],
      [
        32.9,
        24.1
      ],
      [
        31.2,
        30.0
      ],
      [
        31.3,
        31.5
      ]
    ]
  },
  {
    "id": "river-niger",
    "name": "Niger River",
    "color": "#38bdf8",
    "path": [
      [
        -10.7,
        9.3
      ],
      [
        -8.0,
        11.5
      ],
      [
        -4.0,
        14.5
      ],
      [
        -3.0,
        16.8
      ],
      [
        -0.0,
        16.0
      ],
      [
        3.2,
        11.8
      ],
      [
        6.0,
        8.0
      ],
      [
        6.8,
        7.8
      ],
      [
        6.0,
        4.5
      ]
    ]
  },
  {
    "id": "river-congo",
    "name": "Congo (Zaire) River",
    "color": "#38bdf8",
    "path": [
      [
        26.0,
        -10.5
      ],
      [
        26.0,
        -5.0
      ],
      [
        25.2,
        0.5
      ],
      [
        22.5,
        2.1
      ],
      [
        18.0,
        1.8
      ],
      [
        16.5,
        -0.1
      ],
      [
        15.3,
        -4.3
      ],
      [
        13.0,
        -5.8
      ],
      [
        12.2,
        -6.0
      ]
    ]
  },
  {
    "id": "river-zambezi",
    "name": "Zambezi River",
    "color": "#38bdf8",
    "path": [
      [
        24.0,
        -11.5
      ],
      [
        23.5,
        -14.0
      ],
      [
        25.8,
        -17.9
      ],
      [
        28.8,
        -16.5
      ],
      [
        33.0,
        -15.6
      ],
      [
        35.5,
        -18.0
      ],
      [
        36.3,
        -18.8
      ]
    ]
  },
  {
    "id": "river-limpopo",
    "name": "Limpopo River",
    "color": "#38bdf8",
    "path": [
      [
        26.8,
        -24.2
      ],
      [
        27.5,
        -23.5
      ],
      [
        29.8,
        -22.2
      ],
      [
        31.5,
        -22.4
      ],
      [
        33.0,
        -24.5
      ],
      [
        33.5,
        -25.2
      ]
    ]
  },
  {
    "id": "river-orange",
    "name": "Orange River",
    "color": "#38bdf8",
    "path": [
      [
        29.0,
        -29.5
      ],
      [
        26.0,
        -30.5
      ],
      [
        24.0,
        -29.8
      ],
      [
        21.0,
        -28.5
      ],
      [
        18.0,
        -28.6
      ],
      [
        16.5,
        -28.6
      ]
    ]
  },
  {
    "id": "river-mississippi-missouri",
    "name": "Mississippi-Missouri River",
    "color": "#38bdf8",
    "path": [
      [
        -111.5,
        45.9
      ],
      [
        -105.0,
        48.0
      ],
      [
        -100.5,
        47.0
      ],
      [
        -96.0,
        41.3
      ],
      [
        -90.2,
        38.8
      ],
      [
        -89.1,
        37.0
      ],
      [
        -90.0,
        32.3
      ],
      [
        -90.0,
        29.9
      ],
      [
        -89.2,
        29.1
      ]
    ]
  },
  {
    "id": "river-colorado",
    "name": "Colorado River",
    "color": "#38bdf8",
    "path": [
      [
        -105.8,
        40.4
      ],
      [
        -108.5,
        39.1
      ],
      [
        -110.5,
        37.5
      ],
      [
        -112.1,
        36.1
      ],
      [
        -114.7,
        36.0
      ],
      [
        -114.6,
        32.7
      ],
      [
        -114.8,
        31.8
      ]
    ]
  },
  {
    "id": "river-columbia",
    "name": "Columbia River",
    "color": "#38bdf8",
    "path": [
      [
        -116.0,
        50.2
      ],
      [
        -118.0,
        52.0
      ],
      [
        -118.0,
        49.0
      ],
      [
        -119.5,
        48.0
      ],
      [
        -119.0,
        46.0
      ],
      [
        -123.0,
        46.2
      ],
      [
        -124.0,
        46.25
      ]
    ]
  },
  {
    "id": "river-rio-grande",
    "name": "Rio Grande",
    "color": "#38bdf8",
    "path": [
      [
        -107.5,
        37.7
      ],
      [
        -106.5,
        35.0
      ],
      [
        -106.5,
        31.8
      ],
      [
        -104.0,
        29.5
      ],
      [
        -101.0,
        29.8
      ],
      [
        -99.5,
        27.5
      ],
      [
        -97.1,
        25.9
      ]
    ]
  },
  {
    "id": "river-st-lawrence",
    "name": "Saint Lawrence River",
    "color": "#38bdf8",
    "path": [
      [
        -76.4,
        44.2
      ],
      [
        -74.8,
        45.0
      ],
      [
        -73.5,
        45.5
      ],
      [
        -71.2,
        46.8
      ],
      [
        -69.5,
        48.2
      ],
      [
        -67.0,
        49.2
      ]
    ]
  },
  {
    "id": "river-mackenzie",
    "name": "Mackenzie River",
    "color": "#38bdf8",
    "path": [
      [
        -117.0,
        61.3
      ],
      [
        -121.0,
        62.0
      ],
      [
        -124.0,
        64.0
      ],
      [
        -128.5,
        66.0
      ],
      [
        -133.0,
        68.0
      ],
      [
        -136.0,
        69.2
      ]
    ]
  },
  {
    "id": "river-yukon",
    "name": "Yukon River",
    "color": "#38bdf8",
    "path": [
      [
        -134.0,
        60.5
      ],
      [
        -135.0,
        62.0
      ],
      [
        -139.5,
        64.0
      ],
      [
        -145.0,
        66.5
      ],
      [
        -150.0,
        65.5
      ],
      [
        -160.0,
        63.0
      ],
      [
        -164.5,
        62.5
      ]
    ]
  },
  {
    "id": "river-rhine",
    "name": "Rhine River",
    "color": "#38bdf8",
    "path": [
      [
        9.5,
        46.6
      ],
      [
        8.6,
        47.6
      ],
      [
        7.6,
        47.6
      ],
      [
        7.8,
        49.0
      ],
      [
        8.3,
        50.0
      ],
      [
        7.1,
        50.7
      ],
      [
        6.5,
        51.4
      ],
      [
        4.1,
        51.9
      ]
    ]
  },
  {
    "id": "river-danube",
    "name": "Danube River",
    "color": "#38bdf8",
    "path": [
      [
        8.2,
        48.0
      ],
      [
        12.1,
        49.0
      ],
      [
        16.4,
        48.2
      ],
      [
        17.1,
        48.1
      ],
      [
        19.0,
        47.5
      ],
      [
        20.5,
        44.8
      ],
      [
        22.6,
        44.6
      ],
      [
        28.0,
        44.2
      ],
      [
        29.6,
        45.2
      ]
    ]
  },
  {
    "id": "river-volga",
    "name": "Volga River",
    "color": "#38bdf8",
    "path": [
      [
        33.1,
        57.2
      ],
      [
        36.0,
        56.8
      ],
      [
        44.0,
        56.3
      ],
      [
        49.0,
        55.8
      ],
      [
        48.5,
        53.2
      ],
      [
        46.0,
        51.5
      ],
      [
        44.5,
        48.7
      ],
      [
        48.0,
        46.3
      ]
    ]
  },
  {
    "id": "river-po",
    "name": "Po River",
    "color": "#38bdf8",
    "path": [
      [
        7.1,
        44.7
      ],
      [
        8.0,
        45.0
      ],
      [
        9.5,
        45.1
      ],
      [
        11.0,
        45.0
      ],
      [
        12.3,
        44.9
      ]
    ]
  },
  {
    "id": "river-elbe",
    "name": "Elbe River",
    "color": "#38bdf8",
    "path": [
      [
        15.5,
        50.7
      ],
      [
        14.4,
        50.5
      ],
      [
        13.2,
        51.1
      ],
      [
        11.8,
        52.1
      ],
      [
        9.9,
        53.5
      ],
      [
        8.6,
        53.9
      ]
    ]
  },
  {
    "id": "river-vistula",
    "name": "Vistula River",
    "color": "#38bdf8",
    "path": [
      [
        19.0,
        49.6
      ],
      [
        20.0,
        50.0
      ],
      [
        21.5,
        51.0
      ],
      [
        21.0,
        52.2
      ],
      [
        18.7,
        53.1
      ],
      [
        18.9,
        54.3
      ]
    ]
  },
  {
    "id": "river-ob-irtysh",
    "name": "Ob-Irtysh River",
    "color": "#38bdf8",
    "path": [
      [
        88.0,
        47.0
      ],
      [
        83.0,
        50.0
      ],
      [
        74.0,
        55.0
      ],
      [
        68.5,
        58.2
      ],
      [
        69.0,
        61.0
      ],
      [
        66.0,
        66.5
      ],
      [
        72.0,
        67.0
      ]
    ]
  },
  {
    "id": "river-yenisey",
    "name": "Yenisey River",
    "color": "#38bdf8",
    "path": [
      [
        97.0,
        51.5
      ],
      [
        92.0,
        53.5
      ],
      [
        93.0,
        56.0
      ],
      [
        90.5,
        60.5
      ],
      [
        87.5,
        65.5
      ],
      [
        86.0,
        69.5
      ],
      [
        82.0,
        71.5
      ]
    ]
  },
  {
    "id": "river-lena",
    "name": "Lena River",
    "color": "#38bdf8",
    "path": [
      [
        107.0,
        54.0
      ],
      [
        115.0,
        58.0
      ],
      [
        124.0,
        60.5
      ],
      [
        129.5,
        62.0
      ],
      [
        126.0,
        67.0
      ],
      [
        127.0,
        72.0
      ]
    ]
  },
  {
    "id": "river-amur",
    "name": "Amur (Heilong) River",
    "color": "#38bdf8",
    "path": [
      [
        120.0,
        53.5
      ],
      [
        124.0,
        53.5
      ],
      [
        127.5,
        50.2
      ],
      [
        132.0,
        47.7
      ],
      [
        135.0,
        48.5
      ],
      [
        140.0,
        53.0
      ],
      [
        141.0,
        53.2
      ]
    ]
  },
  {
    "id": "river-yellow",
    "name": "Yellow (Huang He) River",
    "color": "#38bdf8",
    "path": [
      [
        96.0,
        35.0
      ],
      [
        103.0,
        36.0
      ],
      [
        106.0,
        38.5
      ],
      [
        111.0,
        40.5
      ],
      [
        111.0,
        35.0
      ],
      [
        113.0,
        34.8
      ],
      [
        116.5,
        36.5
      ],
      [
        118.8,
        37.8
      ]
    ]
  },
  {
    "id": "river-yangtze",
    "name": "Yangtze River",
    "color": "#38bdf8",
    "path": [
      [
        91.5,
        33.5
      ],
      [
        99.0,
        28.5
      ],
      [
        103.0,
        28.5
      ],
      [
        106.5,
        29.5
      ],
      [
        111.0,
        30.8
      ],
      [
        114.3,
        30.6
      ],
      [
        118.8,
        32.0
      ],
      [
        121.5,
        31.4
      ]
    ]
  },
  {
    "id": "river-mekong",
    "name": "Mekong River",
    "color": "#38bdf8",
    "path": [
      [
        94.5,
        33.0
      ],
      [
        99.0,
        27.5
      ],
      [
        100.5,
        22.0
      ],
      [
        102.5,
        18.0
      ],
      [
        104.5,
        17.5
      ],
      [
        105.8,
        15.0
      ],
      [
        105.0,
        11.5
      ],
      [
        106.5,
        10.0
      ]
    ]
  },
  {
    "id": "river-chao-phraya",
    "name": "Chao Phraya River",
    "color": "#38bdf8",
    "path": [
      [
        100.1,
        15.7
      ],
      [
        100.3,
        14.8
      ],
      [
        100.5,
        14.1
      ],
      [
        100.5,
        13.5
      ]
    ]
  },
  {
    "id": "river-irrawaddy",
    "name": "Irrawaddy River",
    "color": "#38bdf8",
    "path": [
      [
        97.5,
        25.7
      ],
      [
        96.0,
        24.0
      ],
      [
        95.8,
        22.0
      ],
      [
        95.0,
        20.0
      ],
      [
        95.2,
        17.0
      ],
      [
        95.5,
        15.8
      ]
    ]
  },
  {
    "id": "river-salween",
    "name": "Salween River",
    "color": "#38bdf8",
    "path": [
      [
        92.0,
        31.5
      ],
      [
        97.5,
        29.0
      ],
      [
        98.5,
        24.0
      ],
      [
        98.0,
        19.0
      ],
      [
        97.6,
        16.5
      ]
    ]
  },
  {
    "id": "river-tigris-euphrates",
    "name": "Tigris & Euphrates",
    "color": "#38bdf8",
    "path": [
      [
        39.0,
        39.0
      ],
      [
        38.5,
        37.0
      ],
      [
        40.5,
        35.5
      ],
      [
        44.0,
        33.3
      ],
      [
        47.5,
        31.0
      ],
      [
        48.5,
        30.0
      ]
    ]
  },
  {
    "id": "river-syr-darya",
    "name": "Syr Darya",
    "color": "#38bdf8",
    "path": [
      [
        73.0,
        41.0
      ],
      [
        69.0,
        41.5
      ],
      [
        67.0,
        43.5
      ],
      [
        64.0,
        45.0
      ],
      [
        61.0,
        46.0
      ]
    ]
  },
  {
    "id": "river-amu-darya",
    "name": "Amu Darya",
    "color": "#38bdf8",
    "path": [
      [
        71.5,
        37.0
      ],
      [
        68.0,
        37.2
      ],
      [
        65.0,
        38.5
      ],
      [
        61.0,
        41.5
      ],
      [
        59.0,
        43.5
      ]
    ]
  },
  {
    "id": "river-murray-darling",
    "name": "Murray-Darling System",
    "color": "#38bdf8",
    "path": [
      [
        151.0,
        -28.0
      ],
      [
        148.0,
        -30.0
      ],
      [
        142.0,
        -34.1
      ],
      [
        148.0,
        -36.5
      ],
      [
        145.0,
        -36.0
      ],
      [
        141.5,
        -34.0
      ],
      [
        139.0,
        -35.5
      ]
    ]
  },
  {
    "id": "river-waikato",
    "name": "Waikato River",
    "color": "#38bdf8",
    "path": [
      [
        176.0,
        -39.0
      ],
      [
        175.5,
        -38.5
      ],
      [
        175.2,
        -37.8
      ],
      [
        174.7,
        -37.4
      ]
    ]
  },
  {
    "id": "river-whanganui",
    "name": "Whanganui River",
    "color": "#38bdf8",
    "path": [
      [
        175.6,
        -39.3
      ],
      [
        175.2,
        -39.7
      ],
      [
        175.0,
        -39.9
      ]
    ]
  }
];
  const mountains = [
  {
    "id": "mountain-andes",
    "name": "Andes Mountain Range",
    "color": "#c084fc",
    "path": [
      [
        -69.5,
        10.5
      ],
      [
        -73.5,
        6.0
      ],
      [
        -76.5,
        2.0
      ],
      [
        -78.5,
        -1.0
      ],
      [
        -76.0,
        -9.0
      ],
      [
        -71.0,
        -16.0
      ],
      [
        -68.5,
        -23.0
      ],
      [
        -70.0,
        -32.5
      ],
      [
        -71.5,
        -42.0
      ],
      [
        -73.0,
        -50.0
      ],
      [
        -68.0,
        -54.5
      ]
    ]
  },
  {
    "id": "mountain-atlas",
    "name": "Atlas Mountains",
    "color": "#c084fc",
    "path": [
      [
        -9.5,
        30.5
      ],
      [
        -7.5,
        31.5
      ],
      [
        -4.0,
        33.0
      ],
      [
        0.5,
        35.0
      ],
      [
        5.0,
        36.0
      ],
      [
        9.5,
        36.8
      ]
    ]
  },
  {
    "id": "mountain-ahaggar",
    "name": "Ahaggar Massif",
    "color": "#c084fc",
    "path": [
      [
        4.5,
        22.0
      ],
      [
        5.5,
        23.3
      ],
      [
        6.8,
        24.0
      ]
    ]
  },
  {
    "id": "mountain-tibesti",
    "name": "Tibesti Range",
    "color": "#c084fc",
    "path": [
      [
        16.0,
        20.0
      ],
      [
        17.5,
        20.8
      ],
      [
        19.0,
        21.5
      ]
    ]
  },
  {
    "id": "mountain-drakensberg",
    "name": "Drakensberg Mountains",
    "color": "#c084fc",
    "path": [
      [
        30.5,
        -24.5
      ],
      [
        30.0,
        -27.0
      ],
      [
        29.3,
        -29.4
      ],
      [
        28.0,
        -31.5
      ]
    ]
  },
  {
    "id": "mountain-brooks-range",
    "name": "Brooks Range",
    "color": "#c084fc",
    "path": [
      [
        -160.0,
        68.0
      ],
      [
        -152.0,
        68.5
      ],
      [
        -144.0,
        69.0
      ]
    ]
  },
  {
    "id": "mountain-alaska-range",
    "name": "Alaska Range",
    "color": "#c084fc",
    "path": [
      [
        -153.0,
        61.5
      ],
      [
        -150.5,
        63.0
      ],
      [
        -144.0,
        63.5
      ]
    ]
  },
  {
    "id": "mountain-rockies",
    "name": "Rocky Mountains",
    "color": "#c084fc",
    "path": [
      [
        -124.0,
        56.0
      ],
      [
        -119.0,
        52.0
      ],
      [
        -115.0,
        48.0
      ],
      [
        -110.0,
        44.0
      ],
      [
        -106.0,
        39.0
      ],
      [
        -105.5,
        35.5
      ]
    ]
  },
  {
    "id": "mountain-appalachians",
    "name": "Appalachian Mountains",
    "color": "#c084fc",
    "path": [
      [
        -86.5,
        33.5
      ],
      [
        -83.5,
        36.0
      ],
      [
        -79.0,
        39.0
      ],
      [
        -74.0,
        42.0
      ],
      [
        -71.0,
        45.0
      ],
      [
        -68.0,
        47.0
      ]
    ]
  },
  {
    "id": "mountain-sierra-nevada",
    "name": "Sierra Nevada",
    "color": "#c084fc",
    "path": [
      [
        -121.0,
        40.0
      ],
      [
        -119.5,
        38.0
      ],
      [
        -118.0,
        36.0
      ]
    ]
  },
  {
    "id": "mountain-cascade-range",
    "name": "Cascade Range",
    "color": "#c084fc",
    "path": [
      [
        -121.5,
        49.0
      ],
      [
        -121.7,
        46.8
      ],
      [
        -122.0,
        43.5
      ],
      [
        -122.2,
        41.3
      ]
    ]
  },
  {
    "id": "mountain-scandinavian",
    "name": "Scandinavian Mountains",
    "color": "#c084fc",
    "path": [
      [
        8.0,
        61.0
      ],
      [
        12.0,
        63.0
      ],
      [
        16.0,
        66.0
      ],
      [
        19.0,
        68.0
      ]
    ]
  },
  {
    "id": "mountain-black-forest",
    "name": "Black Forest",
    "color": "#c084fc",
    "path": [
      [
        8.1,
        48.6
      ],
      [
        8.2,
        48.1
      ],
      [
        8.0,
        47.7
      ]
    ]
  },
  {
    "id": "mountain-vosges",
    "name": "Vosges Mountains",
    "color": "#c084fc",
    "path": [
      [
        7.1,
        48.6
      ],
      [
        7.0,
        48.1
      ],
      [
        6.9,
        47.8
      ]
    ]
  },
  {
    "id": "mountain-pyrenees",
    "name": "Pyrenees",
    "color": "#c084fc",
    "path": [
      [
        -2.0,
        43.0
      ],
      [
        0.0,
        42.8
      ],
      [
        1.8,
        42.5
      ],
      [
        3.0,
        42.4
      ]
    ]
  },
  {
    "id": "mountain-alps",
    "name": "The Alps",
    "color": "#c084fc",
    "path": [
      [
        5.5,
        44.0
      ],
      [
        6.5,
        45.0
      ],
      [
        8.0,
        46.0
      ],
      [
        10.0,
        46.8
      ],
      [
        12.5,
        47.2
      ],
      [
        14.5,
        46.5
      ]
    ]
  },
  {
    "id": "mountain-apennines",
    "name": "Apennines",
    "color": "#c084fc",
    "path": [
      [
        10.0,
        44.5
      ],
      [
        12.5,
        43.0
      ],
      [
        14.0,
        41.5
      ],
      [
        16.0,
        39.5
      ]
    ]
  },
  {
    "id": "mountain-caucasus",
    "name": "Caucasus Mountains",
    "color": "#c084fc",
    "path": [
      [
        40.0,
        43.5
      ],
      [
        44.0,
        42.5
      ],
      [
        48.0,
        41.0
      ]
    ]
  },
  {
    "id": "mountain-urals",
    "name": "Ural Mountains",
    "color": "#c084fc",
    "path": [
      [
        66.0,
        68.0
      ],
      [
        62.0,
        64.0
      ],
      [
        59.0,
        60.0
      ],
      [
        59.5,
        56.0
      ],
      [
        58.0,
        51.5
      ]
    ]
  },
  {
    "id": "mountain-taurus-pontic",
    "name": "Taurus & Pontic Ranges",
    "color": "#c084fc",
    "path": [
      [
        30.0,
        37.0
      ],
      [
        34.0,
        37.5
      ],
      [
        38.0,
        38.0
      ],
      [
        40.0,
        40.5
      ],
      [
        36.0,
        41.0
      ],
      [
        31.0,
        41.5
      ]
    ]
  },
  {
    "id": "mountain-alborz-zagros",
    "name": "Alborz & Zagros Ranges",
    "color": "#c084fc",
    "path": [
      [
        49.0,
        37.5
      ],
      [
        52.0,
        36.0
      ],
      [
        55.0,
        36.5
      ],
      [
        50.0,
        34.0
      ],
      [
        52.0,
        30.0
      ],
      [
        55.0,
        28.0
      ]
    ]
  },
  {
    "id": "mountain-hindu-kush",
    "name": "Hindu Kush",
    "color": "#c084fc",
    "path": [
      [
        68.0,
        35.0
      ],
      [
        71.0,
        36.0
      ],
      [
        73.5,
        36.8
      ]
    ]
  },
  {
    "id": "mountain-pamir-knot",
    "name": "Pamir Knot",
    "color": "#c084fc",
    "path": [
      [
        72.0,
        38.0
      ],
      [
        74.0,
        39.0
      ],
      [
        76.0,
        38.5
      ]
    ]
  },
  {
    "id": "mountain-tian-shan-kunlun",
    "name": "Tian Shan & Kunlun Shan",
    "color": "#c084fc",
    "path": [
      [
        76.0,
        42.0
      ],
      [
        83.0,
        43.0
      ],
      [
        90.0,
        43.5
      ],
      [
        80.0,
        36.0
      ],
      [
        87.0,
        36.0
      ],
      [
        95.0,
        36.0
      ]
    ]
  },
  {
    "id": "mountain-great-dividing-range",
    "name": "Great Dividing Range",
    "color": "#c084fc",
    "path": [
      [
        143.0,
        -12.5
      ],
      [
        145.0,
        -17.0
      ],
      [
        148.0,
        -22.0
      ],
      [
        151.0,
        -28.0
      ],
      [
        150.0,
        -33.0
      ],
      [
        148.5,
        -36.5
      ],
      [
        145.0,
        -37.5
      ]
    ]
  },
  {
    "id": "mountain-southern-alps",
    "name": "Southern Alps",
    "color": "#c084fc",
    "path": [
      [
        168.0,
        -45.0
      ],
      [
        170.0,
        -43.8
      ],
      [
        172.0,
        -42.5
      ]
    ]
  }
];

  return {
    rivers: rivers,
    mountains: mountains
  };
})();
