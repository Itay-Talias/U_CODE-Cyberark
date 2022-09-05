"use strict";
const inputElement = document.querySelector(".foo");
inputElement.addEventListener("input", function (event) {
    const eventFromInput = event.target;
    console.log(eventFromInput.value);
});
