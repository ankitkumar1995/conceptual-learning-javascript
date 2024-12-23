// Creates new object by cloning existing object, which
// serves as prototype. This approach avoids creating object from
// scratch and is useful for performance optimization.
const carPrototype = {
  startEngine() {
    console.log(`${this.model} engine started`);
  },
};
const myCar = Object.create(carPrototype);
myCar.model = "tesla";
myCar.startEngine();
