"use strict";
const print_number = (phoneNum) => {
    if (Array.isArray(phoneNum)) {
        if (typeof phoneNum[0] === "number") {
            console.log(`number Array: ${phoneNum}`);
        }
        else {
            console.log(`string Array: ${phoneNum}`);
        }
    }
    else {
        if (typeof phoneNum === "number") {
            console.log(`number: ${phoneNum}`);
        }
        else {
            console.log(`string: ${phoneNum}`);
        }
    }
};
print_number("0525645751");
print_number(["0525645751", "0523428563"]);
print_number(972525645751);
print_number([972525645751, 9720523428563]);
