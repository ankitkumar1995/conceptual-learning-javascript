// separates the construction of a complex object from its representation
// it allow us to construct a object step by step.
class CarBuilder {
  constructor() {
    this.car = {};
  }
  setEngine(engine) {
    this.car.engine = engine;
  }
  setSeats(seats) {
    this.car.seats = seats;
  }
  build() {
    return this.car;
  }
}

const car = new CarBuilder();
car.setEngine("V8");
car.setSeats(4);
car.build();

console.log(car);
