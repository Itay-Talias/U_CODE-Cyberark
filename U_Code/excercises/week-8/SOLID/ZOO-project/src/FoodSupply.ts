class FoodSupply {
    private _amounts: Map<string, number>;
    constructor() {
        this._amounts = new Map([
            ["meat", 0],
            ["plankton", 0],
            ["algae", 0],
            ["seeds", 0],
            ["worms", 0],
        ]);
    }
    public get Amount() {
        return this._amounts;
    }
    public SetFood(type: string, amount: number) {
        this._amounts.set(type, amount);
    }
}

export default FoodSupply;
