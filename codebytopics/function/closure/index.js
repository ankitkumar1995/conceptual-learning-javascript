/*
closure in javascript a closure is a function that has accesses to variables from its outer function,even after the outer function has finished executing.

*/
function outerFunction() {
  var outer = "I am from the outer function";
  function innerFunction() {
    console.log(outer);
  }
  return innerFunction;
}
var closureFunction = outerFunction();
closureFunction();

function createCounter() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

var counter = createCounter();
counter();
counter();
