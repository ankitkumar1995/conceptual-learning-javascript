// 0, 1, 1, 2, 3, 5, 8, 13
function fibonacciSeries(n) {
  let prev = 0,
    next = 1;
  for (let i = 0; i < n; i++) {
    console.log(prev);
    let temp = prev + next;
    prev = next;
    next = temp;
  }
}
fibonacciSeries(5);

function recursiveFibonacci(n) {
  let prev = 0,
    next = 1;
  console.log(prev);
  prev = next;
  next = prev + next;
  if (next <= n) {
    return recursiveFibonacci(n - 1);
  }
}
recursiveFibonacci(5);
