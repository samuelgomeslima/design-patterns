// FactoryExample.js
import React from 'react';

class Car {
  constructor(model) {
    this.model = model;
  }
  drive() {
    return `Driving a ${this.model}`;
  }
}

class CarFactory {
  createCar(model) {
    return new Car(model);
  }
}

const FactoryExample = () => {
  const factory = new CarFactory();
  const cars = [
    factory.createCar('Cadillac Type 51'),
    factory.createCar('Tesla Model S'),
    factory.createCar('Ford Mustang'),
    factory.createCar('Chevrolet Camaro')
  ];

  return (
    <div>
      {cars.map((car, index) => (
        <div key={index}>{car.drive()}</div>
      ))}
    </div>
  );
};

export default FactoryExample;
