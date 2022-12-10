"use strict";
exports.__esModule = true;
exports.get_damage_per_second = void 0;
var datatypes_1 = require("./datatypes");
function leveled_stat(stat, level) {
    //from https://leagueoflegends.fandom.com/wiki/Champion_statistic#Increasing_Statistics
    return stat.base + stat.growth * (level - 1) * (0.7025 + 0.0175 * (level - 1));
}
function get_build_stats(config) {
    var stats = (0, datatypes_1.blank_stats)();
    //get leveled stats
    for (var t in datatypes_1.traits) {
        stats[datatypes_1.traits[t]] = leveled_stat(config.champion.stats[datatypes_1.traits[t]], config.level);
    }
    //apply item effects
    var total_effect = new datatypes_1.Item();
    for (var _i = 0, _a = config.items; _i < _a.length; _i++) {
        var item = _a[_i];
        if (item != null) {
            for (var t in datatypes_1.traits) {
                total_effect.stats[datatypes_1.traits[t]] += item.stats[datatypes_1.traits[t]];
            }
        }
    }
    for (var t in datatypes_1.traits) {
        switch (datatypes_1.traits[t]) {
            case "HP":
            case "MP":
            case "ARMOR":
            case "MAGIC_RESIST":
            case "ATTACK_DAMAGE":
            case "ABILITY_POWER":
            case "ABILITY_HASTE":
            case "LIFE_STEAL":
            case "ARMOR_PEN":
            case "MAGIC_PEN":
            case "OMNIVAMP":
            case "PHYSICAL_VAMP":
                stats[datatypes_1.traits[t]] += total_effect.stats[datatypes_1.traits[t]];
                break;
            case "HP_REGEN":
            case "MP_REGEN":
            case "HS_POWER":
            case "CRIT_CHANCE":
            case "ATTACK_SPEED":
                stats[datatypes_1.traits[t]] *= total_effect.stats[datatypes_1.traits[t]];
        }
    }
    return stats;
}
function get_damage_per_second(config) {
    var ret = [0, 0, 0, 0];
    var stats = get_build_stats(config);
    for (var n = 0; n < 4; n++) {
        var ability = config.champion.abilities[n];
        if (ability == null || config.ability_rank[n] == 0) {
            continue;
        }
        var spell_lvl = config.ability_rank[n] - 1;
        var dmg = ability.damage[spell_lvl];
        dmg += ability.ad_boost[spell_lvl] * stats["ATTACK_DAMAGE"];
        dmg += ability.ap_boost[spell_lvl] * stats["ABILITY_POWER"];
        var cool = ability.cooldown[spell_lvl] * 100 / (100 + stats['ABILITY_HASTE']);
        ret[n] = dmg / cool;
    }
    return ret;
}
exports.get_damage_per_second = get_damage_per_second;
function get_damage_per_mana(config) {
    var ret = [0, 0, 0, 0];
    var stats = get_build_stats(config);
    for (var n = 0; n < 4; n++) {
        var ability = config.champion.abilities[n];
        if (ability == null || config.ability_rank[n] == 0) {
            continue;
        }
        var spell_lvl = config.ability_rank[n] - 1;
        var dmg = ability.damage[spell_lvl];
        dmg += ability.ad_boost[spell_lvl] * stats["ATTACK_DAMAGE"];
        dmg += ability.ap_boost[spell_lvl] * stats["ABILITY_POWER"];
        var cost = ability.cost[spell_lvl];
        ret[n] = dmg / cost;
    }
    return ret;
}
function get_mana_per_second(config) {
    var ret = [0, 0, 0, 0];
    var stats = get_build_stats(config);
    for (var n = 0; n < 4; n++) {
        var ability = config.champion.abilities[n];
        if (ability == null || config.ability_rank[n] == 0) {
            continue;
        }
        var spell_lvl = config.ability_rank[n] - 1;
        var cost = ability.cost[spell_lvl];
        var cool = ability.cooldown[spell_lvl] * 100 / (100 + stats['ABILITY_HASTE']);
        ret[n] = cost / cool;
    }
    return ret;
}
function get_sustained_dps(config) {
    var dps_arr = get_damage_per_second(config);
    var dpm_arr = get_damage_per_mana(config);
    var mps_arr = get_mana_per_second(config);
    var stats = get_build_stats(config);
    var ret = [0, 0, 0, 0];
    for (var n = 0; n < 4; n++) {
        if (mps_arr[n] > stats['MP_REGEN']) {
            ret[n] = dpm_arr[n] * stats['MP_REGEN'];
        }
        else {
            ret[n] = dps_arr[n];
        }
    }
    return ret;
}
