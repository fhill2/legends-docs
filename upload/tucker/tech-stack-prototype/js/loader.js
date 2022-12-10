"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.load_champions = exports.load_items = exports.items = exports.champions = void 0;
var datatypes_1 = require("./datatypes");
var fs_1 = __importDefault(require("fs"));
function num_or_zero(num) {
    if (num != undefined) {
        return num;
    }
    return 0;
}
function load_items() {
    exports.items = [null];
    fs_1["default"].readFile("data/items.json", function (err, buff) {
        var data = JSON.parse(buff.toString());
        var keys = Object.keys(data);
        for (var k = 0; k < keys.length; k++) {
            var entry = keys[k];
            var item = new datatypes_1.Item();
            item.name = entry;
            item.id = exports.items.length;
            //TODO: read stats
            item.stats["HP"] = num_or_zero(data[entry].health);
            item.stats["MP"] = num_or_zero(data[entry].mana);
            item.stats["ABILITY_HASTE"] = num_or_zero(data[entry]['ability haste']);
            item.stats["MAGIC_RESIST"] = num_or_zero(data[entry]['magic resistance']);
            item.stats["HP_REGEN"] = num_or_zero(data[entry]['base health regeneration']);
            item.stats["MP_REGEN"] = num_or_zero(data[entry]['base mana regeneration']);
            item.stats["ARMOR"] = num_or_zero(data[entry].armor);
            item.stats["ABILITY_POWER"] = num_or_zero(data[entry]['ability power']);
            item.stats["HS_POWER"] = num_or_zero(data[entry]['heal and shield power']);
            item.stats["CRIT_CHANCE"] = num_or_zero(data[entry]['critical strike chance']);
            item.stats["ATTACK_DAMAGE"] = num_or_zero(data[entry]['attack damage']);
            item.stats["ATTACK_SPEED"] = num_or_zero(data[entry]['attack speed']);
            item.stats["LIFE_STEAL"] = num_or_zero(data[entry]['life steal']);
            item.stats["MAGIC_PEN"] = num_or_zero(data[entry]['magic penetration']);
            item.stats["ARMOR_PEN"] = num_or_zero(data[entry]['armor penetration']);
            item.stats["OMNIVAMP"] = num_or_zero(data[entry]['omnivamp']);
            item.stats["PHYSICAL_VAMP"] = num_or_zero(data[entry]['physical vamp']);
            exports.items.push(item);
        }
    });
}
exports.load_items = load_items;
function load_champions() {
    exports.champions = [null];
    fs_1["default"].readFile("data/champions.json", function (err, buff) {
        var data = JSON.parse(buff.toString()).data;
        var keys = Object.keys(data);
        for (var k = 0; k < keys.length; k++) {
            var entry = keys[k];
            if (data[entry] == undefined) {
                continue;
            }
            var champion = new datatypes_1.Champion();
            champion.name = data[entry].name;
            champion.id = exports.champions.length;
            //TODO: read stats
            exports.champions.push(champion);
        }
    });
}
exports.load_champions = load_champions;
