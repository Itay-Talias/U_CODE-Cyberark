// $(".remove").on("click", function () {
//     alert($(this).closest(".post").remove());
// });

// $("button").on("click", function () {
//     let relevantSpanValue = $(this).closest("div").find("span").text();
//     alert(relevantSpanValue);
// });

// $("button").on("click", function () {
//     let relevantValue = $(".container").find("p").text();
//     alert(relevantValue);
// });
$(".btn").on("click", function () {
    alert($(this).closest(".container").find(".username").val());
});

let x = "flap";
let y = { a: "shlop", x: "dub" };
const all = [x, y];

x = all[1].x;
$("#corq")
    .siblings(".nalo")
    .append("<div>" + x + " - Ryk</div>");

// x=flap
//y={a: "shlop", x: "dub"}
//all=[flap,{a: "shlop", x: "dub"}]
//x=dub
