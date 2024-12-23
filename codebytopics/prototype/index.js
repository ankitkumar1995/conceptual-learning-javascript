function multiply5(num) {
  return num * 5;
}
multiply5.power = 2;

console.log(multiply5(5)); // 25
console.log(multiply5.power); // 2
console.log(multiply5); // [Function: multiply5] { power: 2 }
console.log(multiply5.prototype); // {}

//conclusion
// eveything in javascript is object.
/*
In javascript, prototypes are funcdamental mechanism for implementing inheritance and sharing properties and method between objects

*/
// constructor function
console.log("prototype");
function Person(name) {
  this.name = name;
}
Person.prototype.saySomething = function () {
  console.log(`${this.name}`);
};
const person = new Person("alice");
console.log(person);
person.saySomething();
// es6 class

console.log("es6 class");
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`some sound`);
  }
}
class Dog extends Animal {}

const dog = new Dog("dog");
dog.makeSound();
