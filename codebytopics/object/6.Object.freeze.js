/**
 * Object.freeze()
 * Object.freeze() mthod freezes object that prevent new properties from being added to it.this method prevent the modification of existing property,attribute and values.
 */
// Object.freeze(obj)
const object1 = {
  property1: 41,
};
const object2 = Object.freeze(object1);
object2.property1 = 35;
console.log(object2);

const object3 = { prop: function () {}, name: "charry" };
console.log(object2);
var objects = Object.freeze(object3);
objects.email = "john@yopmail.com";
object3.name = "karri";
console.log(objects);
console.log(object3);
