/*
isNaN() is a global function in javascript used to determine wheteher a value is "not a number"(NaN)

it takes one argument and attempts to convert it to a number before checking if it is NaN. 
if the argument cant be converted to a valid number isNaN return true otherwise it returns false
*/
console.log(isNaN("a", "b")); // true
console.log(isNaN("10")); // false
console.log(isNaN("alice"));
console.log(isNaN(46)); // false

/* 
NaN stands for "Not-a-Number" and is a special value of the Number data type in javascript.
It represents the result of a invalid mathmatical operation or when a function or operation that is supposed to return a number fails to do so.
NaN is considered as a falsey value which means it evalueates to false.
certain arthmatic operation such as dividing 0 by 0 or attempting to perform mathmatical operation on non numeric values,
result in undefined or unrepresentable values, the standard designates this special value as "NaN"
*/
let result = 0 / 0;
console.log(result);
console.log(result === NaN);
