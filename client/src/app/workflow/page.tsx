"use client";

import { useState } from "react";

interface CounterProps {}

const Counter = ({}: CounterProps) => {
  const [count, setCount] = useState(0);

  const increaseClick = () => {
    setCount(count + 1);
  };

  const decreaseClick = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-200 grid grid-cols-3 justify-between">
      <h1 className="text-center">Count: {count}</h1>
      <button className="bg-blue-200 hover:bg-blue-400" onClick={increaseClick}>
        +
      </button>
      <button className="bg-red-200 hover:bg-red-400" onClick={decreaseClick}>
        -
      </button>
    </div>
  );
};

export default Counter;
