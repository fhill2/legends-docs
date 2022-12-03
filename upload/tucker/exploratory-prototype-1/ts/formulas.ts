 
function leveled_stat(stat:ChampionStat,level:number):number{
    //from https://leagueoflegends.fandom.com/wiki/Champion_statistic#Increasing_Statistics
    return stat.base+stat.growth*(level-1)*(0.7025+0.0175*(level-1));
}

function add_item_mod(a:ItemModifier,b:ItemModifier):ItemModifier{
    var ret=new ItemModifier();
    for(const key of Object.keys(ret)){
        ret[key]=a[key]+b[key];
    }
    return ret;
}

function add_item(a:Item,b:Item):Item{
    var ret=new Item();
    for(const key of Object.keys(ret.mods)){
        ret.mods[key]=add_item_mod(a.mods[key],b.mods[key]);
    }
    return ret;
}

function get_build_stats(config:BuildConfig):BuildStats{
    var stats=new BuildStats;

    //get leveled stats
    stats.hp=leveled_stat(config.champion.hp,config.level);
    stats.hp_regen=leveled_stat(config.champion.hp_regen,config.level);
    stats.mp=leveled_stat(config.champion.mp,config.level);
    stats.mp_regen=leveled_stat(config.champion.mp_regen,config.level);
    stats.armor=leveled_stat(config.champion.armor,config.level);
    stats.magic_resist=leveled_stat(config.champion.magic_resist,config.level);
    stats.crit_chance=leveled_stat(config.champion.crit_chance,config.level);
    stats.attack_damage=leveled_stat(config.champion.attack_damage,config.level);
    stats.attack_speed=leveled_stat(config.champion.attack_speed,config.level);

    //apply item effects
    var total_effect:Item=new Item();
    for(const item of config.items){
        if(item!=null){
            total_effect=add_item(total_effect,item);
        }
    }

    for(const key of Object.keys(stats)){
        stats[key]=stats[key]*(1+total_effect.mods[key].mul+total_effect.mods[key].mul_perlevel*config.level)+total_effect.mods[key].add+total_effect.mods[key].add_perlevel*config.level;
    }

    return stats;
}

function get_damage_per_second(config:BuildConfig):number[]{
    var ret=[0,0,0,0];
    var stats=get_build_stats(config);
    for(var n=0;n<4;n++){
        var ability=config.champion.abilities[n];
        if(ability==null||config.spell_levels[n]==0){
            continue;
        }
        var spell_lvl=config.spell_levels[n]-1;
        var dmg=ability.damage[spell_lvl];
        dmg+=ability.ad_boost[spell_lvl]*stats.attack_damage;
        dmg+=ability.ap_boost[spell_lvl]*stats.ability_power;
        var cool=ability.cooldown[spell_lvl]*100/(100+stats.ability_haste);
        ret[n]=dmg/cool;
    }
    return ret;
}

function get_damage_per_mana(config:BuildConfig):number[]{
    var ret=[0,0,0,0];
    var stats=get_build_stats(config);
    for(var n=0;n<4;n++){
        var ability=config.champion.abilities[n];
        if(ability==null||config.spell_levels[n]==0){
            continue;
        }
        var spell_lvl=config.spell_levels[n]-1;
        var dmg=ability.damage[spell_lvl];
        dmg+=ability.ad_boost[spell_lvl]*stats.attack_damage;
        dmg+=ability.ap_boost[spell_lvl]*stats.ability_power;
        var cost=ability.cost[spell_lvl];
        ret[n]=dmg/cost;
    }
    return ret;
}

function get_mana_per_second(config:BuildConfig):number[]{
    var ret=[0,0,0,0];
    var stats=get_build_stats(config);
    for(var n=0;n<4;n++){
        var ability=config.champion.abilities[n];
        if(ability==null||config.spell_levels[n]==0){
            continue;
        }
        var spell_lvl=config.spell_levels[n]-1;
        var cost=ability.cost[spell_lvl];
        var cool=ability.cooldown[spell_lvl]*100/(100+stats.ability_haste);
        ret[n]=cost/cool;
    }
    return ret;
}

function get_sustained_dps(config:BuildConfig):number[]{
    var dps_arr=get_damage_per_second(config);
    var dpm_arr=get_damage_per_mana(config);
    var mps_arr=get_mana_per_second(config);
    var stats=get_build_stats(config);
    var ret=[0,0,0,0];
    for(var n=0;n<4;n++){
        if(mps_arr[n]>stats.mp_regen){
            ret[n]=dpm_arr[n]*stats.mp_regen;
        }else{
            ret[n]=dps_arr[n];
        }
    }
    return ret;
}
