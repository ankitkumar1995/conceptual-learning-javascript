/**
 * [1,2,10,6,9,[12,18,5,[4,8]],[14,20]]
 * [1,2,10,6,9,12,18,5,4,8,14,20]
 */

/**
 * singleArray=[]
 * iterate array and check is elements are array of not
 * if array
 * then single array and call recusively same function
 * else
 * singleArray element push
 */
function convertToSingleArray(myArr) {
  let singleArray = [];
  myArr.forEach((myarr) => {
    if (Array.isArray(myarr)) {
      console.log(myarr, "admj");
      singleArray.concat(convertToSingleArray(myarr));
      console.log(singleArray, "sinle");
    } else {
      console.log(myarr, "else");
      singleArray.push(myarr);
    }
  });
  return singleArray;
}
console.log(
  convertToSingleArray([1, 2, 10, 6, 9, [12, 18, 5, [4, 8]], [14, 20]])
);
