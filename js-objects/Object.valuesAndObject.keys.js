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
let person1 = {};
console.log(Object.values(person1));
const person2 = Object.values(person);
console.log(person2);
console.log(Object.keys(person1));
const person3 = Object.keys(person);
console.log(person3);
person1.name = "ankit";
person.email = "johnemail@gmail.com";
const person5 = Object.values(person1);
const person4 = Object.values(person);
console.log(person4);
console.log(person5);
