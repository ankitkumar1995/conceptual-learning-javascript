/**
 * function to find the first element in array
 * first([7,9,0,-2])
 * first([],3)
 * first([7,9,0,-2],3)
 * first([7,9,0,-2],6)
 * first([7,9,0,-2],-3)
 */
function findEleFIrst(arr, n) {
  if (n === undefined) {
    if (arr.length > 0) {
      return arr[0];
    } else {
      return [];
    }
  } else if (n > 0) {
    if (arr.length > 0) {
      return arr.filter((num, index) => {
        console.log(num);
        if (index < n) return num;
      });
    } else {
      return [];
    }
  } else {
    return [];
  }
}
console.log("first element", findEleFIrst([7, 0, 9 - 2]));
console.log("first 3 element in empty array", findEleFIrst([], 3));

console.log("first 3 element", findEleFIrst([7, 9, 0, -2], 3));

console.log("first 6 element", findEleFIrst([7, 9, 0, -2], 6));
console.log("first -3 element", findEleFIrst([7, 9, 0, -2], -3));
