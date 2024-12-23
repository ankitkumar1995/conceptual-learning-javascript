/**
 * Object.defineProperty()
 * The Object.defineProperty() method defines a new property directly on object and returns the object
 */
// Object.defineProperty(obj,prop,descriptor)
// obj the object on which to define the property
// prop the name of a property to be defined or modified

// descriptor the descriptor for the property being defined or modified.

const object1 = {};
Object.defineProperty(object1, "property1", { value: 20 });

console.log(object1.property1);
Object.defineProperty(object1, "property2", {
  value: 41,
  value: 50,
  value: 600,
});
object1.property2 = 150;
console.log(object1.property2);

Object.defineProperty(object1, "property3", {
  value: 2,
  value: 4,
  value: 4 + 13,
});
console.log(object1.property3);
