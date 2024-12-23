/**
 * Object.create()
 * the object.create() method is used to create a new object with the specified prototype object and properties.
 * we can create a object without a prototype by Object.creates(null)
 */

const objectNoPrototype = Object.create(null);

console.log("object has no prototype", objectNoPrototype);

const person = {
  getIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const personsIntroctuion = Object.create(person);
personsIntroctuion.name = "john";
personsIntroctuion.isHuman = true;
personsIntroctuion.getIntroduction();

//context of this using call() method
function fruits1() {
  this.name = "apple";
}
function fun() {
  fruits1.call(this);
}
fun.prototype = Object.create(fruits1.prototype);
const app1 = new fun();
console.log(app1.name);

function fruits2() {
  this.name = "apple";
  this.season = "winter";
}
function apple() {
  fruits2.call(this);
}
apple.prototype = Object.create(fruits2.prototype);
const app2 = new apple();
console.log(app2.name, app2.season);

console.log(app2.season);
