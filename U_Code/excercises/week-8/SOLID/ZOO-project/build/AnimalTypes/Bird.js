"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("../Animal"));
class Bird extends Animal_1.default {
    constructor(wingSpan, name, food, type) {
        super(name, food, type);
        this._wingSpan = wingSpan;
    }
    get WingSpan() {
        return this.WingSpan;
    }
    ToString() {
        return `${super.ToString()}, Wing Span: ${this._wingSpan} \n`;
    }
}
exports.default = Bird;
