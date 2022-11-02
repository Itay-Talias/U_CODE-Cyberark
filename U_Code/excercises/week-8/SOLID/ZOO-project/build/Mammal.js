"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IAnimal_1 = __importDefault(require("./IAnimal"));
class Mammal extends IAnimal_1.default {
    constructor(durationOfPregnancy, name, food, type) {
        super(name, food, type);
        this.durationOfPregnancy = durationOfPregnancy;
    }
}
exports.default = Mammal;
