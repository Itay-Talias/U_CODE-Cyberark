"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Food {
    constructor(type, dailyQuantity, units) {
        this._type = type;
        this._dailyQuantity = dailyQuantity;
        this._units = units;
    }
    get Type() {
        return this._type;
    }
    get DailyQuantity() {
        return this._dailyQuantity;
    }
    set DailyQuantity(currentQuantity) {
        this._dailyQuantity = currentQuantity;
    }
    toString() {
        return `Daily Quantity: ${this._dailyQuantity} ${this._units} , Food Type: ${this._type} `;
    }
}
exports.default = Food;
