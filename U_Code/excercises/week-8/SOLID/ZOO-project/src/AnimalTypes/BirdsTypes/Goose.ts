import Bird from "../Bird";
import Food from "../../Food";

class Goose extends Bird {
    constructor(name: string) {
        super(8, name, new Food("seeds", 1, "kg"), "Goose");
    }
}

export default Goose;
