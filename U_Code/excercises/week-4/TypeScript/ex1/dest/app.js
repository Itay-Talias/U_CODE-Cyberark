"use strict";
const sum = (arr) => {
    let sum = 0;
    if (Array.isArray(arr)) {
        arr.forEach((element) => {
            sum += element;
        });
    }
    return sum;
};
const isEven = (num) => {
    return num % 2 === 0;
};
const sum1 = sum([1, 2, 3, 4, 5]);
console.log(sum1, isEven(sum1));
const sum2 = sum([1, 3, 5, 7, 9]);
console.log(sum2, isEven(sum2));
const sum3 = sum([2, 2, 2, 2, 2, 2, 2]);
console.log(sum3, isEven(sum3));
