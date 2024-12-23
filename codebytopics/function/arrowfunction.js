const showMessage = () =>
  console.log("I am a arrow function with zero argument");

const showMessageOneArgument = (message) => console.log(message);

showMessageOneArgument("I am a arrow function with one argument");

let age = 5;
let welcome = age(age < 18)
  ? () => console.log("baby")
  : () => console.log("adult");

let sum = (a, b) => {
  let add = a + b;
  return add;
};

let sumNumbers = sum(5, 7);
console.log(sumNumbers);
