// using as function expression
let sum = function (a, b) {
  return a + b;
};
console.log("anonymous function as expression", sum(3, 6));
// using anonymous function as argument
setTimeout(() => {
  console.log("annonymous function as argument");
}, 0);

// using as immediate invoked function expression
(function () {
  console.log("anonymous function as immediate invoked function expression");
});
// using as arrow function
const show = () => console.log("anonymous function as arrow function");
