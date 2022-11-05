class Food {
    private _type: string;
    private _dailyQuantity: number;
    private _units: string;
    constructor(type: string, dailyQuantity: number, units: string) {
        this._type = type;
        this._dailyQuantity = dailyQuantity;
        this._units = units;
    }

    public get Type(): string {
        return this._type;
    }

    public get DailyQuantity(): number {
        return this._dailyQuantity;
    }

    public set DailyQuantity(currentQuantity: number) {
        this._dailyQuantity = currentQuantity;
    }
    public toString(): string {
        return `Daily Quantity: ${this._dailyQuantity} ${this._units} , Food Type: ${this._type} `;
    }
}

export default Food;
