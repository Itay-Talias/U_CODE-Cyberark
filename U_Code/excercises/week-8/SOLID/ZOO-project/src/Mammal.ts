import IAnimal from "./Animal";
import Food from "./Food";

class Mammal extends IAnimal {
    durationOfPregnancy: number;
    constructor(
        durationOfPregnancy: number,
        name: string,
        food: Food,
        type: string
    ) {
        super(name, food, type);
        this.durationOfPregnancy = durationOfPregnancy;
    }
}

export default Mammal;
