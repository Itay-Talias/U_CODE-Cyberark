const add = function (a, b) {
    return a + b;
};

const calculateHyp = function (a, b) {
    return Math.sqrt(a * a + b * b);
};

const removeBugs = function (code) {
    return code.filter((c) => c != "BUG");
};

const clearLowPriority = function (task) {
    return task.filter((t) => t.priority === "HIGH");
};

class PictureManager {
    constructor() {
        this.pictureURLs = [];
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL);
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1);
    }
}

class ArrayManipulator {
    manipulate(x, y) {
        let newObj = {};
        if (x.length !== y.length) {
            return "The length of arrays is not same";
        } else {
            x.forEach((element, index) => (newObj[element] = y[index]));
            return newObj;
        }
    }
}

module.exports = {
    add,
    calculateHyp,
    removeBugs,
    clearLowPriority,
    PictureManager,
    ArrayManipulator,
};
