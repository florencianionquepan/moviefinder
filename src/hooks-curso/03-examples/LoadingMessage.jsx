import React from 'react'

export const LoadingMessage = () => {
  return (
    <div className='max-w-xs '>
      <div className="bg-blue-100 border-t border-b border-blue-500 
      text-blue-700 px-4 py-3 m-3" role="alert">
          <p className="font-bold">Cargando...</p>
      </div>
    </div>
  )
}
