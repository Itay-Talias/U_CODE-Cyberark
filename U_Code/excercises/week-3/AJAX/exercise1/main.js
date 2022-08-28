const fetchData = (ISBN) => {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
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

fetchData(9780575087057);
fetchData(9782806269171);
fetchData(1440633908);
fetchData(9781945048470);
fetchData(9780307417138);
