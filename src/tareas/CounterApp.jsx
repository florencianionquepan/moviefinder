import {useState} from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {

    //los hooks se utilizan con constantes para evitar que accidentalmente no se asigne un valor
    const [counter, setCounter]=useState(value);

    const handleAdd = (event) =>{
        //console.log(event);
        //ambas formas siguientes son equivalentes
        //setCounter(counter+1)
        setCounter((c)=>c+1)
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>
        <button className="bg-transparent hover:bg-violet-500 text-violet-700 
        font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded"
        onClick={ handleAdd }>
            Press me to +1
        </button>
        </>
    )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}