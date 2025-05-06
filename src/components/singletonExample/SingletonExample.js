// SingletonExample.js
import React from 'react';

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const SingletonExample = () => {
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  return <div>{instance1 === instance2 ? 'Singleton works!' : 'Singleton failed!'}</div>;
};

export default SingletonExample;
