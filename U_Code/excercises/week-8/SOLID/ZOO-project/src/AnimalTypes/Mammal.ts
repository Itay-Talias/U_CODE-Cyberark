import IAnimal from "../Animal";
import Food from "../Food";

class Mammal extends IAnimal {
    private _durationOfPregnancy: number;
    constructor(
        durationOfPregnancy: number,
        name: string,
        food: Food,
        type: string
    ) {
        super(name, food, type);
        this._durationOfPregnancy = durationOfPregnancy;
    }
    public ToString(): string {
        return `${super.ToString()}, Duration Of Pregnancy: ${
            this._durationOfPregnancy
        } \n `;
    }
}

export default Mammal;
