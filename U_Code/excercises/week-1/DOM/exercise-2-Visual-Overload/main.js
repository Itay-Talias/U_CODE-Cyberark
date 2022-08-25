const getRandomColor = function () {
    const niceColors = [
        "#8e44ad",
        "#3498db",
        "#c0392b",
        "#f1c40f",
        "#d35400",
        "#2ecc71",
        "#1abc9c",
        "#2c3e50",
        "#7f8c8d",
    ];

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
};

const container = document.getElementById("container");
for (let i = 0; i < 102; i++) {
    const newItem = document.createElement("div");
    newItem.setAttribute("id", `${i}`);
    newItem.style.width = "100px";
    newItem.style.height = "100px";
    newItem.style.backgroundColor = getRandomColor();
    newItem.style.display = "inline-block";
    newItem.style.margin = "10px";
    newItem.onmouseenter = function () {
        newItem.style.backgroundColor = getRandomColor();
        areSameColor()
            ? (alert.style.display = "block")
            : (alert.style.display = "none");
    };
    container.appendChild(newItem);
}

const alert = document.getElementById("nice-job-alert");
alert.style.display = "none";

const areSameColor = function () {
    let flag = true;
    for (let i = 0; i < 9; i++) {
        if (
            document.getElementById(`${i}`).style.backgroundColor !==
            document.getElementById(`${i + 1}`).style.backgroundColor
        ) {
            flag = false;
        }
    }
    return flag;
};
