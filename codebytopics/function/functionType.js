function sum1(x, y) {
  return x + y;
}

console.log(sum1.length);
console.log(sum1.prototype);
let sumScore1 = sum1(3, 6);
console.log(sumScore1);
// new.target
function sum2(x, y) {
  console.log(new.target, "new.target");
  return x + y;
}
let sumScore2 = sum2(3, 6);
let sumScore3 = new sum2(3, 6);
console.log("new.target undefined if call normally", sumScore2);
console.log("construtor sum method call", sumScore3);
