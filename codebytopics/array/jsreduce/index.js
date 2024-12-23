/**
 * The reduce() method is built-in function is javascript to iterate over array
 * and accumulate single value by applying a provided function to each element
 * of the array. It is use to perform for aggregation,calculation and transformations on array.
 * arr.reduce(accumulator,[initialvalue])
 *
 */

// sum of array element
const arr1 = [1, 2, 3, 5, 6];
const sum = arr1.reduce((acc, curr, index) => {
  console.log(index);
  return acc + curr;
}, 0);
console.log(sum);
// accumulator acc starts with initial value 0 if not provided initial value first element of array is accumulator value.
