let num = 1;
function show() {
  console.log("show welcome", num);
  num++;
  show(); // range error
}

show();
// function abc() {
//   show();
// }
// abc();
