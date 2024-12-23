function isAnagram(str1, str2) {
  let str1Length = str1.length;
  let str2Lenght = str2.length;
  if (str1Length !== str2Lenght) {
    return "string are not anagram";
  }
  let charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);
  for (let char of str2) {
    if (!charCount[char]) {
      return "strings are not anagram";
    }
    charCount[char]--;
  }
  return "strings are anagram";
}
console.log(isAnagram("silents", "listens"));
console.log(isAnagram("madam", "mada"));
