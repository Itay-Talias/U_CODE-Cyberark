//Exercise-1

//should return true if n is even, false otherwise
const isEven = function (n) {
    return n % 2 == 0 ? true : false;
};

//Exercise-2

//should remove at least one element from the array `arr`
const removeAtLeastOne = function (arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
};

//Exercise-3

//should return a clean string without these symbols: "!", "#", ".", ",", "'"
const simplify = function (str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
        .split("")
        .filter((c) => symbols.indexOf(c) == -1)
        .join("");
};

//Exercise-4

const validate = function (arr) {
    trueArr = arr.filter((x) => x === true && typeof x === "boolean");
    falseArr = arr.filter((x) => x === false && typeof x === "boolean");
    if (trueArr.length === 0 && falseArr.length === 0) {
        return { error: "erorr" };
    } else {
        return trueArr.length > falseArr.length;
    }
};

//Exercise-5

module.exports = { isEven, removeAtLeastOne, simplify, validate };
