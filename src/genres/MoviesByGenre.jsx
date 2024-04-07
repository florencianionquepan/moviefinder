import { useEffect } from 'react';
import {getMovies} from '../helpers/getMoviesByGenre';

export const MoviesByGenre=({genre})=>{

    //de esta forma asi solo se dispara dos veces la funcion
    //getMovies(genre);

    //en modo estricto se dispara dos veces, 
    //sino una sola (en produccion no se usa modo estricto)
    useEffect( () => {
        getMovies(genre);
    }, [])

    return (
        <>
        <h5> {genre}</h5>
        </>
    )
}