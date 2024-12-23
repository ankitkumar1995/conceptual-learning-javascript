/**
 * primitive data type
 * deep copy
 */
let original = 10;
let copied = original;

console.log("original variable", original);
console.log("copied variable", copied);

copied = 20;
console.log("after change copied variable 10 to 20");
console.log("original variable", original);
console.log("copied variable", copied);

/**
 * non primitive type
 */
let originalObj = {
  name: "john",
  age: 20,
};
let copiedObj = originalObj;
console.log("original variable", originalObj);
console.log("copied variable", copiedObj);

copiedObj.age = 40;
console.log("after change copied obj variable age 20 to 40");
console.log("original variable", originalObj);
console.log("copied variable", copiedObj);

/**
 * javascript object copied to another object using assignment operator.
 * when we change anything in copied object it also reflects in original object.
 * javascript by default
 */

/**
 * deep copy
 * JSON.stringify()
 * Object.assign()
 * spread operator
 */

let originaldeepObj = {
  name: "john",
  age: 20,
};
// 1. JSOn.stringify()
let copiedeepObj = JSON.parse(JSON.stringify(originaldeepObj));
console.log("original variable", originaldeepObj);
console.log("copied variable", copiedeepObj);

copiedeepObj.age = 40;
console.log("after change copied obj variable age 20 to 40");
console.log("original variable", originaldeepObj);
console.log("copied variable", copiedeepObj);

let originassideepObj = {
  name: "john",
  age: 20,
  getName: () => {},
};
/**
 * JSON.stringify() method is not enough capable for copying function in aobject
 */

let copiedeepassiObj = JSON.parse(JSON.stringify(originassideepObj));
console.log("original variable", originassideepObj);
console.log("copied variable", copiedeepassiObj);

/**
 * 2. Object.assign()
 */
let copieassideepObj = Object.assign({}, originassideepObj);
console.log("original variable", originassideepObj);
console.log("copied variable", copieassideepObj);

copieassideepObj.age = 40;
console.log("after change copied obj variable age 20 to 40");
console.log("original variable", originassideepObj);
console.log("copied variable", copieassideepObj);

let origispreaddeepObj = {
  name: "john",
  age: 20,
  getName: () => {},
  address: {
    city: "bangalore",
    state: "karnataka",
  },
};
/**
 * Object.assign() method create a partial deep copy, if we have nested object and we change in nested value it also reflect in original object
 */
let copiedspreaddeepObj = Object.assign({}, origispreaddeepObj);
console.log("original variable", origispreaddeepObj);
console.log("copied variable", copiedspreaddeepObj);

copiedspreaddeepObj.age = 40;
copiedspreaddeepObj.address.city = "magalore";

/**
 * 3. spread operator
 */
let copiedspreaddeepObj = { ...origispreaddeepObj };
console.log("original variable", origispreaddeepObj);
console.log("copied variable", copiedspreaddeepObj);
/**
 * spread operator also forms a partial deep copy when copying a nested object, to create a deep copy need some more logic to copy object
 *
 */
copiedspreaddeepObj = {
  ...copiedspreaddeepObj,
  age: 41,
  address: {
    ...copiedspreaddeepObj.address,
    city: "shivmoga",
  },
};

console.log("original variable", origispreaddeepObj);
console.log("copied variable", copiedspreaddeepObj);
