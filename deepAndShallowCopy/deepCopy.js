const person = {
  name: "john",
  age: 20,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "sports"],
  //   greet: function () {
  //     console.log(`Hello, my name is ${this.name}`);
  //   },
};

// JSON.parse(JSON.strignify)
const deepCopyPerson = JSON.parse(JSON.stringify(person));
deepCopyPerson.hobbies = "United state";

console.log("original object", person);
console.log("deep copy object", deepCopyPerson);

// structuredClone()
const deepCopyStructuredClone = structuredClone(person);
deepCopyStructuredClone.address.city = "California";
console.log("orignal object", person);
console.log("deep copy structured clone", deepCopyStructuredClone);
