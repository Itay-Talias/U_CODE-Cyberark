import Mammal from "../Mammal";
import Food from "../../Food";

class Whale extends Mammal {
    constructor(name: string) {
        super(12, name, new Food("plankton", 2000, "kg"), "Whale");
    }
}

export default Whale;
