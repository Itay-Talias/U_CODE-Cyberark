"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Foodsupply_1 = __importDefault(require("./Foodsupply"));
class Zoo {
    constructor() {
        this._animalArr = [];
        this._foodSupply = new Foodsupply_1.default();
    }
    AddAnimal(newAnimal) {
        this._animalArr.push(newAnimal);
    }
    FeedAnimals() {
        for (const animal of this._animalArr) {
            animal.FeedAnimal(this._foodSupply);
        }
    }
    ToString() {
        let str = "";
        for (const animal of this._animalArr) {
            str += animal.ToString();
        }
        return str;
    }
}
exports.default = Zoo;
