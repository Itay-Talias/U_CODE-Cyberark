import Food from "./Food";

class IAnimal {
    name: String;
    food: Food;
    type: string;
    constructor(name: string, food: Food, type: string) {
        this.food = food;
        this.name = name;
        this.type = type;
    }
}

export default IAnimal;
