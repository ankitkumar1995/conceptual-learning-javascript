/**
 * Object.assign()
 * assign() method is used to copy enumerable and own propeties from asourceobject to target object.object are assigned and copied by reference. it will return the target object.
 *
 */
// Object.assign(target,source)
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};
const object2 = {
  g: 1,
  h: 2,
  i: 3,
};
const object3 = Object.assign({ c: 4, d: 5 }, object1);
console.log("object 1 is source", object3);
// it overrides the value in target by sorce if same key available in source
const objects = Object.assign({ g: 20, k: 14 }, object2);
