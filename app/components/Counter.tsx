"use client";
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="bg-blue-700 p-6 text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">CONTADOR</h2>
      <p className="text-lg">CLICKS AL MOMENTO:  {count}</p>
      <div className="mt-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 mr-4"
        >
          Incrementar
        </button>
        <button
          onClick={reset}
          className="bg-red-500 text-white px-4 py-2"
        >
          Reiniciar Conteo
        </button>
      </div>
    </div>
  );
};

export default Counter;
