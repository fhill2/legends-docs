
import * as loader from "./loader";

export enum ResourceType{NONE,MANA,ENERGY,HEALTH};

export const traits=[
    "HP","HP_REGEN","MP","MP_REGEN","ARMOR","MAGIC_RESIST","HS_POWER",
    "CRIT_CHANCE","CRIT_DAMAGE","ATTACK_DAMAGE","ATTACK_SPEED","ABILITY_POWER","ABILITY_HASTE",
    "LIFE_STEAL","ARMOR_PEN","MAGIC_PEN","OMNIVAMP","PHYSICAL_VAMP"
] as const;
export type Trait=typeof traits[number];
function init_trait_record<Type>(def_val:()=>Type):Record<Trait,Type>{
    var ret:Record<string,Type>={};
    for(var t in traits){
        ret[traits[t]]=def_val();
    }
    return ret;
}

export type BuildStats=Record<Trait,number>;
export function blank_stats():BuildStats{
    return init_trait_record<number>(()=>0);
}

export class Item{
    name:string="";
    id:number=-1;

    stats:Record<Trait,number>=init_trait_record<number>(()=>0);

    //applies unique effects if overridden
    special_effect:(a:BuildConfig,b:BuildStats)=>void=()=>{};
}


//user selected options describing a build
export class BuildConfig{
    champion:Champion;
    items:Item[]=[null,null,null,null,null,null];
    level:number=1;
    ability_rank:number[]=[0,0,0,0];
}


export class Ability{
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

export class ChampionStat{
    base:number=0;
    //determines how fast a stat grows as levels are gained
    growth:number=0;
}

export class Champion{
    name:string="";
    id:number=-1;

    //determines what "mp" describes (mana/energy)
    mp_type:ResourceType=ResourceType.NONE;

    stats:Record<Trait,ChampionStat>=init_trait_record(()=>new ChampionStat());

    abilities:Ability[]=[null,null,null,null];
}










export function config_to_code(config:BuildConfig):string{

    var serial:string="";
    serial+=String.fromCharCode(config.champion.id);
    for(var i=0;i<6;i++){
        if(config.items[i]==null){
            serial+=String.fromCharCode(0)+String.fromCharCode(0);
        }else{
            serial+=String.fromCharCode(config.items[i].id >> 8)+String.fromCharCode(config.items[i].id & 255);
        }
    }
    serial+=String.fromCharCode(config.level);
    for(var i=0;i<4;i++){
        serial+=String.fromCharCode(config.ability_rank[i]);
    }

    return btoa(serial);
}

export function code_to_config(code:string):BuildConfig{

    var config=new BuildConfig();
    var serial:string=atob(code);

    var idx=0;
    config.champion=loader.champions[serial.charCodeAt(idx++)];
    for(var i=0;i<6;i++){
        var id=serial.charCodeAt(idx++)<<8 | serial.charCodeAt(idx++);
        config.items[i]=loader.items[id];
    }
    config.level=serial.charCodeAt(idx++);
    for(var i=0;i<4;i++){
        config.ability_rank[i]=serial.charCodeAt(idx++);
    }

    return config;
}
