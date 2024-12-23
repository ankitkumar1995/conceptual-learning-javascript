/**
 * slice()
 * The slice() method returns the shallow copy of a portion of array into a new array. it doesnt modify the original array.
 *
 * array.slice(startIndex,endIndex)
 *
 * startIndex
 * index at which to begin extraction. if negative extraction start from the end of the array.
 *
 * endIndex
 * the index before which to stop extraction. the slice() method will include elements upto, but not including, this index.
 * if not specified exract to the end of the array.
 *
 *
 */
let fruits = ["apple", "banana", "orange"];

fruits.slice();
console.log(
  "slice method not passing any argument and not assigning to any variable",
  fruits
);

const fruits1 = fruits.slice();
console.log("slice method not passing any argument", fruits1);

const fruits2 = fruits.slice(0);
console.log("slice method passing start index", fruits2);

const fruits3 = fruits.slice(-2);
console.log("start index negative", fruits3);
