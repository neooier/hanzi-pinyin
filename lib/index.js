"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinyin = pinyin;
exports.detailedPinyin = detailedPinyin;
exports.all = all;
var unidecode_1 = __importDefault(require("unidecode"));
var dict_json_1 = __importDefault(require("./dict.json"));
var dict = dict_json_1.default;
function pinyin(char) {
    var _a;
    return (_a = dict[char]) === null || _a === void 0 ? void 0 : _a.map(function (p) { return (0, unidecode_1.default)(p); });
}
function detailedPinyin(char) {
    return dict[char];
}
function all() {
    return dict;
}
