"use strict";
class Vanilla {
    flavor() {
        console.log("Vanilla");
    }
}
class IceCreamDecorator {
    constructor(iceCream) {
        this.iceCream = iceCream;
    }
    flavor() {
        this.iceCream.flavor();
    }
}
class MapleSyrupDecorator extends IceCreamDecorator {
    constructor(iceCream) {
        super(iceCream);
    }
    flavor() {
        super.flavor();
        this.addMapleSyrup();
    }
    addMapleSyrup() {
        console.log("With maple syrup");
    }
}
console.log("Plain vanilla:");
new Vanilla().flavor();
console.log("Decorated vanilla:");
new MapleSyrupDecorator(new Vanilla()).flavor();
