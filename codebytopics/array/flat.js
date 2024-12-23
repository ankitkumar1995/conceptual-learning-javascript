const arr2d = ["a", "b", ["c", "d"]];
const newArr2d = arr2d.flat();
console.log(newArr2d);

const arrMultid1 = [90, 18, [89, 56], [13, 20, [67, 17]]];
const newMultid1 = arrMultid1.flat(2);
console.log(newMultid1);

const arrMultid2 = [90, 18, [13, 20, [67, 17, [56, 45]]]];
const newMultid2 = arrMultid2.flat(3);
console.log(newMultid2);

const arrMultid3 = [
  "Orange",
  "Pineapple",
  "Grapes",
  ["Potato", "Tomato", "Carrot", ["Guava", "Litchi"]],
];
const newMultid3 = arrMultid3.flat(3);
console.log(arrMultid3.flat(3));
