let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;

if (boughtTesla && isUSCitizen) {
  if (currentYear - yearOfTeslaPurchase >= 4) {
    console.log("Would you like an upgrade?");
  } else {
    console.log("Are you satisfied with your car");
  }
} else {
  if (!isUSCitizen) {
    console.log("Would you like to move to the US");
  } else {
    console.log("Are you interested in buying one");
  }
}
