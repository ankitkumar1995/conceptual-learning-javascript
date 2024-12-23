/*1. map */
/*
The map method iterarte over each element in the array and applies a callback function to each element to transform it.

The "map" method is used to transform each element of an array 
into a new value and create a new array containing the 
transformed values.

It doesnot modify the original array. The resulting array will 
have the same length as the original array.

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((num) => num * 2);

console.log("map method original array", numbers);
console.log("map method new array", doubleNumbers);

/* 2. forEach */
/*
The "forEach" method is used to iterarte over each element in an array and perform a specific
operation and action for each element.
Unlike it doesn't return a new array. It is typically used for side effects logging, updating variables outside the loop.

*/

const names = ["Alice", "Bob", "Charlie"];
// logging
names.forEach((name) => console.log("foreach loging", name));
// updating variable
let sum = 0;
numbers.forEach((num) => (sum += num));
console.log("foreach modify", sum);

/* 3. filter */
/*
The "filter" method is used to create a new array 
containing only the elements that passes the given condition.
It doesnt modify the original array. The resulting array may have the fewer element than the original array.
*/
const evennumber = numbers.map((num) => num % 2);

console.log("filter", evennumber);

/* 4. find */
/*
The "find" method is used to find the first element in that array that satisfies a given condition
specified by the callback function.
It returns the value of the first element that passes that passes the test,"undefined", if no element matches the condition.
*/
const firstevennumber = numbers.find((num) => num % 2);

console.log("find method", firstevennumber);

/* 5. some */
/*
The "some" method is used to check if atleast one element in the array satisfies a given condition specified by the callback function.

*/

const hasheventnumber = numbers.some((num) => num % 2 === 0);
