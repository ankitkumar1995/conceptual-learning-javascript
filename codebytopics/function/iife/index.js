/*
IIFE javascript immediately invoked function expression is a function defined as a expression and executed immediately after creation.

(function(){})();
(()=>{})();
(function nameIIFE(){})();

IIFE semicolon (;)
;(funcgtion(){})(); semicolon is used to terminate the statement in case two or more javascript files are blindly concatnated into a single file.

if we have many global variables and function, the javascript engine will only release the memory allocated for them until the global object loses its scopes.

As a result, the script may use the memory inefficiently.On top of that, having global variables and functions will likely cause name collisions.

One way to prevent the function and variable from polutting the global object is to use immediately invoked function expression.


*/
// function to add two number
const sum = (function (a, b) {
  return a + b;
})(5, 10);
console.log(sum);

(function () {
  var counter = 0;
  function add(a, b) {
    return a + b;
  }

  console.log(counter);
  console.log(add(5, 10));
});

const counter = function () {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
};
