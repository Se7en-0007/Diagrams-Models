# -*- coding: utf-8 -*-
"""
Build Complete India & World Geographic Features Dataset
Integrates:
1. Rivers.html (106 Indian rivers with multi-segment polylines, confluences, notes, 72 lakes)
2. india-map-data.txt (129 National Parks & Tiger Reserves across all states)
3. 18 Biosphere Reserves (translucent radial zones)
4. Mountain Ranges (with custom shaded polygons and crest paths)
5. Strategic Peaks, Mountain Passes, Glaciers
6. Ramsar Sites & Major Wetlands
Outputs: world-map/data/geographic-features.js
"""
import json
import re
import os
import sys

# Ensure UTF-8 output
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def main():
    print("Beginning Complete India & World Atlas Compilation...")

    # 1. Parse Rivers.html
    with open('Rivers.html', 'r', encoding='utf-8', errors='ignore') as f:
        html_text = f.read()

    m_g = re.search(r'const G\s*=\s*({.*?});', html_text, re.DOTALL)
    g_data = json.loads(m_g.group(1)) if m_g else {}
    rv_dict = g_data.get('rv', {})
    lk_list = g_data.get('lk', [])

    # Extract META
    m_meta = re.search(r'const META\s*=\s*({.*?});\s*const', html_text, re.DOTALL)
    meta_dict = {}
    if m_meta:
        meta_str = m_meta.group(1)
        for line in meta_str.splitlines():
            line = line.strip()
            if not line or (not line.endswith('],') and not line.endswith(']')):
                continue
            colon_idx = line.find(':')
            if colon_idx != -1:
                key = line[:colon_idx].strip()
                val_str = line[colon_idx+1:].rstrip(',').strip()
                try:
                    val = json.loads(val_str)
                    meta_dict[key] = val
                except Exception:
                    pass

    # Build Rivers list
    rivers = []
    for key, coords_list in rv_dict.items():
        meta = meta_dict.get(key, [key.title(), "", "IND", "Flows in India", []])
        name = meta[0] if len(meta) > 0 and meta[0] else key.title()
        alt_name = meta[1] if len(meta) > 1 else ""
        system = meta[2] if len(meta) > 2 else "IND"
        confluence = meta[3] if len(meta) > 3 else ""
        notes = meta[4] if len(meta) > 4 and isinstance(meta[4], list) else []

        all_segments = coords_list if isinstance(coords_list, list) else []
        primary_path = all_segments[0] if len(all_segments) > 0 else []

        rivers.append({
            "id": f"river-in-{key}",
            "name": name,
            "altName": alt_name,
            "category": "river",
            "categoryName": "River system",
            "system": system,
            "group": "india",
            "context": confluence or "Major River of India",
            "color": "#0284c7",
            "segments": all_segments,
            "path": primary_path,
            "keyFacts": notes if notes else [confluence],
            "upscNotes": confluence
        })

    # Add Major Global Rivers
    global_rivers = [
        {
                "id": "sa-amazon-river",
                "name": "Amazon River",
                "group": "world",
                "context": "South America \u00b7 Atlantic Ocean mouth \u00b7 World's largest discharge",
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
                "id": "sa-orinoco-river",
                "name": "Orinoco River",
                "group": "world",
                "context": "Venezuela & Colombia \u00b7 Atlantic mouth \u00b7 Llanos drainage",
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
                "id": "sa-parana-river",
                "name": "Paran\u00e1 River",
                "group": "world",
                "context": "Brazil, Paraguay, Argentina \u00b7 R\u00edo de la Plata estuary",
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
                "id": "af-nile-river",
                "name": "Nile River",
                "group": "world",
                "context": "Africa \u00b7 World's longest river (~6,650 km) \u00b7 Mediterranean delta",
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
                "id": "af-niger-river",
                "name": "Niger River",
                "group": "world",
                "context": "West Africa \u00b7 Crescent route through Sahel into Gulf of Guinea",
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
                "id": "af-congo-river",
                "name": "Congo (Zaire) River",
                "group": "world",
                "context": "Central Africa \u00b7 Deepest river globally (>220 m) \u00b7 Crosses Equator twice",
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
                "id": "af-zambezi-river",
                "name": "Zambezi River",
                "group": "world",
                "context": "Southern Africa \u00b7 Victoria Falls \u00b7 Indian Ocean mouth",
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
                "id": "af-limpopo-river",
                "name": "Limpopo River",
                "group": "world",
                "context": "Southern Africa \u00b7 Arcs across South Africa, Botswana, Zimbabwe & Mozambique",
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
                "id": "af-orange-river",
                "name": "Orange River",
                "group": "world",
                "context": "South Africa & Namibia \u00b7 Longest river in South Africa \u00b7 Atlantic mouth",
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
                "id": "na-mississippi-river",
                "name": "Mississippi-Missouri River",
                "group": "world",
                "context": "North America \u00b7 Drains 40% of contiguous US \u00b7 Bird-foot delta",
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
                "id": "na-colorado-river",
                "name": "Colorado River",
                "group": "world",
                "context": "USA & Mexico \u00b7 Grand Canyon \u00b7 Heavily allocated basin",
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
                "id": "na-columbia-river",
                "name": "Columbia River",
                "group": "world",
                "context": "Pacific Northwest USA & Canada \u00b7 Hydroelectric powerhouse",
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
                "id": "na-rio-grande",
                "name": "Rio Grande",
                "group": "world",
                "context": "USA & Mexico border \u00b7 Rocky Mountains to Gulf of Mexico",
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
                "id": "na-st-lawrence-river",
                "name": "Saint Lawrence River",
                "group": "world",
                "context": "Canada & USA \u00b7 Drains Great Lakes into Gulf of Saint Lawrence",
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
                "id": "na-mackenzie-river",
                "name": "Mackenzie River",
                "group": "world",
                "context": "Canada \u00b7 Longest river in Canada \u00b7 Drains into Beaufort Sea (Arctic)",
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
                "id": "na-yukon-river",
                "name": "Yukon River",
                "group": "world",
                "context": "Canada & Alaska \u00b7 Klondike Gold Rush corridor \u00b7 Bering Sea mouth",
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
                "id": "eu-rhine-river",
                "name": "Rhine River",
                "group": "world",
                "context": "Western Europe \u00b7 Busiest commercial waterway \u00b7 North Sea at Rotterdam",
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
                "id": "eu-danube-river",
                "name": "Danube River",
                "group": "world",
                "context": "Europe \u00b7 Traverses 10 nations & 4 capitals \u00b7 Black Sea mouth",
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
                "id": "eu-volga-river",
                "name": "Volga River",
                "group": "world",
                "context": "Russia \u00b7 Longest in Europe (~3,530 km) \u00b7 Caspian endorheic delta",
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
                "id": "eu-po-river",
                "name": "Po River",
                "group": "world",
                "context": "Northern Italy \u00b7 Po Valley agricultural heartland \u00b7 Adriatic mouth",
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
                "id": "eu-elbe-river",
                "name": "Elbe River",
                "group": "world",
                "context": "Czech Republic & Germany \u00b7 Krkono\u0161e Mountains to North Sea at Cuxhaven",
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
                "id": "eu-vistula-river",
                "name": "Vistula River",
                "group": "world",
                "context": "Poland \u00b7 Longest river in Poland \u00b7 Baltic Sea at Gda\u0144sk",
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
                "id": "as-ob-irtysh",
                "name": "Ob-Irtysh River",
                "group": "world",
                "context": "Western Siberia, Russia \u00b7 Gulf of Ob (Arctic Ocean) \u00b7 Huge wetland basin",
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
                "id": "as-yenisey-river",
                "name": "Yenisey River",
                "group": "world",
                "context": "Central Siberia, Russia \u00b7 Sayan Mountains to Kara Sea (Arctic Ocean)",
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
                "id": "as-lena-river",
                "name": "Lena River",
                "group": "world",
                "context": "Eastern Siberia, Russia \u00b7 Baikal Mountains to Laptev Sea (Arctic Ocean) delta",
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
                "id": "as-amur-river",
                "name": "Amur (Heilong) River",
                "group": "world",
                "context": "Russia & China border \u00b7 Drains into Strait of Tartary / Sea of Okhotsk",
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
                "id": "as-yellow-river",
                "name": "Yellow (Huang He) River",
                "group": "world",
                "context": "China \u00b7 Loess Plateau sediment \u00b7 Cradle of Chinese civilisation",
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
                "id": "as-yangtze-river",
                "name": "Yangtze River",
                "group": "world",
                "context": "China \u00b7 Longest in Asia (~6,300 km) \u00b7 Three Gorges Dam",
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
                "id": "as-mekong-river",
                "name": "Mekong River",
                "group": "world",
                "context": "Southeast Asia \u00b7 Tibetan Plateau to South China Sea Nine Dragons delta",
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
                "id": "as-chao-phraya",
                "name": "Chao Phraya River",
                "group": "world",
                "context": "Thailand \u00b7 Principal river of Bangkok and central alluvial plain",
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
                "id": "as-irrawaddy-river",
                "name": "Irrawaddy River",
                "group": "world",
                "context": "Myanmar \u00b7 Main commercial waterway \u00b7 Andaman Sea delta",
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
                "id": "as-salween-river",
                "name": "Salween River",
                "group": "world",
                "context": "Tibetan Plateau through China and Myanmar \u00b7 Andaman Sea mouth",
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
                "id": "as-tigris-euphrates",
                "name": "Tigris & Euphrates",
                "group": "world",
                "context": "Mesopotamia \u00b7 Cradle of civilization \u00b7 Shatt al-Arab to Persian Gulf",
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
                "id": "as-syr-darya",
                "name": "Syr Darya",
                "group": "world",
                "context": "Central Asia (Tian Shan) \u00b7 Aral Sea drainage basin",
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
                "id": "as-amu-darya",
                "name": "Amu Darya",
                "group": "world",
                "context": "Central Asia (Pamirs) \u00b7 Historic Oxus River \u00b7 Aral Sea basin",
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
                "id": "oc-murray-darling",
                "name": "Murray-Darling System",
                "group": "world",
                "context": "Australia \u00b7 Australia's longest river system \u00b7 Agricultural food bowl",
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
                "id": "oc-waikato-whanganui",
                "name": "Waikato & Whanganui",
                "group": "world",
                "context": "New Zealand \u00b7 Longest river in NZ (Waikato) & Whanganui River",
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
        }
]

    for gr in global_rivers:
        rivers.append({
            "id": gr["id"],
            "name": gr["name"],
            "category": "river",
            "categoryName": "River system",
            "group": "world",
            "context": gr["context"],
            "color": "#38bdf8",
            "segments": [gr["path"]],
            "path": gr["path"],
            "keyFacts": [gr["context"]],
            "upscNotes": gr["context"]
        })

    print(f"Total Rivers Compiled: {len(rivers)} (106 Indian + {len(global_rivers)} Global)")

    # 2. Parse india-map-data.txt for all 129 protected areas
    with open('india-map-data.txt', 'r', encoding='utf-8', errors='ignore') as f:
        txt = f.read()

    txt_records = []
    current_state = ""
    for line in txt.splitlines():
        line = line.strip()
        m_st = re.match(r'^(?:##\s+)?([A-Za-z\s&]+)\s*\(\d+\s*parks/reserves', line)
        if m_st:
            current_state = m_st.group(1).strip()
        if line.startswith('|') and not line.startswith('| ---') and not line.startswith('| Name |'):
            parts = [p.strip() for p in line.split('|')[1:-1]]
            if len(parts) >= 5:
                txt_records.append({
                    'name': parts[0],
                    'type': parts[1],
                    'rivers': parts[2],
                    'species': parts[3],
                    'note': parts[4],
                    'state': current_state
                })

    # Verified coordinates lookup for all 129 parks/reserves
    COORDS_LOOKUP = {
        "Mahatma Gandhi Marine (Wandoor)": [92.61, 11.60],
        "Rani Jhansi Marine": [93.05, 12.05],
        "Saddle Peak": [93.00, 13.16],
        "Campbell Bay": [93.85, 6.95],
        "Galathea": [93.85, 6.81],
        "North Button Island": [93.07, 12.32],
        "Middle Button Island": [93.02, 12.28],
        "South Button Island": [93.02, 12.22],
        "Sri Venkateswara (Tirumala)": [79.35, 13.68],
        "Papikonda": [81.52, 17.45],
        "Rajiv Gandhi (Kadapa)": [78.82, 14.47],
        "Nagarjunsagar-Srisailam": [78.87, 16.07],
        "Namdapha": [96.38, 27.50],
        "Mouling": [94.75, 28.50],
        "Pakke": [92.89, 27.02],
        "Kamlang": [96.45, 27.85],
        "Kaziranga": [93.17, 26.58],
        "Manas": [90.95, 26.75],
        "Nameri": [92.85, 26.93],
        "Orang": [92.43, 26.55],
        "Dibru-Saikhowa": [95.35, 27.67],
        "Raimona": [89.98, 26.75],
        "Dehing Patkai": [95.45, 27.25],
        "Valmiki": [84.18, 27.35],
        "Indravati Kutru": [80.75, 19.00],
        "Kanger Valley (Ghati)": [81.98, 18.78],
        "Guru Ghasidas (Sanjay/Tamor Pingla)": [82.35, 23.85],
        "Udanti-Sitanadi": [82.25, 20.35],
        "Achanakmar": [81.75, 22.45],
        "Mollem (Bhagwan Mahaveer)": [74.22, 15.35],
        "Gir": [70.79, 21.12],
        "Blackbuck (Velavadar)": [72.03, 21.93],
        "Vansda": [73.48, 20.78],
        "Marine (Gulf of Kutch)": [69.65, 22.45],
        "Sultanpur": [76.89, 28.46],
        "Kalesar": [77.58, 30.35],
        "Great Himalayan": [77.45, 31.75],
        "Pin Valley": [77.95, 32.05],
        "Khirganga": [77.51, 31.99],
        "Inderkilla": [77.15, 32.22],
        "Simbalbara": [77.45, 30.45],
        "Dachigam": [75.05, 34.13],
        "Kishtwar": [75.80, 33.55],
        "Kazinag": [74.05, 34.25],
        "Salim Ali (City Forest)": [74.85, 34.09],
        "Betla": [84.19, 23.75],
        "Bandipur": [76.63, 11.66],
        "Nagarhole": [76.15, 12.00],
        "Bannerghatta": [77.57, 12.80],
        "Kudremukh": [75.25, 13.22],
        "Anshi": [74.30, 15.00],
        "Bhadra": [75.63, 13.70],
        "BRT (Biligiri Ranganatha)": [77.14, 11.98],
        "Eravikulam": [77.06, 10.15],
        "Silent Valley": [76.43, 11.10],
        "Periyar": [77.17, 9.47],
        "Mathikettan Shola": [77.24, 9.97],
        "Anamudi Shola": [77.18, 10.20],
        "Pampadum Shola": [77.26, 10.13],
        "Parambikulam": [76.78, 10.42],
        "Hemis": [77.40, 33.95],
        "Kanha": [80.61, 22.33],
        "Bandhavgarh": [81.02, 23.70],
        "Pench": [79.30, 21.75],
        "Bori-Satpura": [78.25, 22.45],
        "Panna": [80.18, 24.70],
        "Sanjay Dubri": [81.85, 24.00],
        "Kuno": [77.18, 25.80],
        "Madhav": [77.70, 25.43],
        "Van Vihar": [77.37, 23.23],
        "Mandla Plant Fossils National Park": [80.60, 23.10],
        "Ratapani": [77.75, 22.85],
        "Veerangana Durgavati": [79.25, 23.55],
        "Tadoba": [79.30, 20.25],
        "Gugamal": [77.25, 21.45],
        "Navegaon": [80.18, 20.92],
        "Pench (Maharashtra)": [79.20, 21.50],
        "Sanjay Gandhi (Borivali)": [72.91, 19.22],
        "Chandoli": [73.85, 17.15],
        "Bor": [78.70, 20.95],
        "Keibul Lamjao": [93.85, 24.50],
        "Shirui National Park": [94.45, 25.12],
        "Nokrek": [90.33, 25.48],
        "Balphakram": [90.85, 25.20],
        "Murlen": [93.30, 23.65],
        "Phawngpui (Blue Mountain)": [93.05, 22.67],
        "Dampa": [92.42, 23.68],
        "Intanki (Intangki)": [93.55, 25.68],
        "Similipal": [86.35, 21.85],
        "Bhitarkanika": [86.90, 20.72],
        "Satkosia": [84.95, 20.60],
        "Ranthambore": [76.50, 26.01],
        "Keoladeo (Ghana/Bharatpur)": [77.52, 27.18],
        "Sariska": [76.43, 27.32],
        "Desert": [70.90, 26.85],
        "Mukundra Hills (Darrah)": [75.98, 24.85],
        "Ramgarh Vishdhari": [75.75, 25.45],
        "Kailadevi / Dholpur-Karauli": [77.25, 26.40],
        "Khangchendzonga": [88.18, 27.65],
        "Mudumalai": [76.55, 11.58],
        "Mukurthi": [76.53, 11.38],
        "Indira Gandhi (Anamalai)": [76.95, 10.45],
        "Guindy": [80.22, 13.00],
        "Gulf of Mannar Marine": [79.15, 9.20],
        "Kalakad-Mundanthurai": [77.35, 8.65],
        "Sathyamangalam": [77.20, 11.55],
        "Srivilliputhur-Megamalai": [77.40, 9.60],
        "Mahavir Harina Vanasthali": [78.58, 17.33],
        "Mrugavani": [78.35, 17.35],
        "Kasu Brahmananda Reddy (KBR)": [78.43, 17.42],
        "Amrabad": [78.85, 16.35],
        "Kawal": [79.20, 19.20],
        "Clouded Leopard (Sipahijala)": [91.33, 23.68],
        "Bison (Rajbari)": [91.45, 23.35],
        "Dudhwa": [80.65, 28.52],
        "Pilibhit": [79.95, 28.65],
        "Amangarh": [78.65, 29.60],
        "Ranipur": [80.85, 25.15],
        "Jim Corbett": [78.77, 29.53],
        "Rajaji": [78.20, 30.05],
        "Valley of Flowers": [79.60, 30.72],
        "Nanda Devi": [79.97, 30.37],
        "Gangotri": [78.95, 30.98],
        "Govind (Pashu Vihar)": [78.25, 31.15],
        "Sundarbans": [88.85, 21.95],
        "Gorumara": [88.80, 26.75],
        "Neora Valley": [88.75, 27.05],
        "Singalila": [88.08, 27.12],
        "Buxa": [89.65, 26.68],
        "Jaldapara": [89.30, 26.65]
    }

    protected_areas = []
    for r in txt_records:
        name = r['name']
        coords = COORDS_LOOKUP.get(name, [78.0, 22.0])
        slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

        # Determine type
        raw_type = r['type']
        if 'National Park' in raw_type and 'Tiger Reserve' in raw_type:
            main_type = 'national_park'
            subtype = 'tiger_reserve'
            color = '#15803d'
            type_label = 'National Park & Tiger Reserve'
        elif 'Tiger Reserve' in raw_type:
            main_type = 'tiger_reserve'
            subtype = None
            color = '#78350f'
            type_label = 'Tiger Reserve'
        else:
            main_type = 'national_park'
            subtype = None
            color = '#15803d'
            type_label = 'National Park'

        key_facts = []
        if r['rivers'] and r['rivers'] != '—':
            key_facts.append(f"River(s): {r['rivers']}")
        if r['species']:
            key_facts.append(f"Key Species: {r['species']}")
        if r['note']:
            key_facts.append(f"Significance: {r['note']}")

        protected_areas.append({
            "id": f"pa-{slug}",
            "name": f"{name} {type_label}" if not name.endswith('Park') and not name.endswith('Reserve') else name,
            "pureName": name,
            "type": main_type,
            "typeName": type_label,
            "subtype": subtype,
            "state": r['state'],
            "group": "india",
            "coords": coords,
            "rivers": r['rivers'],
            "keySpecies": r['species'],
            "note": r['note'],
            "color": color,
            "context": f"{r['state']} · {type_label}",
            "keyFacts": key_facts,
            "upscNotes": f"Rivers: {r['rivers']}. Species: {r['species']}. Notes: {r['note']}"
        })

    print(f"Total Protected Areas from india-map-data.txt: {len(protected_areas)}")

    # 3. Add 18 Biosphere Reserves of India (with translucent circular polygon halos)
    biosphere_reserves = [
        {"id": "br-nilgiri", "name": "Nilgiri Biosphere Reserve", "state": "Tamil Nadu, Kerala, Karnataka", "year": "1986", "coords": [76.54, 11.45], "radiusKm": 45, "species": "Nilgiri Tahr, Lion-tailed Macaque", "context": "India's First Biosphere Reserve (1986) · UNESCO MAB"},
        {"id": "br-nanda-devi", "name": "Nanda Devi Biosphere Reserve", "state": "Uttarakhand", "year": "1988", "coords": [79.97, 30.37], "radiusKm": 38, "species": "Snow Leopard, Himalayan Musk Deer", "context": "Uttarakhand · UNESCO World Heritage Site"},
        {"id": "br-nokrek", "name": "Nokrek Biosphere Reserve", "state": "Meghalaya", "year": "1988", "coords": [90.33, 25.48], "radiusKm": 25, "species": "Red Panda, Citrus indica (mother citrus)", "context": "Garo Hills, Meghalaya · UNESCO MAB"},
        {"id": "br-great-nicobar", "name": "Great Nicobar Biosphere Reserve", "state": "Andaman & Nicobar", "year": "1989", "coords": [93.85, 6.95], "radiusKm": 35, "species": "Nicobar Megapode, Saltwater Crocodile", "context": "Southernmost India · UNESCO MAB"},
        {"id": "br-gulf-of-mannar", "name": "Gulf of Mannar Biosphere Reserve", "state": "Tamil Nadu", "year": "1989", "coords": [79.15, 9.20], "radiusKm": 48, "species": "Dugong (Sea Cow), Green Sea Turtle, Coral Reefs", "context": "First Marine Biosphere Reserve in South Asia · UNESCO MAB"},
        {"id": "br-manas", "name": "Manas Biosphere Reserve", "state": "Assam", "year": "1989", "coords": [90.95, 26.75], "radiusKm": 32, "species": "Golden Langur, Pygmy Hog, Hispid Hare", "context": "Assam Foothills · UNESCO World Heritage"},
        {"id": "br-sundarbans", "name": "Sundarbans Biosphere Reserve", "state": "West Bengal", "year": "1989", "coords": [88.85, 21.95], "radiusKm": 50, "species": "Royal Bengal Tiger, Estuarine Crocodile, Mangroves", "context": "Ganga-Brahmaputra Delta · UNESCO World Heritage & Ramsar"},
        {"id": "br-similipal", "name": "Similipal Biosphere Reserve", "state": "Odisha", "year": "1994", "coords": [86.35, 21.85], "radiusKm": 40, "species": "Melanistic (Black) Tigers, Asian Elephant", "context": "Mayurbhanj, Odisha · UNESCO MAB"},
        {"id": "br-dibru-saikhowa", "name": "Dibru-Saikhowa Biosphere Reserve", "state": "Assam", "year": "1997", "coords": [95.35, 27.67], "radiusKm": 22, "species": "White-winged Wood Duck, Feral Horses", "context": "Brahmaputra-Lohit River Island · Smallest BR in India"},
        {"id": "br-dihang-dibang", "name": "Dihang-Dibang Biosphere Reserve", "state": "Arunachal Pradesh", "year": "1998", "coords": [95.25, 28.85], "radiusKm": 45, "species": "Mishmi Takin, Musk Deer, Red Panda", "context": "Eastern Himalayas · Mouling NP & Dibang WLS"},
        {"id": "br-pachmarhi", "name": "Pachmarhi Biosphere Reserve", "state": "Madhya Pradesh", "year": "1999", "coords": [78.37, 22.45], "radiusKm": 35, "species": "Indian Giant Squirrel, Flying Squirrel, Chinkara", "context": "Satpura Range · UNESCO MAB"},
        {"id": "br-khangchendzonga", "name": "Khangchendzonga Biosphere Reserve", "state": "Sikkim", "year": "2000", "coords": [88.18, 27.65], "radiusKm": 36, "species": "Snow Leopard, Red Panda, Himalayan Tahr", "context": "India's First 'Mixed' UNESCO World Heritage Site"},
        {"id": "br-agasthyamalai", "name": "Agasthyamalai Biosphere Reserve", "state": "Kerala, Tamil Nadu", "year": "2001", "coords": [77.24, 8.61], "radiusKm": 35, "species": "Nilgiri Tahr, Kanikaran indigenous tribe heritage", "context": "Southern Western Ghats · UNESCO MAB"},
        {"id": "br-achanakmar-amarkantak", "name": "Achanakmar-Amarkantak Biosphere Reserve", "state": "MP, Chhattisgarh", "year": "2005", "coords": [81.75, 22.55], "radiusKm": 38, "species": "Bengal Tiger, Gaur, Chousingha", "context": "Maikal Range · Source of Narmada, Son and Johilla"},
        {"id": "br-great-rann-of-kutch", "name": "Great Rann of Kutch Biosphere Reserve", "state": "Gujarat", "year": "2008", "coords": [70.50, 23.85], "radiusKm": 65, "species": "Indian Wild Ass (Khur), Greater Flamingo", "context": "Largest Biosphere Reserve in India by Area"},
        {"id": "br-cold-desert", "name": "Cold Desert Biosphere Reserve", "state": "Himachal Pradesh", "year": "2009", "coords": [77.95, 32.05], "radiusKm": 50, "species": "Snow Leopard, Tibetan Gazelle, Woolly Hare", "context": "Pin Valley, Chandratal, Sarchu & Kibber"},
        {"id": "br-seshachalam", "name": "Seshachalam Hills Biosphere Reserve", "state": "Andhra Pradesh", "year": "2010", "coords": [79.35, 13.68], "radiusKm": 30, "species": "Slender Loris, Red Sanders (endemic Pterocarpus santalinus)", "context": "Eastern Ghats, Tirupati Foothills"},
        {"id": "br-panna", "name": "Panna Biosphere Reserve", "state": "Madhya Pradesh", "year": "2011", "coords": [80.18, 24.70], "radiusKm": 32, "species": "Bengal Tiger, Gharial, Vultures", "context": "Ken River Basin · UNESCO MAB"}
    ]

    for br in biosphere_reserves:
        protected_areas.append({
            "id": br["id"],
            "name": br["name"],
            "pureName": br["name"].replace(" Biosphere Reserve", ""),
            "type": "biosphere_reserve",
            "typeName": "Biosphere reserve",
            "state": br["state"],
            "group": "india",
            "coords": br["coords"],
            "radiusKm": br["radiusKm"],
            "color": "#6b21a8",
            "context": br["context"],
            "keyFacts": [
                f"Designation: {br['year']}",
                f"Location: {br['state']}",
                f"Key Species: {br['species']}"
            ],
            "upscNotes": f"Designated in {br['year']}; {br['context']}; Key species: {br['species']}"
        })

    # 4. Add Ramsar Sites & Major Wetlands (from Rivers.html G.lk + key sites)
    ramsar_sites = [
        {"id": "ramsar-sambhar", "name": "Sambhar Lake", "state": "Rajasthan", "coords": [75.05, 26.90], "context": "Largest inland saline lake in India · Key flamingo wintering ground"},
        {"id": "ramsar-loktak", "name": "Loktak Lake", "state": "Manipur", "coords": [93.85, 24.52], "context": "Largest freshwater lake in Northeast India · Floating phumdis · Keibul Lamjao"},
        {"id": "ramsar-chilika", "name": "Chilika Lake", "state": "Odisha", "coords": [85.35, 19.72], "context": "Largest brackish water lagoon in Asia · Irrawaddy Dolphin habitat"},
        {"id": "ramsar-vembanad", "name": "Vembanad-Kol Wetland", "state": "Kerala", "coords": [76.38, 9.60], "context": "Longest lake in India (~96 km) · Nehru Trophy Boat Race"},
        {"id": "ramsar-wular", "name": "Wular Lake", "state": "Jammu & Kashmir", "coords": [74.55, 34.35], "context": "Largest freshwater lake in India · Jhelum river basin"},
        {"id": "ramsar-renuka", "name": "Renuka Lake", "state": "Himachal Pradesh", "coords": [77.45, 30.60], "context": "Smallest Ramsar site in India · Sacred freshwater lake"},
        {"id": "ramsar-bhoj", "name": "Bhoj Wetland", "state": "Madhya Pradesh", "coords": [77.35, 23.25], "context": "Upper Lake & Lower Lake of Bhopal · Sarus Crane roost"},
        {"id": "ramsar-keoladeo", "name": "Keoladeo Ghana", "state": "Rajasthan", "coords": [77.52, 27.18], "context": "Montreux Record site · Winter home of migratory waterbirds"},
        {"id": "ramsar-harike", "name": "Harike Wetland", "state": "Punjab", "coords": [74.95, 31.15], "context": "Confluence of Beas and Sutlej · Indus River Dolphin"},
        {"id": "ramsar-deepor-beel", "name": "Deepor Beel", "state": "Assam", "coords": [91.65, 26.12], "context": "Permanent freshwater lake in Brahmaputra former channel · Elephant corridor"},
        {"id": "ramsar-rudrasagar", "name": "Rudrasagar Lake", "state": "Tripura", "coords": [91.30, 23.50], "context": "Hosts the historic Neermahal water palace"},
        {"id": "ramsar-kolleru", "name": "Kolleru Lake", "state": "Andhra Pradesh", "coords": [81.33, 16.65], "context": "Freshwater lake situated between Godavari and Krishna deltas"},
        {"id": "ramsar-ashtamudi", "name": "Ashtamudi Wetland", "state": "Kerala", "coords": [76.58, 8.95], "context": "Eight-armed palm-shaped estuarine lake in Kollam"},
        {"id": "ramsar-point-calimere", "name": "Point Calimere", "state": "Tamil Nadu", "coords": [79.85, 10.30], "context": "Palk Strait coastal wetland · Wintering Greater Flamingo"},
        {"id": "ramsar-tsomoriri", "name": "Tso Moriri", "state": "Ladakh", "coords": [78.30, 32.90], "context": "High-altitude brackish lake · Breeding ground for Black-necked Crane"},
        {"id": "ramsar-pangong", "name": "Pangong Tso", "state": "Ladakh", "coords": [78.75, 33.75], "context": "Endorheic saltwater lake at 4,225 m elevation"},
        {"id": "ramsar-khichan", "name": "Khichan Wetland", "state": "Rajasthan", "coords": [72.40, 27.15], "context": "Famed winter haven for thousands of Demoiselle Cranes (Kuranja)"},
        {"id": "ramsar-bakhira", "name": "Bakhira Sanctuary", "state": "Uttar Pradesh", "coords": [83.15, 26.90], "context": "Largest natural floodplain wetland of Eastern UP"}
    ]

    for rm in ramsar_sites:
        protected_areas.append({
            "id": rm["id"],
            "name": rm["name"],
            "pureName": rm["name"],
            "type": "ramsar_site",
            "typeName": "Ramsar wetland site",
            "state": rm["state"],
            "group": "india",
            "coords": rm["coords"],
            "color": "#0f766e",
            "context": f"{rm['state']} · Ramsar Site",
            "keyFacts": [rm["context"]],
            "upscNotes": rm["context"]
        })

    print(f"Total Protected Areas & Wetlands: {len(protected_areas)}")

    # 5. Mountain Ranges (with custom shaded polygons & crest paths)
    mountains = [
        # Northeast India ranges (Matching exact visual in user screenshot)
        {
            "id": "mountain-naga-hills",
            "name": "Naga Hills",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Manipur and Nagaland",
            "color": "#78350f",
            "polygon": [
                [93.65, 24.35], [93.92, 24.78], [94.25, 25.32], [94.62, 25.85],
                [95.02, 26.42], [95.28, 26.88], [95.15, 27.12], [94.75, 27.02],
                [94.38, 26.55], [94.05, 26.02], [93.75, 25.42], [93.48, 24.75],
                [93.38, 24.40], [93.65, 24.35]
            ],
            "path": [[93.55, 24.40], [93.90, 24.95], [94.35, 25.60], [94.85, 26.35], [95.20, 26.95]],
            "keyFacts": [
                "Boundary: Forms the watershed between Brahmaputra and Chindwin (Irrawaddy) rivers",
                "Highest Peak: Mt. Saramati (3,841 m) on Nagaland-Myanmar frontier",
                "Extension: Connects southward to Manipur Hills and Mizo (Lushai) Hills",
                "Geology: Part of the complex Arakan Yoma - Indo-Burma subduction mountain system"
            ],
            "upscNotes": "Forms border with Myanmar; Mt Saramati is highest point; watershed between Brahmaputra and Chindwin."
        },
        {
            "id": "mountain-patkai-bum",
            "name": "Patkai Bum",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Arunachal Pradesh & Nagaland (Myanmar border)",
            "color": "#78350f",
            "polygon": [
                [95.05, 26.75], [95.55, 27.18], [96.08, 27.58], [96.72, 28.02],
                [97.22, 28.25], [97.35, 28.05], [96.80, 27.65], [96.15, 27.18],
                [95.50, 26.68], [95.05, 26.75]
            ],
            "path": [[95.10, 26.78], [95.75, 27.35], [96.50, 27.85], [97.25, 28.20]],
            "keyFacts": [
                "Located on the north-eastern frontier of India bordering Myanmar",
                "Source region of Burhi Dihing and other Brahmaputra tributaries",
                "Pangsau Pass (Stilwell Road / Ledo Road) cuts across Patkai Bum"
            ],
            "upscNotes": "Pangsau Pass into Myanmar; Stilwell Road; forms northeastern Himalayan syntaxial bend connection."
        },
        {
            "id": "mountain-garo-hills",
            "name": "Garo Hills",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Western Meghalaya Plateau",
            "color": "#78350f",
            "polygon": [
                [89.92, 25.22], [90.45, 25.05], [90.95, 25.12], [90.98, 25.65],
                [90.42, 25.75], [89.88, 25.55], [89.92, 25.22]
            ],
            "path": [[90.0, 25.35], [90.5, 25.45], [90.9, 25.40]],
            "keyFacts": [
                "Western part of the Meghalaya Plateau (Shillong Plateau)",
                "Nokrek Peak (1,412 m): Highest peak and core of Nokrek Biosphere Reserve",
                "Hosts rich biodiversity, endemic citrus (Citrus indica), and living root bridges"
            ],
            "upscNotes": "Nokrek Biosphere Reserve; origin of Ganol, Simsang and Dareng rivers."
        },
        {
            "id": "mountain-khasi-jaintia-hills",
            "name": "Khasi & Jaintia Hills",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Central & Eastern Meghalaya",
            "color": "#78350f",
            "polygon": [
                [91.02, 25.12], [91.82, 25.10], [92.65, 25.12], [92.75, 25.75],
                [91.95, 25.82], [91.05, 25.68], [91.02, 25.12]
            ],
            "path": [[91.10, 25.40], [91.85, 25.55], [92.60, 25.45]],
            "keyFacts": [
                "Mawsynram and Cherrapunji (Sohra): Wettest places on Earth due to funneling of SW monsoon winds",
                "Shillong Peak (1,961 m): Highest point of Meghalaya Plateau",
                "Famous for karst limestone caves (Krem Liat Prah) and Living Root Bridges"
            ],
            "upscNotes": "Mawsynram wettest place on Earth; funnel effect of Bay of Bengal branch; Shillong Plateau peninsular block."
        },
        {
            "id": "mountain-barail-range",
            "name": "Barail Range",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Assam, Nagaland & Manipur",
            "color": "#78350f",
            "polygon": [
                [92.75, 25.02], [93.18, 25.22], [93.68, 25.52], [93.92, 25.82],
                [93.65, 25.95], [93.12, 25.62], [92.68, 25.32], [92.75, 25.02]
            ],
            "path": [[92.75, 25.15], [93.30, 25.45], [93.85, 25.80]],
            "keyFacts": [
                "Separates the Brahmaputra Valley from the Barak (Surma) Valley",
                "Dima Hasao (North Cachar Hills) and Barail Wildlife Sanctuary",
                "Acts as bridge connecting Meghalaya Plateau with the Naga-Manipur ranges"
            ],
            "upscNotes": "Watershed between Brahmaputra and Barak basins; Haflong hill station."
        },
        {
            "id": "mountain-mikir-hills",
            "name": "Mikir Hills (Karbi Anglong)",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Central Assam (Kaziranga hinterland)",
            "color": "#78350f",
            "polygon": [
                [93.02, 25.92], [93.45, 25.82], [93.82, 26.22], [93.65, 26.62],
                [93.15, 26.52], [92.92, 26.22], [93.02, 25.92]
            ],
            "path": [[93.05, 26.10], [93.45, 26.25], [93.65, 26.45]],
            "keyFacts": [
                "Isolated ancient plateau mass south of the Brahmaputra River",
                "Provides critical high-ground ecological corridor for wildlife during Kaziranga floods",
                "Radial drainage pattern sending streams to Dhansiri and Kopili"
            ],
            "upscNotes": "High-ground refuge during Kaziranga floods; peninsular shield outlier."
        },
        {
            "id": "mountain-mizo-hills",
            "name": "Mizo Hills (Lushai Hills)",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Mizoram and Southern Manipur",
            "color": "#78350f",
            "polygon": [
                [92.58, 22.38], [93.15, 22.38], [93.35, 23.42], [93.22, 24.25],
                [92.72, 24.15], [92.48, 23.22], [92.58, 22.38]
            ],
            "path": [[92.65, 22.50], [92.90, 23.35], [93.05, 24.15]],
            "keyFacts": [
                "Characterized by parallel north-south anticlines and synclines with valley lakes",
                "Phawngpui (Blue Mountain, 2,157 m): Highest peak of Mizoram",
                "Source of Dhaleswari (Tlawng), Kaladan, and Karnaphuli rivers"
            ],
            "upscNotes": "Phawngpui Blue Mountain; parallel ridge and valley topography; Kaladan multi-modal transit corridor."
        },
        {
            "id": "mountain-dafla-mishmi-hills",
            "name": "Dafla & Mishmi Hills",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Arunachal Pradesh (Eastern Himalayan Foothills)",
            "color": "#78350f",
            "polygon": [
                [92.40, 27.05], [93.60, 27.25], [94.50, 27.65], [95.80, 28.15],
                [96.85, 28.55], [96.75, 28.95], [95.45, 28.55], [94.15, 28.05],
                [93.10, 27.75], [92.30, 27.45], [92.40, 27.05]
            ],
            "path": [[92.45, 27.20], [93.80, 27.55], [95.10, 28.00], [96.60, 28.65]],
            "keyFacts": [
                "Arranged west to east: Dafla Hills, Miri Hills, Abor Hills, and Mishmi Hills",
                "Drained by major right-bank Brahmaputra tributaries (Kameng, Subansiri, Siang, Dibang, Lohit)",
                "Mishmi Hills form the northeastern terminus where the Himalayas meet the Burmese arc"
            ],
            "upscNotes": "Syntaxial bend around Namcha Barwa; west-to-east sequence of tribal hills."
        },
        # Northern & Trans-Himalayan Ranges
        {
            "id": "mountain-greater-himalayas",
            "name": "Great Himalayas (Himadri)",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Northern India, Nepal, Bhutan & Tibet",
            "color": "#78350f",
            "polygon": [
                [73.8, 34.8], [75.5, 34.2], [77.2, 32.8], [79.0, 31.0],
                [81.5, 29.5], [84.5, 28.5], [87.5, 27.8], [90.0, 27.6],
                [93.5, 27.8], [95.5, 28.5], [95.8, 29.2], [93.8, 28.5],
                [90.5, 28.2], [88.0, 28.4], [84.8, 29.2], [81.8, 30.3],
                [79.2, 31.8], [77.5, 33.6], [75.8, 35.0], [73.8, 34.8]
            ],
            "path": [[74.0, 34.8], [77.5, 32.5], [83.0, 28.8], [88.5, 27.8], [95.0, 28.6]],
            "keyFacts": [
                "World's highest mountain barrier, average elevation ~6,000 m",
                "Includes Everest (8,848 m), Kanchenjunga (8,586 m), Nanda Devi (7,816 m)",
                "Glacial source for major Asian river basins (Indus, Ganga, Brahmaputra)"
            ],
            "upscNotes": "Himadri continuous crystalline core; youthful fold mountains."
        },
        {
            "id": "mountain-karakoram-range",
            "name": "Karakoram Range",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Ladakh & Gilgit-Baltistan (India)",
            "color": "#78350f",
            "polygon": [
                [74.5, 36.5], [76.5, 36.0], [78.0, 35.5], [79.2, 34.8],
                [78.8, 34.4], [77.2, 35.0], [75.5, 35.5], [74.0, 36.0], [74.5, 36.5]
            ],
            "path": [[74.2, 36.2], [76.2, 35.8], [78.5, 35.0]],
            "keyFacts": [
                "Extends from Pamir Knot southeast into Tibet; hosts K2 (8,611 m)",
                "Siachen Glacier (76 km): World's highest battlefield and longest extra-polar glacier",
                "Biafo, Baltoro, Hispar, and Rimo glaciers form greatest glacial concentration"
            ],
            "upscNotes": "K2 second highest peak; Siachen Glacier; Trans-Himalayan crown of India."
        },
        {
            "id": "mountain-ladakh-zaskar",
            "name": "Ladakh & Zaskar Ranges",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "UT of Ladakh & Himachal Pradesh",
            "color": "#78350f",
            "polygon": [
                [75.2, 34.6], [77.2, 34.1], [78.8, 33.3], [78.5, 32.8],
                [76.8, 33.5], [75.0, 34.0], [75.2, 34.6]
            ],
            "path": [[75.2, 34.3], [77.0, 33.8], [78.6, 33.1]],
            "keyFacts": [
                "Indus River flows north-west between the Ladakh and Zaskar ranges",
                "Khardung La Pass crosses the Ladakh Range north to Nubra Valley",
                "Cold desert rain-shadow climate with extreme temperature variations"
            ],
            "upscNotes": "Indus river valley sandwich; Khardung La pass; Leh on Indus right bank."
        },
        {
            "id": "mountain-pir-panjal",
            "name": "Pir Panjal & Dhauladhar",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Jammu & Kashmir & Himachal Pradesh",
            "color": "#78350f",
            "polygon": [
                [73.8, 34.1], [75.0, 33.6], [76.2, 33.0], [77.0, 32.4],
                [76.8, 32.1], [75.8, 32.6], [74.6, 33.2], [73.5, 33.6], [73.8, 34.1]
            ],
            "path": [[73.6, 33.8], [75.2, 33.2], [76.8, 32.2]],
            "keyFacts": [
                "Longest range of the Middle/Lesser Himalayas",
                "Encloses the Kashmir Valley on the south; traversed by Jhelum gorge",
                "Rohtang Pass (Atal Tunnel) and Banihal Pass (Jawahar Tunnel) cut through it"
            ],
            "upscNotes": "Encloses Kashmir Valley; Rohtang and Banihal passes; Atal Tunnel."
        },
        {
            "id": "mountain-shiwaliks",
            "name": "Shiwalik Range (Outer Himalayas)",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Sub-Himalayan belt across northern India",
            "color": "#78350f",
            "polygon": [
                [74.0, 33.0], [76.0, 31.8], [78.0, 30.2], [81.0, 28.5],
                [84.0, 27.5], [87.0, 26.8], [86.8, 26.5], [83.8, 27.2],
                [80.8, 28.2], [77.8, 29.9], [75.8, 31.4], [73.8, 32.7], [74.0, 33.0]
            ],
            "path": [[74.2, 32.8], [77.0, 31.0], [82.0, 28.0], [86.5, 26.8]],
            "keyFacts": [
                "Youngest geological formation of the Himalayas; composed of unconsolidated sediments",
                "Separated from Lesser Himalayas by longitudinal valleys called Duns (e.g., Dehradun)",
                "Subject to active landslides, soil erosion, and neotectonics"
            ],
            "upscNotes": "Duns and Duars; youngest unconsolidated sedimentary fold zone; prone to landslides."
        },
        # Peninsular & Central Indian Ranges
        {
            "id": "mountain-aravalli-range",
            "name": "Aravalli Range",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Gujarat, Rajasthan, Haryana & Delhi",
            "color": "#78350f",
            "polygon": [
                [72.35, 24.15], [73.55, 25.10], [74.85, 26.25], [76.05, 27.55],
                [77.15, 28.55], [77.30, 28.40], [76.25, 27.20], [74.95, 25.80],
                [73.70, 24.60], [72.45, 23.90], [72.35, 24.15]
            ],
            "path": [[72.4, 24.0], [74.2, 25.6], [76.0, 27.2], [77.2, 28.5]],
            "keyFacts": [
                "One of the oldest fold mountain systems in the world (Precambrian origin)",
                "Guru Shikhar (1,722 m) on Mount Abu is the highest peak",
                "Acts as barrier against Thar desert expansion toward Indo-Gangetic Plains"
            ],
            "upscNotes": "Precambrian relict fold mountains; Guru Shikhar; rain shadow causes Thar aridity."
        },
        {
            "id": "mountain-vindhya-range",
            "name": "Vindhya Range & Kaimur",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Madhya Pradesh, Gujarat & Uttar Pradesh",
            "color": "#78350f",
            "polygon": [
                [74.15, 22.45], [76.50, 22.65], [79.05, 23.55], [82.50, 24.65],
                [82.50, 24.15], [79.00, 23.00], [76.45, 22.15], [74.15, 22.00], [74.15, 22.45]
            ],
            "path": [[74.2, 22.2], [77.5, 22.8], [81.8, 24.4]],
            "keyFacts": [
                "Forms the traditional geographical divide between Northern and Southern India",
                "Forms the northern scarp of the Narmada Rift Valley",
                "Rich in red sandstone (monuments of Delhi/Agra) and limestone"
            ],
            "upscNotes": "Divides North and South India; northern horst flank of Narmada graben."
        },
        {
            "id": "mountain-satpura-range",
            "name": "Satpura & Maikal Range",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Madhya Pradesh, Maharashtra & Gujarat",
            "color": "#78350f",
            "polygon": [
                [74.50, 21.65], [76.50, 21.55], [78.50, 22.05], [81.80, 22.65],
                [81.75, 21.95], [78.45, 21.55], [76.45, 21.10], [74.45, 21.20], [74.50, 21.65]
            ],
            "path": [[74.5, 21.4], [77.5, 21.8], [80.5, 22.2]],
            "keyFacts": [
                "Classic horst / block mountain lying between Narmada (north) and Tapi (south) rift valleys",
                "Comprises Rajpipla Hills, Mahadeo Hills, and Maikal Range",
                "Dhupgarh (1,350 m) near Pachmarhi is the highest peak; Amarkantak plateau source of Narmada & Son"
            ],
            "upscNotes": "Horst between Narmada and Tapi rifts; Dhupgarh peak; Amarkantak origin of Narmada/Son."
        },
        {
            "id": "mountain-western-ghats",
            "name": "Western Ghats (Sahyadri)",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Maharashtra, Goa, Karnataka, Kerala & Tamil Nadu",
            "color": "#78350f",
            "polygon": [
                [73.00, 20.80], [73.50, 18.50], [74.20, 16.00], [74.80, 14.50],
                [75.40, 12.50], [76.60, 10.50], [77.20, 8.50], [77.65, 8.50],
                [77.00, 10.50], [75.80, 12.50], [75.20, 14.50], [74.60, 16.00],
                [73.90, 18.50], [73.40, 20.80], [73.00, 20.80]
            ],
            "path": [[73.2, 20.5], [73.8, 17.5], [74.8, 14.2], [76.5, 10.2], [77.4, 8.6]],
            "keyFacts": [
                "UNESCO World Heritage Site; one of eight 'hottest hotspots' of biological diversity",
                "Continuous escarpment running 1,600 km parallel to the Arabian Sea coast",
                "Major orographic barrier causing heavy monsoon rainfall on western flank"
            ],
            "upscNotes": "Fault-scarp of Deccan trap; orographic rainfall; Madhav Gadgil and Kasturirangan reports."
        },
        {
            "id": "mountain-nilgiri-hills",
            "name": "Nilgiri Hills (Blue Mountains)",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Tamil Nadu, Kerala & Karnataka tri-junction",
            "color": "#78350f",
            "polygon": [
                [76.35, 11.15], [76.85, 11.60], [77.15, 11.35], [76.75, 11.05], [76.35, 11.15]
            ],
            "path": [[76.4, 11.2], [76.8, 11.5], [77.1, 11.3]],
            "keyFacts": [
                "Junction where the Eastern Ghats meet the Western Ghats",
                "Doddabetta (2,637 m): Second highest peak of South India",
                "Nilgiri Biosphere Reserve: India's first biosphere reserve (established 1986)"
            ],
            "upscNotes": "Confluence of Western & Eastern Ghats; Doddabetta peak; Shola grasslands ecosystem."
        },
        {
            "id": "mountain-anaimalai-cardamom",
            "name": "Anaimalai & Cardamom Hills",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Kerala & Tamil Nadu",
            "color": "#78350f",
            "polygon": [
                [76.65, 10.25], [77.30, 10.45], [77.45, 9.55], [77.15, 9.25], [76.65, 10.25]
            ],
            "path": [[76.7, 10.2], [77.2, 9.8], [77.3, 9.4]],
            "keyFacts": [
                "Anaimudi (2,695 m): Highest peak of Peninsular India / South India",
                "Palghat Gap separates Anaimalai from the Nilgiri Hills to the north",
                "Cardamom Hills form the southernmost block hosting Periyar Tiger Reserve"
            ],
            "upscNotes": "Anaimudi highest in Peninsular India; Palghat gap; Periyar catchment."
        },
        {
            "id": "mountain-eastern-ghats",
            "name": "Eastern Ghats",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "india",
            "context": "Odisha, Andhra Pradesh & Tamil Nadu",
            "color": "#78350f",
            "polygon": [
                [85.50, 19.80], [83.50, 18.20], [81.50, 16.50], [79.50, 14.20],
                [78.80, 12.50], [79.25, 12.40], [80.05, 14.20], [82.05, 16.50],
                [84.05, 18.20], [86.05, 19.80], [85.50, 19.80]
            ],
            "path": [[85.8, 19.8], [83.0, 17.8], [80.2, 14.8], [78.9, 12.5]],
            "keyFacts": [
                "Discontinuous, deeply eroded relic mountain chain dissected by major east-flowing rivers",
                "Major rivers dissecting it: Mahanadi, Godavari, Krishna, and Cauvery",
                "Arma Konda / Jindhagada (1,690 m) and Mahendragiri (1,501 m) are prominent peaks"
            ],
            "upscNotes": "Dissected relict chain; major bauxite deposits in Koraput/Visakhapatnam."
        },
        # Major World Mountain Ranges (with shaded polygons)
        {
            "id": "mountain-andes",
            "name": "Andes Mountains",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "world",
            "context": "South America · Longest continental mountain chain (~7,000 km)",
            "color": "#78350f",
            "polygon": [
                [-71, 10], [-76, 5], [-79, -2], [-76, -10], [-71, -16], [-67, -21],
                [-69, -32], [-71, -42], [-73, -52], [-70, -55], [-68, -55], [-71, -52],
                [-68, -42], [-66, -32], [-64, -21], [-68, -16], [-73, -10], [-76, -2],
                [-73, 5], [-68, 10], [-71, 10]
            ],
            "path": [[-71.0, 10.0], [-78.0, 0.0], [-74.0, -12.0], [-68.0, -22.0], [-70.0, -35.0], [-73.0, -50.0]],
            "keyFacts": [
                "Longest continental mountain range in the world, stretching over 7,000 km",
                "Formed by oceanic-continental subduction of the Nazca Plate under South American Plate",
                "Aconcagua (6,961 m) is highest summit outside of Asia"
            ],
            "upscNotes": "Pacific Ring of Fire; copper deposits (Chuquicamata); Altiplano intermontane plateau."
        },
        {
            "id": "mountain-rocky-mountains",
            "name": "Rocky Mountains",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "world",
            "context": "North America (Canada & USA) · Continental Divide",
            "color": "#78350f",
            "polygon": [
                [-114, 32], [-111, 35], [-106, 37], [-106, 42], [-111, 46], [-116, 51],
                [-123, 56], [-127, 60], [-123, 60], [-119, 56], [-112, 51], [-107, 46],
                [-102, 42], [-102, 37], [-107, 35], [-110, 32], [-114, 32]
            ],
            "path": [[-126.0, 59.0], [-116.0, 51.0], [-111.0, 45.0], [-106.0, 38.0], [-105.0, 35.0]],
            "keyFacts": [
                "Forms the North American Continental Divide separating Atlantic and Pacific drainages",
                "Formed during the Laramide Orogeny (80-55 million years ago)",
                "Mount Elbert (4,401 m) is the highest peak in the Rockies"
            ],
            "upscNotes": "Continental Divide; headwaters of Colorado, Missouri, Columbia, Rio Grande rivers."
        },
        {
            "id": "mountain-alps",
            "name": "The Alps",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "world",
            "context": "Central & Southern Europe (France, Switzerland, Italy, Austria)",
            "color": "#78350f",
            "polygon": [
                [5.5, 45.0], [6.5, 46.0], [8.0, 46.5], [10.5, 47.0], [13.5, 47.3],
                [15.5, 46.8], [14.5, 46.2], [11.5, 46.0], [8.5, 45.6], [7.0, 44.5], [5.5, 45.0]
            ],
            "path": [[5.8, 45.2], [8.2, 46.4], [11.5, 46.8], [14.5, 47.0]],
            "keyFacts": [
                "Young fold mountains formed by the collision of African and Eurasian tectonic plates",
                "Mont Blanc (4,808 m): Highest peak in Western Europe on French-Italian border",
                "Source of major European rivers: Rhine, Rhône, Po, and Danube tributaries"
            ],
            "upscNotes": "Alpine orogeny; Foehn warm dry leeward wind; U-shaped glacial valleys."
        },
        {
            "id": "mountain-atlas",
            "name": "Atlas Mountains",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "world",
            "context": "North Africa (Morocco, Algeria, Tunisia)",
            "color": "#78350f",
            "polygon": [
                [-10.0, 29.5], [-7.5, 31.5], [-3.0, 33.5], [3.0, 35.5], [8.5, 36.5],
                [9.0, 36.0], [3.5, 35.0], [-2.5, 33.0], [-7.0, 31.0], [-9.5, 29.0], [-10.0, 29.5]
            ],
            "path": [[-9.5, 30.5], [-5.0, 32.5], [1.0, 35.0], [8.0, 36.2]],
            "keyFacts": [
                "Separates Mediterranean and Atlantic coastlines from the Sahara Desert",
                "Toubkal (4,167 m) in southwestern Morocco is the highest summit",
                "Rich in phosphate deposits and mineral resources"
            ],
            "upscNotes": "Climatic divide shielding Maghreb from Sahara; Toubkal peak; phosphate mining."
        },
        {
            "id": "mountain-urals",
            "name": "Ural Mountains",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "world",
            "context": "Russia · Boundary between Europe and Asia",
            "color": "#78350f",
            "polygon": [
                [58.0, 50.0], [59.0, 56.0], [60.0, 62.0], [63.0, 66.0], [65.0, 68.0],
                [64.0, 68.0], [61.5, 66.0], [58.5, 62.0], [57.5, 56.0], [56.5, 50.0], [58.0, 50.0]
            ],
            "path": [[57.0, 51.0], [59.5, 58.0], [60.0, 64.0], [64.0, 67.5]],
            "keyFacts": [
                "Ancient, heavily eroded Hercynian mountain range running north-south ~2,500 km",
                "Traditional geographical boundary between the European and Asian continents",
                "Extremely rich in minerals: iron ore (Magnitogorsk), platinum, copper, gems"
            ],
            "upscNotes": "Continent border Europe/Asia; heavy mineral wealth; Hercynian orogeny."
        },
        {
            "id": "mountain-great-dividing-range",
            "name": "Great Dividing Range",
            "category": "mountain",
            "categoryName": "Mountain range",
            "group": "world",
            "context": "Eastern Australia · Watershed of Murray-Darling",
            "color": "#78350f",
            "polygon": [
                [142.0, -11.0], [144.5, -16.0], [147.5, -21.0], [150.5, -27.0],
                [150.0, -32.0], [148.0, -36.0], [144.5, -37.5], [143.5, -37.0],
                [147.0, -35.5], [149.0, -31.5], [149.5, -26.5], [146.5, -20.5],
                [143.5, -15.5], [141.0, -11.0], [142.0, -11.0]
            ],
            "path": [[143.0, -12.5], [148.0, -22.0], [150.0, -33.0], [145.0, -37.5]],
            "keyFacts": [
                "Extends over 3,500 km along the eastern coast of Australia",
                "Forms the watershed separating east-flowing coastal streams from inland Murray-Darling basin",
                "Mount Kosciuszko (2,228 m) in Snowy Mountains is Australia's highest summit"
            ],
            "upscNotes": "Murray-Darling catchment; Snowy Mountains hydro scheme; orographic rain barrier."
        }
    ]

    # 6. Peaks (Magenta Triangles ▲)
    peaks = [
        {"id": "peak-saramati", "name": "Mt. Saramati", "elevation": "3,841 m", "range": "Naga Hills", "context": "Highest peak of Naga Hills (Nagaland/Myanmar)", "coords": [95.03, 25.74]},
        {"id": "peak-kangchenjunga", "name": "Kangchenjunga", "elevation": "8,586 m", "range": "Great Himalayas", "context": "Highest peak in India · Third highest globally (Sikkim)", "coords": [88.15, 27.70]},
        {"id": "peak-nanda-devi", "name": "Nanda Devi", "elevation": "7,816 m", "range": "Garhwal Himalayas", "context": "Highest peak entirely within India (Uttarakhand)", "coords": [79.97, 30.37]},
        {"id": "peak-kamet", "name": "Kamet", "elevation": "7,756 m", "range": "Zaskar Range", "context": "Second highest peak in Garhwal (Uttarakhand)", "coords": [79.59, 30.92]},
        {"id": "peak-k2", "name": "K2 (Godwin-Austen)", "elevation": "8,611 m", "range": "Karakoram", "context": "Second highest peak globally (Ladakh/Gilgit-Baltistan)", "coords": [76.51, 35.88]},
        {"id": "peak-saltoro-kangri", "name": "Saltoro Kangri", "elevation": "7,742 m", "range": "Saltoro / Karakoram", "context": "Guards the Siachen Glacier flank (Ladakh)", "coords": [76.84, 35.39]},
        {"id": "peak-saser-kangri", "name": "Saser Kangri", "elevation": "7,672 m", "range": "Saser Muztagh / Karakoram", "context": "Highest peak in Saser Muztagh (Ladakh)", "coords": [77.75, 34.87]},
        {"id": "peak-anamudi", "name": "Anaimudi", "elevation": "2,695 m", "range": "Anaimalai Hills", "context": "Highest peak in South India / Western Ghats (Kerala)", "coords": [77.06, 10.17]},
        {"id": "peak-doddabetta", "name": "Doddabetta", "elevation": "2,637 m", "range": "Nilgiri Hills", "context": "Highest peak in Nilgiri Hills (Tamil Nadu)", "coords": [76.74, 11.40]},
        {"id": "peak-guru-shikhar", "name": "Guru Shikhar", "elevation": "1,722 m", "range": "Aravalli Range", "context": "Highest peak of Aravalli Range (Mount Abu, Rajasthan)", "coords": [72.78, 24.65]},
        {"id": "peak-dhupgarh", "name": "Dhupgarh", "elevation": "1,350 m", "range": "Satpura Range", "context": "Highest peak of Satpura Range (Pachmarhi, MP)", "coords": [78.37, 22.45]},
        {"id": "peak-amarkantak", "name": "Amarkantak", "elevation": "1,048 m", "range": "Maikal Range", "context": "Source of Narmada, Son and Johilla rivers (MP)", "coords": [81.76, 22.67]},
        {"id": "peak-mahendragiri", "name": "Mahendragiri", "elevation": "1,501 m", "range": "Eastern Ghats", "context": "Prominent peak in Eastern Ghats (Gajapati, Odisha)", "coords": [84.36, 18.96]},
        {"id": "peak-jindhagada", "name": "Arma Konda (Jindhagada)", "elevation": "1,690 m", "range": "Eastern Ghats", "context": "Highest peak of the Eastern Ghats (Andhra Pradesh)", "coords": [82.72, 18.23]},
        {"id": "peak-parasnath", "name": "Parasnath (Shikharji)", "elevation": "1,365 m", "range": "Chota Nagpur Plateau", "context": "Highest mountain peak in Jharkhand · Sacred Jain pilgrimage", "coords": [86.13, 23.96]},
        {"id": "peak-everest", "name": "Mount Everest", "elevation": "8,848.86 m", "range": "Great Himalayas", "context": "Highest mountain peak on Earth (Nepal/Tibet)", "coords": [86.925, 27.988]},
        {"id": "peak-aconcagua", "name": "Mount Aconcagua", "elevation": "6,961 m", "range": "Andes", "context": "Highest peak in South America and Western Hemisphere (Argentina)", "coords": [-70.01, -32.65]},
        {"id": "peak-denali", "name": "Denali (Mt. McKinley)", "elevation": "6,190 m", "range": "Alaska Range", "context": "Highest peak in North America (Alaska, USA)", "coords": [-151.00, 63.07]},
        {"id": "peak-kilimanjaro", "name": "Mount Kilimanjaro", "elevation": "5,895 m", "range": "East African Rift", "context": "Highest peak in Africa · Free-standing stratovolcano (Tanzania)", "coords": [37.35, -3.07]},
        {"id": "peak-mont-blanc", "name": "Mont Blanc", "elevation": "4,808 m", "range": "Alps", "context": "Highest peak in Western Europe (France/Italy)", "coords": [6.86, 45.83]},
        {"id": "peak-elbrus", "name": "Mount Elbrus", "elevation": "5,642 m", "range": "Caucasus", "context": "Highest peak in European continent (Russia)", "coords": [42.44, 43.35]}
    ]

    # 7. Mountain Passes (Amber Hourglasses ⧖)
    passes = [
        {"id": "pass-nathu-la", "name": "Nathu La", "elevation": "4,310 m", "context": "Connects Sikkim with Chumbi Valley (Tibet) · Historic Silk Route branch", "coords": [88.85, 27.39]},
        {"id": "pass-jelep-la", "name": "Jelep La", "elevation": "4,270 m", "context": "Connects Sikkim with Lhasa (Tibet) via Chumbi Valley", "coords": [88.88, 27.36]},
        {"id": "pass-bomdi-la", "name": "Bomdi La", "elevation": "2,217 m", "context": "Connects Tezpur/Assam with Tawang (Arunachal Pradesh)", "coords": [92.42, 27.26]},
        {"id": "pass-bum-la", "name": "Bum La", "elevation": "4,633 m", "context": "Pass on India-China border north of Tawang (Arunachal Pradesh)", "coords": [91.87, 27.72]},
        {"id": "pass-diphu", "name": "Diphu Pass", "elevation": "4,587 m", "context": "Strategic tri-junction of India, China, and Myanmar (Arunachal)", "coords": [97.41, 28.18]},
        {"id": "pass-zoji-la", "name": "Zoji La", "elevation": "3,528 m", "context": "Connects Srinagar/Kashmir Valley with Kargil & Leh (Ladakh)", "coords": [75.80, 34.28]},
        {"id": "pass-khardung-la", "name": "Khardung La", "elevation": "5,359 m", "context": "Gateway to the Shyok and Nubra valleys (Ladakh)", "coords": [77.60, 34.28]},
        {"id": "pass-chang-la", "name": "Chang La", "elevation": "5,360 m", "context": "High mountain pass gateway to Pangong Tso (Ladakh)", "coords": [77.93, 34.05]},
        {"id": "pass-sasser-pass", "name": "Sasser Pass", "elevation": "5,411 m", "context": "Ancient caravan pass between Nubra Valley and Yarkand (Ladakh)", "coords": [77.72, 34.92]},
        {"id": "pass-kunzum-pass", "name": "Kunzum Pass", "elevation": "4,551 m", "context": "Connects Kullu and Lahaul valleys with Spiti Valley (Himachal)", "coords": [77.63, 32.40]},
        {"id": "pass-lungalacha-la", "name": "Lungalacha La", "elevation": "5,059 m", "context": "Mountain pass on the Manali-Leh Highway (Ladakh)", "coords": [77.45, 33.02]},
        {"id": "pass-lanak-la", "name": "Lanak La", "elevation": "5,466 m", "context": "Strategic pass in eastern Ladakh near Aksai Chin", "coords": [79.57, 34.40]},
        {"id": "pass-rohtang", "name": "Rohtang Pass", "elevation": "3,978 m", "context": "Connects Kullu Valley with Lahaul and Spiti (Himachal Pradesh)", "coords": [77.24, 32.37]},
        {"id": "pass-shipki-la", "name": "Shipki La", "elevation": "3,930 m", "context": "Himalayan pass where Sutlej River enters India from Tibet (HP)", "coords": [78.74, 31.81]},
        {"id": "pass-mana", "name": "Mana Pass (Dungri La)", "elevation": "5,545 m", "context": "Connects Uttarakhand with Tibet · Source of Saraswati River", "coords": [79.41, 31.07]},
        {"id": "pass-niti", "name": "Niti Pass", "elevation": "5,070 m", "context": "Historic trade pass between Garhwal (Uttarakhand) and Tibet", "coords": [79.87, 30.97]},
        {"id": "pass-lipulekh", "name": "Lipulekh Pass", "elevation": "5,200 m", "context": "Tri-junction of India, Nepal and Tibet · Kailash-Mansarovar Yatra", "coords": [81.04, 30.24]},
        {"id": "pass-palghat", "name": "Palghat Gap", "elevation": "140 m", "context": "Major low-altitude mountain pass between Nilgiri and Anaimalai hills", "coords": [76.65, 10.78]},
        {"id": "pass-thal-ghat", "name": "Thal Ghat (Kasara)", "elevation": "585 m", "context": "Pass in Western Ghats connecting Mumbai with Nashik/Nagpur", "coords": [73.53, 19.70]},
        {"id": "pass-bhor-ghat", "name": "Bhor Ghat", "elevation": "548 m", "context": "Pass in Western Ghats connecting Mumbai with Pune", "coords": [73.38, 18.78]}
    ]

    # 8. Glaciers (Ice Crystal ❄)
    glaciers = [
        {"id": "glacier-siachen", "name": "Siachen Glacier", "length": "76 km", "context": "Nubra Valley, Karakoram · Longest in Karakoram · Highest battlefield", "coords": [77.10, 35.50]},
        {"id": "glacier-baltoro", "name": "Baltoro Glacier", "length": "63 km", "context": "Karakoram Range · Feeds Shigar River, tributary of Indus", "coords": [76.45, 35.73]},
        {"id": "glacier-biafo", "name": "Biafo Glacier", "length": "67 km", "context": "Karakoram Range · Meets Hispar at Snow Lake (Lukpe La)", "coords": [75.90, 35.95]},
        {"id": "glacier-hispar", "name": "Hispar Glacier", "length": "49 km", "context": "Karakoram Range · Joins Biafo at Hispar La", "coords": [75.30, 36.05]},
        {"id": "glacier-gangotri", "name": "Gangotri Glacier", "length": "30 km", "context": "Uttarkashi, Uttarakhand · Gaumukh terminus source of Bhagirathi (Ganga)", "coords": [79.17, 30.85]},
        {"id": "glacier-yamunotri", "name": "Yamunotri Glacier", "length": "Bandarpunch peak", "context": "Uttarkashi, Uttarakhand · Source of Yamuna River", "coords": [78.45, 31.02]},
        {"id": "glacier-zemu", "name": "Zemu Glacier", "length": "26 km", "context": "Base of Kangchenjunga, Sikkim · Source of Teesta River", "coords": [88.22, 27.75]},
        {"id": "glacier-pindari", "name": "Pindari Glacier", "length": "9 km", "context": "Kumaon Himalayas, Uttarakhand · Source of Pindar River", "coords": [79.98, 30.27]},
        {"id": "glacier-milam", "name": "Milam Glacier", "length": "19 km", "context": "Trishuli peak, Uttarakhand · Source of Gorithanga / Goriganga River", "coords": [80.11, 30.45]},
        {"id": "glacier-bara-shigri", "name": "Bara Shigri Glacier", "length": "28 km", "context": "Chandra Valley, Lahaul-Spiti, HP · Source of Chandra (Chenab) River", "coords": [77.62, 32.28]}
    ]

    # Generate javascript object
    geo_features_js = f"""/**
 * Complete Geographic Features Database for Mapping Atlas
 * Auto-generated from Rivers.html and india-map-data.txt
 * Contains:
 * - {len(rivers)} Rivers (106 Indian surveyed rivers + global systems)
 * - {len(mountains)} Mountain Ranges (with shaded polygons & crests)
 * - {len(peaks)} Peaks (high-altitude summits with elevation)
 * - {len(passes)} Mountain Passes (strategic alpine bottlenecks)
 * - {len(glaciers)} Glaciers (major glacial systems)
 * - {len(protected_areas)} Protected Areas & Wetlands (National Parks, Tiger Reserves, Biosphere Reserves, Ramsar Sites)
 */

window.GEOGRAPHIC_FEATURES = {{
  rivers: {json.dumps(rivers, ensure_ascii=False, indent=2)},
  mountains: {json.dumps(mountains, ensure_ascii=False, indent=2)},
  peaks: {json.dumps(peaks, ensure_ascii=False, indent=2)},
  passes: {json.dumps(passes, ensure_ascii=False, indent=2)},
  glaciers: {json.dumps(glaciers, ensure_ascii=False, indent=2)},
  protectedAreas: {json.dumps(protected_areas, ensure_ascii=False, indent=2)}
}};
"""

    out_path = os.path.join('world-map', 'data', 'geographic-features.js')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(geo_features_js)

    print(f"Successfully generated {out_path} ({os.path.getsize(out_path) / 1024:.1f} KB)")

if __name__ == '__main__':
    main()
