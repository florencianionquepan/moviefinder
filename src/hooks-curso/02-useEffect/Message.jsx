import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    console.log("Message mounted!");
  
    return () => {
      console.log("Message unmounted!")
    }
  }, [])
  
  return (
    <div>
        <h3 className='text-red-800'>Usuario ya existe</h3>
    </div>
  )
}
