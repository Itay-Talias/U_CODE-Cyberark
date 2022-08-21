// // let x = {
// //     count: 12,
// //     go: () => {
// //         setTimeout(function () {
// //             console.log(this.count);
// //         }, 1500);
// //     },
// // };
// // x.go();

// // setInterval(() => {
// //     console.log("hi");
// // }, 2000);

// // const run = (name) => {
// //     console.log("Run, " + name + ", run!");
// // };
// // const yell = function (action) {
// //     let env = "Forest";
// //     action(env);
// // };
// // run(yell);

// const foo = (callback) => console.log(callback());

// foo(function () {
//     return 2;
// });

// function goo() {
//     return 2;
// }

// foo(goo);

// const createPerson = function (name, age) {
//     const person = {
//         personName: name,
//         personAge: age,
//     };

//     return person;
// };

// // createPerson("Elon", 42);
// // console.log(person);

// // const mathOperations = function () {
// //     const add = function (x, y) {
// //         return x + y;
// //     };
// //     return add;
// // };

// // // const math = mathOperations();
// // console.log(math(1, 2));

// const setCounter = function (num) {
//     let counter = 0;

//     const count = function () {
//         counter += num;
//         console.log(counter);
//     };

//     return count;
// };

// const increment = setCounter(2);
// increment();
// increment();
// increment();

// // console.log(counter);

// const family = () => {
//     let memberArr = [];
//     console.log(memberArr);

//     const birth = (name) => {
//         memberArr.push(name);
//         console.log(memberArr);
//     };

//     return birth;
// };

// const giveBirth = family();

// giveBirth("Itay");
// giveBirth("Lotan");

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     };

//     const subtract = function (x, y) {
//         return x - y;
//     };

//     const multiply = function (x, y) {
//         return x * y;
//     };

//     const divide = function (x, y) {
//         return x / y;
//     };
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide,
//     };
// };
// const m = mathOperations();
// console.log(m.add(13, 29));
// console.log(m.mult(1.75, 24));
// console.log(m.mult(7, m.div(36, 6)));

// const UsersModule = function () {
//     const _users = ["Aaron", "Avi"];

//     const addUser = function (user) {
//         _users.push(user);
//     };

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user);
//         }
//     };

//     return {
//         addUser: addUser,
//         listUsers: listUsers,
//     };
// };

// const usersModule = UsersModule();

// usersModule.addUser("Narkis");
// usersModule.addUser("Itay");
// usersModule.listUsers();

// const Bank = function () {
//     let money = 500;

//     const depositCash = (cash) => {
//         money += cash;
//     };
//     const checkBalance = () => {
//         console.log(money);
//     };

//     return {
//         deposit: depositCash,
//         showBalance: checkBalance,
//     };
// };

// const bank = Bank();
// bank.deposit(200);
// bank.deposit(250);
// bank.showBalance(); //should print 950

// const SongsManager = () => {
//     const songs = {};
//     const URLStart = "https://www.youtube.com/watch?v=";

//     const addSong = (key, link) => {
//         songs[key] = link.slice(URLStart.length);
//     };

//     const getSong = (key) => {
//         return URLStart + songs[key];
//     };

//     return {
//         addSong,
//         getSong,
//     };
// };

// const songsManager = SongsManager();
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

// console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

let _memories = ["that time at band camp", "yesterday's breakfast"];

const Brain = function () {
    const dayDream = () => _memories;
    const experience = (memory) => _memories.push(memory);
    const forget = (memory) => _memories.splice(_memories.indexOf(memory), 1);
    const spazz = () => console.log("bleurg");

    return {
        reminisce: dayDream,
        live: experience,
        blank: forget,
        freakOut: spazz,
    };
};

const brain = Brain();
brain.freakOut();
