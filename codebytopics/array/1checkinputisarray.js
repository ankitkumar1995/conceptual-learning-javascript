function isArray(input) {
  //   if (typeof input === "object" && toString.call(input)) {
  //     console.log(toString.call(input));
  //     console.log("input is array");
  //     return;
  //   }
  if (typeof input === "object" && Array.isArray(input)) {
    console.log("input is array");
    return;
  }
  console.log("input is not array");
}
isArray(["a", "b", "c"]);
isArray("isArray");
isArray({ a: "a", b: "b", c: "c" });
/**
 * toString.call() method is often used to determine the internal property of object.
 * Array.isArray() method return true is if array
 */
