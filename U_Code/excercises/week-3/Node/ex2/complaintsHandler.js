const consts = require("./consts");

const handleComplaint = function (complaint) {
    if (complaint.type === consts.FINANCE) {
        console.log("Money doesn’t grow on trees, you know");
    } else if (complaint.type === consts.WEATHER) {
        console.log("It is the way of nature. Not much to be done");
    } else {
        console.log("It’ll pass, as all things do, with time.");
    }
};

module.exports = { handleComplaint, consts };
