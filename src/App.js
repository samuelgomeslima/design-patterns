import React from 'react';
import FactoryExample from './components/factoryExample/FactoryExample';
import SingletonExample from './components/singletonExample/SingletonExample';
import BuilderExample from './components/builderExample/BuilderExample';
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
    </div>
  );
}

export default App;
