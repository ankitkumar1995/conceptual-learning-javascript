/**
 * array slice()
 */
const fruits = ["apple", "banana", "cherry", "date"];
const sliceform_1_fruite = fruits.slice(1); // [ "banana", "cherry", "date"]
const slice_0_to_some_fruit = fruits.slice(0); // ["apple", "banana", "cherry", "date"]
const slice_original_array_fruit = fruits.slice(); // ["apple", "banana", "cherry", "date"]
const slice_between_fruit = fruits.slice(2, 5); // ["cherry", "date"]
const slice_index_dont_fruit = fruits.slice(5, 14); // []
console.log("");
console.log("arraty slice() method");
console.log(sliceform_1_fruite);
console.log(slice_0_to_some_fruit);
console.log(slice_original_array_fruit);
console.log(slice_between_fruit);
console.log(slice_index_dont_fruit);
/**
 * array splice()
 */
fruits.splice(2, 0, 1, 2);
console.log("");
console.log("array splice() method");
console.log("insert at 2", fruits);
fruits.splice(0, 1, 5, 6, 9);
console.log("remove 1 and insert 5,6,9", fruits);
