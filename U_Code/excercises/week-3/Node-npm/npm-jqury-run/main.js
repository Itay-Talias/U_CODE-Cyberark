// $("#small").on("click", function () {
//     $(this).css("background-color", "#f39c12");
// });

// $.get(`http://www.omdbapi.com/?apikey=9d2580ff&t=The Lion King`).then((data) =>
//     console.log(data)
// );

// const { request } = require("urllib");

// async function run() {
//     const { data, res } = await request(
//         "http://data.nba.net/10s/prod/v1/2016/players.json"
//     );
//     console.log(data.toString());
// }
// run();

const { request } = require("urllib");

async function run() {
    const { data, res } = await request(
        `http://www.omdbapi.com/?apikey=9d2580ff&t=The Lion King`
    );
    console.log(JSON.parse(data.toString()).Released);
}
run();
