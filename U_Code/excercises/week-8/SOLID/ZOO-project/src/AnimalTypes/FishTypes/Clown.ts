import Fish from "../Fish";
import Food from "../../Food";

class Clown extends Fish {
    constructor(name: string) {
        super(200, name, new Food("algae", 3, "g"), "Clown");
    }
}

export default Clown;
