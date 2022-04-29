
const a39 = [1024, 1024],
    a40 = 16,
    a41 = 8,
    a40_PADDED = 32;
var BLOCK_CONFIG = {
    0: {
        name: "air",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    256: {
        name: "stone",
        texturesConfig: {
            all: "stone"
        },
        textures: [
            [1, 0],
            [1, 0],
            [1, 0],
            [1, 0],
            [1, 0],
            [1, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    257: {
        name: "stone",
        texturesConfig: {
            all: "stone_granite"
        },
        textures: [
            [2, 0],
            [2, 0],
            [2, 0],
            [2, 0],
            [2, 0],
            [2, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    258: {
        name: "stone",
        texturesConfig: {
            all: "stone_granite_smooth"
        },
        textures: [
            [3, 0],
            [3, 0],
            [3, 0],
            [3, 0],
            [3, 0],
            [3, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    259: {
        name: "stone",
        texturesConfig: {
            all: "stone_diorite"
        },
        textures: [
            [4, 0],
            [4, 0],
            [4, 0],
            [4, 0],
            [4, 0],
            [4, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    260: {
        name: "stone",
        texturesConfig: {
            all: "stone_diorite_smooth"
        },
        textures: [
            [5, 0],
            [5, 0],
            [5, 0],
            [5, 0],
            [5, 0],
            [5, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    261: {
        name: "stone",
        texturesConfig: {
            all: "stone_andesite"
        },
        textures: [
            [6, 0],
            [6, 0],
            [6, 0],
            [6, 0],
            [6, 0],
            [6, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    262: {
        name: "stone",
        texturesConfig: {
            all: "stone_andesite_smooth"
        },
        textures: [
            [7, 0],
            [7, 0],
            [7, 0],
            [7, 0],
            [7, 0],
            [7, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    512: {
        name: "grass",
        texturesConfig: {
            top: "grass_top",
            side: "grass_side",
            bottom: "dirt"
        },
        textures: [
            [9, 0],
            [9, 0],
            [9, 0],
            [9, 0],
            [8, 0],
            [10, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    768: {
        name: "dirt",
        texturesConfig: {
            all: "dirt"
        },
        textures: [
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    769: {
        name: "dirt",
        texturesConfig: {
            all: "coarse_dirt"
        },
        textures: [
            [11, 0],
            [11, 0],
            [11, 0],
            [11, 0],
            [11, 0],
            [11, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    770: {
        name: "dirt",
        texturesConfig: {
            top: "dirt_podzol_top",
            side: "dirt_podzol_side",
            bottom: "empty"
        },
        textures: [
            [13, 0],
            [13, 0],
            [13, 0],
            [13, 0],
            [12, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    1024: {
        name: "cobblestone",
        texturesConfig: {
            all: "cobblestone"
        },
        textures: [
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    1280: {
        name: "planks",
        texturesConfig: {
            all: "planks_oak"
        },
        textures: [
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    1281: {
        name: "planks",
        texturesConfig: {
            all: "planks_spruce"
        },
        textures: [
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    1282: {
        name: "planks",
        texturesConfig: {
            all: "planks_birch"
        },
        textures: [
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    1283: {
        name: "planks",
        texturesConfig: {
            all: "planks_jungle"
        },
        textures: [
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    1284: {
        name: "planks",
        texturesConfig: {
            all: "planks_acacia"
        },
        textures: [
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    1285: {
        name: "planks",
        texturesConfig: {
            all: "planks_big_oak"
        },
        textures: [
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    1536: {
        name: "sapling",
        texturesConfig: {
            side: "sapling_oak",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [21, 0],
            [21, 0],
            [21, 0],
            [21, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    1537: {
        name: "sapling",
        texturesConfig: {
            side: "sapling_spruce",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [22, 0],
            [22, 0],
            [22, 0],
            [22, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    1538: {
        name: "sapling",
        texturesConfig: {
            side: "sapling_birch",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [23, 0],
            [23, 0],
            [23, 0],
            [23, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    1539: {
        name: "sapling",
        texturesConfig: {
            side: "sapling_jungle",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [24, 0],
            [24, 0],
            [24, 0],
            [24, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    1540: {
        name: "sapling",
        texturesConfig: {
            side: "sapling_acacia",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [25, 0],
            [25, 0],
            [25, 0],
            [25, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    1541: {
        name: "sapling",
        texturesConfig: {
            side: "sapling_roofed_oak",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [26, 0],
            [26, 0],
            [26, 0],
            [26, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    1792: {
        name: "bedrock",
        texturesConfig: {
            all: "bedrock"
        },
        textures: [
            [27, 0],
            [27, 0],
            [27, 0],
            [27, 0],
            [27, 0],
            [27, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    2048: {
        name: "flowing_water",
        texturesConfig: {
            top: "water_still",
            side: "empty",
            bottom: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [28, 0],
            [0, 0]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    2304: {
        name: "water",
        texturesConfig: {
            top: "water_still",
            side: "empty",
            bottom: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [28, 0],
            [0, 0]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    2560: {
        name: "flowing_lava",
        texturesConfig: {
            all: "lava_still"
        },
        textures: [
            [29, 0],
            [29, 0],
            [29, 0],
            [29, 0],
            [29, 0],
            [29, 0]
        ],
        transparency: 2,
        partialTransparency: !1,
        cross: !1
    },
    2816: {
        name: "lava",
        texturesConfig: {
            all: "lava_still"
        },
        textures: [
            [29, 0],
            [29, 0],
            [29, 0],
            [29, 0],
            [29, 0],
            [29, 0]
        ],
        transparency: 2,
        partialTransparency: !1,
        cross: !1
    },
    3072: {
        name: "sand",
        texturesConfig: {
            all: "sand"
        },
        textures: [
            [30, 0],
            [30, 0],
            [30, 0],
            [30, 0],
            [30, 0],
            [30, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    3073: {
        name: "sand",
        texturesConfig: {
            all: "red_sand"
        },
        textures: [
            [31, 0],
            [31, 0],
            [31, 0],
            [31, 0],
            [31, 0],
            [31, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    3328: {
        name: "gravel",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    3584: {
        name: "gold_ore",
        texturesConfig: {
            all: "gold_ore"
        },
        textures: [
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    3840: {
        name: "iron_ore",
        texturesConfig: {
            all: "iron_ore"
        },
        textures: [
            [2, 1],
            [2, 1],
            [2, 1],
            [2, 1],
            [2, 1],
            [2, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    4096: {
        name: "coal_ore",
        texturesConfig: {
            all: "coal_ore"
        },
        textures: [
            [3, 1],
            [3, 1],
            [3, 1],
            [3, 1],
            [3, 1],
            [3, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    4352: {
        name: "log",
        texturesConfig: {
            top: "log_oak_top",
            bottom: "log_oak",
            side: "log_oak"
        },
        textures: [
            [5, 1],
            [5, 1],
            [5, 1],
            [5, 1],
            [4, 1],
            [5, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    4353: {
        name: "log",
        texturesConfig: {
            top: "log_spruce_top",
            bottom: "log_spruce",
            side: "log_spruce"
        },
        textures: [
            [7, 1],
            [7, 1],
            [7, 1],
            [7, 1],
            [6, 1],
            [7, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    4354: {
        name: "log",
        texturesConfig: {
            top: "log_birch_top",
            bottom: "log_birch",
            side: "log_birch"
        },
        textures: [
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [8, 1],
            [9, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    4355: {
        name: "log",
        texturesConfig: {
            top: "log_jungle_top",
            bottom: "log_jungle",
            side: "log_jungle"
        },
        textures: [
            [11, 1],
            [11, 1],
            [11, 1],
            [11, 1],
            [10, 1],
            [11, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    4608: {
        name: "leaves",
        texturesConfig: {
            all: "leaves_oak"
        },
        textures: [
            [12, 1],
            [12, 1],
            [12, 1],
            [12, 1],
            [12, 1],
            [12, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    4609: {
        name: "leaves",
        texturesConfig: {
            all: "leaves_spruce"
        },
        textures: [
            [13, 1],
            [13, 1],
            [13, 1],
            [13, 1],
            [13, 1],
            [13, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    4610: {
        name: "leaves",
        texturesConfig: {
            all: "leaves_birch"
        },
        textures: [
            [14, 1],
            [14, 1],
            [14, 1],
            [14, 1],
            [14, 1],
            [14, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    4611: {
        name: "leaves",
        texturesConfig: {
            all: "leaves_jungle"
        },
        textures: [
            [15, 1],
            [15, 1],
            [15, 1],
            [15, 1],
            [15, 1],
            [15, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    4864: {
        name: "sponge",
        texturesConfig: {
            all: "sponge"
        },
        textures: [
            [16, 1],
            [16, 1],
            [16, 1],
            [16, 1],
            [16, 1],
            [16, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    4865: {
        name: "sponge",
        texturesConfig: {
            all: "sponge_wet"
        },
        textures: [
            [17, 1],
            [17, 1],
            [17, 1],
            [17, 1],
            [17, 1],
            [17, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    5120: {
        name: "glass",
        texturesConfig: {
            all: "glass"
        },
        textures: [
            [18, 1],
            [18, 1],
            [18, 1],
            [18, 1],
            [18, 1],
            [18, 1]
        ],
        transparency: 2,
        partialTransparency: !1,
        cross: !1
    },
    5376: {
        name: "lapis_ore",
        texturesConfig: {
            all: "lapis_ore"
        },
        textures: [
            [19, 1],
            [19, 1],
            [19, 1],
            [19, 1],
            [19, 1],
            [19, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    5632: {
        name: "lapis_block",
        texturesConfig: {
            all: "lapis_block"
        },
        textures: [
            [20, 1],
            [20, 1],
            [20, 1],
            [20, 1],
            [20, 1],
            [20, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    5888: {
        name: "dispenser",
        texturesConfig: {
            top: "dispenser_front_vertical",
            side: "furnace_side",
            bottom: "furnace_top"
        },
        textures: [
            [22, 1],
            [22, 1],
            [22, 1],
            [22, 1],
            [21, 1],
            [23, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    6144: {
        name: "sandstone",
        texturesConfig: {
            top: "sandstone_top",
            side: "sandstone_normal",
            bottom: "sandstone_bottom"
        },
        textures: [
            [25, 1],
            [25, 1],
            [25, 1],
            [25, 1],
            [24, 1],
            [26, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    6145: {
        name: "sandstone",
        texturesConfig: {
            top: "sandstone_top",
            side: "sandstone_carved",
            bottom: "sandstone_bottom"
        },
        textures: [
            [27, 1],
            [27, 1],
            [27, 1],
            [27, 1],
            [24, 1],
            [26, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    6146: {
        name: "sandstone",
        texturesConfig: {
            top: "sandstone_top",
            side: "sandstone_smooth",
            bottom: "sandstone_bottom"
        },
        textures: [
            [28, 1],
            [28, 1],
            [28, 1],
            [28, 1],
            [24, 1],
            [26, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    6400: {
        name: "noteblock",
        texturesConfig: {
            all: "noteblock"
        },
        textures: [
            [29, 1],
            [29, 1],
            [29, 1],
            [29, 1],
            [29, 1],
            [29, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    6656: {
        name: "bed",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    6912: {
        name: "golden_rail",
        texturesConfig: {
            all: "rail_golden_powered"
        },
        textures: [
            [30, 1],
            [30, 1],
            [30, 1],
            [30, 1],
            [30, 1],
            [30, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    7168: {
        name: "detector_rail",
        texturesConfig: {
            all: "rail_detector"
        },
        textures: [
            [31, 1],
            [31, 1],
            [31, 1],
            [31, 1],
            [31, 1],
            [31, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    7424: {
        name: "sticky_piston",
        texturesConfig: {
            top: "piston_top_sticky",
            side: "piston_side",
            bottom: "piston_bottom"
        },
        textures: [
            [1, 2],
            [1, 2],
            [1, 2],
            [1, 2],
            [0, 2],
            [2, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    7680: {
        name: "web",
        texturesConfig: {
            all: "web"
        },
        textures: [
            [3, 2],
            [3, 2],
            [3, 2],
            [3, 2],
            [3, 2],
            [3, 2]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    7936: {
        name: "tallgrass",
        texturesConfig: {
            side: "double_plant_grass_top",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [4, 2],
            [4, 2],
            [4, 2],
            [4, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    7937: {
        name: "tallgrass",
        texturesConfig: {
            side: "double_plant_grass_bottom",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [5, 2],
            [5, 2],
            [5, 2],
            [5, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    7938: {
        name: "tallgrass",
        texturesConfig: {
            side: "fern",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [6, 2],
            [6, 2],
            [6, 2],
            [6, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    8192: {
        name: "deadbush",
        texturesConfig: {
            side: "deadbush",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [7, 2],
            [7, 2],
            [7, 2],
            [7, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    8448: {
        name: "piston",
        texturesConfig: {
            top: "piston_top_normal",
            side: "piston_side",
            bottom: "piston_bottom"
        },
        textures: [
            [1, 2],
            [1, 2],
            [1, 2],
            [1, 2],
            [8, 2],
            [2, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8704: {
        name: "piston_head",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    8960: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_white"
        },
        textures: [
            [9, 2],
            [9, 2],
            [9, 2],
            [9, 2],
            [9, 2],
            [9, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8961: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_orange"
        },
        textures: [
            [10, 2],
            [10, 2],
            [10, 2],
            [10, 2],
            [10, 2],
            [10, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8962: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_magenta"
        },
        textures: [
            [11, 2],
            [11, 2],
            [11, 2],
            [11, 2],
            [11, 2],
            [11, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8963: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_light_blue"
        },
        textures: [
            [12, 2],
            [12, 2],
            [12, 2],
            [12, 2],
            [12, 2],
            [12, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8964: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_yellow"
        },
        textures: [
            [13, 2],
            [13, 2],
            [13, 2],
            [13, 2],
            [13, 2],
            [13, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8965: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_lime"
        },
        textures: [
            [14, 2],
            [14, 2],
            [14, 2],
            [14, 2],
            [14, 2],
            [14, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8966: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_pink"
        },
        textures: [
            [15, 2],
            [15, 2],
            [15, 2],
            [15, 2],
            [15, 2],
            [15, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8967: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_gray"
        },
        textures: [
            [16, 2],
            [16, 2],
            [16, 2],
            [16, 2],
            [16, 2],
            [16, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8968: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_silver"
        },
        textures: [
            [17, 2],
            [17, 2],
            [17, 2],
            [17, 2],
            [17, 2],
            [17, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8969: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_cyan"
        },
        textures: [
            [18, 2],
            [18, 2],
            [18, 2],
            [18, 2],
            [18, 2],
            [18, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8970: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_purple"
        },
        textures: [
            [19, 2],
            [19, 2],
            [19, 2],
            [19, 2],
            [19, 2],
            [19, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8971: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_blue"
        },
        textures: [
            [20, 2],
            [20, 2],
            [20, 2],
            [20, 2],
            [20, 2],
            [20, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8972: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_brown"
        },
        textures: [
            [21, 2],
            [21, 2],
            [21, 2],
            [21, 2],
            [21, 2],
            [21, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8973: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_green"
        },
        textures: [
            [22, 2],
            [22, 2],
            [22, 2],
            [22, 2],
            [22, 2],
            [22, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8974: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_red"
        },
        textures: [
            [23, 2],
            [23, 2],
            [23, 2],
            [23, 2],
            [23, 2],
            [23, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    8975: {
        name: "wool",
        texturesConfig: {
            all: "wool_colored_black"
        },
        textures: [
            [24, 2],
            [24, 2],
            [24, 2],
            [24, 2],
            [24, 2],
            [24, 2]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    9216: {
        name: "piston_extension",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    9472: {
        name: "yellow_flower",
        texturesConfig: {
            side: "flower_dandelion",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [25, 2],
            [25, 2],
            [25, 2],
            [25, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9728: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_rose",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [26, 2],
            [26, 2],
            [26, 2],
            [26, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9729: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_blue_orchid",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [27, 2],
            [27, 2],
            [27, 2],
            [27, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9730: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_allium",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [28, 2],
            [28, 2],
            [28, 2],
            [28, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9731: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_houstonia",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [29, 2],
            [29, 2],
            [29, 2],
            [29, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9732: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_tulip_red",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [30, 2],
            [30, 2],
            [30, 2],
            [30, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9733: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_tulip_orange",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [31, 2],
            [31, 2],
            [31, 2],
            [31, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9734: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_tulip_white",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [0, 3],
            [0, 3],
            [0, 3],
            [0, 3],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9735: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_tulip_pink",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9736: {
        name: "red_flower",
        texturesConfig: {
            side: "flower_oxeye_daisy",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [2, 3],
            [2, 3],
            [2, 3],
            [2, 3],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    9984: {
        name: "brown_mushroom",
        texturesConfig: {
            all: "mushroom_brown"
        },
        textures: [
            [3, 3],
            [3, 3],
            [3, 3],
            [3, 3],
            [3, 3],
            [3, 3]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    10240: {
        name: "red_mushroom",
        texturesConfig: {
            all: "mushroom_red"
        },
        textures: [
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 3]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    10496: {
        name: "gold_block",
        texturesConfig: {
            all: "gold_block"
        },
        textures: [
            [5, 3],
            [5, 3],
            [5, 3],
            [5, 3],
            [5, 3],
            [5, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    10752: {
        name: "iron_block",
        texturesConfig: {
            all: "iron_block"
        },
        textures: [
            [6, 3],
            [6, 3],
            [6, 3],
            [6, 3],
            [6, 3],
            [6, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11008: {
        name: "double_stone_slab",
        texturesConfig: {
            all: "stone"
        },
        textures: [
            [1, 0],
            [1, 0],
            [1, 0],
            [1, 0],
            [1, 0],
            [1, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11009: {
        name: "double_stone_slab",
        texturesConfig: {
            top: "sandstone_top",
            side: "sandstone_normal",
            bottom: "sandstone_bottom"
        },
        textures: [
            [25, 1],
            [25, 1],
            [25, 1],
            [25, 1],
            [24, 1],
            [26, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11010: {
        name: "double_stone_slab",
        texturesConfig: {
            all: "planks_oak"
        },
        textures: [
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11011: {
        name: "double_stone_slab",
        texturesConfig: {
            all: "cobblestone"
        },
        textures: [
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11012: {
        name: "double_stone_slab",
        texturesConfig: {
            all: "brick"
        },
        textures: [
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11013: {
        name: "double_stone_slab",
        texturesConfig: {
            all: "stonebrick"
        },
        textures: [
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11014: {
        name: "double_stone_slab",
        texturesConfig: {
            all: "nether_brick"
        },
        textures: [
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11015: {
        name: "double_stone_slab",
        texturesConfig: {
            top: "quartz_block_top",
            side: "quartz_block_side",
            bottom: "quartz_block_bottom"
        },
        textures: [
            [11, 3],
            [11, 3],
            [11, 3],
            [11, 3],
            [10, 3],
            [12, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11016: {
        name: "double_stone_slab",
        texturesConfig: {
            top: "stone_slab_top",
            side: "stone_slab_side",
            bottom: "stone_slab_top"
        },
        textures: [
            [14, 3],
            [14, 3],
            [14, 3],
            [14, 3],
            [13, 3],
            [13, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11017: {
        name: "double_stone_slab",
        texturesConfig: {
            top: "sandstone_top",
            side: "sandstone_carved",
            bottom: "sandstone_bottom"
        },
        textures: [
            [27, 1],
            [27, 1],
            [27, 1],
            [27, 1],
            [24, 1],
            [26, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11023: {
        name: "double_stone_slab",
        texturesConfig: {
            top: "quartz_block_lines_top",
            side: "quartz_block_chiseled",
            bottom: "quartz_block_bottom"
        },
        textures: [
            [16, 3],
            [16, 3],
            [16, 3],
            [16, 3],
            [15, 3],
            [12, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11264: {
        name: "stone_slab",
        texturesConfig: {
            top: "stone_slab_top",
            side: "stone_slab_side",
            bottom: "stone_slab_top"
        },
        textures: [
            [14, 3],
            [14, 3],
            [14, 3],
            [14, 3],
            [13, 3],
            [13, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11265: {
        name: "stone_slab",
        texturesConfig: {
            top: "sandstone_top",
            side: "sandstone_normal",
            bottom: "sandstone_bottom"
        },
        textures: [
            [25, 1],
            [25, 1],
            [25, 1],
            [25, 1],
            [24, 1],
            [26, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11266: {
        name: "stone_slab",
        texturesConfig: {
            all: "planks_oak"
        },
        textures: [
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11267: {
        name: "stone_slab",
        texturesConfig: {
            all: "cobblestone"
        },
        textures: [
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11268: {
        name: "stone_slab",
        texturesConfig: {
            all: "brick"
        },
        textures: [
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11269: {
        name: "stone_slab",
        texturesConfig: {
            all: "stonebrick"
        },
        textures: [
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11270: {
        name: "stone_slab",
        texturesConfig: {
            all: "nether_brick"
        },
        textures: [
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11271: {
        name: "stone_slab",
        texturesConfig: {
            top: "quartz_block_top",
            side: "quartz_block_side",
            bottom: "quartz_block_bottom"
        },
        textures: [
            [11, 3],
            [11, 3],
            [11, 3],
            [11, 3],
            [10, 3],
            [12, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11272: {
        name: "stone_slab",
        texturesConfig: {
            top: "stone_slab_top",
            side: "stone_slab_side",
            bottom: "stone_slab_top"
        },
        textures: [
            [14, 3],
            [14, 3],
            [14, 3],
            [14, 3],
            [13, 3],
            [13, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11273: {
        name: "stone_slab",
        texturesConfig: {
            all: "sandstone_top"
        },
        textures: [
            [24, 1],
            [24, 1],
            [24, 1],
            [24, 1],
            [24, 1],
            [24, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11274: {
        name: "stone_slab",
        texturesConfig: {
            all: "planks_oak"
        },
        textures: [
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11275: {
        name: "stone_slab",
        texturesConfig: {
            all: "cobblestone"
        },
        textures: [
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11276: {
        name: "stone_slab",
        texturesConfig: {
            all: "brick"
        },
        textures: [
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11277: {
        name: "stone_slab",
        texturesConfig: {
            all: "stonebrick"
        },
        textures: [
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11278: {
        name: "stone_slab",
        texturesConfig: {
            all: "nether_brick"
        },
        textures: [
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11279: {
        name: "stone_slab",
        texturesConfig: {
            all: "quartz_block_top"
        },
        textures: [
            [10, 3],
            [10, 3],
            [10, 3],
            [10, 3],
            [10, 3],
            [10, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11520: {
        name: "brick_block",
        texturesConfig: {
            all: "brick"
        },
        textures: [
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3],
            [7, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11776: {
        name: "tnt",
        texturesConfig: {
            top: "tnt_top",
            side: "tnt_side",
            bottom: "tnt_bottom"
        },
        textures: [
            [18, 3],
            [18, 3],
            [18, 3],
            [18, 3],
            [17, 3],
            [19, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    11777: {
        name: "tnt",
        texturesConfig: {
            top: "tnt_top",
            side: "tnt_side",
            bottom: "tnt_bottom"
        },
        textures: [
            [18, 3],
            [18, 3],
            [18, 3],
            [18, 3],
            [17, 3],
            [19, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    12032: {
        name: "bookshelf",
        texturesConfig: {
            all: "bookshelf"
        },
        textures: [
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    12288: {
        name: "mossy_cobblestone",
        texturesConfig: {
            all: "stonebrick_mossy"
        },
        textures: [
            [21, 3],
            [21, 3],
            [21, 3],
            [21, 3],
            [21, 3],
            [21, 3]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    12544: {
        name: "obsidian",
        texturesConfig: {
            all: "obsidian"
        },
        textures: [
            [22, 3],
            [22, 3],
            [22, 3],
            [22, 3],
            [22, 3],
            [22, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    12800: {
        name: "torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    12801: {
        name: "torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    12802: {
        name: "torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    12803: {
        name: "torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    12804: {
        name: "torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    13056: {
        name: "fire",
        texturesConfig: {
            all: "fire_layer_0"
        },
        textures: [
            [23, 3],
            [23, 3],
            [23, 3],
            [23, 3],
            [23, 3],
            [23, 3]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    13312: {
        name: "mob_spawner",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    13568: {
        name: "oak_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    13824: {
        name: "chest",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    14080: {
        name: "redstone_wire",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    14336: {
        name: "diamond_ore",
        texturesConfig: {
            all: "diamond_ore"
        },
        textures: [
            [24, 3],
            [24, 3],
            [24, 3],
            [24, 3],
            [24, 3],
            [24, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    14592: {
        name: "diamond_block",
        texturesConfig: {
            all: "diamond_block"
        },
        textures: [
            [25, 3],
            [25, 3],
            [25, 3],
            [25, 3],
            [25, 3],
            [25, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    14848: {
        name: "crafting_table",
        texturesConfig: ["crafting_table_front", "crafting_table_side", "crafting_table_front", "crafting_table_side", "crafting_table_top", "crafting_table_top"],
        textures: [
            [26, 3],
            [27, 3],
            [26, 3],
            [27, 3],
            [28, 3],
            [28, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    15104: {
        name: "wheat",
        texturesConfig: {
            side: "wheat_stage_7",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [29, 3],
            [29, 3],
            [29, 3],
            [29, 3],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    15360: {
        name: "farmland",
        texturesConfig: {
            top: "farmland_wet",
            side: "dirt",
            bottom: "dirt"
        },
        textures: [
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [30, 3],
            [10, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    15616: {
        name: "furnace",
        texturesConfig: ["furnace_front_off", "furnace_side", "furnace_side", "furnace_side", "furnace_top", "furnace_top"],
        textures: [
            [31, 3],
            [22, 1],
            [22, 1],
            [22, 1],
            [23, 1],
            [23, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    15872: {
        name: "lit_furnace",
        texturesConfig: ["furnace_front_on", "furnace_side", "furnace_side", "furnace_side", "furnace_top", "furnace_top"],
        textures: [
            [0, 4],
            [22, 1],
            [22, 1],
            [22, 1],
            [23, 1],
            [23, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    16128: {
        name: "standing_sign",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    16384: {
        name: "wooden_door",
        texturesConfig: {
            all: "door_wood_lower"
        },
        textures: [
            [1, 4],
            [1, 4],
            [1, 4],
            [1, 4],
            [1, 4],
            [1, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    16640: {
        name: "ladder",
        texturesConfig: {
            all: "ladder"
        },
        textures: [
            [2, 4],
            [2, 4],
            [2, 4],
            [2, 4],
            [2, 4],
            [2, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    16896: {
        name: "rail",
        texturesConfig: {
            all: "rail_normal"
        },
        textures: [
            [3, 4],
            [3, 4],
            [3, 4],
            [3, 4],
            [3, 4],
            [3, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    17152: {
        name: "stone_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    17408: {
        name: "wall_sign",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    17664: {
        name: "lever",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    17920: {
        name: "stone_pressure_plate",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    18176: {
        name: "iron_door",
        texturesConfig: {
            all: "door_iron_lower"
        },
        textures: [
            [4, 4],
            [4, 4],
            [4, 4],
            [4, 4],
            [4, 4],
            [4, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    18432: {
        name: "wooden_pressure_plate",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    18688: {
        name: "redstone_ore",
        texturesConfig: {
            all: "redstone_ore"
        },
        textures: [
            [5, 4],
            [5, 4],
            [5, 4],
            [5, 4],
            [5, 4],
            [5, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    18944: {
        name: "lit_redstone_ore",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    19200: {
        name: "unlit_redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19201: {
        name: "unlit_redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19202: {
        name: "unlit_redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19203: {
        name: "unlit_redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19204: {
        name: "unlit_redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19456: {
        name: "redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19457: {
        name: "redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19458: {
        name: "redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19459: {
        name: "redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19460: {
        name: "redstone_torch",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !0
    },
    19712: {
        name: "stone_button",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    19968: {
        name: "snow_layer",
        texturesConfig: {
            all: "snow"
        },
        textures: [
            [6, 4],
            [6, 4],
            [6, 4],
            [6, 4],
            [6, 4],
            [6, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    20224: {
        name: "ice",
        texturesConfig: {
            all: "ice"
        },
        textures: [
            [7, 4],
            [7, 4],
            [7, 4],
            [7, 4],
            [7, 4],
            [7, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    20480: {
        name: "snow",
        texturesConfig: {
            all: "snow"
        },
        textures: [
            [6, 4],
            [6, 4],
            [6, 4],
            [6, 4],
            [6, 4],
            [6, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    20736: {
        name: "cactus",
        texturesConfig: {
            top: "cactus_top",
            side: "cactus_side",
            bottom: "cactus_bottom"
        },
        textures: [
            [9, 4],
            [9, 4],
            [9, 4],
            [9, 4],
            [8, 4],
            [10, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    20992: {
        name: "clay",
        texturesConfig: {
            all: "clay"
        },
        textures: [
            [11, 4],
            [11, 4],
            [11, 4],
            [11, 4],
            [11, 4],
            [11, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    21248: {
        name: "reeds",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    21504: {
        name: "jukebox",
        texturesConfig: {
            top: "jukebox_top",
            side: "jukebox_side",
            bottom: "jukebox_side"
        },
        textures: [
            [13, 4],
            [13, 4],
            [13, 4],
            [13, 4],
            [12, 4],
            [13, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    21505: {
        name: "jukebox",
        texturesConfig: {
            top: "jukebox_top",
            side: "jukebox_side",
            bottom: "jukebox_side"
        },
        textures: [
            [13, 4],
            [13, 4],
            [13, 4],
            [13, 4],
            [12, 4],
            [13, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    21760: {
        name: "fence",
        texturesConfig: {
            all: "fence_dark_oak1"
        },
        textures: [
            [14, 4],
            [14, 4],
            [14, 4],
            [14, 4],
            [14, 4],
            [14, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    22016: {
        name: "pumpkin",
        texturesConfig: {
            top: "pumpkin_top",
            side: "pumpkin_side",
            bottom: "pumpkin_top"
        },
        textures: [
            [16, 4],
            [16, 4],
            [16, 4],
            [16, 4],
            [15, 4],
            [15, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    22272: {
        name: "netherrack",
        texturesConfig: {
            all: "netherrack"
        },
        textures: [
            [17, 4],
            [17, 4],
            [17, 4],
            [17, 4],
            [17, 4],
            [17, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    22528: {
        name: "soul_sand",
        texturesConfig: {
            all: "soul_sand"
        },
        textures: [
            [18, 4],
            [18, 4],
            [18, 4],
            [18, 4],
            [18, 4],
            [18, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    22784: {
        name: "glowstone",
        texturesConfig: {
            all: "glowstone"
        },
        textures: [
            [19, 4],
            [19, 4],
            [19, 4],
            [19, 4],
            [19, 4],
            [19, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    23040: {
        name: "portal",
        texturesConfig: {
            all: "portal"
        },
        textures: [
            [20, 4],
            [20, 4],
            [20, 4],
            [20, 4],
            [20, 4],
            [20, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    23296: {
        name: "lit_pumpkin",
        texturesConfig: ["pumpkin_face_on", "pumpkin_side", "pumpkin_side", "pumpkin_side", "pumpkin_top", "pumpkin_top"],
        textures: [
            [21, 4],
            [16, 4],
            [16, 4],
            [16, 4],
            [15, 4],
            [15, 4]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    23552: {
        name: "cake",
        texturesConfig: {
            top: "cake_top",
            side: "cake_side",
            bottom: "cake_bottom"
        },
        textures: [
            [23, 4],
            [23, 4],
            [23, 4],
            [23, 4],
            [22, 4],
            [24, 4]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    23808: {
        name: "unpowered_repeater",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    24064: {
        name: "powered_repeater",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    24320: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_white"
        },
        textures: [
            [25, 4],
            [25, 4],
            [25, 4],
            [25, 4],
            [25, 4],
            [25, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24321: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_orange"
        },
        textures: [
            [26, 4],
            [26, 4],
            [26, 4],
            [26, 4],
            [26, 4],
            [26, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24322: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_magenta"
        },
        textures: [
            [27, 4],
            [27, 4],
            [27, 4],
            [27, 4],
            [27, 4],
            [27, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24323: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_light_blue"
        },
        textures: [
            [28, 4],
            [28, 4],
            [28, 4],
            [28, 4],
            [28, 4],
            [28, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24324: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_yellow"
        },
        textures: [
            [29, 4],
            [29, 4],
            [29, 4],
            [29, 4],
            [29, 4],
            [29, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24325: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_lime"
        },
        textures: [
            [30, 4],
            [30, 4],
            [30, 4],
            [30, 4],
            [30, 4],
            [30, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24326: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_pink"
        },
        textures: [
            [31, 4],
            [31, 4],
            [31, 4],
            [31, 4],
            [31, 4],
            [31, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24327: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_gray"
        },
        textures: [
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24328: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_gray"
        },
        textures: [
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24329: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_cyan"
        },
        textures: [
            [1, 5],
            [1, 5],
            [1, 5],
            [1, 5],
            [1, 5],
            [1, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24330: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_purple"
        },
        textures: [
            [2, 5],
            [2, 5],
            [2, 5],
            [2, 5],
            [2, 5],
            [2, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24331: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_blue"
        },
        textures: [
            [3, 5],
            [3, 5],
            [3, 5],
            [3, 5],
            [3, 5],
            [3, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24332: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_brown"
        },
        textures: [
            [4, 5],
            [4, 5],
            [4, 5],
            [4, 5],
            [4, 5],
            [4, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24333: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_green"
        },
        textures: [
            [5, 5],
            [5, 5],
            [5, 5],
            [5, 5],
            [5, 5],
            [5, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24334: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_red"
        },
        textures: [
            [6, 5],
            [6, 5],
            [6, 5],
            [6, 5],
            [6, 5],
            [6, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24335: {
        name: "stained_glass",
        texturesConfig: {
            all: "glass_black"
        },
        textures: [
            [7, 5],
            [7, 5],
            [7, 5],
            [7, 5],
            [7, 5],
            [7, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    24576: {
        name: "trapdoor",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    24832: {
        name: "monster_egg",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    24833: {
        name: "monster_egg",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    24834: {
        name: "monster_egg",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    24835: {
        name: "monster_egg",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    24836: {
        name: "monster_egg",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    24837: {
        name: "monster_egg",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    25088: {
        name: "stonebrick",
        texturesConfig: {
            all: "stonebrick"
        },
        textures: [
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3],
            [8, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    25089: {
        name: "stonebrick",
        texturesConfig: {
            all: "stonebrick_mossy"
        },
        textures: [
            [21, 3],
            [21, 3],
            [21, 3],
            [21, 3],
            [21, 3],
            [21, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    25090: {
        name: "stonebrick",
        texturesConfig: {
            all: "stonebrick_cracked"
        },
        textures: [
            [8, 5],
            [8, 5],
            [8, 5],
            [8, 5],
            [8, 5],
            [8, 5]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    25091: {
        name: "stonebrick",
        texturesConfig: {
            all: "stonebrick_carved"
        },
        textures: [
            [9, 5],
            [9, 5],
            [9, 5],
            [9, 5],
            [9, 5],
            [9, 5]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    25344: {
        name: "brown_mushroom_block",
        texturesConfig: {
            all: "mushroom_block_skin_brown"
        },
        textures: [
            [10, 5],
            [10, 5],
            [10, 5],
            [10, 5],
            [10, 5],
            [10, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    25600: {
        name: "red_mushroom_block",
        texturesConfig: {
            all: "mushroom_block_skin_red"
        },
        textures: [
            [11, 5],
            [11, 5],
            [11, 5],
            [11, 5],
            [11, 5],
            [11, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    25856: {
        name: "iron_bars",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    26112: {
        name: "glass_pane",
        texturesConfig: {
            all: "glass"
        },
        textures: [
            [18, 1],
            [18, 1],
            [18, 1],
            [18, 1],
            [18, 1],
            [18, 1]
        ],
        transparency: 2,
        partialTransparency: !1,
        cross: !1
    },
    26368: {
        name: "melon_block",
        texturesConfig: {
            top: "melon_top",
            side: "melon_side",
            bottom: "melon_top"
        },
        textures: [
            [14, 5],
            [14, 5],
            [14, 5],
            [14, 5],
            [13, 5],
            [13, 5]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    26624: {
        name: "pumpkin_stem",
        texturesConfig: {
            all: "pumpkin_stem_disconnected"
        },
        textures: [
            [15, 5],
            [15, 5],
            [15, 5],
            [15, 5],
            [15, 5],
            [15, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    26880: {
        name: "melon_stem",
        texturesConfig: {
            all: "melon_stem_disconnected"
        },
        textures: [
            [16, 5],
            [16, 5],
            [16, 5],
            [16, 5],
            [16, 5],
            [16, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    27136: {
        name: "vine",
        texturesConfig: {
            all: "vine"
        },
        textures: [
            [17, 5],
            [17, 5],
            [17, 5],
            [17, 5],
            [17, 5],
            [17, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    27392: {
        name: "fence_gate",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    27648: {
        name: "brick_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    27904: {
        name: "stone_brick_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    28160: {
        name: "mycelium",
        texturesConfig: {
            top: "mycelium_top",
            side: "mycelium_side",
            bottom: "dirt"
        },
        textures: [
            [19, 5],
            [19, 5],
            [19, 5],
            [19, 5],
            [18, 5],
            [10, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    28416: {
        name: "waterlily",
        texturesConfig: {
            side: "waterlily",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [20, 5],
            [20, 5],
            [20, 5],
            [20, 5],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    28672: {
        name: "nether_brick",
        texturesConfig: {
            all: "nether_brick"
        },
        textures: [
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3],
            [9, 3]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    28928: {
        name: "nether_brick_fence",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    29184: {
        name: "nether_brick_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    29440: {
        name: "nether_wart",
        texturesConfig: {
            all: "nether_wart_stage_2"
        },
        textures: [
            [21, 5],
            [21, 5],
            [21, 5],
            [21, 5],
            [21, 5],
            [21, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    29696: {
        name: "enchanting_table",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    29952: {
        name: "brewing_stand",
        texturesConfig: {
            side: "brewing_stand",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [22, 5],
            [22, 5],
            [22, 5],
            [22, 5],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    30208: {
        name: "cauldron",
        texturesConfig: {
            top: "cauldron_top",
            side: "cauldron_side",
            bottom: "cauldron_bottom"
        },
        textures: [
            [24, 5],
            [24, 5],
            [24, 5],
            [24, 5],
            [23, 5],
            [25, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    30464: {
        name: "end_portal",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    30720: {
        name: "end_portal_frame",
        texturesConfig: {
            top: "endframe_top",
            side: "endframe_side",
            bottom: "end_stone"
        },
        textures: [
            [27, 5],
            [27, 5],
            [27, 5],
            [27, 5],
            [26, 5],
            [28, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    30976: {
        name: "end_stone",
        texturesConfig: {
            all: "end_stone"
        },
        textures: [
            [28, 5],
            [28, 5],
            [28, 5],
            [28, 5],
            [28, 5],
            [28, 5]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    31232: {
        name: "dragon_egg",
        texturesConfig: {
            all: "dragon_egg"
        },
        textures: [
            [29, 5],
            [29, 5],
            [29, 5],
            [29, 5],
            [29, 5],
            [29, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    31488: {
        name: "redstone_lamp",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    31744: {
        name: "lit_redstone_lamp",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    32e3: {
        name: "double_wooden_slab",
        texturesConfig: {
            all: "planks_oak"
        },
        textures: [
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32001: {
        name: "double_wooden_slab",
        texturesConfig: {
            all: "planks_spruce"
        },
        textures: [
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32002: {
        name: "double_wooden_slab",
        texturesConfig: {
            all: "planks_birch"
        },
        textures: [
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32003: {
        name: "double_wooden_slab",
        texturesConfig: {
            all: "planks_jungle"
        },
        textures: [
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32004: {
        name: "double_wooden_slab",
        texturesConfig: {
            all: "planks_acacia"
        },
        textures: [
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32005: {
        name: "double_wooden_slab",
        texturesConfig: {
            all: "planks_big_oak"
        },
        textures: [
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32256: {
        name: "wooden_slab",
        texturesConfig: {
            all: "planks_oak"
        },
        textures: [
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32257: {
        name: "wooden_slab",
        texturesConfig: {
            all: "planks_spruce"
        },
        textures: [
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0],
            [16, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32258: {
        name: "wooden_slab",
        texturesConfig: {
            all: "planks_birch"
        },
        textures: [
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0],
            [17, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32259: {
        name: "wooden_slab",
        texturesConfig: {
            all: "planks_jungle"
        },
        textures: [
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0],
            [18, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32260: {
        name: "wooden_slab",
        texturesConfig: {
            all: "planks_acacia"
        },
        textures: [
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32261: {
        name: "wooden_slab",
        texturesConfig: {
            all: "planks_big_oak"
        },
        textures: [
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0],
            [20, 0]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    32512: {
        name: "cocoa",
        texturesConfig: {
            all: "cocoa_stage_2"
        },
        textures: [
            [30, 5],
            [30, 5],
            [30, 5],
            [30, 5],
            [30, 5],
            [30, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    32768: {
        name: "sandstone_stairs",
        texturesConfig: {
            all: "sand"
        },
        textures: [
            [30, 0],
            [30, 0],
            [30, 0],
            [30, 0],
            [30, 0],
            [30, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    33024: {
        name: "emerald_ore",
        texturesConfig: {
            all: "emerald_ore"
        },
        textures: [
            [31, 5],
            [31, 5],
            [31, 5],
            [31, 5],
            [31, 5],
            [31, 5]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    33280: {
        name: "ender_chest",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    33536: {
        name: "tripwire_hook",
        texturesConfig: {
            all: "trip_wire_source"
        },
        textures: [
            [0, 6],
            [0, 6],
            [0, 6],
            [0, 6],
            [0, 6],
            [0, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    33792: {
        name: "tripwire",
        texturesConfig: {
            all: "trip_wire"
        },
        textures: [
            [1, 6],
            [1, 6],
            [1, 6],
            [1, 6],
            [1, 6],
            [1, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    34048: {
        name: "emerald_block",
        texturesConfig: {
            all: "emerald_block"
        },
        textures: [
            [2, 6],
            [2, 6],
            [2, 6],
            [2, 6],
            [2, 6],
            [2, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    34304: {
        name: "spruce_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    34560: {
        name: "birch_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    34816: {
        name: "jungle_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    35072: {
        name: "command_block",
        texturesConfig: {
            all: "command_block_back"
        },
        textures: [
            [3, 6],
            [3, 6],
            [3, 6],
            [3, 6],
            [3, 6],
            [3, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    35328: {
        name: "beacon",
        texturesConfig: {
            all: "beacon"
        },
        textures: [
            [4, 6],
            [4, 6],
            [4, 6],
            [4, 6],
            [4, 6],
            [4, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    35584: {
        name: "cobblestone_wall",
        texturesConfig: {
            all: "cobblestone"
        },
        textures: [
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0],
            [14, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    35585: {
        name: "cobblestone_wall",
        texturesConfig: {
            all: "cobblestone_mossy"
        },
        textures: [
            [5, 6],
            [5, 6],
            [5, 6],
            [5, 6],
            [5, 6],
            [5, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    35840: {
        name: "flower_pot",
        texturesConfig: {
            side: "flower_pot",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [6, 6],
            [6, 6],
            [6, 6],
            [6, 6],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    36096: {
        name: "carrots",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    36352: {
        name: "potatoes",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    36608: {
        name: "wooden_button",
        texturesConfig: {
            all: "button_wood"
        },
        textures: [
            [7, 6],
            [7, 6],
            [7, 6],
            [7, 6],
            [7, 6],
            [7, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    36864: {
        name: "skull",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    37120: {
        name: "anvil",
        texturesConfig: {
            top: "anvil_top_a645d_0",
            side: "anvil_base",
            bottom: "anvil_top_a645d_0"
        },
        textures: [
            [9, 6],
            [9, 6],
            [9, 6],
            [9, 6],
            [8, 6],
            [8, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    37376: {
        name: "trapped_chest",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    37632: {
        name: "light_weighted_pressure_plate",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    37888: {
        name: "heavy_weighted_pressure_plate",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    38144: {
        name: "unpowered_comparator",
        texturesConfig: {
            all: "comparator_on"
        },
        textures: [
            [10, 6],
            [10, 6],
            [10, 6],
            [10, 6],
            [10, 6],
            [10, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    38400: {
        name: "powered_comparator",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    38656: {
        name: "daylight_detector",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    38912: {
        name: "redstone_block",
        texturesConfig: {
            all: "redstone_block"
        },
        textures: [
            [11, 6],
            [11, 6],
            [11, 6],
            [11, 6],
            [11, 6],
            [11, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    39168: {
        name: "quartz_ore",
        texturesConfig: {
            all: "quartz_ore"
        },
        textures: [
            [12, 6],
            [12, 6],
            [12, 6],
            [12, 6],
            [12, 6],
            [12, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    39424: {
        name: "hopper",
        texturesConfig: {
            top: "hopper_top",
            side: "hopper_outside",
            bottom: "hopper_outside"
        },
        textures: [
            [14, 6],
            [14, 6],
            [14, 6],
            [14, 6],
            [13, 6],
            [14, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    39680: {
        name: "quartz_block",
        texturesConfig: {
            top: "quartz_block_top",
            side: "quartz_block_side",
            bottom: "quartz_block_bottom"
        },
        textures: [
            [11, 3],
            [11, 3],
            [11, 3],
            [11, 3],
            [10, 3],
            [12, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    39681: {
        name: "quartz_block",
        texturesConfig: {
            top: "quartz_block_chiseled_top",
            side: "quartz_block_chiseled",
            bottom: "quartz_block_chiseled"
        },
        textures: [
            [16, 3],
            [16, 3],
            [16, 3],
            [16, 3],
            [15, 6],
            [16, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    39682: {
        name: "quartz_block",
        texturesConfig: {
            top: "quartz_block_top",
            side: "quartz_block_lines",
            bottom: "quartz_block_bottom"
        },
        textures: [
            [16, 6],
            [16, 6],
            [16, 6],
            [16, 6],
            [10, 3],
            [12, 3]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    39936: {
        name: "quartz_stairs",
        texturesConfig: {
            all: "quartz_block_side"
        },
        textures: [
            [11, 3],
            [11, 3],
            [11, 3],
            [11, 3],
            [11, 3],
            [11, 3]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    40192: {
        name: "activator_rail",
        texturesConfig: {
            all: "rail_activator"
        },
        textures: [
            [17, 6],
            [17, 6],
            [17, 6],
            [17, 6],
            [17, 6],
            [17, 6]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    40448: {
        name: "dropper",
        texturesConfig: {
            top: "dropper_front_vertical",
            side: "furnace_side",
            bottom: "furnace_top"
        },
        textures: [
            [22, 1],
            [22, 1],
            [22, 1],
            [22, 1],
            [18, 6],
            [23, 1]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40704: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_white"
        },
        textures: [
            [19, 6],
            [19, 6],
            [19, 6],
            [19, 6],
            [19, 6],
            [19, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40705: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_orange"
        },
        textures: [
            [20, 6],
            [20, 6],
            [20, 6],
            [20, 6],
            [20, 6],
            [20, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40706: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_magenta"
        },
        textures: [
            [21, 6],
            [21, 6],
            [21, 6],
            [21, 6],
            [21, 6],
            [21, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40707: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_light_blue"
        },
        textures: [
            [22, 6],
            [22, 6],
            [22, 6],
            [22, 6],
            [22, 6],
            [22, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40708: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_yellow"
        },
        textures: [
            [23, 6],
            [23, 6],
            [23, 6],
            [23, 6],
            [23, 6],
            [23, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40709: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_lime"
        },
        textures: [
            [24, 6],
            [24, 6],
            [24, 6],
            [24, 6],
            [24, 6],
            [24, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40710: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_pink"
        },
        textures: [
            [25, 6],
            [25, 6],
            [25, 6],
            [25, 6],
            [25, 6],
            [25, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40711: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_gray"
        },
        textures: [
            [26, 6],
            [26, 6],
            [26, 6],
            [26, 6],
            [26, 6],
            [26, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40712: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_silver"
        },
        textures: [
            [27, 6],
            [27, 6],
            [27, 6],
            [27, 6],
            [27, 6],
            [27, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40713: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_cyan"
        },
        textures: [
            [28, 6],
            [28, 6],
            [28, 6],
            [28, 6],
            [28, 6],
            [28, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40714: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_purple"
        },
        textures: [
            [29, 6],
            [29, 6],
            [29, 6],
            [29, 6],
            [29, 6],
            [29, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40715: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_blue"
        },
        textures: [
            [30, 6],
            [30, 6],
            [30, 6],
            [30, 6],
            [30, 6],
            [30, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40716: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_brown"
        },
        textures: [
            [31, 6],
            [31, 6],
            [31, 6],
            [31, 6],
            [31, 6],
            [31, 6]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40717: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_green"
        },
        textures: [
            [0, 7],
            [0, 7],
            [0, 7],
            [0, 7],
            [0, 7],
            [0, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40718: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_red"
        },
        textures: [
            [1, 7],
            [1, 7],
            [1, 7],
            [1, 7],
            [1, 7],
            [1, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40719: {
        name: "stained_hardened_clay",
        texturesConfig: {
            all: "hardened_clay_stained_black"
        },
        textures: [
            [2, 7],
            [2, 7],
            [2, 7],
            [2, 7],
            [2, 7],
            [2, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    40960: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_white"
        },
        textures: [
            [25, 4],
            [25, 4],
            [25, 4],
            [25, 4],
            [25, 4],
            [25, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40961: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_orange"
        },
        textures: [
            [26, 4],
            [26, 4],
            [26, 4],
            [26, 4],
            [26, 4],
            [26, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40962: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_magenta"
        },
        textures: [
            [27, 4],
            [27, 4],
            [27, 4],
            [27, 4],
            [27, 4],
            [27, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40963: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_light_blue"
        },
        textures: [
            [28, 4],
            [28, 4],
            [28, 4],
            [28, 4],
            [28, 4],
            [28, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40964: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_yellow"
        },
        textures: [
            [29, 4],
            [29, 4],
            [29, 4],
            [29, 4],
            [29, 4],
            [29, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40965: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_lime"
        },
        textures: [
            [30, 4],
            [30, 4],
            [30, 4],
            [30, 4],
            [30, 4],
            [30, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40966: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_pink"
        },
        textures: [
            [31, 4],
            [31, 4],
            [31, 4],
            [31, 4],
            [31, 4],
            [31, 4]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40967: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_gray"
        },
        textures: [
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40968: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_gray"
        },
        textures: [
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40969: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_cyan"
        },
        textures: [
            [1, 5],
            [1, 5],
            [1, 5],
            [1, 5],
            [1, 5],
            [1, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40970: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_purple"
        },
        textures: [
            [2, 5],
            [2, 5],
            [2, 5],
            [2, 5],
            [2, 5],
            [2, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40971: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_blue"
        },
        textures: [
            [3, 5],
            [3, 5],
            [3, 5],
            [3, 5],
            [3, 5],
            [3, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40972: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_brown"
        },
        textures: [
            [4, 5],
            [4, 5],
            [4, 5],
            [4, 5],
            [4, 5],
            [4, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40973: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_green"
        },
        textures: [
            [5, 5],
            [5, 5],
            [5, 5],
            [5, 5],
            [5, 5],
            [5, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40974: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_red"
        },
        textures: [
            [6, 5],
            [6, 5],
            [6, 5],
            [6, 5],
            [6, 5],
            [6, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    40975: {
        name: "stained_glass_pane",
        texturesConfig: {
            all: "glass_black"
        },
        textures: [
            [7, 5],
            [7, 5],
            [7, 5],
            [7, 5],
            [7, 5],
            [7, 5]
        ],
        transparency: 2,
        partialTransparency: !0,
        cross: !1
    },
    41216: {
        name: "leaves2",
        texturesConfig: {
            all: "leaves_acacia"
        },
        textures: [
            [3, 7],
            [3, 7],
            [3, 7],
            [3, 7],
            [3, 7],
            [3, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    41217: {
        name: "leaves2",
        texturesConfig: {
            all: "leaves_big_oak"
        },
        textures: [
            [4, 7],
            [4, 7],
            [4, 7],
            [4, 7],
            [4, 7],
            [4, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    41472: {
        name: "log2",
        texturesConfig: {
            top: "log_acacia_top",
            bottom: "log_acacia_top",
            side: "log_acacia"
        },
        textures: [
            [6, 7],
            [6, 7],
            [6, 7],
            [6, 7],
            [5, 7],
            [5, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    41473: {
        name: "log2",
        texturesConfig: {
            top: "log_acacia_top",
            bottom: "log_acacia_top",
            side: "log_acacia"
        },
        textures: [
            [6, 7],
            [6, 7],
            [6, 7],
            [6, 7],
            [5, 7],
            [5, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    41728: {
        name: "acacia_stairs",
        texturesConfig: {
            all: "planks_acacia"
        },
        textures: [
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0],
            [19, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    41984: {
        name: "dark_oak_stairs",
        texturesConfig: {
            all: "planks_oak"
        },
        textures: [
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0],
            [15, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    42240: {
        name: "slime",
        texturesConfig: {
            all: "slime"
        },
        textures: [
            [7, 7],
            [7, 7],
            [7, 7],
            [7, 7],
            [7, 7],
            [7, 7]
        ],
        transparency: 1,
        partialTransparency: !0,
        cross: !1
    },
    42496: {
        name: "barrier",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    42752: {
        name: "iron_trapdoor",
        texturesConfig: {
            all: "iron_trapdoor"
        },
        textures: [
            [8, 7],
            [8, 7],
            [8, 7],
            [8, 7],
            [8, 7],
            [8, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43008: {
        name: "prismarine",
        texturesConfig: {
            all: "prismarine_rough"
        },
        textures: [
            [9, 7],
            [9, 7],
            [9, 7],
            [9, 7],
            [9, 7],
            [9, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    43009: {
        name: "prismarine",
        texturesConfig: {
            all: "prismarine_bricks"
        },
        textures: [
            [10, 7],
            [10, 7],
            [10, 7],
            [10, 7],
            [10, 7],
            [10, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    43010: {
        name: "prismarine",
        texturesConfig: {
            all: "prismarine_dark"
        },
        textures: [
            [11, 7],
            [11, 7],
            [11, 7],
            [11, 7],
            [11, 7],
            [11, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    43264: {
        name: "sea_lantern",
        texturesConfig: {
            all: "sea_lantern"
        },
        textures: [
            [12, 7],
            [12, 7],
            [12, 7],
            [12, 7],
            [12, 7],
            [12, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43520: {
        name: "hay_block",
        texturesConfig: {
            top: "hay_block_top",
            side: "hay_block_side",
            bottom: "hay_block_top"
        },
        textures: [
            [14, 7],
            [14, 7],
            [14, 7],
            [14, 7],
            [13, 7],
            [13, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    43776: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43777: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43778: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43779: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43780: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43781: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43782: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43783: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43784: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43785: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43786: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43787: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43788: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43789: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43790: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    43791: {
        name: "carpet",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    44032: {
        name: "hardened_clay",
        texturesConfig: {
            all: "hardened_clay"
        },
        textures: [
            [15, 7],
            [15, 7],
            [15, 7],
            [15, 7],
            [15, 7],
            [15, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    44288: {
        name: "coal_block",
        texturesConfig: {
            all: "coal_block"
        },
        textures: [
            [16, 7],
            [16, 7],
            [16, 7],
            [16, 7],
            [16, 7],
            [16, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    44544: {
        name: "packed_ice",
        texturesConfig: {
            all: "ice_packed"
        },
        textures: [
            [17, 7],
            [17, 7],
            [17, 7],
            [17, 7],
            [17, 7],
            [17, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    44800: {
        name: "double_plant",
        texturesConfig: {
            side: "double_plant_sunflower_front",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [18, 7],
            [18, 7],
            [18, 7],
            [18, 7],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    44801: {
        name: "double_plant",
        texturesConfig: {
            all: "double_plant_syringa_top"
        },
        textures: [
            [19, 7],
            [19, 7],
            [19, 7],
            [19, 7],
            [19, 7],
            [19, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    44802: {
        name: "double_plant",
        texturesConfig: {
            side: "double_plant_grass_top",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [4, 2],
            [4, 2],
            [4, 2],
            [4, 2],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    44803: {
        name: "double_plant",
        texturesConfig: {
            side: "double_plant_fern_top",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [20, 7],
            [20, 7],
            [20, 7],
            [20, 7],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    44804: {
        name: "double_plant",
        texturesConfig: {
            side: "double_plant_rose_top",
            top: "empty",
            bottom: "empty"
        },
        textures: [
            [21, 7],
            [21, 7],
            [21, 7],
            [21, 7],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    44805: {
        name: "double_plant",
        texturesConfig: {
            all: "double_plant_paeonia_top"
        },
        textures: [
            [22, 7],
            [22, 7],
            [22, 7],
            [22, 7],
            [22, 7],
            [22, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !0
    },
    45056: {
        name: "standing_banner",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    45312: {
        name: "wall_banner",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    45568: {
        name: "daylight_detector_inverted",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    45824: {
        name: "red_sandstone",
        texturesConfig: {
            top: "red_sandstone_top",
            side: "red_sandstone_normal",
            bottom: "red_sandstone_bottom"
        },
        textures: [
            [24, 7],
            [24, 7],
            [24, 7],
            [24, 7],
            [23, 7],
            [25, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    45825: {
        name: "red_sandstone",
        texturesConfig: {
            top: "red_sandstone_top",
            side: "red_sandstone_carved",
            bottom: "red_sandstone_bottom"
        },
        textures: [
            [26, 7],
            [26, 7],
            [26, 7],
            [26, 7],
            [23, 7],
            [25, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    45826: {
        name: "red_sandstone",
        texturesConfig: {
            top: "red_sandstone_top",
            side: "red_sandstone_smooth",
            bottom: "red_sandstone_bottom"
        },
        textures: [
            [27, 7],
            [27, 7],
            [27, 7],
            [27, 7],
            [23, 7],
            [25, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    46080: {
        name: "red_sandstone_stairs",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    46336: {
        name: "double_stone_slab2",
        texturesConfig: {
            top: "red_sandstone_top",
            side: "red_sandstone_normal",
            bottom: "red_sandstone_bottom"
        },
        textures: [
            [24, 7],
            [24, 7],
            [24, 7],
            [24, 7],
            [23, 7],
            [25, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    46344: {
        name: "double_stone_slab2",
        texturesConfig: {
            top: "red_sandstone_top",
            side: "red_sandstone_smooth",
            bottom: "red_sandstone_bottom"
        },
        textures: [
            [27, 7],
            [27, 7],
            [27, 7],
            [27, 7],
            [23, 7],
            [25, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    46592: {
        name: "stone_slab2",
        texturesConfig: {
            top: "red_sandstone_top",
            side: "red_sandstone_smooth",
            bottom: "red_sandstone_bottom"
        },
        textures: [
            [27, 7],
            [27, 7],
            [27, 7],
            [27, 7],
            [23, 7],
            [25, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    46600: {
        name: "stone_slab2",
        texturesConfig: {
            top: "red_sandstone_top",
            side: "red_sandstone_smooth",
            bottom: "red_sandstone_bottom"
        },
        textures: [
            [27, 7],
            [27, 7],
            [27, 7],
            [27, 7],
            [23, 7],
            [25, 7]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    46848: {
        name: "spruce_fence_gate",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    47104: {
        name: "birch_fence_gate",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    47360: {
        name: "jungle_fence_gate",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    47616: {
        name: "dark_oak_fence_gate",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    47872: {
        name: "acacia_fence_gate",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    48128: {
        name: "spruce_fence",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    48384: {
        name: "birch_fence",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    48640: {
        name: "jungle_fence",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    48896: {
        name: "dark_oak_fence",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    49152: {
        name: "acacia_fence",
        texturesConfig: {
            all: "iron_bars"
        },
        textures: [
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5],
            [12, 5]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    49408: {
        name: "spruce_door",
        texturesConfig: {
            all: "door_spruce_lower"
        },
        textures: [
            [28, 7],
            [28, 7],
            [28, 7],
            [28, 7],
            [28, 7],
            [28, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    49664: {
        name: "birch_door",
        texturesConfig: {
            all: "door_birch_lower"
        },
        textures: [
            [29, 7],
            [29, 7],
            [29, 7],
            [29, 7],
            [29, 7],
            [29, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    49920: {
        name: "jungle_door",
        texturesConfig: {
            all: "door_jungle_lower"
        },
        textures: [
            [30, 7],
            [30, 7],
            [30, 7],
            [30, 7],
            [30, 7],
            [30, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    50176: {
        name: "acacia_door",
        texturesConfig: {
            all: "door_acacia_lower"
        },
        textures: [
            [31, 7],
            [31, 7],
            [31, 7],
            [31, 7],
            [31, 7],
            [31, 7]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    50432: {
        name: "dark_oak_door",
        texturesConfig: {
            all: "door_dark_oak_lower"
        },
        textures: [
            [0, 8],
            [0, 8],
            [0, 8],
            [0, 8],
            [0, 8],
            [0, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    50688: {
        name: "end_rod",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    50944: {
        name: "chorus_plant",
        texturesConfig: {
            all: "chorus_plant"
        },
        textures: [
            [1, 8],
            [1, 8],
            [1, 8],
            [1, 8],
            [1, 8],
            [1, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    51200: {
        name: "chorus_flower",
        texturesConfig: {
            all: "chorus_flower"
        },
        textures: [
            [2, 8],
            [2, 8],
            [2, 8],
            [2, 8],
            [2, 8],
            [2, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    51456: {
        name: "purpur_block",
        texturesConfig: {
            all: "purpur_block"
        },
        textures: [
            [3, 8],
            [3, 8],
            [3, 8],
            [3, 8],
            [3, 8],
            [3, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    51712: {
        name: "purpur_pillar",
        texturesConfig: {
            all: "purpur_pillar"
        },
        textures: [
            [4, 8],
            [4, 8],
            [4, 8],
            [4, 8],
            [4, 8],
            [4, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    51968: {
        name: "purpur_stairs",
        texturesConfig: {
            all: "gravel"
        },
        textures: [
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [0, 1]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    52224: {
        name: "purpur_double_slab",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    52480: {
        name: "purpur_slab",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    52736: {
        name: "end_bricks",
        texturesConfig: {
            all: "end_bricks"
        },
        textures: [
            [5, 8],
            [5, 8],
            [5, 8],
            [5, 8],
            [5, 8],
            [5, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    52992: {
        name: "beetroots",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    53248: {
        name: "grass_path",
        texturesConfig: {
            top: "grass_path_top",
            side: "grass_path_side",
            bottom: "dirt"
        },
        textures: [
            [7, 8],
            [7, 8],
            [7, 8],
            [7, 8],
            [6, 8],
            [10, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    53504: {
        name: "end_gateway",
        texturesConfig: {
            all: "empty"
        },
        textures: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    53760: {
        name: "repeating_command_block",
        texturesConfig: {
            all: "repeating_command_block_back"
        },
        textures: [
            [8, 8],
            [8, 8],
            [8, 8],
            [8, 8],
            [8, 8],
            [8, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    54016: {
        name: "chain_command_block",
        texturesConfig: {
            all: "chain_command_block_back"
        },
        textures: [
            [9, 8],
            [9, 8],
            [9, 8],
            [9, 8],
            [9, 8],
            [9, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    54272: {
        name: "frosted_ice",
        texturesConfig: {
            all: "frosted_ice_0"
        },
        textures: [
            [10, 8],
            [10, 8],
            [10, 8],
            [10, 8],
            [10, 8],
            [10, 8]
        ],
        transparency: 2,
        partialTransparency: !1,
        cross: !1
    },
    54528: {
        name: "magma",
        texturesConfig: {
            all: "magma"
        },
        textures: [
            [11, 8],
            [11, 8],
            [11, 8],
            [11, 8],
            [11, 8],
            [11, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    54784: {
        name: "nether_wart_block",
        texturesConfig: {
            all: "nether_wart_block"
        },
        textures: [
            [12, 8],
            [12, 8],
            [12, 8],
            [12, 8],
            [12, 8],
            [12, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    55040: {
        name: "red_nether_brick",
        texturesConfig: {
            all: "red_nether_brick"
        },
        textures: [
            [13, 8],
            [13, 8],
            [13, 8],
            [13, 8],
            [13, 8],
            [13, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    55296: {
        name: "bone_block",
        texturesConfig: {
            top: "bone_block_top",
            side: "bone_block_side",
            bottom: "bone_block_top"
        },
        textures: [
            [15, 8],
            [15, 8],
            [15, 8],
            [15, 8],
            [14, 8],
            [14, 8]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    55781: {
        name: "item",
        texturesConfig: {
            all: "item-snowball-blue"
        },
        textures: [
            [16, 8],
            [16, 8],
            [16, 8],
            [16, 8],
            [16, 8],
            [16, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55782: {
        name: "item",
        texturesConfig: {
            all: "item-tnt-yellow"
        },
        textures: [
            [17, 8],
            [17, 8],
            [17, 8],
            [17, 8],
            [17, 8],
            [17, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55783: {
        name: "item",
        texturesConfig: {
            all: "item-woodplank-grey"
        },
        textures: [
            [18, 8],
            [18, 8],
            [18, 8],
            [18, 8],
            [18, 8],
            [18, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55784: {
        name: "item",
        texturesConfig: {
            all: "item-stoneball-grey"
        },
        textures: [
            [19, 8],
            [19, 8],
            [19, 8],
            [19, 8],
            [19, 8],
            [19, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55785: {
        name: "item",
        texturesConfig: {
            all: "item-stairs-grey"
        },
        textures: [
            [20, 8],
            [20, 8],
            [20, 8],
            [20, 8],
            [20, 8],
            [20, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55786: {
        name: "item",
        texturesConfig: {
            all: "item-pistol-grey"
        },
        textures: [
            [21, 8],
            [21, 8],
            [21, 8],
            [21, 8],
            [21, 8],
            [21, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55787: {
        name: "item",
        texturesConfig: {
            all: "item-pickaxe-grey"
        },
        textures: [
            [22, 8],
            [22, 8],
            [22, 8],
            [22, 8],
            [22, 8],
            [22, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55788: {
        name: "item",
        texturesConfig: {
            all: "item-uri-yellow"
        },
        textures: [
            [23, 8],
            [23, 8],
            [23, 8],
            [23, 8],
            [23, 8],
            [23, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55789: {
        name: "item",
        texturesConfig: {
            all: "item-uri-purple"
        },
        textures: [
            [24, 8],
            [24, 8],
            [24, 8],
            [24, 8],
            [24, 8],
            [24, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55790: {
        name: "item",
        texturesConfig: {
            all: "item-uri-blue"
        },
        textures: [
            [25, 8],
            [25, 8],
            [25, 8],
            [25, 8],
            [25, 8],
            [25, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55791: {
        name: "item",
        texturesConfig: {
            all: "item-uri-green"
        },
        textures: [
            [26, 8],
            [26, 8],
            [26, 8],
            [26, 8],
            [26, 8],
            [26, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55792: {
        name: "item",
        texturesConfig: {
            all: "item-uri-grey"
        },
        textures: [
            [27, 8],
            [27, 8],
            [27, 8],
            [27, 8],
            [27, 8],
            [27, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55793: {
        name: "item",
        texturesConfig: {
            all: "item-ak47-yellow"
        },
        textures: [
            [28, 8],
            [28, 8],
            [28, 8],
            [28, 8],
            [28, 8],
            [28, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55794: {
        name: "item",
        texturesConfig: {
            all: "item-ak47-purple"
        },
        textures: [
            [29, 8],
            [29, 8],
            [29, 8],
            [29, 8],
            [29, 8],
            [29, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55795: {
        name: "item",
        texturesConfig: {
            all: "item-ak47-blue"
        },
        textures: [
            [30, 8],
            [30, 8],
            [30, 8],
            [30, 8],
            [30, 8],
            [30, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55796: {
        name: "item",
        texturesConfig: {
            all: "item-ak47-green"
        },
        textures: [
            [31, 8],
            [31, 8],
            [31, 8],
            [31, 8],
            [31, 8],
            [31, 8]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55797: {
        name: "item",
        texturesConfig: {
            all: "item-ak47-grey"
        },
        textures: [
            [0, 9],
            [0, 9],
            [0, 9],
            [0, 9],
            [0, 9],
            [0, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55798: {
        name: "item",
        texturesConfig: {
            all: "item-shotgun-yellow"
        },
        textures: [
            [1, 9],
            [1, 9],
            [1, 9],
            [1, 9],
            [1, 9],
            [1, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55799: {
        name: "item",
        texturesConfig: {
            all: "item-shotgun-purple"
        },
        textures: [
            [2, 9],
            [2, 9],
            [2, 9],
            [2, 9],
            [2, 9],
            [2, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55800: {
        name: "item",
        texturesConfig: {
            all: "item-shotgun-blue"
        },
        textures: [
            [3, 9],
            [3, 9],
            [3, 9],
            [3, 9],
            [3, 9],
            [3, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55801: {
        name: "item",
        texturesConfig: {
            all: "item-shotgun-green"
        },
        textures: [
            [4, 9],
            [4, 9],
            [4, 9],
            [4, 9],
            [4, 9],
            [4, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55802: {
        name: "item",
        texturesConfig: {
            all: "item-shotgun-grey"
        },
        textures: [
            [5, 9],
            [5, 9],
            [5, 9],
            [5, 9],
            [5, 9],
            [5, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55803: {
        name: "item",
        texturesConfig: {
            all: "item-sniper-yellow"
        },
        textures: [
            [6, 9],
            [6, 9],
            [6, 9],
            [6, 9],
            [6, 9],
            [6, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55804: {
        name: "item",
        texturesConfig: {
            all: "item-sniper-purple"
        },
        textures: [
            [7, 9],
            [7, 9],
            [7, 9],
            [7, 9],
            [7, 9],
            [7, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55805: {
        name: "item",
        texturesConfig: {
            all: "item-sniper-blue"
        },
        textures: [
            [8, 9],
            [8, 9],
            [8, 9],
            [8, 9],
            [8, 9],
            [8, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55806: {
        name: "item",
        texturesConfig: {
            all: "item-sniper-green"
        },
        textures: [
            [9, 9],
            [9, 9],
            [9, 9],
            [9, 9],
            [9, 9],
            [9, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55807: {
        name: "item",
        texturesConfig: {
            all: "item-sniper-grey"
        },
        textures: [
            [10, 9],
            [10, 9],
            [10, 9],
            [10, 9],
            [10, 9],
            [10, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    55808: {
        name: "observer",
        texturesConfig: ["observer_back", "observer_side", "observer_front", "observer_side", "observer_top", "observer_top"],
        textures: [
            [11, 9],
            [12, 9],
            [13, 9],
            [12, 9],
            [14, 9],
            [14, 9]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    56064: {
        name: "white_shulker_box",
        texturesConfig: {
            all: "shulker_top_white"
        },
        textures: [
            [15, 9],
            [15, 9],
            [15, 9],
            [15, 9],
            [15, 9],
            [15, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    56320: {
        name: "orange_shulker_box",
        texturesConfig: {
            all: "shulker_top_orange"
        },
        textures: [
            [16, 9],
            [16, 9],
            [16, 9],
            [16, 9],
            [16, 9],
            [16, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    56576: {
        name: "magenta_shulker_box",
        texturesConfig: {
            all: "shulker_top_magenta"
        },
        textures: [
            [17, 9],
            [17, 9],
            [17, 9],
            [17, 9],
            [17, 9],
            [17, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    56832: {
        name: "light_blue_shulker_box",
        texturesConfig: {
            all: "shulker_top_light_blue"
        },
        textures: [
            [18, 9],
            [18, 9],
            [18, 9],
            [18, 9],
            [18, 9],
            [18, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    57088: {
        name: "yellow_shulker_box",
        texturesConfig: {
            all: "shulker_top_yellow"
        },
        textures: [
            [19, 9],
            [19, 9],
            [19, 9],
            [19, 9],
            [19, 9],
            [19, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    57344: {
        name: "lime_shulker_box",
        texturesConfig: {
            all: "shulker_top_lime"
        },
        textures: [
            [20, 9],
            [20, 9],
            [20, 9],
            [20, 9],
            [20, 9],
            [20, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    57600: {
        name: "pink_shulker_box",
        texturesConfig: {
            all: "shulker_top_pink"
        },
        textures: [
            [21, 9],
            [21, 9],
            [21, 9],
            [21, 9],
            [21, 9],
            [21, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    57856: {
        name: "gray_shulker_box",
        texturesConfig: {
            all: "shulker_top_gray"
        },
        textures: [
            [22, 9],
            [22, 9],
            [22, 9],
            [22, 9],
            [22, 9],
            [22, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    58112: {
        name: "light_gray_shulker_box",
        texturesConfig: {
            all: "shulker_top_gray"
        },
        textures: [
            [22, 9],
            [22, 9],
            [22, 9],
            [22, 9],
            [22, 9],
            [22, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    58368: {
        name: "cyan_shulker_box",
        texturesConfig: {
            all: "shulker_top_cyan"
        },
        textures: [
            [23, 9],
            [23, 9],
            [23, 9],
            [23, 9],
            [23, 9],
            [23, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    58624: {
        name: "purple_shulker_box",
        texturesConfig: {
            all: "shulker_top_purple"
        },
        textures: [
            [24, 9],
            [24, 9],
            [24, 9],
            [24, 9],
            [24, 9],
            [24, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    58880: {
        name: "blue_shulker_box",
        texturesConfig: {
            all: "shulker_top_blue"
        },
        textures: [
            [25, 9],
            [25, 9],
            [25, 9],
            [25, 9],
            [25, 9],
            [25, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    59136: {
        name: "brown_shulker_box",
        texturesConfig: {
            all: "shulker_top_brown"
        },
        textures: [
            [26, 9],
            [26, 9],
            [26, 9],
            [26, 9],
            [26, 9],
            [26, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    59392: {
        name: "green_shulker_box",
        texturesConfig: {
            all: "shulker_top_green"
        },
        textures: [
            [27, 9],
            [27, 9],
            [27, 9],
            [27, 9],
            [27, 9],
            [27, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    59648: {
        name: "red_shulker_box",
        texturesConfig: {
            all: "shulker_top_red"
        },
        textures: [
            [28, 9],
            [28, 9],
            [28, 9],
            [28, 9],
            [28, 9],
            [28, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    59904: {
        name: "black_shulker_box",
        texturesConfig: {
            all: "shulker_top_black"
        },
        textures: [
            [29, 9],
            [29, 9],
            [29, 9],
            [29, 9],
            [29, 9],
            [29, 9]
        ],
        transparency: 1,
        partialTransparency: !1,
        cross: !1
    },
    60160: {
        name: "white_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_white"
        },
        textures: [
            [30, 9],
            [30, 9],
            [30, 9],
            [30, 9],
            [30, 9],
            [30, 9]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    60416: {
        name: "orange_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_orange"
        },
        textures: [
            [31, 9],
            [31, 9],
            [31, 9],
            [31, 9],
            [31, 9],
            [31, 9]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    60672: {
        name: "magenta_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_magenta"
        },
        textures: [
            [0, 10],
            [0, 10],
            [0, 10],
            [0, 10],
            [0, 10],
            [0, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    60928: {
        name: "light_blue_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_light_blue"
        },
        textures: [
            [1, 10],
            [1, 10],
            [1, 10],
            [1, 10],
            [1, 10],
            [1, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    61184: {
        name: "yellow_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_yellow"
        },
        textures: [
            [2, 10],
            [2, 10],
            [2, 10],
            [2, 10],
            [2, 10],
            [2, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    61440: {
        name: "lime_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_lime"
        },
        textures: [
            [3, 10],
            [3, 10],
            [3, 10],
            [3, 10],
            [3, 10],
            [3, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    61696: {
        name: "pink_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_pink"
        },
        textures: [
            [4, 10],
            [4, 10],
            [4, 10],
            [4, 10],
            [4, 10],
            [4, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    61952: {
        name: "gray_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_gray"
        },
        textures: [
            [5, 10],
            [5, 10],
            [5, 10],
            [5, 10],
            [5, 10],
            [5, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    62208: {
        name: "light_gray_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_gray"
        },
        textures: [
            [5, 10],
            [5, 10],
            [5, 10],
            [5, 10],
            [5, 10],
            [5, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    62464: {
        name: "cyan_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_cyan"
        },
        textures: [
            [6, 10],
            [6, 10],
            [6, 10],
            [6, 10],
            [6, 10],
            [6, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    62720: {
        name: "purple_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_purple"
        },
        textures: [
            [7, 10],
            [7, 10],
            [7, 10],
            [7, 10],
            [7, 10],
            [7, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    62976: {
        name: "blue_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_blue"
        },
        textures: [
            [8, 10],
            [8, 10],
            [8, 10],
            [8, 10],
            [8, 10],
            [8, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    63232: {
        name: "brown_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_brown"
        },
        textures: [
            [9, 10],
            [9, 10],
            [9, 10],
            [9, 10],
            [9, 10],
            [9, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    63488: {
        name: "green_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_green"
        },
        textures: [
            [10, 10],
            [10, 10],
            [10, 10],
            [10, 10],
            [10, 10],
            [10, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    63744: {
        name: "red_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_red"
        },
        textures: [
            [11, 10],
            [11, 10],
            [11, 10],
            [11, 10],
            [11, 10],
            [11, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64e3: {
        name: "black_glazed_terracotta",
        texturesConfig: {
            all: "glazed_terracotta_black"
        },
        textures: [
            [12, 10],
            [12, 10],
            [12, 10],
            [12, 10],
            [12, 10],
            [12, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64256: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_white"
        },
        textures: [
            [13, 10],
            [13, 10],
            [13, 10],
            [13, 10],
            [13, 10],
            [13, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64257: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_orange"
        },
        textures: [
            [14, 10],
            [14, 10],
            [14, 10],
            [14, 10],
            [14, 10],
            [14, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64258: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_magenta"
        },
        textures: [
            [15, 10],
            [15, 10],
            [15, 10],
            [15, 10],
            [15, 10],
            [15, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64259: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_light_blue"
        },
        textures: [
            [16, 10],
            [16, 10],
            [16, 10],
            [16, 10],
            [16, 10],
            [16, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64260: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_yellow"
        },
        textures: [
            [17, 10],
            [17, 10],
            [17, 10],
            [17, 10],
            [17, 10],
            [17, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64261: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_lime"
        },
        textures: [
            [18, 10],
            [18, 10],
            [18, 10],
            [18, 10],
            [18, 10],
            [18, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64262: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_pink"
        },
        textures: [
            [19, 10],
            [19, 10],
            [19, 10],
            [19, 10],
            [19, 10],
            [19, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64263: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_gray"
        },
        textures: [
            [20, 10],
            [20, 10],
            [20, 10],
            [20, 10],
            [20, 10],
            [20, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64264: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_silver"
        },
        textures: [
            [21, 10],
            [21, 10],
            [21, 10],
            [21, 10],
            [21, 10],
            [21, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64265: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_cyan"
        },
        textures: [
            [22, 10],
            [22, 10],
            [22, 10],
            [22, 10],
            [22, 10],
            [22, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64266: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_purple"
        },
        textures: [
            [23, 10],
            [23, 10],
            [23, 10],
            [23, 10],
            [23, 10],
            [23, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64267: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_blue"
        },
        textures: [
            [24, 10],
            [24, 10],
            [24, 10],
            [24, 10],
            [24, 10],
            [24, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64268: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_brown"
        },
        textures: [
            [25, 10],
            [25, 10],
            [25, 10],
            [25, 10],
            [25, 10],
            [25, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64269: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_green"
        },
        textures: [
            [26, 10],
            [26, 10],
            [26, 10],
            [26, 10],
            [26, 10],
            [26, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64270: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_red"
        },
        textures: [
            [27, 10],
            [27, 10],
            [27, 10],
            [27, 10],
            [27, 10],
            [27, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64271: {
        name: "concrete",
        texturesConfig: {
            all: "concrete_black"
        },
        textures: [
            [28, 10],
            [28, 10],
            [28, 10],
            [28, 10],
            [28, 10],
            [28, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64512: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_white"
        },
        textures: [
            [29, 10],
            [29, 10],
            [29, 10],
            [29, 10],
            [29, 10],
            [29, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64513: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_orange"
        },
        textures: [
            [30, 10],
            [30, 10],
            [30, 10],
            [30, 10],
            [30, 10],
            [30, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64514: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_magenta"
        },
        textures: [
            [31, 10],
            [31, 10],
            [31, 10],
            [31, 10],
            [31, 10],
            [31, 10]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64515: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_light_blue"
        },
        textures: [
            [0, 11],
            [0, 11],
            [0, 11],
            [0, 11],
            [0, 11],
            [0, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64516: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_yellow"
        },
        textures: [
            [1, 11],
            [1, 11],
            [1, 11],
            [1, 11],
            [1, 11],
            [1, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64517: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_lime"
        },
        textures: [
            [2, 11],
            [2, 11],
            [2, 11],
            [2, 11],
            [2, 11],
            [2, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64518: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_pink"
        },
        textures: [
            [3, 11],
            [3, 11],
            [3, 11],
            [3, 11],
            [3, 11],
            [3, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64519: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_gray"
        },
        textures: [
            [4, 11],
            [4, 11],
            [4, 11],
            [4, 11],
            [4, 11],
            [4, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64520: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_silver"
        },
        textures: [
            [5, 11],
            [5, 11],
            [5, 11],
            [5, 11],
            [5, 11],
            [5, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64521: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_cyan"
        },
        textures: [
            [6, 11],
            [6, 11],
            [6, 11],
            [6, 11],
            [6, 11],
            [6, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64522: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_blue"
        },
        textures: [
            [8, 11],
            [8, 11],
            [8, 11],
            [8, 11],
            [8, 11],
            [8, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64523: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_brown"
        },
        textures: [
            [9, 11],
            [9, 11],
            [9, 11],
            [9, 11],
            [9, 11],
            [9, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64524: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_green"
        },
        textures: [
            [10, 11],
            [10, 11],
            [10, 11],
            [10, 11],
            [10, 11],
            [10, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64525: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_red"
        },
        textures: [
            [11, 11],
            [11, 11],
            [11, 11],
            [11, 11],
            [11, 11],
            [11, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    64527: {
        name: "concrete_powder",
        texturesConfig: {
            all: "concrete_powder_black"
        },
        textures: [
            [12, 11],
            [12, 11],
            [12, 11],
            [12, 11],
            [12, 11],
            [12, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    },
    65280: {
        name: "structure_block",
        texturesConfig: {
            all: "structure_block"
        },
        textures: [
            [13, 11],
            [13, 11],
            [13, 11],
            [13, 11],
            [13, 11],
            [13, 11]
        ],
        transparency: 0,
        partialTransparency: !1,
        cross: !1
    }
};

// https://craftnite.io/bro.js?v=8