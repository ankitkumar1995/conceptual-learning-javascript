// 1. Please tell me what equality means in JavaScript.

// loose equality (==)
console.log(5 == "5");
console.log(false == 0);
console.log(true == 1);

console.log(null == undefined);
console.log([] == "");
console.log([1, 2] == "1,2");
console.log("[1,2]" == "[1,2]");

console.log({} == "[object Object]");
// strict equality (===)
console.log(5 === "5");
console.log(false === 0);
console.log(true === 1);

console.log(null === undefined);
console.log([] === "");
console.log([1, 2] === "1,2");
console.log("[1,2]" === "[1,2]");

console.log({} === "[object Object]");
