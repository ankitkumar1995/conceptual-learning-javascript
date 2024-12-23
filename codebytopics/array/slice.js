const textArr = ["AngularJS", "Node.js", "JQuery", "Bootstrap"];

const sliced1 = textArr.slice();
console.log(sliced1);

const sliced2 = textArr.slice(0);
console.log(sliced2);

const sliced3 = textArr.slice(1);
console.log(sliced3);

const sliced4 = textArr.slice(2);
console.log(sliced4);

const sliced5 = textArr.slice(0, 1);
console.log(sliced5);

const sliced6 = textArr.slice(10, 20);
console.log(sliced6);
const sliced7 = textArr.slice(1, -2);
console.log(sliced7);
const sliced8 = textArr.slice(-3, -1);
console.log(sliced8);

// slice method incorrect it accept first as start index and second as end index
const sliced9 = textArr.slice(3, 1);
console.log(sliced9);
