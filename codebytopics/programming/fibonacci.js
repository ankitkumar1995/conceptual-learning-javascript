let prev = 0;
let next = 1;
for (let i = 0; i < 5; i++) {
  console.log(prev);
  let temp = prev;
  prev = next;
  next = temp + prev;
}
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
for (let i = 0; i < 6; i++) {
  console.log(fibonacci(i));
}
