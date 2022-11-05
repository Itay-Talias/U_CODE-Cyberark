"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("../Animal"));
class Mammal extends Animal_1.default {
    constructor(durationOfPregnancy, name, food, type) {
        super(name, food, type);
        this._durationOfPregnancy = durationOfPregnancy;
    }
    ToString() {
        return `${super.ToString()}, Duration Of Pregnancy: ${this._durationOfPregnancy} \n `;
    }
}
exports.default = Mammal;
