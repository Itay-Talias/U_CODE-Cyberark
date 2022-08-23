const inputText = `<input id="input-text">`;
const inputBtn = `<button id="button-text">Add Human</button>`;

$("body").append(inputText);
$("body").append(inputBtn);
$("#button-text").css("margin", "10px");
$("#input-text").attr("placeholder", "Human Name");

$("#button-text").click(() => {
    console.log($("#input-text").val());
    const newli = `<li class="person">${$("#input-text").val()}</li>`;
    $("#list").append(newli);
    $("#input-text").val(" ");
});

$("body").on("click", ".person", function () {
    console.log(this);
    $(this).remove();
});

// $("body").click(".person", function () {
//     console.log(this);
// });
