class Human {
    constructor(name, age, isFriendly) {
        this.name = name;
        this.age = age;
        this.isFriendly = isFriendly;
    }
}

const person = new Human("itay", 25, true);

console.log(person);

class Animal {
    constructor(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
        this.children = [];
    }

    giveBirth(name) {
        console.log("Boom. Birthed " + name);
        this.children.push(name);
    }
}

const cat = new Animal("MOLLY", 4);
cat.giveBirth("Dolly");
console.log(cat.children);

class Vehicle {
    static carsSold = 0;
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel;
        Vehicle.carsSold++;
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive");
        }
        this._speed = speed;
    }

    get fuel() {
        return this._fuel;
    }

    set fuel(amount) {
        if (amount < 0 || amount > 150) {
            return console.log("fuel must be between 0 to 150");
        }
        this._fuel = amount;
    }

    get speed() {
        return this._speed;
    }

    static getIno() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }

    static calculateMoney() {
        console.log(`Made ${Vehicle.carsSold * 30000} dollars`);
    }
}

Vehicle.getIno();
Vehicle.getIno();
Vehicle.calculateMoney();
console.log(Vehicle.carsSold);
const v = new Vehicle(10, 10, 20);
Vehicle.calculateMoney();

Vehicle.getIno();

const v2 = new Vehicle(10, 10, 20);
Vehicle.calculateMoney();

Vehicle.getIno();

v2.speed = -2;
console.log(v2.speed);
