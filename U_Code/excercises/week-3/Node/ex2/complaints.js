const handleComplaints = require("./complaintsHandler");

let complaint1 = {
    text: "I'm not getting enough money",
    type: handleComplaints.consts.FINANCE,
};

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: handleComplaints.consts.FINANCE,
};

let complaint3 = {
    text: "I'm always full of energy",
    type: handleComplaints.consts.EMOTIONS,
};

handleComplaints.handleComplaint(complaint1); //should print "Money doesn't grow on trees, you know."
handleComplaints.handleComplaint(complaint2); //should print "Money doesn't grow on trees, you know."
handleComplaints.handleComplaint(complaint3); //should print "It'll pass, as all things do, with time."
