/* currying using bind method */
console.log("start currying");
let multiply = function (x, y) {
  //   console.log(x);
  //   console.log(y);
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
/*
the multipy.bind(this,2) is create a copy of multipy method and assign value of x by 2.
let multiplyByTwo= function (y){
    let x= 2
    console.log(2*y)
}
*/
multiplyByTwo(null);

/* currying using closures */
let cmultiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let cmultiplyByTwo = cmultiply(2);

cmultiplyByTwo(5);
