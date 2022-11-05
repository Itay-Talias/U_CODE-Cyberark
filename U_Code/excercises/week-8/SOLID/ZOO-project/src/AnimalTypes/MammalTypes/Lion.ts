import Mammal from "../Mammal";
import Food from "../../Food";

class Lion extends Mammal {
    constructor(name: string) {
        super(4, name, new Food("meat", 6, "kg"), "Lion");
    }
}

export default Lion;
