var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var dragonCDN = "http://ddragon.leagueoflegends.com/cdn";
var champions = {};
var items = {};
//a (promise to) an array of strings containing each version of data dragon available
var versions = (function () { return __awaiter(_this, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://ddragon.leagueoflegends.com/api/versions.json";
                return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                if (response.ok) {
                    return [2 /*return*/, response.json()];
                }
                else {
                    console.log("Fetch failed: " + url);
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
        }
    });
}); })();
function make_dragon_data_url(version, language, file) {
    return new URL(dragonCDN + "/" + version + "/data/" + language + "/" + file);
}
function get_dragon_data(file) {
    return __awaiter(this, void 0, void 0, function () {
        var url, _a, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = make_dragon_data_url;
                    return [4 /*yield*/, versions];
                case 1:
                    url = _a.apply(void 0, [(_b.sent())[0], "en_US", file]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    response = _b.sent();
                    if (response.ok) {
                        return [2 /*return*/, response.json()];
                    }
                    else {
                        console.log("Fetch failed: " + url);
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function fake_items() {
    items["AmplifyingTome"] = new Item();
    items["AmplifyingTome"].mods.ability_power.add = 20;
    items["GlacialBuckler"] = new Item();
    items["GlacialBuckler"].mods.ability_haste.add = 10;
    items["GlacialBuckler"].mods.mp.add = 250;
    items["GlacialBuckler"].mods.armor.add = 20;
    items["Stormrazor"] = new Item();
    items["Stormrazor"].mods.attack_damage.add = 40;
    items["Stormrazor"].mods.attack_speed.mul = 0.15;
    items["Stormrazor"].mods.crit_chance.mul = 0.2;
}
function fake_champion() {
    champions["Ashe"] = new Champion();
    var ashe = champions["Ashe"];
    ashe.mp_type = ResourceType.MANA;
    ashe.hp.base = 640;
    ashe.hp.growth = 101;
    ashe.mp.base = 280;
    ashe.mp.growth = 32;
    ashe.hp_regen.base = 3.5;
    ashe.hp_regen.growth = 0.55;
    ashe.mp_regen.base = 7;
    ashe.mp_regen.growth = 0.4;
    ashe.armor.base = 26;
    ashe.armor.growth = 4.6;
    ashe.attack_damage.base = 59;
    ashe.attack_damage.growth = 2.95;
    ashe.magic_resist.base = 30;
    ashe.magic_resist.growth = 1.3;
    ashe.attack_speed.base = 0.658;
    ashe.attack_speed.growth = 3.33;
    var volley = new Ability();
    volley.cooldown = [18, 14.5, 11, 7.5, 4];
    volley.cost = [75, 70, 65, 60, 55];
    volley.damage = [20, 35, 50, 65, 80];
    volley.ap_boost = [0, 0, 0, 0, 0];
    volley.ad_boost = [1, 1, 1, 1, 1];
    ashe.abilities[1] = volley;
}
