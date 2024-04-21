import React, {useCallback, useState} from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(5);

    const incrementFather=useCallback(
      (i) => {
        //console.log("se ejecuta, pero counter siempre es 5");
        //setCounter(counter+1);
        setCounter((value)=>value+i);
      },
      [],
    )
    

    /* const incrementFather =()=>{
        setCounter(counter+1);
    } */

  return (
    <div className='min-h-[600px] m-5'>
        <h1>useCallback Hook: {counter} </h1>

        <ShowIncrement increment={incrementFather}/>
    </div>
  )
}
