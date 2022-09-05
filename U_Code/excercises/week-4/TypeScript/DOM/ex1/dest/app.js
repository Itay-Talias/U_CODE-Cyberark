"use strict";
const doX = function () {
    const inputElement = document.querySelector(".foo");
    console.log(inputElement.value);
    alert(inputElement.value);
    inputElement.value = "";
};
