/**
 * The splice() method is used to modifying the contents of array by removing or replacing existing elements or adding new elements in place.
 *
 * array.splice(startIndex,removeCount,item1,item2,...)
 *
 * startIndex
 * index at which to start changing the array. if negative it will count from end of the array.
 *
 * removeCount
 * the number of elements to remove from the array.if set to 0 no elements are removed.
 *
 * item1, item2,...
 * the elements to add to the array,starting at the startIndex
 *
 *
 */

let fruits = ["apple", "banana", "orange"];
fruits.splice();
console.log("nothing pass to splice method", fruits);

fruits.splice(0, 1);
console.log("remove first element", fruits);

fruits.splice(0, 0, "kiwi");
console.log("insert record at first index", fruits);

fruits.splice(-1, 1);
console.log("remove last element", fruits);
