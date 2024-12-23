// encapsulation using private field
class Person {
  #age; // private field
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  getAge() {
    return this.#age;
  }
}

const person1 = new Person("john", 50);
console.log(person1.name);
console.log(person1.getAge());

// encapsulation using closure
function PersonC(name, age) {
  let _age = age; // private variable
  this.name = name;

  this.getAge = function () {
    return _age;
  };
}
const person2 = new Person("john", 20);
console.log(person2.name);
console.log(person2.getAge());
