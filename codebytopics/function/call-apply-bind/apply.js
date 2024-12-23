// apply() method
const person = {
  firstName: "john",
  lastName: "alice",
};
function greet(greeting, message) {
  return `${greeting} ${this.firstName} ${message}`;
}
let greetRefApply = greet.apply(person, ["My name is", "Alice"]);

console.log("apply method for context of this", greetRefApply);
// function borrowing
// the apply method allows object to borrow the method of another object without duplicatiing the code
const computer = {
  name: "MacBook",
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `The ${this.name} is On`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};
const server = {
  name: "Dell PowerEdge T30",
  isOn: false,
};
/**
 * The server object doesn’t have the turnOn() and turnOff() methods.

To execute the turnOn() method of the computer object on the server object, you can use the apply() method as follows
 */
let borrowMethods = computer.turnOn.apply(server);
console.log("server turon", borrowMethods);
//javascript apply() method to append array

let originalToken = [1, 2, 3];
let appendingTOken = [4, 5, 6];
originalToken.push.apply(originalToken, appendingTOken);
console.log(originalToken, "modifie originalToken");
