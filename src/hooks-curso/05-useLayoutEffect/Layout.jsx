import React from 'react';
import {useCounter, useFetch} from './../../hooks/index.js';
import { LoadingMessage } from './../03-examples/LoadingMessage.jsx';
import { PokemonCard } from './../03-examples/PokemonCard.jsx';

export const Layout = () => {


    const {counter, decrement, increment } = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <div className='w-full m-5 min-h-[600px]'>
        <h2 className='text-5xl'>Info de pokemon</h2>

        { isLoading? 
        <LoadingMessage/> 
        : <PokemonCard id={data?.id}
                      name= {data?.name}
                      sprites ={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                      ]}
                              
                              />
        }

        {/* <pre> { JSON.stringify( data,null,2 ) } </pre> */}
        <button className='btn rounded bg-blue-600 font-semibold my-7 md:my-0 md:ml-8 d:static px-3 py-3'
        onClick={ () => counter>1 ? decrement() : null }> 
          Anterior 
        </button>
        <button className='btn rounded bg-blue-600 font-semibold my-7 md:my-0 md:ml-8 d:static px-3 py-3'
        onClick={()=>increment()}> 
          Siguiente 
        </button>
    </div>
  )
}
