import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment }=useCounter(10);
    const [show, setShow] = useState(true);

  return (
    <div className='min-h-[600px] m-5'>
        <h1 className='text-6xl'>Counter: <Small value={counter}/> </h1>

        <button className='btn rounded bg-blue-600 font-semibold m-5 px-3 py-3'
        onClick={()=>increment()}>
            +1
        </button>
        {/* por defecto al cambiar este useState, se vuelve a renderizar el otro componente Small
        (es decir al cambiar algo en el padre, los hijos se renderizan de nuevo)
        Si el componente Small es muy grande, eso se puede cambiar */}
        <button className='btn rounded bg-orange-600 font-semibold m-5 px-3 py-3'
        onClick={ ()=>setShow(!show)} >
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}
