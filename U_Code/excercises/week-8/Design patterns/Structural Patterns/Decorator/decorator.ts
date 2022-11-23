interface IceCream {
    flavor(): void;
}

class Vanilla implements IceCream {
    flavor(): void {
        console.log("Vanilla");
    }
}

abstract class IceCreamDecorator implements IceCream {
    protected iceCream: IceCream;

    constructor(iceCream: IceCream) {
        this.iceCream = iceCream;
    }

    flavor(): void {
        this.iceCream.flavor();
    }
}

class MapleSyrupDecorator extends IceCreamDecorator {
    constructor(iceCream: IceCream) {
        super(iceCream);
    }

    flavor(): void {
        super.flavor();
        this.addMapleSyrup();
    }
    addMapleSyrup(): void {
        console.log("With maple syrup");
    }
}

console.log("Plain vanilla:");
new Vanilla().flavor();
console.log("Decorated vanilla:");
new MapleSyrupDecorator(new Vanilla()).flavor();
