const StringFormatter = function () {
    const capitalizeFirst = function (str) {
        return str[0].toUpperCase() + str[1].toLowerCase() + str.slice(2);
    };
    const skewerCase = function (str) {
        return str.replaceAll(" ", "-");
    };

    return {
        cap: capitalizeFirst,
        ske: skewerCase,
    };
};

const formatter = StringFormatter();

console.log(formatter.cap("dorothy")); //should print Dorothy
console.log(formatter.ske("blue box")); //should print blue-box
