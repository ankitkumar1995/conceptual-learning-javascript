const person = {
  name: "john",
  age: 20,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "sports"],
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Assigning object to another variable (shallow copy by reference)
let user = person;
user.name = "ankit";
console.log(person);

// Resetting person for demonstration
person.name = "john";

// 1. Shallow copy using Object.assign()
let shallowCopy = Object.assign({}, person);
console.log(shallowCopy, "shallow copy");
