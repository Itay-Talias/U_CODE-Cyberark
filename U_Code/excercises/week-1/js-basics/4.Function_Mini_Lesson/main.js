people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!",
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub",
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power",
    },
];

const capitalize = function (str) {
    let newStr = "";
    newStr += str[0].toUpperCase();
    newStr += str.slice(1);
    return newStr;
};

const getAge = function (age) {
    let newStr = `is ${age} years old`;
    return newStr;
};

getCityAndCountry = function (country, city) {
    let newStr = `from ${city}, ${country}.`;
    return newStr;
};

const getSummary = function (person) {
    let summary = "";
    summary += capitalize(person.name);
    summary += getAge(person.age);
    summary += person.profession;
    summary += getCityAndCountry(person.country, person.city);
    summary += `${person.name} loves to say \"${person.catchphrase}\"`;
    return summary;
};

console.log(getSummary(people_info[0]));

const story =
    "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};
let wordStoryArr = story.replace(/[^a-zA-Z  -]/g, "");
wordStoryArr = wordStoryArr.split(" ");
wordStoryArr = wordStoryArr.map((word) => word.toLowerCase());

for (let word of wordStoryArr) {
    if (wordCounts[word]) {
        wordCounts[word]++;
    } else {
        wordCounts[word] = 1;
    }
}

console.log(wordCounts);
