$("span").addClass("picker");

$("span").css("background", this);

$("span").click(function () {
    console.log($(this).data().color);
    $(".box").css("background", $(this).data().color);
});
