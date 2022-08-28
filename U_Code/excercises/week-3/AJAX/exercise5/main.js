const fetch = (valueToSearch) => {
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=iannJhZwbC3LccFR8VxfzzFpB1VEdLOu&q=${valueToSearch}`,
        success: printDataToLog,
        errot: (xhr, text, error) => {
            console.log(text);
        },
    });
};

const printDataToLog = (result) => {
    console.log(result.data[0].embed_url);
    $("#gift").attr("src", `${result.data[0].embed_url}`);
};

$("#btn-input").on("click", function () {
    let valueToSearch = $("#text-input").val();
    console.log(valueToSearch);
    fetch(valueToSearch);
});

$("#gift").css("display", "block");
