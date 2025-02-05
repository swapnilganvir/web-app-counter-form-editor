import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ count, setCount }) => {
  function handleClick(e) {
    if (e === '+') {
      setCount(prev => prev + 1);
      localStorage.setItem('count', count + 1);
    } else if (e === '') {
      setCount(0);
      localStorage.setItem('count', 0);
    } else if (count > 0) {
      setCount(prev => prev - 1);
      localStorage.setItem('count', count - 1);
    }
  }

  return (
    <div className="counter">
      <div className="count"> {count} </div>
      <div className="btns">
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('')}>Reset</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
    </div>
  );
};

export default Counter;
