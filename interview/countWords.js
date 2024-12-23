const text = "armatry";
// using reduce method
const splitText = text.split("");
const countCharacter = splitText.reduce((acc, value) => {
  if (acc[value]) {
    acc[value] = acc[value] + 1;
  } else {
    acc[value] = 1;
  }
  return acc;
}, {});

console.log(countCharacter);
