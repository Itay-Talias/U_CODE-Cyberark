// $(".remove").on("click", function () {
//     alert($(this).closest(".post").remove());
// });

// $("button").on("click", function () {
//     let relevantSpanValue = $(this).closest("div").find("span").text();
//     alert(relevantSpanValue);
// });

$("button").on("click", function () {
    let relevantValue = $(".container").find("p").text();
    alert(relevantValue);
});
