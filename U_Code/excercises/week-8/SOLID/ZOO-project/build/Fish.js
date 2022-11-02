"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IAnimal_1 = __importDefault(require("./IAnimal"));
class Fish extends IAnimal_1.default {
    constructor(lowestDepth, name, food, type) {
        super(name, food, type);
        this.lowestDepth = lowestDepth;
    }
}
exports.default = Fish;
