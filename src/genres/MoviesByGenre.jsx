import { useEffect, useState } from 'react';
import {getMovies} from '../helpers/getMoviesByGenre';
import { MovieItem } from '../movies/MovieItem';

export const MoviesByGenre=({genre})=>{

    //de esta forma asi solo se dispara dos veces la funcion
    //getMovies(genre);

    const [movies, setMovies]= useState([]);

    const getImagesMovies=async()=>{
        const newM = await getMovies(genre);
        setMovies(newM);
    }

    //en modo estricto se dispara dos veces, 
    //sino una sola (en produccion no se usa modo estricto)
    useEffect( () => {
        getImagesMovies();
    }, [])

    return (
        <>
        <h5> {genre}</h5>
        <div className="flex mb-4 mx-10">
            {
            movies.map( (movie) => (
                <MovieItem 
                key={movie.id}
                {...movie}/>
            ))
            }
        </div>
        </>
    )
}