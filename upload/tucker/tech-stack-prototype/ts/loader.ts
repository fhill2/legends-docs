import {Item,Champion} from "./datatypes";
import fs from 'fs';

export var champions:Array<Champion>;
export var items:Array<Item>;


function num_or_zero(num:number){
    if(num!=undefined){
        return num;
    }
    return 0;
}

export function load_items(){
    items=[null];
    fs.readFile("data/items.json",(err,buff)=>{
        var data=JSON.parse(buff.toString());
        var keys=Object.keys(data);
        for(var k=0;k<keys.length;k++){
            var entry=keys[k];
            var item=new Item();
            item.name=entry;
            item.id=items.length;


            item.stats["HP"]            = num_or_zero( data[entry].health as number                      );
            item.stats["MP"]            = num_or_zero( data[entry].mana as number                        );
            item.stats["ABILITY_HASTE"] = num_or_zero( data[entry]['ability haste'] as number            );
            item.stats["MAGIC_RESIST"]  = num_or_zero( data[entry]['magic resistance'] as number         );
            item.stats["HP_REGEN"]      = num_or_zero( data[entry]['base health regeneration'] as number );
            item.stats["MP_REGEN"]      = num_or_zero( data[entry]['base mana regeneration'] as number   );
            item.stats["ARMOR"]         = num_or_zero( data[entry].armor as number                       );
            item.stats["ABILITY_POWER"] = num_or_zero( data[entry]['ability power'] as number            );
            item.stats["HS_POWER"]      = num_or_zero( data[entry]['heal and shield power'] as number    );
            item.stats["CRIT_CHANCE"]   = num_or_zero( data[entry]['critical strike chance'] as number   );
            item.stats["ATTACK_DAMAGE"] = num_or_zero( data[entry]['attack damage'] as number            );
            item.stats["ATTACK_SPEED"]  = num_or_zero( data[entry]['attack speed'] as number             );
            item.stats["LIFE_STEAL"]    = num_or_zero( data[entry]['life steal'] as number               );
            item.stats["MAGIC_PEN"]     = num_or_zero( data[entry]['magic penetration'] as number        );
            item.stats["ARMOR_PEN"]     = num_or_zero( data[entry]['armor penetration'] as number        );
            item.stats["OMNIVAMP"]      = num_or_zero( data[entry]['omnivamp'] as number                 );
            item.stats["PHYSICAL_VAMP"] = num_or_zero( data[entry]['physical vamp'] as number            );


            items.push(item);
        }
    });
}



export function load_champions(){
    champions=[null];
    fs.readFile("data/champions.json",(err,buff)=>{
        var data=JSON.parse(buff.toString()).data;
        var keys=Object.keys(data);
        for(var k=0;k<keys.length;k++){
            var entry=keys[k];
            if(data[entry]==undefined){
                continue;
            }
            var champion=new Champion();
            champion.name=data[entry].name;
            champion.id=champions.length;
            //TODO: read stats
            champions.push(champion);
        }
    });
}


