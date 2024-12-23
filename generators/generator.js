function* genSequence1() {
  yield 1;
  yield 2;
  yield 3;
}
let gen1 = genSequence1();
let first1 = gen1.next();

let second1 = gen1.next();
let thired1 = gen1.next();
let done1 = gen1.next();
console.log(`first yield value`, first1);
console.log(`second yield value`, second1);
console.log(`thired yield value`, thired1);
console.log(`yield are executed`, done1);
function* genSequence2() {
  yield 1;
  yield 2;
  return 3;
}
let gen2 = genSequence2();
let first2 = gen2.next();

let second2 = gen2.next();
let thired2 = gen2.next();
let done2 = gen2.next();
console.log(`first yield value`, first2);
console.log(`second yield value`, second2);
console.log(`thired return value`, thired2);
console.log(`yield are executed`, done2);
// generators are iterable
function* generateSequence1() {
  yield 1;
  yield 2;
  return 3;
}

let generator1 = generateSequence1();

for (let value of generator1) {
  console.log(`generator iteration`, value);
}

// generator function iteration using for...of return all value for yield instead of return
function* generateSequence2() {
  yield 1;
  yield 2;
  yield 3;
}

let generator2 = generateSequence2();

for (let value of generator2) {
  console.log(`generator iteration complete yield`, value);
}
// generator composition
function* generateSequence3(start, end) {
  for (let i = start; i <= end; i++) yield 1;
}
let genComp = generateSequence3(0, 9);
console.log(genComp);
function* generatePasswordCodes() {
  yield* generateSequence3(48, 57);
  yield* generateSequence3(65, 90);
  yield* generateSequence3(97, 122);
}

let str = "";
for (let code of generatePasswordCodes()) {
  console.log(code);
  console.log(String.fromCharCode(code));
  str += String.fromCharCode(code);
}

console.log(str);
