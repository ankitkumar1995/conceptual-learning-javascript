// javascript bind() for function binding
let person = {
  name: "john alice",
  getName: function () {
    console.log("person object function", this.name);
  },
};
setTimeout(person.getName, 1);
//because of this have global object it returns undefined
// this global if no strict mode in strict mode this is undefined
setTimeout(function () {
  person.getName();
}, 1000);
let callbackFunction = person.getName.bind(person);
setTimeout(callbackFunction, 1000);

// bind() to borrow methods from a different object
let runner = {
  name: "runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph");
  },
};
let flyer = {
  name: "flyer",
  fly: function (speed) {
    console.log(this.name + " flies at " + speed + " mph.");
  },
};
let run = runner.run.bind(flyer, 20);
run();
