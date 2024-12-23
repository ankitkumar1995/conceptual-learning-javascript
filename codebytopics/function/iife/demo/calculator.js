// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }
const calculator = (function () {
  function add(a, b) {
    return a + b;
  }
  function multiply(a, b) {
    return a * b;
  }
  return {
    add,
    multiply,
  };
})();
