import express from 'express';
import ejs from 'ejs';
import fs from 'fs';

import * as loader from './loader';
import {Trait,ChampionStat,BuildConfig,BuildStats,Item,code_to_config,config_to_code} from "./datatypes";
import {get_damage_per_second} from "./formulas";

const app:express.Application = express();
const port = 8888;

var template:string;
fs.readFile("templates/template.ejs",(err,data)=>{
    template=data.toString();
});




loader.load_items();
loader.load_champions();

function random_config():BuildConfig{
    var config=new BuildConfig();
    config.champion=loader.champions[Math.floor(Math.random()*(loader.champions.length-1)+1)];
    config.level=Math.floor(Math.random()*20);
    for(var i=0;i<6;i++){
        config.items[i]=loader.items[Math.floor(Math.random()*loader.items.length)];
    }
    for(var i=0;i<4;i++){
        config.ability_rank[i]=Math.floor(Math.random()*6);
    }
    return config;
}


app.get("/", (req, res) => {
    console.log(loader.items);
    if(req.query.config!=undefined){
        var config=code_to_config(req.query.config as string);
        var data=config as any;
        data.dps=get_damage_per_second(config);
        var html:string=ejs.render(template,data);
        res.send(html);
    }else{
        var config=random_config();
        res.redirect("?config="+config_to_code(config));
    }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
