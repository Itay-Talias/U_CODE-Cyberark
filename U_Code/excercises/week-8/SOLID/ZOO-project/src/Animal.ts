import Food from "./Food";
import FoodSupply from "./Foodsupply";

abstract class Animal {
    private _name: string;
    private _food: Food;
    private _type: string;
    constructor(name: string, food: Food, type: string) {
        this._food = food;
        this._name = name;
        this._type = type;
    }
    public get Name(): string {
        return this._name;
    }
    public get Food(): Food {
        return this._food;
    }
    public get Type(): string {
        return this._type;
    }
    public FeedAnimal(foodSupply: FoodSupply) {
        const foodAmount = foodSupply?.Amount?.get(this.Food.Type) ?? 0;
        if (foodAmount < this.Food.DailyQuantity) {
            throw "You don't have enough food";
        }
    }

    public ToString(): string {
        return `Name: ${this._name}, Food: ${this._food}, Type: ${this._type}`;
    }
}

export default Animal;
