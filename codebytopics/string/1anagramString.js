// // Anagram of a string is another string that contains the same characters only the order of characters can be different.
// // const isAnagram = (str1, str2) => {
// //   str1 = str1.replace(/\s/g, "").toLowerCase();
// //   str2 = str2.replace(/\s/g, "").toLowerCase();

// //   const str1Length = str1.length;
// //   const str2Length = str2.length;
// //   if (str1Length !== str2Length) {
// //     return "two string cant be anagram";
// //   }

// //   const str1sort = str1.split("").sort().join("");
// //   const str2sort = str2.split("").sort().join("");
// //   console.log(str1sort);
// //   console.log(str2sort);
// //   if (str1sort === str2sort) {
// //     return "anagram string";
// //   }
// //   return "string cant anagram";
// // };
// // console.log(isAnagram("ac ai", "ciaa"));
// // const isAnagram = (str1, str2) => {
// //   str1 = str1.replace(/\s/g, "").toLowerCase();
// //   str2 = str2.replace(/\s/g, "").toLowerCase();

// //   const str1Length = str1.length;
// //   const str2Length = str2.length;
// //   if (str1Length !== str2Length) {
// //     return false; // Return a boolean instead of a string
// //   }

// //   const str1sort = str1.split("").sort().join("");
// //   const str2sort = str2.split("").sort().join("");

// //   if (str1sort === str2sort) {
// //     return true; // Return a boolean instead of a string
// //   }
// //   return false; // Return a boolean instead of a string
// // };
// const isAnagram = (str1, str2) => {
//   str1 = str1.replace(/\s/g, "").toLowerCase();
//   str2 = str2.replace(/\s/g, "").toLowerCase();

//   const str1Length = str1.length;
//   const str2Length = str2.length;
//   if (str1Length !== str2Length) {
//     return false;
//   }

//   const str1sort = str1.split("").sort().join("");
//   const str2sort = str2.split("").sort().join("");

//   return str1sort === str2sort;
// };

// console.log(isAnagram("ac ai", "ciaa")); // Outputs: false

// console.log(isAnagram("ac ai", "ciaa")); // Outputs: false
const isAnagram = (str1, str2) => {
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  const str1Length = str1.length;
  const str2Length = str2.length;
  if (str1Length !== str2Length) {
    return false;
  }

  const str1sort = str1.split("").sort().join("").replace(/\s/g, "");
  const str2sort = str2.split("").sort().join("").replace(/\s/g, "");

  return str1sort === str2sort;
};

console.log(isAnagram("ac ai", "ciaa")); // Outputs: false
