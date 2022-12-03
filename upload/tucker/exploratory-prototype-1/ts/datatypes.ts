
enum ResourceType{NONE,MANA,ENERGY,HEALTH};

class ItemModifier{
    add:number=0;
    mul:number=0;
    add_perlevel=0;
    mul_perlevel=0;
}

//functional specification and technical architecture
class Item{
    mods:Record<string,ItemModifier>={
        hp                   : new ItemModifier(),
        hp_regen             : new ItemModifier(),
        mp                   : new ItemModifier(),
        mp_regen             : new ItemModifier(),
        armor                : new ItemModifier(),
        magic_resist         : new ItemModifier(),
        hs_power             : new ItemModifier(),

        crit_chance          : new ItemModifier(),
        crit_damage          : new ItemModifier(),
        attack_damage        : new ItemModifier(),
        attack_speed         : new ItemModifier(),
        ability_power        : new ItemModifier(),
        ability_haste        : new ItemModifier(),
        life_steal           : new ItemModifier(),
        armor_penetration    : new ItemModifier(),
        magic_penetration    : new ItemModifier(),
        omnivamp             : new ItemModifier(),
        physical_vamp        : new ItemModifier()
    };

    //applies unique effects if overridden
    special_effect:(a:BuildConfig,b:BuildStats)=>void=()=>{};
}

//user selected options describing a build
class BuildConfig{
    champion:Champion;
    items:Item[]=[null,null,null,null,null,null];
    level:number=1;
    //TODO: rename this to rank
    spell_levels:number[]=[0,0,0,0];
}

//a snapshot of a characters stats with a certain build
class BuildStats{
    hp:number=0;
    hp_regen:number=0;
    //may represent mana or energy (or nothing) depending on champion
    mp:number=0;
    mp_regen:number=0;
    //reduces incoming physical damage
    armor:number=0;
    //reduces incoming magical damage, often referred to as "MR"
    //data dragon calls this "spellblock"
    magic_resist:number=0;
    //increases the magnitude of incoming healing and shields
    hs_power:number=0;

    crit_chance:number=0;
    crit_damage:number=0;
    //often referred to as "AD"
    attack_damage:number=0;
    //speed of basic attacks
    attack_speed:number=0;
    //often referred to as "AP", base is always 0
    ability_power:number=0;
    //decreases ability cooldowns
    ability_haste:number=0;
    //only applies to basic attacks
    life_steal:number=0;
    armor_penetration:number=0;
    //causes magic damage to ignore enemy MR
    magic_penetration:number=0;
    //life steal that applies to all damage
    omnivamp:number=0;
    //life steal that applies to all physical damage
    physical_vamp:number=0;
}


class Ability{
    //cooldown at each level
    cooldown:number[];
    //damage at each level
    damage:number[];
    //portion of AD added to damage at each level
    ad_boost:number[];
    //portion of AP added to damage at each level
    ap_boost:number[];
    //amount of resource (mana/energy) consumed on cast at each level
    cost:number[];
    //which resource is consumed
    cost_type:ResourceType;

    max_level:number;
}

class ChampionStat{
    base:number=0;
    //determines how fast a stat grows as levels are gained
    growth:number=0;
}

class Champion{
    name:string;

    //determines what "mp" describes (mana/energy)
    mp_type:ResourceType;

    hp             :ChampionStat = new ChampionStat();
    mp             :ChampionStat = new ChampionStat();
    armor          :ChampionStat = new ChampionStat();
    magic_resist   :ChampionStat = new ChampionStat();
    hp_regen       :ChampionStat = new ChampionStat();
    mp_regen       :ChampionStat = new ChampionStat();
    crit_chance    :ChampionStat = new ChampionStat();
    attack_damage  :ChampionStat = new ChampionStat();
    attack_speed   :ChampionStat = new ChampionStat();

    abilities:Ability[]=[null,null,null,null];
}
