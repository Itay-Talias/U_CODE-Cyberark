const exercise = require("./mainOfexercises.js");

//Exercise-1
//should return true if n is even, false otherwise
test("isEven should return true if n is even, false otherwise", () => {
    const result1 = exercise.isEven(7);
    const result2 = exercise.isEven(6);

    expect(result2).toBeTruthy();
    expect(result1).toBeFalsy();
});

//Exercise-2
//should remove at least one element from the array `arr`
test("removeAtLeastOne should remove at least one element from the array `arr`", () => {
    const result = exercise.removeAtLeastOne([1, 2, 3, 4]);

    expect(result.length).toBeLessThan(4);
    expect(result).not.toContain(1);
});

//Exercise-3
//should return a clean string without these symbols: "!", "#", ".", ",", "'"
test("simplify should return a clean string without these symbols: ^^^^^^^^^", () => {
    const result = exercise.simplify("hell'''o");
    expect(result).toEqual("hello");
});
//Exercise-4
//Exercise-5
