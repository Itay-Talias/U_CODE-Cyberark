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
//Exercise-5
//Exercise-6
//Exercise-7

module.exports = { isEven, removeAtLeastOne, simplify };
