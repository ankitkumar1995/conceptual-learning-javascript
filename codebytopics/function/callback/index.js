console.log("i am");

setTimeout(function () {
  console.log("callback");
}, 500);

console.log("of javascript");
// callback hell it is also call pyramid of doom because of its strucure of calling callbacks.

// inversion of control seen while using callback
// if we are providing control to some other function to run callback it may cause of inversion of control.
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
