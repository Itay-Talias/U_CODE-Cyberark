"use strict";
function sum(input) {
    if (typeof input === "number") {
        return input;
    }
    else if (typeof input == "string") {
        return isNaN(parseInt(input)) ? 0 : parseInt(input);
    }
    else {
        return sumOfArr(input);
    }
}
function sumOfArr(arr) {
    let sum = 0;
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            sum = 0;
        }
        else if (typeof arr[0] === "number") {
            arr.forEach((element) => (sum += element));
        }
        else {
            arr.forEach((element) => (sum += isNaN(parseInt(element)) ? 0 : parseInt(element)));
        }
    }
    return sum;
}
console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));
console.log(isNaN(parseInt("23")) ? 0 : 1);
