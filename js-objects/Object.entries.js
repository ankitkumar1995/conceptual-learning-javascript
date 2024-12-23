// Object.entries()
const person1 = {
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
const person2 = {};
const person3 = null;

console.log(Object.entries(person1));
console.log(Object.entries(person2));

// console.log(Object.entries(person3));
