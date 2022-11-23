interface Bird {
    fly(): void;
    makeSound(): void;
}

class Sparrow implements Bird {
    fly(): void {
        console.log("Flying");
    }
    makeSound(): void {
        console.log("Chirp Chirp");
    }
}

interface ToyDuck {
    squeak(): void;
}

class PlasticDuck implements ToyDuck {
    squeak(): void {
        console.log("Squeak");
    }
}

class BirdAdapter implements ToyDuck {
    private bird: Bird;

    constructor(bird: Bird) {
        this.bird = bird;
    }

    squeak(): void {
        this.bird.makeSound();
    }
}

const sparrow: Sparrow = new Sparrow();
const toyDuck: ToyDuck = new PlasticDuck();

const birdAdapter: BirdAdapter = new BirdAdapter(sparrow);

console.log("Sparrow:");
sparrow.fly();
sparrow.makeSound();

console.log("ToyDuck:");
toyDuck.squeak();

console.log("BirdAdapter:");
birdAdapter.squeak();
