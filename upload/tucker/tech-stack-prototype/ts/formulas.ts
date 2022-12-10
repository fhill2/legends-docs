
import {traits,ChampionStat,BuildConfig,BuildStats,Item,blank_stats} from "./datatypes";

function leveled_stat(stat:ChampionStat,level:number):number{
    //from https://leagueoflegends.fandom.com/wiki/Champion_statistic#Increasing_Statistics
    return stat.base+stat.growth*(level-1)*(0.7025+0.0175*(level-1));
}

function get_build_stats(config:BuildConfig):BuildStats{
    var stats:BuildStats=blank_stats();

    //get leveled stats
    for(var t in traits){
        stats[traits[t]]=leveled_stat(config.champion.stats[traits[t]],config.level);
    }

    //apply item effects
    var total_effect:Item=new Item();
    for(const item of config.items){
        if(item!=null){
            for(var t in traits){
                total_effect.stats[traits[t]]+=item.stats[traits[t]];
            }
        }
    }

    for(var t in traits){
        switch(traits[t]){
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
                stats[traits[t]]+=total_effect.stats[traits[t]];
                break;
            case "HP_REGEN":
            case "MP_REGEN":
            case "HS_POWER":
            case "CRIT_CHANCE":
            case "ATTACK_SPEED":
                stats[traits[t]]*=total_effect.stats[traits[t]];
        }
    }

    return stats;
}

export function get_damage_per_second(config:BuildConfig):number[]{
    var ret=[0,0,0,0];
    var stats=get_build_stats(config);
    for(var n=0;n<4;n++){
        var ability=config.champion.abilities[n];
        if(ability==null||config.ability_rank[n]==0){
            continue;
        }
        var spell_lvl=config.ability_rank[n]-1;
        var dmg=ability.damage[spell_lvl];
        dmg+=ability.ad_boost[spell_lvl]*stats["ATTACK_DAMAGE"];
        dmg+=ability.ap_boost[spell_lvl]*stats["ABILITY_POWER"];
        var cool=ability.cooldown[spell_lvl]*100/(100+stats['ABILITY_HASTE']);
        ret[n]=dmg/cool;
    }
    return ret;
}

function get_damage_per_mana(config:BuildConfig):number[]{
    var ret=[0,0,0,0];
    var stats=get_build_stats(config);
    for(var n=0;n<4;n++){
        var ability=config.champion.abilities[n];
        if(ability==null||config.ability_rank[n]==0){
            continue;
        }
        var spell_lvl=config.ability_rank[n]-1;
        var dmg=ability.damage[spell_lvl];
        dmg+=ability.ad_boost[spell_lvl]*stats["ATTACK_DAMAGE"];
        dmg+=ability.ap_boost[spell_lvl]*stats["ABILITY_POWER"];
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
        if(ability==null||config.ability_rank[n]==0){
            continue;
        }
        var spell_lvl=config.ability_rank[n]-1;
        var cost=ability.cost[spell_lvl];
        var cool=ability.cooldown[spell_lvl]*100/(100+stats['ABILITY_HASTE']);
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
        if(mps_arr[n]>stats['MP_REGEN']){
            ret[n]=dpm_arr[n]*stats['MP_REGEN'];
        }else{
            ret[n]=dps_arr[n];
        }
    }
    return ret;
}
