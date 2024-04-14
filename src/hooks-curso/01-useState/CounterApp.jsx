import React, { useState } from 'react';

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30
    });

    const {counter1,counter2,counter3} = state;

    return (
        <div className='min-h-[800px] m-5'>
            <h1> Counter1: {counter1}</h1>
            <h1> Counter2: {counter2}</h1>
            <h1> Counter3: {counter3}</h1>
             {/* este objeto sera el nuevo valor del state */}
            <button onClick={ ()=> setCounter({
                ...state,
                counter1:counter1+1
            }) }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
                +1
            </button>
        </div>
    )
}
