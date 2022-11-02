// call back
let users = [];

const getData = function (func) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }];
        func();
        console.log("Got users");
    }, 3000);
};

const displayData = function () {
    console.log("Going to display: " + users);
    for (user of users) {
        console.log(user.name);
    }
};

// getData(displayData);

const suspenseBuilder = {
    name: "El Mysterio",
    displayName: function () {
        console.log("You are going to see the name in 3 seconds...");

        setTimeout(function () {
            //normal function
            console.log("The name is: " + this.name);
        }, 2000);
        setTimeout(() => {
            //normal function
            console.log(this);
        }, 2000);
    },
};

suspenseBuilder.displayName();
