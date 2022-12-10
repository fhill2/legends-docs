"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.code_to_config = exports.config_to_code = exports.Champion = exports.ChampionStat = exports.Ability = exports.BuildConfig = exports.Item = exports.blank_stats = exports.traits = exports.ResourceType = void 0;
var loader = __importStar(require("./loader"));
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["NONE"] = 0] = "NONE";
    ResourceType[ResourceType["MANA"] = 1] = "MANA";
    ResourceType[ResourceType["ENERGY"] = 2] = "ENERGY";
    ResourceType[ResourceType["HEALTH"] = 3] = "HEALTH";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
;
exports.traits = [
    "HP", "HP_REGEN", "MP", "MP_REGEN", "ARMOR", "MAGIC_RESIST", "HS_POWER",
    "CRIT_CHANCE", "CRIT_DAMAGE", "ATTACK_DAMAGE", "ATTACK_SPEED", "ABILITY_POWER", "ABILITY_HASTE",
    "LIFE_STEAL", "ARMOR_PEN", "MAGIC_PEN", "OMNIVAMP", "PHYSICAL_VAMP"
];
function init_trait_record(def_val) {
    var ret = {};
    for (var t in exports.traits) {
        ret[exports.traits[t]] = def_val();
    }
    return ret;
}
function blank_stats() {
    return init_trait_record(function () { return 0; });
}
exports.blank_stats = blank_stats;
var Item = /** @class */ (function () {
    function Item() {
        this.name = "";
        this.id = -1;
        this.stats = init_trait_record(function () { return 0; });
        //applies unique effects if overridden
        this.special_effect = function () { };
    }
    return Item;
}());
exports.Item = Item;
//user selected options describing a build
var BuildConfig = /** @class */ (function () {
    function BuildConfig() {
        this.items = [null, null, null, null, null, null];
        this.level = 1;
        this.ability_rank = [0, 0, 0, 0];
    }
    return BuildConfig;
}());
exports.BuildConfig = BuildConfig;
var Ability = /** @class */ (function () {
    function Ability() {
    }
    return Ability;
}());
exports.Ability = Ability;
var ChampionStat = /** @class */ (function () {
    function ChampionStat() {
        this.base = 0;
        //determines how fast a stat grows as levels are gained
        this.growth = 0;
    }
    return ChampionStat;
}());
exports.ChampionStat = ChampionStat;
var Champion = /** @class */ (function () {
    function Champion() {
        this.name = "";
        this.id = -1;
        //determines what "mp" describes (mana/energy)
        this.mp_type = ResourceType.NONE;
        this.stats = init_trait_record(function () { return new ChampionStat(); });
        this.abilities = [null, null, null, null];
    }
    return Champion;
}());
exports.Champion = Champion;
function config_to_code(config) {
    var serial = "";
    serial += String.fromCharCode(config.champion.id);
    for (var i = 0; i < 6; i++) {
        if (config.items[i] == null) {
            serial += String.fromCharCode(0) + String.fromCharCode(0);
        }
        else {
            serial += String.fromCharCode(config.items[i].id >> 8) + String.fromCharCode(config.items[i].id & 255);
        }
    }
    serial += String.fromCharCode(config.level);
    for (var i = 0; i < 4; i++) {
        serial += String.fromCharCode(config.ability_rank[i]);
    }
    return btoa(serial);
}
exports.config_to_code = config_to_code;
function code_to_config(code) {
    var config = new BuildConfig();
    var serial = atob(code);
    var idx = 0;
    config.champion = loader.champions[serial.charCodeAt(idx++)];
    for (var i = 0; i < 6; i++) {
        var id = serial.charCodeAt(idx++) << 8 | serial.charCodeAt(idx++);
        config.items[i] = loader.items[id];
    }
    config.level = serial.charCodeAt(idx++);
    for (var i = 0; i < 4; i++) {
        config.ability_rank[i] = serial.charCodeAt(idx++);
    }
    return config;
}
exports.code_to_config = code_to_config;
