//  a factory creates object without exposing the istantiation logic
// instead of directly calling a constructor, we use factory method
class VehicleFactory {
  createVehicle(type) {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        throw new Error("Invalid vehicle type");
    }
  }
}
class Car {
  drive() {
    console.log("driving a car");
  }
}

class Bike {
  ride() {
    console.log("riding a bike");
  }
}

const facotry = new VehicleFactory();
const car = facotry.createVehicle("car");
car.drive();
