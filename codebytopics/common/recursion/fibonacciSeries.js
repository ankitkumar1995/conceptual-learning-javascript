// 0, 1, 1, 2, 3, 5, 8, 13
function fibonacciSeriesA(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const prevSeries = fibonacciSeriesA(n - 1);
    const nextRecord =
      prevSeries[prevSeries.length - 1] + prevSeries[prevSeries.length - 2];
    prevSeries.push(nextRecord);
    return prevSeries;
  }
}
const fibonacciA5 = fibonacciSeriesA(5);

console.log(fibonacciA5);
function fibonacciSeriesFor(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacciSeriesFor(n - 1) + fibonacciSeriesFor(n - 2);
  }
}

for (let i = 0; i < 5; i++) {
  console.log(fibonacciSeriesFor(i));
}

function fibonacciSeries(n, curr = 0, next = 1) {
  if (curr < n) {
    console.log(curr);
    return fibonacciSeries(n, next, curr + next);
  }
}

fibonacciSeries(5, 0, 1);
