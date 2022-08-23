const header = $("h1");
// console.log(header);

const myQuery = function (selector) {
    if (selector[0] == "#") {
        const elementId = selector.split("#")[1]; //will return everything after the # in selector
        return document.getElementById(elementId);
    }
};

// console.log(myQuery("#my-h"));

//spot-check2
$("h4").css("color", "red");

$("h1").css("color", "blue");

$(".red-div").css("color", "red");

$("li:nth-child(1)").css("color", "green");

$("li:nth-child(2)").css("color", "pink");

$("#brown-div").css("color", "brown");

//spot-check3
$("#b1").addClass("box");
$("#b2").addClass("box");

//spot-check4
$("#my-input").val("Terabyte");

const color = $(".div1").data().color;
console.log(color); //prints #2980b9

//spot-check5
const data = $(".div2").data();
console.log(data);
console.log(
    `The item with barcode ${data.barcode} will expire on ${data.expirationDate}`
);

//spot-check6
const div3 = $(".div3");
div3.css("background", "red");
div3.css("width", "100px");
div3.css("height", "100px");
div3.hover(
    function () {
        div3.css("background", "black");
    },
    function () {
        div3.css("background", "red");
    }
);

//spot-check7
const button = $("btn1");
button.click(() => alert($("#my-input2").val()));

$("#b1").hover(function () {
    console.log($(this));
});

//spot-check8
$(".box1").hover(
    function () {
        $(this).css("background", "blue");
    },
    function () {
        $(this).css("background", "purple");
    }
);

const aDynamicDiv = "<div class='mine'>Oh yes</div>";
const elem = $(aDynamicDiv);
console.log(elem);
$("body").append(elem);
elem.css("color", "red");

$(".fruits").append('<p class="red">Raspberry</p>');
$(".fruits").append('<p class="brown">Kiwi</p>');

const text = "Banana";
const item = $(`<div class=fruit>${text}</div>`);

console.log(item); //the same

//spot-Check9
$(".feedme").on("click", function () {
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`;
    console.log($(this).text());
    $("body").append(divCopy);
});

//spot-Check10
const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" },
];

for (let name of names) {
    $("body").append(`<div>${name.first} - ${name.last}</div>`);
}
$("#plague").css("display", "inline-block");
$("#plague").hover(() => $("#plague").remove());

$("#btn2").click(() => {
    const newBlog = `<div class="blog">i'm new blog</div>`;
    $("#blogs").append(newBlog);
});

$("body").on("click", ".blog", function () {
    $(this).text("blargh");
});
