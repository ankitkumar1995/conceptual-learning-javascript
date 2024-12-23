/**
 * array find()
 */
const numbers = [1, 2, 3, 4, 5, 6];
const fruits = ["apple", "banana", "orange"];
const fruitsObj = [
  {
    id: 1,
    name: "apple",
  },
  {
    id: 2,
    name: "banana",
  },
];
const findNum = numbers.find((num) => num % 2 === 0);
const isFindNum = numbers.find((num) => num % 9 === 0);
const findFruit = fruits.find((fruit) => fruit === "apple");
const findFruitObj = fruitsObj.find((fruit) => fruit.id === 2);
console.log("array find() method");
console.log("");
console.log("condition fail", isFindNum); // undefined
console.log(findNum); // 2
console.log(findFruit); // apple
console.log(findFruitObj); // {id:2,name: "banana"}

/**
 * array some()
 */

const isNum = numbers.some((num, index, array) => {
  console.log(array);
  num % 9 === 0;
});
const isFruit = fruits.some((fruit) => fruit === "Orange");
const issomeFruit = fruits.some((fruit) => fruit === "mango");
const issomeNum = numbers.some((num) => num % 2 === 2);
console.log("");
console.log("array some() method");
console.log("");
console.log("condition fail", isNum);
console.log(isFruit);
console.log("condition fail", issomeFruit);
console.log(issomeFruit);

const threshold = { value: 5 };

function checkThreshold(element) {
  return element > this.value;
}

const numberaboveThreshold = numbers.some(checkThreshold, threshold);
console.log("some thisArgs", numberaboveThreshold);
