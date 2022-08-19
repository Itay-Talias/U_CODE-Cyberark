const submitHandler = function () {
    const msgElement = document.getElementById("err-msg");
    const name = document.getElementById("name-input");
    const desiredSalary = document.getElementById("desiredSalary-input");
    const birthday = document.getElementById("birthday-input");
    const phone = document.getElementById("phone-input");
    if (
        name.value.length === 0 ||
        desiredSalary.value.length === 0 ||
        birthday.value.length === 0 ||
        phone.value.length === 0
    ) {
        msgElement.innerHTML = "One of the field is empty";
        msgElement.style.display = "block";
    } else if (name.value.length <= 2) {
        msgElement.innerHTML = "The name is too short";
        msgElement.style.display = "block";
    } else if (desiredSalary.value.length <= 2) {
        msgElement.innerHTML = "The salary must be between 10,000 to 16,000";
        msgElement.style.display = "block";
    } else if (phone.value.length !== 10) {
        msgElement.innerHTML = "The phone is too short";
        msgElement.style.display = "block";
    } else {
        document.getElementById("container").style.display = "none";
        document.getElementById("welcome-user").style.display = "block";
        document.getElementById(
            "h-welcome"
        ).innerHTML = `Welcome ${name.value}`;
    }
};
