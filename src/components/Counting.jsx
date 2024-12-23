import React from 'react'

import useCounterStore from '../store/useCounterStore';

const Counting = () => {
    const {count,resetCount,increaseCount,decreaseCount} = useCounterStore();

    const handleIncrement = () => {
        increaseCount(3);
    }
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">Count: {count}</h1>
    <div className="flex gap-4">
      <button onClick={handleIncrement} className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
        Increase
      </button>
      <button onClick={decreaseCount} className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600">
        Decrease
      </button>
      <button onClick={resetCount} className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600">
        Reset
      </button>
    </div>
  </div>
  )
}

export default Counting