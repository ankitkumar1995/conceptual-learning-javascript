//"marray"
const myStr = "maray";

// for loop
function sortString(str) {
  let sortedStr = str[0];
  for (let i = 1; i < str.length; i++) {
    for (let j = 0; j < sortString.length; j++) {
      if (str[i] < sortedStr[j]) {
        console.log("a");
        const temp = sortedStr[j];
        sortedStr[j] = str[i];
        str[i] = temp;
        console.log(sortedStr[j], str[i], temp);
        sortedStr += str[i];
      } else {
        console.log("b");
        sortedStr += str[i];
      }
    }
  }
  console.log(sortedStr);
  return sortedStr;
}

sortString(myStr);
// console.log("Sorted string for loop", forSortedStr);

const sortedString = myStr.split().reduce(() => {}, "");

console.log(sortString);
