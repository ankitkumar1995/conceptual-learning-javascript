const numbers = [1, 5, 6, 8, 9, 12];

const texts = ["john", "jack", "alice"];

const persons = [
  {
    name: "john",
    age: 20,
  },
  {
    name: "rees",
    age: 21,
  },
];

console.log("numbers array indexOf()", numbers.indexOf(5));
console.log("texts array indexOf()", texts.indexOf("alice"));
console.log(
  "object array indexOf",
  persons.indexOf({
    name: "rees",
    age: 21,
  })
);
