import IAnimal from "./IAnimal";
import Food from "./Food";

class Bird extends IAnimal {
    wingSpan: number;
    constructor(wingSpan: number, name: string, food: Food, type: string) {
        super(name, food, type);
        this.wingSpan = wingSpan;
    }
}

export default Bird;
