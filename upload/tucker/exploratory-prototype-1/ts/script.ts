


async function list_item_props(){
    var all_stats={};
    var all_item_data=await get_dragon_data("item.json");
    console.log(all_item_data);
    for (var key of Object.keys(all_item_data.data)){
        var item_data=all_item_data.data[key];
        var stats=Object.keys(item_data.stats);
        for(var stat of stats){
            all_stats[stat]=0;
        }
    }
    for(var stat of Object.keys(all_stats)){
        console.log(stat);
    }
}

function show_example(){
    fake_champion();
    fake_items();

    var config:BuildConfig=new BuildConfig();
    config.champion=champions["Ashe"];
    config.spell_levels[1]=1;

    console.log(get_build_stats(config));
    console.log(get_mana_per_second(config));
    console.log(get_sustained_dps(config));

    config.level=5;
    config.spell_levels[1]=3;

    console.log(get_build_stats(config));
    console.log(get_mana_per_second(config));
    console.log(get_sustained_dps(config));

    config.items[0]=items["AmplifyingTome"];
    config.items[1]=items["GlacialBuckler"];
    config.items[2]=items["Stormrazor"];

    console.log(get_build_stats(config));
    console.log(get_mana_per_second(config));
    console.log(get_sustained_dps(config));
}
