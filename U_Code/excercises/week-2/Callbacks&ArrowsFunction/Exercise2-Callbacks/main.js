const returnTime = function (time) {
    alert("The current time is: " + time);
};

const getTime = (callback) => {
    returnTime(new Date());
};

getTime(returnTime);
