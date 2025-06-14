import React from 'react';
import FactoryExample from './components/factoryExample/FactoryExample';
import SingletonExample from './components/singletonExample/SingletonExample';
import BuilderExample from './components/builderExample/BuilderExample';
import StrategyExample from './components/strategyExample/StrategyExample';
import IteratorExample from './components/iteratorExample/IteratorExample';
import ObserverExample from './components/observerExample/ObserverExample';
import ProxyExample from './components/proxyExample/ProxyExample';
import FacadeExample from './components/facadeExample/FacadeExample';
import AdapterExample from './components/adapterExample/AdapterExample';
import logo from './logo.svg';

function App() {
  const card1 = new BuilderExample()
      .setTitle('Card Title 1')
      .setContent('This is the content of card 1.')
      .setFooter('Footer card 1')
      .build();

    const card2 = new BuilderExample()
      .setTitle('Card Title 2')
      .setContent('This is the content of card 2.')
      .setImageUrl(logo)
      .setImageWidth('100px')
      .setImageHeight('100px')
      .setFooter('Footer card 2')
      .build();

  return (
    <div>
      <h1>Design Patterns in React</h1>

      <h2>Creational Patterns</h2>
      
      <h3>Factory</h3>
      <FactoryExample />
      
      <h3>Singleton</h3>
      <SingletonExample />

      <h3>Builder</h3>
      {card1}
      {card2}
      
      <h2>Behavioral Patterns</h2>
      
      <h3>Strategy</h3>
      <StrategyExample />

      <h3>Iterator</h3>
      <IteratorExample />
      
      <h3>Observer</h3>
      <ObserverExample />
      
      <h2>Structural Patterns</h2>

      <h3>Proxy</h3>
      <ProxyExample />

      <h3>Facade</h3>
      <FacadeExample />

      <h3>Adapter</h3>
      <AdapterExample />
    </div>
  );
}

export default App;
