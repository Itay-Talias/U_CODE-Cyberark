import Bird from "../Bird";
import Food from "../../Food";

class Owl extends Bird {
    constructor(name: string) {
        super(6, name, new Food("worms", 100, "g"), "Owl");
    }
}

export default Owl;
