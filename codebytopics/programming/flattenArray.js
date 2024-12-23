const multiDArray = [
  [[1, 2], [3]],
  [1, 3, 4],
  [4, 5, 6],
];

function flattenedArray(arr) {
  const result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flattenedArray(element));
    } else {
      result.push(element);
    }
  });
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const flattenedResult = flattenedArray(multiDArray);
console.log(flattenedResult);
