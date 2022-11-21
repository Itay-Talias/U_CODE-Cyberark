"use strict";
class Oven {
    constructor(id) {
        this.id = id;
    }
    bakeBread() {
        console.log("Baking bread...");
    }
    accept(visitor) {
        visitor.visitOven(this);
    }
    toString() {
        return `Oven{id=${this.id}}`;
    }
}
class CleaningVisitor {
    visitOven(oven) {
        console.log(`Cleaning the oven ${oven}`);
    }
}
class RepairingVisitor {
    visitOven(oven) {
        console.log(`Repairing the oven ${oven}`);
    }
}
const appliances = [];
appliances.push(new Oven(1));
const cleaningVisitor = new CleaningVisitor();
const repairingVisitor = new RepairingVisitor();
for (const appliance of appliances) {
    appliance.accept(cleaningVisitor);
    appliance.accept(repairingVisitor);
}
