/**
 * Object.definePropeties()
 * The Object.defineProperties() method defines new or modifies existing propeties directly on object and returing the object
 */
// Object.defineProperties(obj,props)
// obj the object on which to define or modify properties
// props object whose own enumerable propeties constitute descriptors for the properties to be defined or modified.

const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 41,
  },
});
console.log(object1.property1);
Object.defineProperties(object1, {
  property2: {
    value: 142,
    value: 422,
    value: 423,
  },
  property3: {},
});
console.log(object1.property2);

Object.defineProperties(object1, {
  property4: {
    value: 142,
    value: 423,
    value: 436,
  },
  property5: {
    value: 20,
    value: 41,
  },
});
console.log(object1.property4, object1.property5);
