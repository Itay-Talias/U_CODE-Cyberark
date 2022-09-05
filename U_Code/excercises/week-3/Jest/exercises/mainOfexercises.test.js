const exercise = require("./mainOfexercises.js");

//Exercise-1
//should return true if n is even, false otherwise
test("isEven should return true if n is even, false otherwise", () => {
    const result1 = exercise.isEven(7);
    const result2 = exercise.isEven(6);
    const result3 = exercise.isEven(0);

    expect(result3).toBeTruthy();
    expect(result2).toBeTruthy();
    expect(result1).toBeFalsy();
});

//Exercise-2
//should remove at least one element from the array `arr`
test("removeAtLeastOne should remove at least one element from the array `arr`", () => {
    const result = exercise.removeAtLeastOne([1, 2, 3, 4]);
    expect(result.length).toBeLessThan(4);
    expect(result).not.toContain(1);

    const result2 = exercise.removeAtLeastOne([]);
    expect(result2.length).toBe(0);

    const result3 = exercise.removeAtLeastOne([1]);
    expect(result3.length).toBeLessThan(1);
    expect(result3).not.toContain(1);
});

//Exercise-3
//should return a clean string without these symbols: "!", "#", ".", ",", "'"
test("simplify should return a clean string without these symbols: ^^^^^^^^^", () => {
    const result1 = exercise.simplify("hell'#!'o");
    expect(result1).toEqual("hello");

    const result2 = exercise.simplify("hello");
    expect(result2).toEqual("hello");

    const result3 = exercise.simplify(" ");
    expect(result3).toEqual(" ");

    const result4 = exercise.simplify("#!.. ");
    expect(result4).toEqual(" ");
});
//Exercise-4
test("It should verify that there is at least one boolean in the array", () => {
    const result1 = exercise.validate([false, 2, 3, 4]);
    expect(result1).toBeFalsy();

    const result2 = exercise.validate([true, 2, 3, 4]);
    expect(result2).toBeTruthy();

    const result3 = exercise.validate([1, 2, 3, 4]);
    expect(typeof result3).toEqual("object");
});
