import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Interactive Counter
      </h2>
      
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded text-sm">src/App.jsx</code> and save to test HMR
        </p>
        
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setCount((count) => count - 1)}
            variant="danger"
            size="large"
          >
            -
          </Button>
          <span className="text-4xl font-bold text-gray-900 dark:text-white min-w-[60px] text-center">
            {count}
          </span>
          <Button
            onClick={() => setCount((count) => count + 1)}
            variant="success"
            size="large"
          >
            +
          </Button>
        </div>

        <div className="flex gap-2 mt-4">
          <Button
            onClick={() => setCount(0)}
            variant="secondary"
            size="small"
          >
            Reset
          </Button>
          <Button
            onClick={() => setCount(count * 2)}
            variant="purple"
            size="small"
          >
            Double
          </Button>
          <Button
            onClick={() => setCount(Math.floor(count / 2))}
            variant="warning"
            size="small"
          >
            Half
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Counter