import Animal from "./Animal";
import FoodSupply from "./Foodsupply";

class Zoo {
    private _animalArr: Animal[];
    private _foodSupply: FoodSupply;
    constructor() {
        this._animalArr = [] as Animal[];
        this._foodSupply = new FoodSupply();
    }
    public AddAnimal(newAnimal: Animal) {
        this._animalArr.push(newAnimal);
    }
    public FeedAnimals() {
        for (const animal of this._animalArr) {
            animal.FeedAnimal(this._foodSupply);
        }
    }
    public ToString(): string {
        let str = "";
        for (const animal of this._animalArr) {
            str += animal.ToString();
        }
        return str;
    }
}

export default Zoo;
