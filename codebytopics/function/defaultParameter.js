function functionDfinition(parameter1, parameter2) {
  // function body
}

functionDfinition("arguments1", "arguments2");
function sum(x, y) {
  return x + y;
}
console.log(sum(3, 6));

// setting defualt parameters for a function
function say(message) {
  console.log(message);
}
say();

//passing undefined argumnets
function createDiv(
  height = "100px",
  width = "100px",
  border = "solid 1px red"
) {
  //   let div = document.createElement("div");
  //   div.style.height = height;
  //   div.style.width = width;
  //   div.style.border = border;
  //   document.body.appendChild(div);
  //   return div;
  console.log(height);
  console.log(width);
  console.log(border);
}

createDiv(); // return default values

createDiv(undefined, undefined, "solid 5px blue"); // defualt value for width and height and border have specific border style

// evaluating default parameters
function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}

console.log(put("toy car"));
console.log(put("teddy bear"));

// using ithers parameter in default values
function sumDefault(x = 1, y = x, z = x + y) {
  return x + y + z;
}
console.log(sumDefault());
