"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fish_1 = __importDefault(require("../Fish"));
const Food_1 = __importDefault(require("../../Food"));
class Clown extends Fish_1.default {
    constructor(name) {
        super(200, name, new Food_1.default("algae", 3, "g"), "Clown");
    }
}
exports.default = Clown;
