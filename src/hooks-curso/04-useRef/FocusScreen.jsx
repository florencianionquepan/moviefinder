import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();


    const onClick = ()=>{
        //document.querySelector('input').focus();
        //console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <div className="w-full max-w-xs m-auto mt-20 min-h-[600px]">
        <h1>Focus Screen</h1>
        <input
            ref={ inputRef }
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700"
            id="username"
            type="text"
            placeholder="Un Nombre"
            />

            <button className='btn rounded bg-blue-600 
            font-semibold d:static px-3 py-3 mt-5'
            onClick={ onClick }>
                SetFocus
            </button>
    </div>
  )
}
