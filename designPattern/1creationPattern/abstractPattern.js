// Abstract factory creates families of related object without
// specifying their concrete classes. it is extension of the facotry pattern.
class ElectricVehicleFactory {
  createCar() {
    return new ElectricCar();
  }
  createBike() {
    return new ElectricBike();
  }
}
class ElectricCar {
  drive() {
    console.log("Driving electric car");
  }
}
class ElectricBike {
  ride() {
    console.log("Riding electric bike");
  }
}
const factory = new ElectricVehicleFactory();
const car = factory.createCar();
car.drive();
car.ride;
