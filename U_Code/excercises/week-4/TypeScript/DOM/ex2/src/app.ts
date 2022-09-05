const inputElement: HTMLInputElement = document.querySelector(
    ".foo"
) as HTMLInputElement;

inputElement.addEventListener("input", function (event) {
    const eventFromInput = event.target as HTMLInputElement;
    console.log(eventFromInput.value);
});
