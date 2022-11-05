import IAnimal from "../Animal";
import Food from "../Food";

class Fish extends IAnimal {
    private _lowestDepth: number;
    constructor(lowestDepth: number, name: string, food: Food, type: string) {
        super(name, food, type);
        this._lowestDepth = lowestDepth;
    }
    public ToString(): string {
        return `${super.ToString()}, Lowest Depth: ${this._lowestDepth} \n`;
    }
}

export default Fish;
