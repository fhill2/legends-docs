const dragonCDN:string="http://ddragon.leagueoflegends.com/cdn";

var champions:Record<string,Champion>={};
var items:Record<string,Item>={};

//a (promise to) an array of strings containing each version of data dragon available
var versions:Promise<string[]>=(async()=>{
    var url:string="https://ddragon.leagueoflegends.com/api/versions.json";
    var response:Response=await fetch(url);
    if(response.ok){
        return response.json();
    }else{
        console.log("Fetch failed: "+url);
        return null;
    }
})();

function make_dragon_data_url(version:string,language:string,file:string):URL{
    return new URL(dragonCDN+"/"+version+"/data/"+language+"/"+file);
}

async function get_dragon_data(file:string){
    var url:URL=make_dragon_data_url((await versions)[0],"en_US",file);
    var response:Response=await fetch(url);
    if(response.ok){
        return response.json();
    }else{
        console.log("Fetch failed: "+url);
        return null;
    }
}



function fake_items(){
    items["AmplifyingTome"]=new Item();
    items["AmplifyingTome"].mods.ability_power.add=20;

    items["GlacialBuckler"]=new Item();
    items["GlacialBuckler"].mods.ability_haste.add=10;
    items["GlacialBuckler"].mods.mp.add=250;
    items["GlacialBuckler"].mods.armor.add=20;

    items["Stormrazor"]=new Item();
    items["Stormrazor"].mods.attack_damage.add=40;
    items["Stormrazor"].mods.attack_speed.mul=0.15;
    items["Stormrazor"].mods.crit_chance.mul=0.2;
}

function fake_champion(){
    champions["Ashe"]=new Champion();
    var ashe=champions["Ashe"];
    ashe.mp_type=ResourceType.MANA;
    ashe.hp.base=640;
    ashe.hp.growth=101;
    ashe.mp.base=280;
    ashe.mp.growth=32;
    ashe.hp_regen.base=3.5;
    ashe.hp_regen.growth=0.55;
    ashe.mp_regen.base=7;
    ashe.mp_regen.growth=0.4;
    ashe.armor.base=26;
    ashe.armor.growth=4.6;
    ashe.attack_damage.base=59;
    ashe.attack_damage.growth=2.95;
    ashe.magic_resist.base=30;
    ashe.magic_resist.growth=1.3;
    ashe.attack_speed.base=0.658;
    ashe.attack_speed.growth=3.33;

    var volley=new Ability();
    volley.cooldown=[18,14.5,11,7.5,4];
    volley.cost=[75,70,65,60,55];
    volley.damage=[20,35,50,65,80];
    volley.ap_boost=[0,0,0,0,0];
    volley.ad_boost=[1,1,1,1,1];
    ashe.abilities[1]=volley;
}
