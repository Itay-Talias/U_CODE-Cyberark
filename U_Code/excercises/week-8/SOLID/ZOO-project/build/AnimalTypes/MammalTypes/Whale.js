"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mammal_1 = __importDefault(require("../Mammal"));
const Food_1 = __importDefault(require("../../Food"));
class Whale extends Mammal_1.default {
    constructor(name) {
        super(12, name, new Food_1.default("plankton", 2000, "kg"), "Whale");
    }
}
exports.default = Whale;
