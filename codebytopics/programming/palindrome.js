function isStringPalindrome(strs) {
  let str = strs.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isStringPalindrome("aka")); // true
console.log(isStringPalindrome("A man, a plan, a canal, Panama!")); // true
