"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_1 = __importDefault(require("../Bird"));
const Food_1 = __importDefault(require("../../Food"));
class Goose extends Bird_1.default {
    constructor(name) {
        super(8, name, new Food_1.default("seeds", 1, "kg"), "Goose");
    }
}
exports.default = Goose;
