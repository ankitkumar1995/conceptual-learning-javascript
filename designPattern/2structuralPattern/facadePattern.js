// facade pattern provide a simplified interface to a complex subsystem
class Engine {
  start() {
    console.log("engine started");
  }
}
class AC {
  turnOn() {
    console.log("ac turned on");
  }
}
class CarFacade {
  constructor() {
    this.engine = new Engine();
    this.ac = new AC();
  }
  startCar() {
    this.engine.start();
    this.ac.turnOn();
  }
}
const car = new CarFacade();
car.startCar();
