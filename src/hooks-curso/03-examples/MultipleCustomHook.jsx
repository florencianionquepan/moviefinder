import React from 'react';
import {useFetch} from './../../hooks/index.js';

export const MultipleCustomHook = () => {

    const {data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/1');

  return (
    <div className='w-full max-w-xs m-5 mt-20 min-h-[600px]'>
        <h2>Info de pokemon</h2>

        {isLoading && <p>Cargando...</p>}
        <h2> {data?.name} </h2>
        {/* <pre> { JSON.stringify( data,null,2 ) } </pre> */}
    </div>
  )
}
