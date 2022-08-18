const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
};

let name = prompt("Please enter the name for your reservation");

if (reservations[name]) {
    if (reservations[name].claimed) {
        console.log(`Welcome, ${name}`);
    } else {
        console.log("Hmm, someone already claimed this reservation");
    }
} else {
    reservations[name] = { claimed: true };
    console.log("You have no reservation");
    console.log(reservations);
}
