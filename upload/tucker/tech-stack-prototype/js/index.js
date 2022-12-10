"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var ejs_1 = __importDefault(require("ejs"));
var fs_1 = __importDefault(require("fs"));
var loader = __importStar(require("./loader"));
var datatypes_1 = require("./datatypes");
var formulas_1 = require("./formulas");
var app = (0, express_1["default"])();
var port = 8888;
var template;
fs_1["default"].readFile("templates/template.ejs", function (err, data) {
    template = data.toString();
});
loader.load_items();
loader.load_champions();
function random_config() {
    var config = new datatypes_1.BuildConfig();
    config.champion = loader.champions[Math.floor(Math.random() * (loader.champions.length - 1) + 1)];
    config.level = Math.floor(Math.random() * 20);
    for (var i = 0; i < 6; i++) {
        config.items[i] = loader.items[Math.floor(Math.random() * loader.items.length)];
    }
    for (var i = 0; i < 4; i++) {
        config.ability_rank[i] = Math.floor(Math.random() * 6);
    }
    return config;
}
app.get("/", function (req, res) {
    console.log(loader.items);
    if (req.query.config != undefined) {
        var config = (0, datatypes_1.code_to_config)(req.query.config);
        var data = config;
        data.dps = (0, formulas_1.get_damage_per_second)(config);
        var html = ejs_1["default"].render(template, data);
        res.send(html);
    }
    else {
        var config = random_config();
        res.redirect("?config=" + (0, datatypes_1.config_to_code)(config));
    }
});
app.listen(port, function () { return console.log("Example app listening on port ".concat(port, "!")); });
