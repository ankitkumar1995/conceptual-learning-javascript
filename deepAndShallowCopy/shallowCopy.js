const person = {
  name: "john",
  age: 20,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "sports"],
};

// Spread operator
const shallowCopySpread = { ...person };
shallowCopySpread.address.zip = 208017;

shallowCopySpread.age = 28;
console.log("original object", person);
console.log("shallow copy spread", shallowCopySpread);

// Object.assign()
const shallowCopy = Object.assign({}, person);
shallowCopy.age = 26;

shallowCopy.address.city = "california";
person.address.zip = 380015;

console.log("original object", person);
console.log("shallow copy", shallowCopy);
