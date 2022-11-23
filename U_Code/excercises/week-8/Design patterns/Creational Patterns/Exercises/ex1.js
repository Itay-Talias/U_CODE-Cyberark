"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Bus"] = 0] = "Bus";
    VehicleType[VehicleType["Plane"] = 1] = "Plane";
    VehicleType[VehicleType["Taxi"] = 2] = "Taxi";
    VehicleType[VehicleType["Boat"] = 3] = "Boat";
})(VehicleType || (VehicleType = {}));
class Passenger {
    constructor(name, favoriteVehicle) {
        this._name = name;
        this._favoriteVehicle = favoriteVehicle;
    }
    get name() {
        return this._name;
    }
    get favoriteVehicle() {
        return this._favoriteVehicle;
    }
}
class Bus {
    transport(passenger) {
        console.log(`${passenger.name} passed successfully on the ${this.constructor.name} `);
    }
}
class Plane {
    transport(passenger) {
        console.log(`${passenger.name} passed successfully on the ${this.constructor.name} `);
    }
}
class Taxi {
    transport(passenger) {
        console.log(`${passenger.name} passed successfully on the ${this.constructor.name} `);
    }
}
class Boat {
    transport(passenger) {
        console.log(`${passenger.name} passed successfully on the ${this.constructor.name} `);
    }
}
class VehicleFactory {
    constructor() {
        this.VehicleConstructor = {
            [VehicleType.Boat]: Boat,
            [VehicleType.Bus]: Bus,
            [VehicleType.Plane]: Plane,
            [VehicleType.Taxi]: Taxi,
        };
    }
    static getInstance() {
        if (!VehicleFactory.instance) {
            VehicleFactory.instance = new VehicleFactory();
        }
        return VehicleFactory.instance;
    }
    createVehicle(type) {
        return new this.VehicleConstructor[type]();
    }
}
class TravelAgency {
    constructor() {
        this.vehicles = new Map([
            [VehicleType.Boat, 3],
            [VehicleType.Bus, 4],
            [VehicleType.Plane, 1],
            [VehicleType.Taxi, 8],
        ]);
        this.vehicleFactory = VehicleFactory.getInstance();
    }
    getVehicleToPassenger(passenger) {
        const numOfFavoriteVehicle = this.vehicles.get(passenger.favoriteVehicle) || 0;
        if (numOfFavoriteVehicle > 0) {
            this.vehicles.set(passenger.favoriteVehicle, numOfFavoriteVehicle - 1);
            return this.vehicleFactory.createVehicle(passenger.favoriteVehicle);
        }
        for (const entry of Array.from(this.vehicles.entries())) {
            if (entry[1] > 0) {
                this.vehicles.set(entry[0], entry[1] - 1);
                return this.vehicleFactory.createVehicle(entry[0]);
            }
        }
        return null;
    }
}
const t = new TravelAgency();
const p1 = new Passenger("itay", VehicleType.Boat);
const p2 = new Passenger("Dekel", VehicleType.Boat);
const p3 = new Passenger("Ohad", VehicleType.Boat);
const p4 = new Passenger("Yagel", VehicleType.Boat);
const p5 = new Passenger("Elik", VehicleType.Bus);
const p6 = new Passenger("Shalev", VehicleType.Bus);
const p7 = new Passenger("Nir", VehicleType.Taxi);
const p8 = new Passenger("Yossi", VehicleType.Plane);
const p9 = new Passenger("Shlomo", VehicleType.Plane);
const p10 = new Passenger("Yakov", VehicleType.Plane);
(_a = t.getVehicleToPassenger(p1)) === null || _a === void 0 ? void 0 : _a.transport(p1);
(_b = t.getVehicleToPassenger(p2)) === null || _b === void 0 ? void 0 : _b.transport(p2);
(_c = t.getVehicleToPassenger(p3)) === null || _c === void 0 ? void 0 : _c.transport(p3);
(_d = t.getVehicleToPassenger(p4)) === null || _d === void 0 ? void 0 : _d.transport(p4);
(_e = t.getVehicleToPassenger(p5)) === null || _e === void 0 ? void 0 : _e.transport(p5);
(_f = t.getVehicleToPassenger(p6)) === null || _f === void 0 ? void 0 : _f.transport(p6);
(_g = t.getVehicleToPassenger(p7)) === null || _g === void 0 ? void 0 : _g.transport(p7);
(_h = t.getVehicleToPassenger(p8)) === null || _h === void 0 ? void 0 : _h.transport(p8);
(_j = t.getVehicleToPassenger(p9)) === null || _j === void 0 ? void 0 : _j.transport(p9);
(_k = t.getVehicleToPassenger(p10)) === null || _k === void 0 ? void 0 : _k.transport(p10);
