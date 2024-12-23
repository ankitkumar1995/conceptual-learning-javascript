const arrayInt = [50, 20, 10, 40, 30];
const arrayStr = [
  "arrayStr1",
  "arrayStr2",
  "arrayStr3",
  "arrayStr4",
  "arrayStr5",
];
const sortedArray = arrayInt.reduce((acc, curr) => {
  //   console.log(acc, "accumulator");
  //   console.log(curr, "current");
  let index = 0;
  while (index < acc.length && curr > acc[index]) index++;
  acc.splice(index, 0, curr);
  return acc;
}, []);

console.log(arrayInt);
console.log(sortedArray);
