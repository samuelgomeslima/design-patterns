// Observer.js
class Observer {
    constructor(name, subject) {
      this.name = name;
      this.subject = subject;
      this.subject.attach(this);
    }
  
    update() {
      console.log(`${this.name} notified. New state: ${this.subject.getState()}`);
    }
  }
  
  export default Observer;
  