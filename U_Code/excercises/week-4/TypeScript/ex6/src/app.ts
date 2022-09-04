class Numbers<ArrType> {
    arr: ArrType[];
    constructor(arrFromUser: ArrType[]) {
        this.arr = arrFromUser;
    }

    addNumber(val: ArrType) {
        this.arr.push(val);
    }

    sum(): number {
        let sum: number = 0;
        this.arr.forEach((element) => {
            if (typeof element === "string" || typeof element === "number") {
                sum += this.getNumValue(element);
            }
        });
        return sum;
    }

    getNumValue(val: string | number): number {
        if (typeof val === "string") {
            const num: number = parseInt(val);
            return !isNaN(num) ? num : 0;
        } else {
            return val;
        }
    }
}

const numbers1: Numbers<string> = new Numbers<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: Numbers<number> = new Numbers<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
