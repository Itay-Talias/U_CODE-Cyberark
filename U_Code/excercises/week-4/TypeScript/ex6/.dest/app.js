"use strict";
class Numbers {
    constructor(arrFromUser) {
        this.arr = arrFromUser;
    }
    addNumber(val) {
        this.arr.push(val);
    }
    sum() {
        let sum = 0;
        this.arr.forEach((element) => {
            if (typeof element === "string" || typeof element === "number") {
                sum += this.getNumValue(element);
            }
        });
        return sum;
    }
    getNumValue(val) {
        if (typeof val === "string") {
            const num = parseInt(val);
            return !isNaN(num) ? num : 0;
        }
        else {
            return val;
        }
    }
}
const numbers1 = new Numbers(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
const numbers2 = new Numbers([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
