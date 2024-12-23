// Shallow Copy: Copies the immediate properties of an object or array.
// If the object has nested objects or arrays, it copies only the reference to those nested objects, not the actual nested objects.
// Deep Copy: Creates a new object, recursively copying all the properties and
// sub-properties (nested objects), so the copy is entirely independent of the original object.
const original = { name: "john", address: { city: "new york" } };
const originalSpread = {
  id: 101,
  name: "Smartphone",
  category: {
    id: 1,
    name: "Electronics",
    subcategory: {
      id: 10,
      name: "Mobile Phones",
    },
  },
};
// Object.assign

// Object.assign() is a method used to create shallow copies of objects.
//  It only copies top level properties and shares reference fro nested objects.
const shallowCopy = Object.assign({}, original);

console.log(
  "shallow copy of original object using Object.assign is ",
  shallowCopy
);
shallowCopy.name = "Earphone";
shallowCopy.category.name = "Electronic Accessories";
console.log("after updating shallow copy original is", originalSpread);

// spread operator
// Spread operator is use to create shallow copies.
// It behaves similarly to object.assign copying top level propeties by value and nested object by reference.
const shallowCopyWithSpread = { ...originalSpread };
console.log(
  "shallow copy of original object using spread is ",
  shallowCopyWithSpread
);
shallowCopyWithSpread.name = "ankit";
shallowCopyWithSpread.address.city = "surat";
console.log(
  "after updating shallow copied with spread object original object is ",
  original
);

// const originalSpread = {
//   id: 101,
//   name: "Smartphone",
//   category: {
//     id: 1,
//     name: "Electronics",
//     subcategory: {
//       id: 10,
//       name: "Mobile Phones",
//     },
//   },
//   price: 499.99,
//   specifications: {
//     brand: "BrandX",
//     model: "X1000",
//     dimensions: {
//       height: "150mm",
//       width: "70mm",
//       depth: "8mm",
//     },
//     weight: "180g",
//     battery: {
//       capacity: "4000mAh",
//       type: "Lithium-ion",
//     },
//   },
//   stock: {
//     available: true,
//     quantity: 200,
//   },
//   reviews: [
//     {
//       userId: 501,
//       rating: 4.5,
//       comment: "Great phone with good battery life!",
//     },
//     {
//       userId: 502,
//       rating: 4.0,
//       comment: "Decent performance but a bit pricey.",
//     },
//   ],
//   seller: {
//     id: 3001,
//     name: "TechStore",
//     address: {
//       street: "123 Tech Street",
//       city: "TechCity",
//       zip: "54321",
//     },
//   },
// }
