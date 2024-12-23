// Maintains a list of dpendents and notifies them of state changes
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
const subject = new Subject();

subject.subscribe((data) => console.log(`observer received ${data}`));
subject.notify("event trigger");
