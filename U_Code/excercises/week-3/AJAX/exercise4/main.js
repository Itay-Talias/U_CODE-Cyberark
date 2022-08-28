const fetch = () => {
    $.ajax({
        method: "GET",
        url: "https://api.giphy.com/v1/gifs/search?api_key=iannJhZwbC3LccFR8VxfzzFpB1VEdLOu&q=cats",
        success: printDataToLog,
        errot: (xhr, text, error) => {
            console.log(text);
        },
    });
};

const printDataToLog = (result) => {
    console.log(result.data[0].embed_url);
    const newGift = `<iframe src=${result.data[0].embed_url} title="cat-gift"></iframe>`;
    $("body").append(newGift);
};

fetch();
