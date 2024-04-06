import {useState} from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {

    //los hooks se utilizan con constantes para evitar que accidentalmente no se asigne un valor

    //cuando cambia el valor en el counter (cambio de estado) se vuelve a ejecutar todo el functional component
    const [counter, setCounter]=useState(value);

    const handleAdd = (event) =>{
        //console.log(event);
        //ambas formas siguientes son equivalentes
        //setCounter(counter+1)
        setCounter((c)=>c+1)
    }

    const handleSubstract = () =>{
        setCounter ((c)=>c-1)
    }

    const handleReset =() =>{
        setCounter (value)
    }

    return (
        <div className="m-5">
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button className="bg-transparent hover:bg-violet-500 text-violet-700 
            font-semibold hover:text-white py-2 px-4 border border-violet-500 
            hover:border-transparent rounded m-2"
            onClick={ handleAdd }>
                Press me to +1
            </button>
            <button className="bg-transparent hover:bg-pink-500 text-pink-500 
            font-semibold hover:text-white py-2 px-4 border border-pink-500 
            hover:border-transparent rounded m-2"
            onClick={ handleSubstract }>
                Press me to -1
            </button>
            <button className="bg-transparent hover:bg-gray-200 text-white-500 
            font-semibold hover:text-gray-900 py-2 px-4 border border-white-100 
            hover:border-transparent rounded m-2"
            onClick={ handleReset }>
                Press me to Reset
            </button>
        </div>
    )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}