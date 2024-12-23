var carvar = new Vehicle("Honda", "white", "2010", "UK");
console.log(carvar);

let carlet = new Vehicle("Honda", "white", "2010", "UK");
console.log(carlet);

const carconst = new Vehicle("Honda", "white", "2010", "UK");
console.log(carconst);
// function Vehicle(model, color, year, country) {
//   this.model = model;
//   this.color = color;
//   this.year = year;
//   this.country = country;
// }
var Vehicle = (model, color, year, country) => {
  return { model, color, year, country };
};
