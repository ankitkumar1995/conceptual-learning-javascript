function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);

// 1, undefined, number
/*
let x;
window.y=0;
x=window.y

x is local variable for function and y is global variable available outside.
*/
let a,
  b,
  c = 0;
console.log(a);
console.log(b);
console.log(c);
