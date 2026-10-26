// =====================================================================
//  HKC raid progression data
//  Edit this file to update the Progression page. No other file needs changing.
//
//  updated   - date shown at the bottom of the page (YYYY-MM-DD)
//  current   - the season you are raiding now
//      ranks - overall Mythic ranks for the raid { world, region, realm } (or null)
//  history   - past seasons, newest first. Copy a season block from "current"
//              into the top of this list when a new season starts.
//
//  Each boss:
//      name    - boss name
//      icon    - boss icon number (file images/bosses/<icon>.jpg)
//      heroic  - true once Heroic is killed
//      mythic  - null if not started
//                in progress: { progress: 12.3, pulls: 150, nights: 6, minutes: 380 }
//                    (progress = best pull, % health remaining)
//                killed:      { killed: "YYYY-MM-DD", pulls: 40, nights: 2, minutes: 95,
//                               world: 812, region: 230, realm: 11 }
//      Ranks you don't know yet can simply be left out.
// =====================================================================
window.HKC_PROGRESSION = {
    updated: "2026-10-25",
    current: {
        season: "Midnight Season 2",
        raid: "The Venomous Abyss",
        ranks: { world: 724, region: 227, realm: 11 },
        bosses: [
            { name: "Nek'zali the Soulcoiler", icon: 3470, heroic: true, mythic: { killed: "2026-08-30", world: 809, region: 228, realm: 11 } },
            { name: "Entombed Sentinels", icon: 3445, heroic: true, mythic: { killed: "2026-09-03", pulls: 20, nights: 1, minutes: 88, world: 546, region: 202, realm: 9 } },
            { name: "Vashnik the Malignant", icon: 3455, heroic: true, mythic: { killed: "2026-09-15", pulls: 9, nights: 2, minutes: 30, world: 1259, region: 359, realm: 19 } },
            { name: "The Lost Explorers", icon: 3497, heroic: true, mythic: { killed: "2026-09-02", pulls: 9, nights: 1, minutes: 38, world: 849, region: 235, realm: 11 } },
            { name: "Sszorak", icon: 3420, heroic: true, mythic: { killed: "2026-09-17", pulls: 49, nights: 2, minutes: 110, world: 706, region: 218, realm: 10 } },
            { name: "The Twin Fangs", icon: 3421, heroic: true, mythic: { killed: "2026-09-24", pulls: 56, nights: 3, minutes: 141, world: 598, region: 191, realm: 8 } },
            { name: "The Coiled Altar", icon: 3429, heroic: true, mythic: { killed: "2026-10-20", pulls: 242, nights: 10, minutes: 855, region: 179, realm: 8 } },
            { name: "Ula'tek", icon: 3492, heroic: true, mythic: { progress: 69.9, pulls: 107, nights: 3, minutes: 236 } }
        ]
    },
    history: [
        {
            season: "Midnight Season 1",
            raids: [
                {
                    name: "The Voidspire",
                    ranks: { world: 436, region: 127, realm: 6 },
                    bosses: [
                        { name: "Imperator Averzian", icon: 3176, heroic: true, mythic: { killed: "2026-04-01", pulls: 13, nights: 2, minutes: 44, world: 2306, region: 676, realm: 30 } },
                        { name: "Vorasius", icon: 3177, heroic: true, mythic: { killed: "2026-04-01", pulls: 7, nights: 1, minutes: 30, world: 1354, region: 445, realm: 21 } },
                        { name: "Fallen-King Salhadaar", icon: 3179, heroic: true, mythic: { killed: "2026-04-02", pulls: 14, nights: 1, minutes: 43, world: 756, region: 264, realm: 14 } },
                        { name: "Vaelgor & Ezzorak", icon: 3178, heroic: true, mythic: { killed: "2026-04-09", pulls: 47, nights: 2, minutes: 162, world: 745, region: 244, realm: 15 } },
                        { name: "Lightblinded Vanguard", icon: 3180, heroic: true, mythic: { killed: "2026-04-16", pulls: 42, nights: 3, minutes: 169, world: 570, region: 188, realm: 13 } },
                        { name: "Crown of the Cosmos", icon: 3181, heroic: true, mythic: { killed: "2026-04-30", pulls: 92, nights: 6, minutes: 327, world: 573, region: 172, realm: 7 } }
                    ]
                },
                {
                    name: "The Dreamrift",
                    ranks: { world: 436, region: 127, realm: 6 },
                    bosses: [
                        { name: "Chimaerus, the Undreamt God", icon: 3306, heroic: true, mythic: { killed: "2026-04-02", pulls: 10, nights: 1, minutes: 35, world: 1144, region: 328, realm: 20 } }
                    ]
                },
                {
                    name: "March on Quel’Danas",
                    ranks: { world: 436, region: 127, realm: 6 },
                    bosses: [
                        { name: "Belo’ren, Child of Al’ar", icon: 3182, heroic: true, mythic: { killed: "2026-05-13", pulls: 77, nights: 4, minutes: 183, world: 645, region: 204, realm: 14 } },
                        { name: "Midnight Falls", icon: 3183, heroic: true, mythic: { killed: "2026-06-04", pulls: 347, nights: 11, minutes: 1001, world: 437, region: 127, realm: 6 } }
                    ]
                },
                {
                    name: "Sporefall",
                    ranks: { world: 165, region: 165, realm: 7 },
                    bosses: [
                        { name: "Rotmire", icon: 3159, heroic: true, mythic: { killed: "2026-06-16", world: 165, region: 165, realm: 7 } }
                    ]
                }
            ]
        },
        {
            season: "The War Within Season 3",
            raids: [
                {
                    name: "Manaforge Omega",
                    ranks: { world: 699, region: 232, realm: 16 },
                    bosses: [
                        { name: "Plexus Sentinel", icon: 3129, heroic: true, mythic: { killed: "2025-08-21", pulls: 6, nights: 1, minutes: 22, world: 1009, region: 368, realm: 21 } },
                        { name: "Loom'ithar", icon: 3131, heroic: true, mythic: { killed: "2025-08-27", pulls: 25, nights: 3, minutes: 98, world: 870, region: 277, realm: 19 } },
                        { name: "Soulbinder Naazindhri", icon: 3130, heroic: true, mythic: { killed: "2025-08-21", pulls: 2, nights: 1, minutes: 12, world: 844, region: 317, realm: 18 } },
                        { name: "Forgeweaver Araz", icon: 3132, heroic: true, mythic: { killed: "2025-08-28", pulls: 40, nights: 2, minutes: 124, world: 443, region: 145, realm: 8 } },
                        { name: "The Soul Hunters", icon: 3122, heroic: true, mythic: { killed: "2025-09-17", pulls: 83, nights: 4, minutes: 257, world: 821, region: 267, realm: 19 } },
                        { name: "Fractillus", icon: 3133, heroic: true, mythic: { killed: "2025-09-04", pulls: 27, nights: 2, minutes: 88, world: 658, region: 221, realm: 14 } },
                        { name: "Nexus-King Salhadaar", icon: 3134, heroic: true, mythic: { killed: "2025-10-08", pulls: 214, nights: 10, minutes: 635, world: 658, region: 221, realm: 13 } },
                        { name: "Dimensius, the All-Devouring", icon: 3135, heroic: true, mythic: { killed: "2025-11-06", pulls: 299, nights: 12, minutes: 1024, world: 700, region: 233, realm: 16 } }
                    ]
                }
            ]
        },
        {
            season: "The War Within Season 2",
            raids: [
                {
                    name: "Liberation of Undermine",
                    ranks: { world: 510, region: 171, realm: 11 },
                    bosses: [
                        { name: "Vexie and the Geargrinders", icon: 3009, heroic: true, mythic: { killed: "2025-03-18", pulls: 3, nights: 2, minutes: 11, world: 2090, region: 746, realm: 29 } },
                        { name: "Cauldron of Carnage", icon: 3010, heroic: true, mythic: { killed: "2025-03-19", pulls: 8, nights: 1, minutes: 32, world: 1037, region: 357, realm: 17 } },
                        { name: "Rik Reverb", icon: 3011, heroic: true, mythic: { killed: "2025-03-20", pulls: 25, nights: 3, minutes: 70, world: 718, region: 240, realm: 15 } },
                        { name: "Stix Bunkjunker", icon: 3012, heroic: true, mythic: { killed: "2025-04-01", pulls: 83, nights: 3, minutes: 246, world: 764, region: 267, realm: 16 } },
                        { name: "Sprocketmonger Lockenstock", icon: 3013, heroic: true, mythic: { killed: "2025-04-10", pulls: 131, nights: 5, minutes: 349, world: 568, region: 199, realm: 12 } },
                        { name: "One-Armed Bandit", icon: 3014, heroic: true, mythic: { killed: "2025-04-29", pulls: 199, nights: 7, minutes: 496, world: 545, region: 190, realm: 13 } },
                        { name: "Mug'Zee, Heads of Security", icon: 3015, heroic: true, mythic: { killed: "2025-05-08", pulls: 135, nights: 5, minutes: 420, world: 494, region: 166, realm: 9 } },
                        { name: "Chrome King Gallywix", icon: 3016, heroic: true, mythic: { killed: "2025-05-20", pulls: 89, nights: 5, minutes: 269, world: 529, region: 171, realm: 11 } }
                    ]
                }
            ]
        },
        {
            season: "The War Within Season 1",
            raids: [
                {
                    name: "Nerub-ar Palace",
                    ranks: { world: 738, region: 252, realm: 14 },
                    bosses: [
                        { name: "Ulgrax the Devourer", icon: 2902, heroic: true, mythic: { killed: "2024-09-25", pulls: 7, nights: 1, minutes: 27, world: 1277, region: 431, realm: 20 } },
                        { name: "The Bloodbound Horror", icon: 2917, heroic: true, mythic: { killed: "2024-09-25", pulls: 14, nights: 1, minutes: 36, world: 965, region: 331, realm: 17 } },
                        { name: "Sikran, Captain of the Sureki", icon: 2898, heroic: true, mythic: { killed: "2024-09-26", pulls: 21, nights: 1, minutes: 60, world: 878, region: 322, realm: 18 } },
                        { name: "Rasha'nan", icon: 2918, heroic: true, mythic: { killed: "2024-10-02", pulls: 12, nights: 1, minutes: 42, world: 908, region: 302, realm: 14 } },
                        { name: "Broodtwister Ovi'nax", icon: 2919, heroic: true, mythic: { killed: "2024-10-17", pulls: 121, nights: 6, minutes: 375, world: 557, region: 188, realm: 11 } },
                        { name: "Nexus-Princess Ky'veza", icon: 2920, heroic: true, mythic: { killed: "2024-11-06", pulls: 162, nights: 8, minutes: 356, world: 725, region: 240, realm: 11 } },
                        { name: "The Silken Court", icon: 2921, heroic: true, mythic: { killed: "2024-12-05", pulls: 263, nights: 10, minutes: 721, world: 694, region: 228, realm: 13 } },
                        { name: "Queen Ansurek", icon: 2922, heroic: true, mythic: { killed: "2025-01-14", pulls: 363, nights: 13, minutes: 1080, world: 781, region: 252, realm: 14 } }
                    ]
                }
            ]
        },
        {
            season: "Dragonflight Season 3",
            raids: [
                {
                    name: "Amirdrassil, the Dream's Hope",
                    ranks: { world: 659, region: 236, realm: 13 },
                    bosses: [
                        { name: "Gnarlroot", icon: 2820, heroic: true, mythic: { killed: "2023-11-22", pulls: 3, nights: 1, minutes: 13, world: 805, region: 269, realm: 14 } },
                        { name: "Igira the Cruel", icon: 2709, heroic: true, mythic: { killed: "2023-11-29", pulls: 7, nights: 2, minutes: 21, world: 1470, region: 477, realm: 22 } },
                        { name: "Volcoross", icon: 2737, heroic: true, mythic: { killed: "2023-11-29", pulls: 4, nights: 1, minutes: 11, world: 1242, region: 400, realm: 22 } },
                        { name: "Council of Dreams", icon: 2728, heroic: true, mythic: { killed: "2023-11-29", pulls: 15, nights: 1, minutes: 49, world: 862, region: 279, realm: 16 } },
                        { name: "Larodar, Keeper of the Flame", icon: 2731, heroic: true, mythic: { killed: "2023-12-07", pulls: 20, nights: 1, minutes: 72, world: 764, region: 281, realm: 16 } },
                        { name: "Nymue, Weaver of the Cycle", icon: 2708, heroic: true, mythic: { killed: "2023-12-06", pulls: 47, nights: 3, minutes: 200, world: 765, region: 252, realm: 16 } },
                        { name: "Smolderon", icon: 2824, heroic: true, mythic: { killed: "2024-01-03", pulls: 112, nights: 8, minutes: 362, world: 788, region: 285, realm: 16 } },
                        { name: "Tindral Sageswift, Seer of the Flame", icon: 2786, heroic: true, mythic: { killed: "2024-02-20", pulls: 400, nights: 13, minutes: 885, world: 889, region: 322, realm: 17 } },
                        { name: "Fyrakk the Blazing", icon: 2677, heroic: true, mythic: { killed: "2024-03-14", pulls: 304, nights: 12, minutes: 987, world: 661, region: 238, realm: 13 } }
                    ]
                }
            ]
        },
        {
            season: "Dragonflight Season 2",
            raids: [
                {
                    name: "Aberrus, the Shadowed Crucible",
                    ranks: { world: 641, region: 222, realm: 10 },
                    bosses: [
                        { name: "Kazzara, the Hellforged", icon: 2688, heroic: true, mythic: { killed: "2023-05-10", pulls: 9, nights: 1, minutes: 39, world: 48, region: 39, realm: 4 } },
                        { name: "The Amalgamation Chamber", icon: 2687, heroic: true, mythic: { killed: "2023-05-17", pulls: 14, nights: 1, minutes: 32, world: 663, region: 234, realm: 12 } },
                        { name: "The Forgotten Experiments", icon: 2693, heroic: true, mythic: { killed: "2023-05-24", pulls: 39, nights: 2, minutes: 141, world: 845, region: 288, realm: 13 } },
                        { name: "Assault of the Zaqali", icon: 2682, heroic: true, mythic: { killed: "2023-05-17", pulls: 4, nights: 1, minutes: 18, world: 833, region: 268, realm: 15 } },
                        { name: "Rashok, the Elder", icon: 2680, heroic: true, mythic: { killed: "2023-06-01", pulls: 66, nights: 3, minutes: 210, world: 586, region: 195, realm: 7 } },
                        { name: "The Vigilant Steward, Zskarn", icon: 2689, heroic: true, mythic: { killed: "2023-06-14", pulls: 115, nights: 5, minutes: 305, world: 526, region: 187, realm: 6 } },
                        { name: "Magmorax", icon: 2683, heroic: true, mythic: { killed: "2023-06-20", pulls: 62, nights: 3, minutes: 236, world: 536, region: 194, realm: 7 } },
                        { name: "Echo of Neltharion", icon: 2684, heroic: true, mythic: { killed: "2023-07-05", pulls: 164, nights: 6, minutes: 508, world: 565, region: 196, realm: 8 } },
                        { name: "Scalecommander Sarkareth", icon: 2685, heroic: true, mythic: { killed: "2023-08-10", pulls: 299, nights: 14, minutes: 1076, world: 644, region: 222, realm: 10 } }
                    ]
                }
            ]
        },
        {
            season: "Dragonflight Season 1",
            raids: [
                {
                    name: "Vault of the Incarnates",
                    ranks: { world: 818, region: 293, realm: 16 },
                    bosses: [
                        { name: "Eranog", icon: 2587, heroic: true, mythic: { killed: "2023-01-01", pulls: 11, nights: 1, minutes: 29, world: 1933, region: 724, realm: 32 } },
                        { name: "Terros", icon: 2639, heroic: true, mythic: { killed: "2023-01-11", pulls: 27, nights: 2, minutes: 75, world: 1106, region: 407, realm: 19 } },
                        { name: "The Primal Council", icon: 2590, heroic: true, mythic: { killed: "2023-01-04", pulls: 4, nights: 1, minutes: 14, world: 1755, region: 629, realm: 31 } },
                        { name: "Sennarth, The Cold Breath", icon: 2592, heroic: true, mythic: { killed: "2023-01-24", pulls: 62, nights: 3, minutes: 214, world: 1314, region: 482, realm: 25 } },
                        { name: "Dathea, Ascended", icon: 2635, heroic: true, mythic: { killed: "2023-02-19", pulls: 100, nights: 4, minutes: 282, world: 1296, region: 480, realm: 23 } },
                        { name: "Kurog Grimtotem", icon: 2605, heroic: true, mythic: { killed: "2023-02-01", pulls: 65, nights: 3, minutes: 254, world: 1054, region: 395, realm: 19 } },
                        { name: "Broodkeeper Diurna", icon: 2614, heroic: true, mythic: { killed: "2023-03-05", pulls: 96, nights: 5, minutes: 327, world: 1156, region: 417, realm: 23 } },
                        { name: "Raszageth the Storm-Eater", icon: 2607, heroic: true, mythic: { killed: "2023-04-04", pulls: 220, nights: 11, minutes: 818, world: 820, region: 295, realm: 16 } }
                    ]
                }
            ]
        },
        {
            season: "Shadowlands Season 3",
            raids: [
                {
                    name: "Sepulcher of the First Ones",
                    ranks: { world: 1854, region: 694, realm: 28 },
                    bosses: [
                        { name: "Vigilant Guardian", icon: 2512, heroic: true, mythic: { killed: "2022-04-06", pulls: 3, nights: 1, minutes: 14, world: 2048, region: 721, realm: 30 } },
                        { name: "Skolex, the Insatiable Ravener", icon: 2542, heroic: true, mythic: { killed: "2022-04-06", pulls: 9, nights: 1, minutes: 25, world: 1819, region: 641, realm: 28 } },
                        { name: "Artificer Xy'mox", icon: 2553, heroic: true, mythic: { killed: "2022-04-13", pulls: 50, nights: 2, minutes: 153, world: 1259, region: 454, realm: 20 } },
                        { name: "Dausegne, the Fallen Oracle", icon: 2540, heroic: true, mythic: { killed: "2022-04-20", pulls: 13, nights: 1, minutes: 49, world: 1867, region: 668, realm: 26 } },
                        { name: "Prototype Pantheon", icon: 2544, heroic: true, mythic: { killed: "2022-05-11", pulls: 67, nights: 4, minutes: 235, world: 1825, region: 639, realm: 26 } },
                        { name: "Lihuvim, Principal Architect", icon: 2539, heroic: true, mythic: { killed: "2022-06-14", pulls: 76, nights: 3, minutes: 230, world: 1840, region: 647, realm: 27 } },
                        { name: "Halondrus the Reclaimer", icon: 2529, heroic: true, mythic: { killed: "2022-06-01", pulls: 169, nights: 6, minutes: 412, world: 1428, region: 505, realm: 23 } },
                        { name: "Anduin Wrynn", icon: 2546, heroic: true, mythic: { progress: 42.5, pulls: 90, nights: 3, minutes: 234 } },
                        { name: "Lords of Dread", icon: 2543, heroic: true, mythic: null },
                        { name: "Rygelon", icon: 2549, heroic: true, mythic: null },
                        { name: "The Jailer", icon: 2537, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Shadowlands Season 2",
            raids: [
                {
                    name: "Sanctum of Domination",
                    ranks: { world: 2403, region: 865, realm: 34 },
                    bosses: [
                        { name: "The Tarragrue", icon: 2423, heroic: true, mythic: { killed: "2021-07-14", pulls: 9, nights: 1, minutes: 35, world: 1112, region: 440, realm: 20 } },
                        { name: "The Eye of the Jailer", icon: 2433, heroic: true, mythic: { killed: "2021-08-04", pulls: 49, nights: 3, minutes: 159, world: 2609, region: 928, realm: 42 } },
                        { name: "The Nine", icon: 2429, heroic: true, mythic: { killed: "2021-08-08", pulls: 9, nights: 2, minutes: 47, world: 2598, region: 938, realm: 42 } },
                        { name: "Remnant of Ner'zhul", icon: 2432, heroic: true, mythic: { killed: "2021-08-25", pulls: 44, nights: 2, minutes: 132, world: 2358, region: 826, realm: 41 } },
                        { name: "Soulrender Dormazain", icon: 2434, heroic: true, mythic: { killed: "2021-09-15", pulls: 57, nights: 6, minutes: 263, world: 2546, region: 923, realm: 40 } },
                        { name: "Painsmith Raznal", icon: 2430, heroic: true, mythic: { killed: "2021-10-19", pulls: 182, nights: 11, minutes: 627, world: 2093, region: 739, realm: 30 } },
                        { name: "Guardian of the First Ones", icon: 2436, heroic: true, mythic: { killed: "2021-10-20", pulls: 34, nights: 2, minutes: 71, world: 2075, region: 731, realm: 28 } },
                        { name: "Fatescribe Roh-Kalo", icon: 2431, heroic: true, mythic: { killed: "2021-11-09", pulls: 119, nights: 6, minutes: 338, world: 2029, region: 718, realm: 29 } },
                        { name: "Kel'Thuzad", icon: 2422, heroic: true, mythic: { killed: "2021-11-17", pulls: 67, nights: 4, minutes: 212, world: 1984, region: 693, realm: 29 } },
                        { name: "Sylvanas Windrunner", icon: 2435, heroic: true, mythic: { progress: 44.7, pulls: 268, nights: 15, minutes: 1103 } }
                    ]
                }
            ]
        },
        {
            season: "Shadowlands Season 1",
            raids: [
                {
                    name: "Castle Nathria",
                    ranks: { world: 3263, region: 1172, realm: 50 },
                    bosses: [
                        { name: "Shriekwing", icon: 2398, heroic: true, mythic: { killed: "2021-01-06", pulls: 7, nights: 1, minutes: 22, world: 3663, region: 1192, realm: 60 } },
                        { name: "Huntsman Altimor", icon: 2418, heroic: true, mythic: { killed: "2021-01-12", pulls: 20, nights: 2, minutes: 62, world: 3394, region: 1077, realm: 49 } },
                        { name: "Hungering Destroyer", icon: 2383, heroic: true, mythic: { killed: "2021-01-20", pulls: 38, nights: 2, minutes: 120, world: 2694, region: 909, realm: 47 } },
                        { name: "Sun King's Salvation", icon: 2402, heroic: true, mythic: { killed: "2021-02-03", pulls: 60, nights: 3, minutes: 163, world: 2827, region: 931, realm: 43 } },
                        { name: "Artificer Xy'mox", icon: 2405, heroic: true, mythic: { killed: "2021-02-23", pulls: 61, nights: 3, minutes: 178, world: 3049, region: 971, realm: 47 } },
                        { name: "Lady Inerva Darkvein", icon: 2406, heroic: true, mythic: { killed: "2021-02-10", pulls: 33, nights: 2, minutes: 104, world: 2456, region: 816, realm: 41 } },
                        { name: "The Council of Blood", icon: 2412, heroic: true, mythic: { killed: "2021-03-25", pulls: 124, nights: 8, minutes: 625, world: 2930, region: 945, realm: 44 } },
                        { name: "Sludgefist", icon: 2399, heroic: true, mythic: { killed: "2021-04-13", pulls: 165, nights: 6, minutes: 473, world: 2819, region: 927, realm: 39 } },
                        { name: "Stone Legion Generals", icon: 2417, heroic: true, mythic: { killed: "2021-06-09", pulls: 367, nights: 17, minutes: 1627, world: 2798, region: 949, realm: 43 } },
                        { name: "Sire Denathrius", icon: 2407, heroic: true, mythic: { progress: 67.5, pulls: 37, nights: 2, minutes: 79 } }
                    ]
                }
            ]
        },
        {
            season: "Battle for Azeroth Season 4",
            raids: [
                {
                    name: "Ny'alotha",
                    ranks: { world: 2386, region: 869, realm: 48 },
                    bosses: [
                        { name: "Wrathion", icon: 2329, heroic: true, mythic: { killed: "2020-02-25", world: 3139, region: 1009, realm: 62 } },
                        { name: "Maut", icon: 2327, heroic: true, mythic: { killed: "2020-03-03", world: 3086, region: 1007, realm: 62 } },
                        { name: "Prophet Skitra", icon: 2334, heroic: true, mythic: { killed: "2020-02-25", world: 3029, region: 969, realm: 61 } },
                        { name: "Dark Inquisitor Xanesh", icon: 2328, heroic: true, mythic: { killed: "2020-04-15", pulls: 107, nights: 4, minutes: 191, world: 2492, region: 809, realm: 49 } },
                        { name: "The Hivemind", icon: 2333, heroic: true, mythic: { killed: "2020-03-31", pulls: 44, nights: 3, minutes: 142, world: 2677, region: 865, realm: 58 } },
                        { name: "Shad'har the Insatiable", icon: 2335, heroic: true, mythic: { killed: "2020-03-11", pulls: 9, nights: 1, minutes: 31, world: 2185, region: 725, realm: 51 } },
                        { name: "Drest'agath", icon: 2343, heroic: true, mythic: { killed: "2020-06-03", pulls: 15, nights: 2, minutes: 56, world: 2601, region: 858, realm: 50 } },
                        { name: "Il'gynoth, Corruption Reborn", icon: 2345, heroic: true, mythic: { killed: "2020-06-30", pulls: 35, nights: 3, minutes: 149, world: 2852, region: 945, realm: 54 } },
                        { name: "Vexiona", icon: 2336, heroic: true, mythic: { killed: "2020-05-12", pulls: 49, nights: 3, minutes: 194, world: 2654, region: 844, realm: 48 } },
                        { name: "Ra-den the Despoiled", icon: 2331, heroic: true, mythic: { killed: "2020-05-26", pulls: 93, nights: 3, minutes: 175, world: 2604, region: 856, realm: 47 } },
                        { name: "Carapace of N'Zoth", icon: 2337, heroic: true, mythic: { killed: "2020-07-16", pulls: 96, nights: 7, minutes: 519, world: 2522, region: 857, realm: 48 } },
                        { name: "N'Zoth the Corruptor", icon: 2344, heroic: true, mythic: { killed: "2020-09-16", pulls: 373, nights: 20, minutes: 1560, world: 2450, region: 900, realm: 50 } }
                    ]
                }
            ]
        },
        {
            season: "Battle for Azeroth Season 3",
            raids: [
                {
                    name: "The Eternal Palace",
                    ranks: { world: 2887, region: 994, realm: 62 },
                    bosses: [
                        { name: "Abyssal Commander Sivara", icon: 2298, heroic: true, mythic: { killed: "2019-07-24", world: 1738, region: 597, realm: 32 } },
                        { name: "Radiance of Azshara", icon: 2305, heroic: true, mythic: { killed: "2019-07-31", world: 2016, region: 683, realm: 38 } },
                        { name: "Blackwater Behemoth", icon: 2289, heroic: true, mythic: { killed: "2019-08-06", world: 2307, region: 794, realm: 45 } },
                        { name: "Lady Ashvane", icon: 2304, heroic: true, mythic: { killed: "2019-09-25", pulls: 131, nights: 9, minutes: 391, world: 2525, region: 897, realm: 54 } },
                        { name: "Orgozoa", icon: 2303, heroic: true, mythic: { killed: "2019-12-17", pulls: 130, nights: 9, minutes: 479, world: 2657, region: 902, realm: 56 } },
                        { name: "The Queen's Court", icon: 2311, heroic: true, mythic: null },
                        { name: "Za'qul", icon: 2293, heroic: true, mythic: null },
                        { name: "Queen Azshara", icon: 2299, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Battle for Azeroth Season 2",
            raids: [
                {
                    name: "Battle of Dazar'alor",
                    ranks: null,
                    bosses: [
                        { name: "Champion of the Light", icon: 2265, heroic: true, mythic: { killed: "2019-02-05", world: 4252, region: 1463, realm: 89 } },
                        { name: "Jadefire Masters", icon: 2266, heroic: true, mythic: { killed: "2019-02-19", pulls: 11, nights: 1, minutes: 24, world: 2583, region: 848, realm: 63 } },
                        { name: "Grong", icon: 2263, heroic: true, mythic: { killed: "2019-02-26", pulls: 28, nights: 3, minutes: 92, world: 3127, region: 1067, realm: 58 } },
                        { name: "Opulence", icon: 2271, heroic: true, mythic: { killed: "2019-03-27", pulls: 89, nights: 6, minutes: 348, world: 3059, region: 1042, realm: 66 } },
                        { name: "Conclave of the Chosen", icon: 2268, heroic: true, mythic: { killed: "2019-04-30", pulls: 47, nights: 4, minutes: 191, world: 3358, region: 1156, realm: 73 } },
                        { name: "King Rastakhan", icon: 2272, heroic: true, mythic: { killed: "2019-05-08", pulls: 38, nights: 3, minutes: 121, world: 2961, region: 1035, realm: 62 } },
                        { name: "Mekkatorque", icon: 2276, heroic: true, mythic: { progress: 16.6, pulls: 125, nights: 5, minutes: 387 } },
                        { name: "Stormwall Blockade", icon: 2280, heroic: true, mythic: null },
                        { name: "Lady Jaina Proudmoore", icon: 2281, heroic: true, mythic: null }
                    ]
                },
                {
                    name: "Crucible of Storms",
                    ranks: null,
                    bosses: [
                        { name: "The Restless Cabal", icon: 2269, heroic: true, mythic: null },
                        { name: "Uu'nat, Harbinger of the Void", icon: 2273, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Battle for Azeroth Season 1",
            raids: [
                {
                    name: "Uldir",
                    ranks: { world: 5482, region: 2072, realm: 101 },
                    bosses: [
                        { name: "Taloc", icon: 2144, heroic: true, mythic: { killed: "2018-10-02", pulls: 1, nights: 1, minutes: 7, world: 6791, region: 2476, realm: 164 } },
                        { name: "MOTHER", icon: 2141, heroic: true, mythic: { killed: "2018-10-17", pulls: 13, nights: 2, minutes: 42, world: 6354, region: 2238, realm: 145 } },
                        { name: "Fetid Devourer", icon: 2128, heroic: true, mythic: { killed: "2019-01-16", pulls: 59, nights: 5, minutes: 157, world: 4025, region: 1395, realm: 88 } },
                        { name: "Zek'voz", icon: 2136, heroic: true, mythic: { killed: "2018-11-14", pulls: 51, nights: 4, minutes: 168, world: 4993, region: 1708, realm: 108 } },
                        { name: "Vectis", icon: 2134, heroic: true, mythic: { killed: "2018-12-12", pulls: 53, nights: 5, minutes: 188, world: 4123, region: 1382, realm: 87 } },
                        { name: "Zul", icon: 2145, heroic: true, mythic: null },
                        { name: "Mythrax", icon: 2135, heroic: true, mythic: null },
                        { name: "G'huun", icon: 2122, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Legion Season 3",
            raids: [
                {
                    name: "Antorus, the Burning Throne",
                    ranks: { world: 5028, region: 1791, realm: 125 },
                    bosses: [
                        { name: "Garothi Worldbreaker", icon: 2076, heroic: true, mythic: { killed: "2017-12-27", pulls: 13, nights: 1, minutes: 52, world: 3914, region: 1365, realm: 100 } },
                        { name: "Felhounds of Sargeras", icon: 2074, heroic: true, mythic: { killed: "2018-01-24", pulls: 19, nights: 2, minutes: 54, world: 4884, region: 1692, realm: 129 } },
                        { name: "Antoran High Command", icon: 2070, heroic: true, mythic: { killed: "2018-02-13", pulls: 46, nights: 3, minutes: 212, world: 4132, region: 1401, realm: 113 } },
                        { name: "The Defense of Eonar", icon: 2075, heroic: true, mythic: { killed: "2018-02-28", pulls: 16, nights: 1, minutes: 97, world: 4466, region: 1591, realm: 120 } },
                        { name: "Portal Keeper Hasabel", icon: 2064, heroic: true, mythic: { killed: "2018-04-04", pulls: 49, nights: 4, minutes: 97, world: 4697, region: 1644, realm: 116 } },
                        { name: "Imonar the Soulhunter", icon: 2082, heroic: true, mythic: { progress: 5.05, pulls: 107, nights: 10, minutes: 424 } },
                        { name: "Kin'garoth", icon: 2088, heroic: true, mythic: null },
                        { name: "Varimathras", icon: 2069, heroic: true, mythic: null },
                        { name: "The Coven of Shivarra", icon: 2073, heroic: true, mythic: null },
                        { name: "Aggramar", icon: 2063, heroic: true, mythic: null },
                        { name: "Argus the Unmaker", icon: 2092, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Legion Season 2",
            raids: [
                {
                    name: "Tomb of Sargeras",
                    ranks: null,
                    bosses: [
                        { name: "Goroth", icon: 2032, heroic: true, mythic: { killed: "2017-09-26", world: 6222, region: 2288, realm: 159 } },
                        { name: "Demonic Inquisition", icon: 2048, heroic: true, mythic: { killed: "2017-10-24", pulls: 12, nights: 3, minutes: 55, world: 6142, region: 2217, realm: 152 } },
                        { name: "Harjatan", icon: 2036, heroic: true, mythic: { killed: "2017-10-10", pulls: 17, nights: 3, minutes: 53, world: 5742, region: 2089, realm: 149 } },
                        { name: "Mistress Sassz'ine", icon: 2037, heroic: true, mythic: null },
                        { name: "Sisters of the Moon", icon: 2050, heroic: true, mythic: { progress: 8.0, pulls: 31, nights: 4, minutes: 131 } },
                        { name: "The Desolate Host", icon: 2054, heroic: true, mythic: null },
                        { name: "Maiden of Vigilance", icon: 2052, heroic: true, mythic: null },
                        { name: "Fallen Avatar", icon: 2038, heroic: true, mythic: null },
                        { name: "Kil'jaeden", icon: 2051, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Legion Season 1",
            raids: [
                {
                    name: "Emerald Nightmare",
                    ranks: null,
                    bosses: [
                        { name: "Nythendra", icon: 1853, heroic: true, mythic: { killed: "2016-10-04", pulls: 47, nights: 3, minutes: 204 } },
                        { name: "Il'gynoth, The Heart of Corruption", icon: 1873, heroic: true, mythic: { killed: "2016-10-27", pulls: 63, nights: 4, minutes: 284 } },
                        { name: "Elerethe Renferal", icon: 1876, heroic: true, mythic: { killed: "2016-10-06", pulls: 45, nights: 2, minutes: 170 } },
                        { name: "Ursoc", icon: 1841, heroic: true, mythic: { killed: "2016-10-25", pulls: 52, nights: 3, minutes: 162 } },
                        { name: "Dragons of Nightmare", icon: 1854, heroic: true, mythic: { killed: "2016-10-19", pulls: 46, nights: 2, minutes: 127 } },
                        { name: "Cenarius", icon: 1877, heroic: true, mythic: { killed: "2016-11-15", pulls: 106, nights: 6, minutes: 293 } },
                        { name: "Xavius", icon: 1864, heroic: true, mythic: { killed: "2016-11-16", pulls: 21, nights: 1, minutes: 49 } }
                    ]
                },
                {
                    name: "Trial of Valor",
                    ranks: null,
                    bosses: [
                        { name: "Odyn", icon: 1958, heroic: true, mythic: { killed: "2017-01-04", pulls: 85, nights: 6, minutes: 441 } },
                        { name: "Guarm", icon: 1962, heroic: true, mythic: { killed: "2017-01-11", pulls: 43, nights: 2, minutes: 85 } },
                        { name: "Helya", icon: 2008, heroic: true, mythic: null }
                    ]
                },
                {
                    name: "The Nighthold",
                    ranks: null,
                    bosses: [
                        { name: "Skorpyron", icon: 1849, heroic: true, mythic: { killed: "2017-01-26", pulls: 6, nights: 1, minutes: 21 } },
                        { name: "Chronomatic Anomaly", icon: 1865, heroic: true, mythic: { killed: "2017-02-08", pulls: 59, nights: 4, minutes: 197 } },
                        { name: "Trilliax", icon: 1867, heroic: true, mythic: { killed: "2017-02-08", pulls: 9, nights: 1, minutes: 33 } },
                        { name: "Spellblade Aluriel", icon: 1871, heroic: true, mythic: { progress: 73.9, pulls: 13, nights: 1, minutes: 25 } },
                        { name: "Tichondrius", icon: 1862, heroic: true, mythic: null },
                        { name: "Star Augur Etraeus", icon: 1863, heroic: true, mythic: null },
                        { name: "Krosus", icon: 1842, heroic: true, mythic: { killed: "2017-03-01", pulls: 112, nights: 5, minutes: 283 } },
                        { name: "High Botanist Tel'arn", icon: 1886, heroic: true, mythic: { progress: 26.1, pulls: 13, nights: 2, minutes: 53 } },
                        { name: "Grand Magistrix Elisande", icon: 1872, heroic: true, mythic: null },
                        { name: "Gul'dan", icon: 1866, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Warlords of Draenor Season 3",
            raids: [
                {
                    name: "Hellfire Citadel",
                    ranks: null,
                    bosses: [
                        { name: "Hellfire Assault", icon: 1778, heroic: true, mythic: { killed: "2015-08-19", pulls: 17, nights: 2, minutes: 77 } },
                        { name: "Iron Reaver", icon: 1785, heroic: true, mythic: { killed: "2015-08-26", pulls: 29, nights: 3, minutes: 99 } },
                        { name: "Kormrok", icon: 1787, heroic: true, mythic: { killed: "2015-09-02", pulls: 39, nights: 2, minutes: 112 } },
                        { name: "Hellfire High Council", icon: 1798, heroic: true, mythic: { killed: "2015-09-09", pulls: 46, nights: 4, minutes: 200 } },
                        { name: "Kilrogg Deadeye", icon: 1786, heroic: true, mythic: { killed: "2015-09-10", pulls: 23, nights: 2, minutes: 63 } },
                        { name: "Gorefiend", icon: 1783, heroic: true, mythic: { killed: "2015-09-24", pulls: 99, nights: 3, minutes: 203 } },
                        { name: "Shadow-Lord Iskar", icon: 1788, heroic: true, mythic: { killed: "2015-10-01", pulls: 45, nights: 2, minutes: 120 } },
                        { name: "Fel Lord Zakuun", icon: 1777, heroic: true, mythic: { killed: "2016-02-04", pulls: 63, nights: 3, minutes: 109 } },
                        { name: "Xhul'horac", icon: 1800, heroic: true, mythic: null },
                        { name: "Socrethar the Eternal", icon: 1794, heroic: true, mythic: { killed: "2015-09-30", pulls: 17, nights: 2, minutes: 29 } },
                        { name: "Tyrant Velhari", icon: 1784, heroic: true, mythic: null },
                        { name: "Mannoroth", icon: 1795, heroic: true, mythic: null },
                        { name: "Archimonde", icon: 1799, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Warlords of Draenor Season 2",
            raids: [
                {
                    name: "Blackrock Foundry",
                    ranks: null,
                    bosses: [
                        { name: "Gruul", icon: 1691, heroic: true, mythic: { pulls: 9, nights: 1, minutes: 23 } },
                        { name: "Oregorger the Devourer", icon: 1696, heroic: true, mythic: { pulls: 21, nights: 2, minutes: 56 } },
                        { name: "Blast Furnace", icon: 1690, heroic: true, mythic: null },
                        { name: "Hans'gar & Franzok", icon: 1693, heroic: true, mythic: { pulls: 29, nights: 3, minutes: 76 } },
                        { name: "Flamebender Ka'graz", icon: 1689, heroic: true, mythic: null },
                        { name: "Kromog, Legend of the Mountain", icon: 1713, heroic: true, mythic: null },
                        { name: "Beastlord Darmac", icon: 1694, heroic: true, mythic: { killed: "2015-04-14", pulls: 14, nights: 2, minutes: 120 } },
                        { name: "Operator Thogar", icon: 1692, heroic: true, mythic: null },
                        { name: "The Iron Maidens", icon: 1695, heroic: true, mythic: null },
                        { name: "Blackhand", icon: 1704, heroic: true, mythic: null }
                    ]
                }
            ]
        },
        {
            season: "Warlords of Draenor Season 1",
            raids: [
                {
                    name: "Highmaul",
                    ranks: null,
                    bosses: [
                        { name: "Kargath Bladefist", icon: 1721, heroic: false, mythic: null },
                        { name: "The Butcher", icon: 1706, heroic: true, mythic: null },
                        { name: "Tectus, The Living Mountain", icon: 1722, heroic: false, mythic: null },
                        { name: "Brackenspore", icon: 1720, heroic: false, mythic: null },
                        { name: "Twin Ogron", icon: 1719, heroic: false, mythic: null },
                        { name: "Ko'ragh", icon: 1723, heroic: false, mythic: null },
                        { name: "Imperator Mar'gok", icon: 1705, heroic: false, mythic: null }
                    ]
                }
            ]
        }
    ]
};
