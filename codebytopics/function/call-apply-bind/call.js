// function.call(thisArg,args1,args2,...)
const person = { name: "Alice" };
function greet() {
  console.log(`My name is ${this.name}`);
}
greet.call(person);
// inside the function greet this value is person

function sum(x, y) {
  console.log(this, "global object");
  return x + y;
}
let callSum = sum.call(this, 10, 20);
// this is set as global object inside function in strict mode it is undefined instead of global object.
console.log("call function for sum", callSum);

var greeting = "My name";
var messenger = {
  greeting: "your name is",
};
function say(name) {
  console.log(this, "this");
  console.log(this.greeting, "this.greeting");
  console.log(
    "greeting use from global object and name pass as argument-",
    this.greeting + " " + name
  );
}
say.call(this, "john");
say.call(messenger, "john");

// call() method to chain constructors for object
function Box(height, width) {
  console.log(this, "box");
  this.height = height;
  this.width = width;
}

function Widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}
let widget = new Widget("red", 100, 200);
console.log(widget, "widget");

// call() method for function borrowing
const car = {
  name: "car",
  start() {
    console.log("start the " + this.name);
  },
  speedUp() {
    console.log("speed up the " + this.name);
  },
  stop() {
    console.log("stop the " + this.name);
  },
};
const airCraft = {
  name: "aircraft",
  fly() {
    console.log("fly");
  },
};
car.start.call(airCraft);
car.speedUp.call(airCraft);
