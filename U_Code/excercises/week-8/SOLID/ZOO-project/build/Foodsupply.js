"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FoodSupply {
    constructor() {
        this._amounts = new Map([
            ["meat", 0],
            ["plankton", 0],
            ["algae", 0],
            ["seeds", 0],
            ["worms", 0],
        ]);
    }
    get Amount() {
        return this._amounts;
    }
    SetFood(type, amount) {
        this._amounts.set(type, amount);
    }
}
exports.default = FoodSupply;
