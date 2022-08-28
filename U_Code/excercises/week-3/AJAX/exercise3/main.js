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
    data.items.forEach((element) => {
        $("body").append(`<p> title =  ${element.volumeInfo.title} <p>`);
        if (element.volumeInfo.authors) {
            element.volumeInfo.authors.forEach((element) => {
                $("body").append(`<p> author =  ${element} <p>`);
            });
        }
    });
    console.log(data);
};

fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
