"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, food, type) {
        this._food = food;
        this._name = name;
        this._type = type;
    }
    get Name() {
        return this._name;
    }
    get Food() {
        return this._food;
    }
    get Type() {
        return this._type;
    }
    FeedAnimal(foodSupply) {
        var _a, _b;
        const foodAmount = (_b = (_a = foodSupply === null || foodSupply === void 0 ? void 0 : foodSupply.Amount) === null || _a === void 0 ? void 0 : _a.get(this.Food.Type)) !== null && _b !== void 0 ? _b : 0;
        if (foodAmount < this.Food.DailyQuantity) {
            throw "You don't have enough food";
        }
    }
    ToString() {
        return `Name: ${this._name}, Food: ${this._food}, Type: ${this._type}`;
    }
}
exports.default = Animal;
