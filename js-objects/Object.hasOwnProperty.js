// Object.hasOwnProperty()
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
console.log(Object.hasOwnProperty("name"));
console.log(Object.hasOwnProperty("mobile"));
