// immediate invoked funcrtion expression
// some common use cases for IIFE
// 1. encapsulation and avoiding global scope pollution
(function () {
  var privateVariable = "i am private";
  console.log(privateVariable);
})();

// 2. module pattern

var myModule = (function () {
  var privateVariable = "I am private";
  console.log(privateMethod);
  function privateMethod() {
    // private method logic
    console.log("privately access method in iife");
  }
  return {
    publicMethod: function () {
      // public method logic
      console.log("2 mthod pattern ", "publicly access from iife");
    },
  };
})();
myModule.publicMethod();

myModule;

// 3 creating block scope in ES2015
(function () {
  for (var i = 0; i < 5; i++) {
    // logic
  }
  console.log(i); //5 (without creating a global variable)
})();
