import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const heavyStuff =(iterationNumber=100)=>{
  for (let i=0;i<iterationNumber;i++){
    console.log("ahi vamos");
  }
  return `${iterationNumber} iteraciones hechas`;
}

export const MemoHook = () => {

    const {counter, increment }=useCounter(1000);
    const [show, setShow] = useState(true);

    //en el rimer argumento memoriza el retorno de la funcion, 
    //vuelve a memorizar cuando la dependencia counter cambia
    const memorizedValue = useMemo( () => heavyStuff(), [counter]);

  return (
    <div className='min-h-[600px] m-5'>
        <h1 className='text-6xl'>Counter: <small>{counter}</small></h1>

        <h3>{memorizedValue}</h3>

        <button className='btn rounded bg-blue-600 font-semibold m-5 px-3 py-3'
        onClick={()=>increment()}>
            +1
        </button>
        {/* cuando todo este boton no deberia dispararse la funcion heavyStuff de nuevo*/}
        <button className='btn rounded bg-orange-600 font-semibold m-5 px-3 py-3'
        onClick={ ()=>setShow(!show)} >
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}
