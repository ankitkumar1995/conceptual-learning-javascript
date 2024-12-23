// call
const person1 = {
  name: "john",
  role: "developer",
};
const person2 = {
  name: "jane",
  role: "designer",
};
function personDetails() {
  console.log(`${this.name} is a ${this.role}`);
}
personDetails.call(person1);
personDetails.call(person2);

// we might have objects for userd,customers, clients
// and using call allow us to reuse method across objects without duplicating code.

// apply
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Employee(name, age, position) {
  Person.apply(this, [name, age]);
  this.position = position;
}
const emp = new Employee("john", 20, "developer");
console.log(`I am ${emp.name}. I am ${emp.age} year old.`);

const numbers = [5, 10, 20, 30];
function sum(a, b, c, d) {
  return a + b + c + d;
}

const result = sum.apply(null, numbers);
console.log(result);

// in a financial application, we might need to pass a array of amounts to a
//  function to calculate the total. apply makes it easy to pass arrays dynamically.

// bind
const user = {
  name: "john",
  greet: function () {
    console.log(`i am, ${this.name}!`);
  },
};
const boundgreet = user.greet.bind(user);
document.getElementById("greetButton").addEventListener("click", boundgreet);

// in a web app when working with event listeners, we often lose the context of this
// bind ensures the correct object context is used when the function is executed later.
