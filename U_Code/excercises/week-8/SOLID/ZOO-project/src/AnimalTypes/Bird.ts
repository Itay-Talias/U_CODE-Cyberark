import IAnimal from "../Animal";
import Food from "../Food";

class Bird extends IAnimal {
    private _wingSpan: number;
    constructor(wingSpan: number, name: string, food: Food, type: string) {
        super(name, food, type);
        this._wingSpan = wingSpan;
    }
    public get WingSpan(): string {
        return this.WingSpan;
    }
    public ToString(): string {
        return `${super.ToString()}, Wing Span: ${this._wingSpan} \n`;
    }
}

export default Bird;
