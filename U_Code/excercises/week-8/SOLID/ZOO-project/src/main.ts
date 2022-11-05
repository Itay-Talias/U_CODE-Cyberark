import Goose from "./AnimalTypes/BirdsTypes/Goose";
import Lion from "./AnimalTypes/MammalTypes/Lion";
import Whale from "./AnimalTypes/MammalTypes/Whale";
import Clown from "./AnimalTypes/FishTypes/Clown";
import Zoo from "./Zoo";
const zoo = new Zoo();

zoo.AddAnimal(new Lion("Simba"));
zoo.AddAnimal(new Lion("Nala"));
zoo.AddAnimal(new Whale("Willy"));
zoo.AddAnimal(new Goose("Akka"));
zoo.AddAnimal(new Clown("Nemo"));
zoo.AddAnimal(new Clown("Marlin"));

console.log(zoo.ToString());
