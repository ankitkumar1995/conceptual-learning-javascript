// add behavior to object dynamically
function basicCar() {
  return { cost: () => 20000 };
}

function addSunroof(car) {
  const originalCost = car.cost;
  car.cost = () => originalCost() + 1500;
  return car;
}
let car = basicCar();
car = addSunroof(car);
console.log(car.cost());
