import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterCustom = () => {

    const {counter, increment, decrement, reset}= useCounter(10)

  return (
    <div className='min-h-[800px] m-5'>
        <h1>Counter Custom: {counter}</h1>

        <button onClick={()=>decrement(2)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
                decrement
        </button>

        <button onClick={reset}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-5 mx-5">
                Reset
        </button>

        <button onClick={()=>increment(2)}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-5">
                increment
        </button>
    </div>
  )
}
