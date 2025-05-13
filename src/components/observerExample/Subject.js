// Subject.js
class Subject {
    constructor() {
      this.observers = [];
      this.state = 0;
    }
  
    getState() {
      return this.state;
    }
  
    setState(state) {
      this.state = state;
      this.notifyAllObservers();
    }
  
    attach(observer) {
      this.observers.push(observer);
    }
  
    notifyAllObservers() {
      this.observers.forEach(observer => observer.update());
    }
  }
  
  export default Subject;
  