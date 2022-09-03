const calc = require("./code");

test("add should return sum of a + b", () => {
    let sum = calc.add(1, 2);
    expect(sum).toBe(3);
});

test("calculateHyp should return squrt of a^2 + b^2", () => {
    let sum = calc.calculateHyp(3, 4);
    expect(sum).toBe(5);
});

test("should remove all BUGs from list of code", () => {
    let code = [
        "great code",
        "good code",
        "BUG",
        "async await awesome code",
        "BUG",
        "BUG",
        "general code",
    ];
    let bugFreeCode = calc.removeBugs(code);
    expect(bugFreeCode).not.toContain("BUG");
    expect(bugFreeCode).toContain("great code");
});

test("should keep only HIGH priority tasks", () => {
    let tasks = [
        { text: "dummy", priority: "HIGH" },
        { text: "dummy", priority: "LOW" },
    ];
    let filteredTasks = calc.clearLowPriority(tasks);

    expect(filteredTasks.length).toBe(1);
    expect(filteredTasks[0].priority).toBe("HIGH");
});

test("addPicture should add a picture URL to the pictureURLs array", function () {
    //sanity
    const picManager = new calc.PictureManager();
    expect(picManager.pictureURLs.length).toBe(0);

    picManager.addPicture("some_url");
    expect(picManager.pictureURLs.length).toBe(1); //test
    expect(picManager.pictureURLs).toContain("some_url"); //double check
});

test("removePicture should remove a picture URL to the pictureURLs array", function () {
    //sanity
    const picManager = new calc.PictureManager();
    expect(picManager.pictureURLs.length).toBe(0);

    picManager.addPicture("some_url");
    picManager.addPicture("some_url2");

    expect(picManager.pictureURLs.length).toBe(2); //test
    picManager.removePicture("some_url");
    expect(picManager.pictureURLs).toContain("some_url2"); //double check
    expect(picManager.pictureURLs.length).toBe(1); //test
});

const AM = require("./code");
test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
    const instance = new calc.ArrayManipulator();
    let x = ["food", "item", "location"];
    let y = ["cherry", "lightbulb", "Tazmania"];
    let result = instance.manipulate(x, y);

    expect(result).toEqual({
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania",
    });
});
