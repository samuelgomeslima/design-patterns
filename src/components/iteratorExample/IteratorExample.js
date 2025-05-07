// IteratorExample.js
import React from 'react';

// Iterator class
class CarIterator {
  constructor(cars) {
    this.cars = cars;
    this.index = 0;
  }

  next() {
    if (this.hasNext()) {
      return this.cars[this.index++];
    }
    return null;
  }

  hasNext() {
    return this.index < this.cars.length;
  }
}

// Collection class
class CarCollection {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  getIterator() {
    return new CarIterator(this.cars);
  }
}

// React component to demonstrate the Iterator pattern
const IteratorExample = () => {
  const carCollection = new CarCollection();
  carCollection.addCar('Cadillac Type 51');
  carCollection.addCar('Tesla Model S');
  carCollection.addCar('Ford Mustang');
  carCollection.addCar('Chevrolet Camaro');

  const iterator = carCollection.getIterator();
  const carList = [];

  while (iterator.hasNext()) {
    carList.push(<div key={iterator.index}>{iterator.next()}</div>);
  }

  return (
    <div>
      {carList}
    </div>
  );
};

export default IteratorExample;
