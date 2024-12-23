//  map, filter reducer
//  pollyfills for map
//  Array.map((num,i,arr)=>{})

Array.prototype.mapPollyfill = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const digits = [1, 2, 3, 4, 5, 6];
const multiplyDigitBytwo = digits.mapPollyfill((digit, i, arr) => {
  return digit * 2;
});

console.log(multiplyDigitBytwo);

//  pollyfill for filter
Array.prototype.filterPollyfill = function () {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(cb(this[i]));
    }
  }
  return temp;
};

const filterGreaterThantwo = digits.mapPollyfill((digit, i, arr) => {
  return digit * 2;
});
console.log(filterGreaterThantwo);

//  pollyfill for reduce
//  Array.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.reducePollyfill = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
const digitSum = digits.reducePollyfill((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
