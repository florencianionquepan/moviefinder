import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {

    const onMouseMove =({x,y})=>{
      const coord ={ x,y };
      console.log(coord);
    }
    //console.log("Message mounted!");
    window.addEventListener('mousemove',onMouseMove);
  
    return () => {
      //console.log("Message unmounted!");
      window.removeEventListener('mousemove',onMouseMove);
    }
  }, [])
  
  return (
    <div>
        <h3 className='text-red-800'>Usuario ya existe</h3>
    </div>
  )
}
