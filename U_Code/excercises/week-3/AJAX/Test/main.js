// $.get(
//     "https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind",
//     function (result) {
//         console.log(result.items[0].volumeInfo.description);
//     }
// );

// $.get("https://jsonplaceholder.typicode.com/users", function (users) {
//     //extract the geo data of the first user
//     console.log(users[users.length - 1].company.catchPhrase);
//     let lat = users[0].address.geo.lat;
//     let long = users[0].address.geo.lng;

//     //log the dataconsole.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// });

$.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
    success: function (data) {
        console.log(data);
    },
    error: function (xhr, text, error) {
        console.log(xhr, text, error);
    },
});
