const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
};

const checkReservation = function () {
    let msg;
    const name = document.getElementById("text-input").value;
    if (reservations[name]) {
        if (reservations[name].claimed) {
            msg = `Welcome, ${name}`;
        } else {
            msg = "Hmm, someone already claimed this reservation";
        }
    } else {
        reservations[name] = { claimed: true };
        msg = "You have no reservation";
    }
    document.getElementById("msg").innerHTML = msg;
};
