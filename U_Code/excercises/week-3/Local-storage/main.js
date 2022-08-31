let wisdom = JSON.parse(localStorage.wisdom || "[]");

wisdom.forEach((element) => {
    let newElement = `<div class="textFromInput">
        <span>${element.text}</span>
        <span class="delete">x</span>
    </div>`;
    $("#text").append(newElement);
});

$("#btn-input").on("click", function () {
    wisdom.push({ text: $("#text-input").val() });
    let newElement = `<div class="textFromInput">
        <span>${$("#text-input").val()}</span>
        <span class="delete">x</span>
    </div>`;
    $("#text").append(newElement);
    $("#text-input").val("");
    localStorage.wisdom = JSON.stringify(wisdom);
});

$("#btn-clear").on("click", function () {
    localStorage.clear();
});

$("#text").on("click", ".delete", function () {
    $(this).closest(".textFromInput").remove();
});
