// ObserverExample.js
import React, { useState, useEffect } from 'react';
import Subject from './Subject';

const ObserverExample = () => {
  const [state, setState] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const subject = new Subject();

    const observer1 = {
      update: () => {
        const newState = subject.getState();
        setLogs(prevLogs => [...prevLogs, `Observer 1 notified. New state: ${newState}`]);
      }
    };

    const observer2 = {
      update: () => {
        const newState = subject.getState();
        setLogs(prevLogs => [...prevLogs, `Observer 2 notified. New state: ${newState}`]);
      }
    };

    const observer3 = {
      update: () => {
        const newState = subject.getState();
        setLogs(prevLogs => [...prevLogs, `Observer 3 notified. New state: ${newState}`]);
      }
    };

    subject.attach(observer1);
    subject.attach(observer2);
    subject.attach(observer3);

    // Simulate state changes
    const interval = setInterval(() => {
      setState(prevState => {
        const newState = prevState + 1;
        subject.setState(newState);

        // Stop the interval when the state reaches 5
        if (newState >= 3) {
          clearInterval(interval);
        }

        return newState;
      });
    }, 1000);

    // Clean up observers and interval
    return () => {
      clearInterval(interval);
      subject.observers = [];
    };
  }, []);

  return (
    <div>
      <p>Current State: {state}</p>
      <div>
        <p>Logs:</p>
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
};

export default ObserverExample;
