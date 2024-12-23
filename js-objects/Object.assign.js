// Object.assign()
const person = {
  name: "john",
  email: "john@gmail.com",
  address: {
    city: "surat",
    state: "gujrat",
    address: function () {
      return `404 stree ${this.city}, ${this.state}.`;
    },
  },
  message: function () {
    return `Hi, i am ${this.name} `;
  },
};

const person1 = { name: "ankit" };
let person2 = Object.assign(person1, person);
console.log(person1);
console.log(person2);
console.log(person2.message());
console.log(person2.address.address());
person2.email = "ankit@gmail.com";
console.log(person2);
console.log(person);
person.name = "adam";
console.log(person);
