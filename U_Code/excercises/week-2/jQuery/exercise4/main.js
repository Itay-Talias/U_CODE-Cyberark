$(".item").click(function () {
    if ($(this).data().instock) {
        $("#cart").append(`<div>${$(this).text()}</div>`);
    }
});
