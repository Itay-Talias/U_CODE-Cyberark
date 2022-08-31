const pro = $.ajax({
    method: "GET",
    url: `https://random-word-api.herokuapp.com/word`,
}).then(function (word) {
    console.log(word);
    const promiseBook = $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`,
    });
    const promiseGif = $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=iannJhZwbC3LccFR8VxfzzFpB1VEdLOu&q=${word}`,
    });
    Promise.all([promiseBook, promiseGif]).then(function (result) {
        $("body").append(`<div>${result[0].items[0].volumeInfo.title}</div>`);
        $("body").append(`<iframe src="${result[1].data[0].embed_url}">`);
    });
});

// const fetchRecipes = function (ingredient) {
//     $.get(`/recipe/${ingredient}`, function (recipe) {
//         console.log(recipe);
//     });
// };

const fetchRecipes = async function (ingredient) {
    const data = await $.get(`/recipe/${ingredient}`);
    console.log(data);
};
