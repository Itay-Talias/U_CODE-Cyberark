import IAnimal from "./Animal";
import Food from "./Food";

class Fish extends IAnimal {
    lowestDepth: number;
    constructor(lowestDepth: number, name: string, food: Food, type: string) {
        super(name, food, type);
        this.lowestDepth = lowestDepth;
    }
}

export default Fish;
