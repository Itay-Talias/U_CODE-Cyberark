const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let index in names) {
  let p = {
    name: names[index],
    age: ages[index],
  };
  people.push(p);
}

console.log(people);
for (let p of people) {
  console.log(p.name, "is", p.age, "years old");
}
