"use strict";
const concat = (strArr, flag) => {
    if (Array.isArray(strArr)) {
        strArr = strArr.join("");
    }
    if ((typeof flag === "boolean" && flag) ||
        (typeof flag === "number" && flag === 1)) {
        console.log(strArr);
    }
    else if (typeof flag !== "boolean" && flag !== 0) {
        console.log(`flag entry is incorrect`);
    }
};
concat("itay", 0);
concat("itay", 1);
concat("itay", 2);
concat("itay", false);
concat("itay", true);
concat(["itay", "Talias"], 0);
concat(["itay", "Talias"], 1);
concat(["itay", "Talias"], 2);
concat(["itay", "Talias"], false);
concat(["itay", "Talias"], true);
