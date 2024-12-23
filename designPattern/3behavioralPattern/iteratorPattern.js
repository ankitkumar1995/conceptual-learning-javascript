// iterator pattern provides a way to traverse a collection without exposing its internal representation
class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }
  next() {
    return this.index < this.items.length
      ? { value: this.items[this.index++], done: false }
      : { done: true };
  }
}
const items = ["A", "B", "C"];

const iterator = new Iterator(items);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
