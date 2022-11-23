"use strict";
class Sparrow {
    fly() {
        console.log("Flying");
    }
    makeSound() {
        console.log("Chirp Chirp");
    }
}
class PlasticDuck {
    squeak() {
        console.log("Squeak");
    }
}
class BirdAdapter {
    constructor(bird) {
        this.bird = bird;
    }
    squeak() {
        this.bird.makeSound();
    }
}
const sparrow = new Sparrow();
const toyDuck = new PlasticDuck();
const birdAdapter = new BirdAdapter(sparrow);
console.log("Sparrow:");
sparrow.fly();
sparrow.makeSound();
console.log("ToyDuck:");
toyDuck.squeak();
console.log("BirdAdapter:");
birdAdapter.squeak();
