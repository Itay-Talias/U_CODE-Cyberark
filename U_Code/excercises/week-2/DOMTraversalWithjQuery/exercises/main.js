$(".generator").on("click", function () {
    const cmp_id = $(this).closest(".computer").data().id;
    const pros_id = $(this).closest(".computer").find(".processor").attr("id");
    const bus_num = $(this).closest(".computer").find(".BUS").text();
    console.log(cmp_id, pros_id, bus_num);
});

$(".validator").on("click", function () {
    const generator_text = $(this).text();
    const mb = $(this).closest(".computer").find(".MB").text();
    const q = $(this).closest(".computer").find(".processor").find(".QR");

    console.log(generator_text, mb);
    $.each(q, (index, element) => {
        console.log(element.innerHTML);
    });
});
