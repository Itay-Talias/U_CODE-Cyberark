const sum = (arr: number[]): number => {
    let sum: number = 0;
    if (Array.isArray(arr)) {
        arr.forEach((element: number) => {
            sum += element;
        });
    }
    return sum;
};
const isEven = (num: number): boolean => {
    return num % 2 === 0;
};

const sum1: number = sum([1, 2, 3, 4, 5]);
console.log(sum1, isEven(sum1));
const sum2: number = sum([1, 3, 5, 7, 9]);
console.log(sum2, isEven(sum2));
const sum3: number = sum([2, 2, 2, 2, 2, 2, 2]);
console.log(sum3, isEven(sum3));
