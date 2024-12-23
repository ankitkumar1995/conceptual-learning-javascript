// Object.create()
const person1 = Object.create({});
console.log(person1);
const person2 = Object.create(null);
console.log(person2);
const person3 = Object.create({ name: "a", email: "b" });
console.log(person3);
