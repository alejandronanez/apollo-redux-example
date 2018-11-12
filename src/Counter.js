import React from 'react';

const Counter = ({ counter = 0 }) => {
  return <div className="Counter">Counter {counter}</div>;
};

export default Counter;
