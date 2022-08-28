const fetch = (queryType, queryValue) => {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: printDataToLog,
        errot: (xhr, text, error) => {
            console.log(text);
        },
    });
};

printDataToLog = (data) => {
    $("body").append(`<p>${data.items[0].volumeInfo.title} <p>`);
    console.log(data);
};

fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
