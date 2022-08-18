let p1 = {
  name: "Itay",
  age: 25,
  city: "Holon",
};

let p2 = {
  name: "Lotan",
  age: 25,
  city: "Azor",
};

if (p2.age === p1.age) {
  console.log("Same age");
  if (p2.city === p1.city) {
    console.log(p1.name, "wanted to date", p2.name);
  } else {
    console.log(p1.name, "wanted to date", p2.name, ",but couldn't");
  }
}
