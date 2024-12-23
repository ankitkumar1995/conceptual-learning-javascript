// pass-by-value for primitive data types
function updateValue(val) {
  val = 42;
  console.log("update function value", val);
}
let num = 10;
updateValue(num);
console.log(
  "original value not affetc by changes in argument inside the function",
  num
);
// pass by value of refrence for non-primitive type

function updateObject(obj) {
  obj.property = "new value";
}
let originalObject = { property: "old value" };
updateObject(originalObject);
console.log(
  "chages in function argument reflects in original object",
  originalObject.property
);
