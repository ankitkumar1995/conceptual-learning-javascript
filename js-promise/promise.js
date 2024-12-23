function getUsers() {
  let users = [];
  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 0);
}

function findUser(username) {
  const users = getUsers();
  const user = users?.find((user) => user.username === username);
  return user;
}
console.log(findUser("john"));
// As getUsers function is a asynchronous so it will take tim to execute before it findUser will execute so it will return undefined
// we have callback to solve this problem using callback we can execute

function getUsersCb(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ]);
  }, 0);
}

function findUserCb(username, callback) {
  getUsersCb((users) => {
    const user = users?.find((user) => user.username === username);
    callback(user);
  });
}
findUserCb("john", console.log);
// As getUsers function is a asynchronous so it will take tim to execute before it findUser will execute so it will return undefined
// we have callback to solve this problem using callback we can execute

// callback hell
function firstPromise(callback) {
  setTimeout(() => {
    console.log("first promise resolved");
    callback();
  }, 1000);
}

function secondPromise(callback) {
  setTimeout(() => {
    console.log("second promise resolved");
    callback();
  }, 1000);
}

function thiredPromise(callback) {
  setTimeout(() => {
    console.log("thired promise resolved");
    callback();
  }, 0);
}
firstPromise(() => {
  secondPromise(() => {
    thiredPromise(() => {
      console.log("all promise resolved");
    });
  });
});
// promises
function getUsersPrRs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ]);
    }, 1000);
  });
}
getUsersPrRs().then((res) => {
  console.log(res);
});

let success = true;

function getUsersPrRsRe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("failed to the user list");
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise = getUsersPrRsRe();
promise.then(onFulfilled, onRejected);

let successRe = false;

function getUsersPrRe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (successRe) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("failed to the user list");
      }
    }, 1000);
  });
}

function onFulfilledRs(users) {
  console.log(users);
}
function onRejectedRe(error) {
  console.log(error);
}

const promiseRe = getUsersPrRe();
promiseRe.then(onFulfilled, onRejected);
