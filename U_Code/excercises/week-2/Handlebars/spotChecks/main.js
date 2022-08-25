var classData = {
    classmates: [
        {
            name: "That on gal",
            description: "Always has the ansswer",
            socialNetwork: true,
        },
        {
            name: "The weird dude",
            description: "Quick with a smile",
            socialNetwork: false,
        },
        { name: "Taylor", description: "Just Taylor", socialNetwork: true },
    ],
};

const classmateshtml = $("#classmates-template").html();
var template = Handlebars.compile(classmateshtml);
const newHTML = template(classData);

$(".classmates").append(newHTML);

const animals = [
    "Rabbit",
    "Giraffe",
    "Kangaroo",
    "Whale",
    "Seagull",
    "Caterpie",
];

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];

const renderAnimals = (animals) => {
    const animalsTemplateHTML = $("#animals-template").html();
    var template = Handlebars.compile(animalsTemplateHTML);
    const newHTML = template({ animals: animals });

    $(".animals").append(newHTML);
};

renderAnimals(animals);

const renderLanguages = (languages) => {
    const languagesTemplateHTML = $("#languages-template").html();
    const template = Handlebars.compile(languagesTemplateHTML);
    const newHTML = template({ languages: languages });

    $(".languages").append(newHTML);
};

renderLanguages(languages);
