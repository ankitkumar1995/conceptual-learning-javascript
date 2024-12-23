const employee = {
  name: "john",
  language: "javascript",
  run: () => {
    alert("first run");
  },
};

console.log(employee);
let protoFunction = {
  run: () => {
    alert("run if method in not in object then it checks in protot");
  },
  protoRun: () => {
    alert("run if proto run method not in first appreance");
  },
};

employee.__proto__ = a.run();

employee.protoRun();

// define proto type for proto type
protoFunction.__proto__ = {
  email: "john@gmail.com",
};
console.log(employee.email);
