/**
 *  5! = 5 x 4 x 3 x 2 x 1
 *  n! = n x (n-1) x (n-2) x (n-3) ... (n-n+1)
 *  5! = 5 x 4!
 */

function factorail(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorail(n - 1);
}
const factoria5 = factorail(5);
console.log(factoria5);
