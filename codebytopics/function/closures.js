function parentFnLet() {
  let name = "javascript let";
  function dispalyName() {
    console.log(name);
  }
  name = "javascript let lexical enviroment references return";
  return dispalyName;
}
let parentClosureFnLet = parentFnLet();

parentClosureFnLet();

function parentFnVar() {
  var name = "javascript var";
  function dispalyName() {
    console.log(name);
  }
  name = "javascript var lexical enviroment references return";

  return dispalyName;
}
let parentClosureFnVar = parentFnVar();

parentClosureFnVar();

let name = "John";

function greeting() {
  let message = "Hi";
  console.log(message + " " + name);
}

greeting();
// global scope
// the variable name is declared using let in the global scope. it is accessible trhout the entire script
// the function greeting is declared. inside this function , a variable message is declared using let
// the greeting function has access to the variables in its own scope and any variable in its lexical scope(variables from the global scope in this case)
// lexical scope chain
// the greeting function has access to the name variable from the global scope because it is part of the lexical scope.lexical scope ensures that inner function can access variable from their outer scope.

// javascript closure in a loop
for (var index = 1; index <= 3; index++) {
  setTimeout(
    () => console.log("after " + index + " seconds " + index),
    index * 1000
  );
}
// the callback passed to the setTimeout() a closure. it remebers the value of i from the last interation of the loop which is 4
// all three closure created by for loop share the same global scope

// to fix issues we need to create a new closure scope in each iteration of the loop
// 1. using IIFE
// we use IIFE create a new scope by declaring a function and immediate executing it.
for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(
      () => console.log("IIFE " + "after " + index + " seconds " + index),
      index * 1000
    );
  })(index);
}

// 2. let keyword ES6
// in ES6 we can use the let keyword to declare a variable that is block scoped.
// if we use the let keyword in for loop it will create a new lexical scope in each iteration.
for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
