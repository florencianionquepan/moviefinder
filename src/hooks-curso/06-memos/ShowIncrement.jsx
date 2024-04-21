import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    //cada vez que se llama a la funcion se vuelve a dibujar
    //con React.memo solo no funciona porque las funciones y los objetos cada vez que se llaman ocupan 
    //distintos lugares de memoria
    console.log("Me volvi a generar :(");

    return (
        <button className='btn rounded bg-orange-600 font-semibold m-5 px-3 py-3'
        onClick={() => {
            increment(5);
        }}>
            Incrementar
        </button>
    )
}
)