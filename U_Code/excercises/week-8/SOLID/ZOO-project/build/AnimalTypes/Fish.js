"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("../Animal"));
class Fish extends Animal_1.default {
    constructor(lowestDepth, name, food, type) {
        super(name, food, type);
        this._lowestDepth = lowestDepth;
    }
    ToString() {
        return `${super.ToString()}, Lowest Depth: ${this._lowestDepth} \n`;
    }
}
exports.default = Fish;
