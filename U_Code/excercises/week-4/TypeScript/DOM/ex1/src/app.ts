const doX = function () {
    const inputElement: HTMLInputElement = document.querySelector(
        ".foo"
    ) as HTMLInputElement;
    console.log(inputElement.value);
    alert(inputElement.value);
    inputElement.value = "";
};
