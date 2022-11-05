"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Goose_1 = __importDefault(require("./AnimalTypes/BirdsTypes/Goose"));
const Lion_1 = __importDefault(require("./AnimalTypes/MammalTypes/Lion"));
const Whale_1 = __importDefault(require("./AnimalTypes/MammalTypes/Whale"));
const Clown_1 = __importDefault(require("./AnimalTypes/FishTypes/Clown"));
const Zoo_1 = __importDefault(require("./Zoo"));
const zoo = new Zoo_1.default();
zoo.AddAnimal(new Lion_1.default("Simba"));
zoo.AddAnimal(new Lion_1.default("Nala"));
zoo.AddAnimal(new Whale_1.default("Willy"));
zoo.AddAnimal(new Goose_1.default("Akka"));
zoo.AddAnimal(new Clown_1.default("Nemo"));
zoo.AddAnimal(new Clown_1.default("Marlin"));
console.log(zoo.ToString());
