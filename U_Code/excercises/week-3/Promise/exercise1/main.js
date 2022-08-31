// const pro = $.ajax({
//     method: "GET",
//     url: `https://random-word-api.herokuapp.com/word`,
// }).then(function (word) {
//     console.log(word);
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${word[0]}`,
//     }).then(function (book) {
//         console.log(book);
//     });
// });

const getArticles = async function () {
    let articles = await $.get("https://random-word-api.herokuapp.com/word");
    return articles;
};

const innocentFunc = async function () {
    let articles = await getArticles();
    console.log(articles);
    return articles;
};

console.log(
    "hiiii",
    innocentFunc().then((data) => console.log(data))
);
