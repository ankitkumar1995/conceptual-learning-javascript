const customer = {
  name: "Raven",
  email: "raven@gmail.com",
  age: 20,
};

const text = "i am a simple text";

const number = 20;
const toggle = true;

const persons = [
  {
    name: "john",
    age: 20,
  },
  {
    name: "rees",
    age: 21,
  },
];

console.log("Array.isArray(object)", Array.isArray(customer));
console.log("Array.isArray(string)", Array.isArray(text));
console.log("Array.isArray(number)", Array.isArray(number));
console.log("Array.isArray(boolean)", Array.isArray(toggle));
console.log("Array.isArray(array)", Array.isArray(persons));
