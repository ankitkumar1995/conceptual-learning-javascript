/*
Constructor
Promise()

Promise councurrency
The Promise class offers four static method to facilitate async task concurrency.

Promise.all()
Promise.allSettled()
Promise.any()
Promise.race()

Instance method
Promise.prototype.catch()
Promise.prototype.finally()
Promise.prototype.then()

*/
/* 
Promise.all() 

*/
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise(() => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise(() => {
  setTimeout(() => {
    console.log("The thired promise has resolved");
    resolve(30);
  }, 3 * 1000);
});
const p5 = new Promise(() => {
  setTimeout(() => {
    console.log("The fifth promise has reject");
    resolve("reject");
  }, 5 * 1000);
});
Promise.all([p1, p2, p3]).then((res) => {
  console.log("result", res);
  const total = res.reduce((a, b) => a + b);
  console.log("total", total);
});

Promise.all([p1, p5, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/* Promise.race() */
Promise.race([p1, p2])
  .then((res) => console.log("promise resolved", res))
  .catch((err) => {
    console.log("promise reject", err);
  });

Promise.race([p1, p5])
  .then((res) => console.log("promise resolved", res))
  .catch((err) => {
    console.log("promise reject", err);
  });

/* Promise.any() */
Promise.any([p1, p2])
  .then((res) => {
    console.log("promise resolved Promise.any()", res);
  })
  .catch((err) => console.log(err));

Promise.any([p1, p5])
  .then((res) => {
    console.log("promise resolved Promise.any()", res);
  })
  .catch((err) => {
    console.log("promise reject Promise.any()", err);
  });

/* Promise.allSettled() */
Promise.allSettled([p1, p2, p3]).then((res) =>
  comsole.log("promise resolved Promise.allSettled()")
);
