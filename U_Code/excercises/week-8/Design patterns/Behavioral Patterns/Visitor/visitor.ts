interface Appliance {
    accept(visitor: Visitor): void;
}

class Oven implements Appliance {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    bakeBread(): void {
        console.log("Baking bread...");
    }

    accept(visitor: Visitor): void {
        visitor.visitOven(this);
    }

    toString(): string {
        return `Oven{id=${this.id}}`;
    }
}

interface Visitor {
    visitOven(oven: Oven): void;
}

class CleaningVisitor implements Visitor {
    visitOven(oven: Oven): void {
        console.log(`Cleaning the oven ${oven}`);
    }
}
class RepairingVisitor implements Visitor {
    visitOven(oven: Oven): void {
        console.log(`Repairing the oven ${oven}`);
    }
}

const appliances: Appliance[] = [];
appliances.push(new Oven(1));
const cleaningVisitor: CleaningVisitor = new CleaningVisitor();
const repairingVisitor: RepairingVisitor = new RepairingVisitor();

for (const appliance of appliances) {
    appliance.accept(cleaningVisitor);
    appliance.accept(repairingVisitor);
}
