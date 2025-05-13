// StrategyExample.js
import React from 'react';

// Strategy for calculating fuel efficiency in miles per gallon
class FuelEfficiencyCalculateMilesPerGallon {
  execute(milesDriven, gallonsUsed) {
    return milesDriven / gallonsUsed;
  }
}

// Strategy for calculating fuel efficiency for electric cars in MPGe
class FuelEfficiencyCalculateMPGe {
  execute(milesDriven, kWhUsed) {
    const kWhPerGallonEquivalent = 33.7; // 1 gallon of gasoline is equivalent to 33.7 kWh
    return (milesDriven / kWhUsed) * kWhPerGallonEquivalent;
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
  executeStrategy(milesDriven, fuelUsed) {
    return this.strategy.execute(milesDriven, fuelUsed);
  }
}

const StrategyExample = () => {
  // Example usage for Cadillac Type 51 (assuming 10 mpg)
  const cadillacStrategy = new FuelEfficiencyCalculateMilesPerGallon();
  const cadillacContext = new Context(cadillacStrategy);
  const cadillacEfficiency = cadillacContext.executeStrategy(300, 30); // 300 miles, 30 gallons

  // Example usage for Tesla Model S (assuming 100 MPGe)
  const teslaStrategy = new FuelEfficiencyCalculateMPGe();
  const teslaContext = new Context(teslaStrategy);
  const teslaEfficiency = teslaContext.executeStrategy(300, 90); // 300 miles, 90 kWh

  // Example usage for Ford Mustang (assuming 20 mpg)
  const mustangStrategy = new FuelEfficiencyCalculateMilesPerGallon();
  const mustangContext = new Context(mustangStrategy);
  const mustangEfficiency = mustangContext.executeStrategy(300, 15); // 300 miles, 15 gallons

  // Example usage for Chevrolet Camaro (assuming 22 mpg)
  const camaroStrategy = new FuelEfficiencyCalculateMilesPerGallon();
  const camaroContext = new Context(camaroStrategy);
  const camaroEfficiency = camaroContext.executeStrategy(300, 13.64); // 300 miles, 13.64 gallons

  return (
    <div>
      <div>Cadillac Type 51 Efficiency: {cadillacEfficiency.toFixed(2)} mpg</div>
      <div>Tesla Model S Efficiency: {teslaEfficiency.toFixed(2)} MPGe</div>
      <div>Ford Mustang Efficiency: {mustangEfficiency.toFixed(2)} mpg</div>
      <div>Chevrolet Camaro Efficiency: {camaroEfficiency.toFixed(2)} mpg</div>
    </div>
  );
};

export default StrategyExample;
