var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["NONE"] = 0] = "NONE";
    ResourceType[ResourceType["MANA"] = 1] = "MANA";
    ResourceType[ResourceType["ENERGY"] = 2] = "ENERGY";
    ResourceType[ResourceType["HEALTH"] = 3] = "HEALTH";
})(ResourceType || (ResourceType = {}));
;
var ItemModifier = /** @class */ (function () {
    function ItemModifier() {
        this.add = 0;
        this.mul = 0;
        this.add_perlevel = 0;
        this.mul_perlevel = 0;
    }
    return ItemModifier;
}());
var Item = /** @class */ (function () {
    function Item() {
        this.mods = {
            hp: new ItemModifier(),
            hp_regen: new ItemModifier(),
            mp: new ItemModifier(),
            mp_regen: new ItemModifier(),
            armor: new ItemModifier(),
            magic_resist: new ItemModifier(),
            hs_power: new ItemModifier(),
            crit_chance: new ItemModifier(),
            crit_damage: new ItemModifier(),
            attack_damage: new ItemModifier(),
            attack_speed: new ItemModifier(),
            ability_power: new ItemModifier(),
            ability_haste: new ItemModifier(),
            life_steal: new ItemModifier(),
            armor_penetration: new ItemModifier(),
            magic_penetration: new ItemModifier(),
            omnivamp: new ItemModifier(),
            physical_vamp: new ItemModifier()
        };
        //applies unique effects if overridden
        this.special_effect = function () { };
    }
    return Item;
}());
//user selected options describing a build
var BuildConfig = /** @class */ (function () {
    function BuildConfig() {
        this.items = [null, null, null, null, null, null];
        this.level = 1;
        this.spell_levels = [0, 0, 0, 0];
    }
    return BuildConfig;
}());
//a snapshot of a characters stats with a certain build
var BuildStats = /** @class */ (function () {
    function BuildStats() {
        this.hp = 0;
        this.hp_regen = 0;
        //may represent mana or energy (or nothing) depending on champion
        this.mp = 0;
        this.mp_regen = 0;
        //reduces incoming physical damage
        this.armor = 0;
        //reduces incoming magical damage, often referred to as "MR"
        //data dragon calls this "spellblock"
        this.magic_resist = 0;
        //increases the magnitude of incoming healing and shields
        this.hs_power = 0;
        this.crit_chance = 0;
        this.crit_damage = 0;
        //often referred to as "AD"
        this.attack_damage = 0;
        //speed of basic attacks
        this.attack_speed = 0;
        //often referred to as "AP", base is always 0
        this.ability_power = 0;
        //decreases ability cooldowns
        this.ability_haste = 0;
        //only applies to basic attacks
        this.life_steal = 0;
        this.armor_penetration = 0;
        //causes magic damage to ignore enemy MR
        this.magic_penetration = 0;
        //life steal that applies to all damage
        this.omnivamp = 0;
        //life steal that applies to all physical damage
        this.physical_vamp = 0;
    }
    return BuildStats;
}());
var Ability = /** @class */ (function () {
    function Ability() {
    }
    return Ability;
}());
var ChampionStat = /** @class */ (function () {
    function ChampionStat() {
        this.base = 0;
        //determines how fast a stat grows as levels are gained
        this.growth = 0;
    }
    return ChampionStat;
}());
var Champion = /** @class */ (function () {
    function Champion() {
        this.hp = new ChampionStat();
        this.mp = new ChampionStat();
        this.armor = new ChampionStat();
        this.magic_resist = new ChampionStat();
        this.hp_regen = new ChampionStat();
        this.mp_regen = new ChampionStat();
        this.crit_chance = new ChampionStat();
        this.attack_damage = new ChampionStat();
        this.attack_speed = new ChampionStat();
        this.abilities = [null, null, null, null];
    }
    return Champion;
}());
