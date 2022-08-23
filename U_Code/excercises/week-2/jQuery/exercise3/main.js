const div1 = `<div class="box div1"></div>`;
const div2 = `<div class="box div2"></div>`;

$("body").append(div1);
$("body").append(div2);

let flagLeft = false;
let flagRight = false;

$(".div2").hover(
    function () {
        flagRight = !flagRight;
    },
    function () {
        if (flagRight !== flagLeft) {
            if ($(".div2").css("background-color") === "rgb(142, 68, 173)") {
                $(".div2").css("background", "red");
                $(".div1").css("background", "#8e44ad");
            } else {
                $(".div2").css("background", "#8e44ad");
                $(".div1").css("background", "red");
            }
        }
    }
);

$(".div1").hover(
    function () {
        flagLeft = !flagLeft;
    },
    function () {
        if (flagRight === flagLeft) {
            if ($(".div1").css("background-color") === "rgb(142, 68, 173)") {
                $(".div1").css("background", "red");
                $(".div2").css("background", "#8e44ad");
            } else {
                $(".div1").css("background", "#8e44ad");
                $(".div2").css("background", "red");
            }
        }
    }
);
