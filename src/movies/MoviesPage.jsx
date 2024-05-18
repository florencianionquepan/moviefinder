import { useMemo } from 'react';
import { getMoviesBy } from './helpers/index';
import {MovieItem} from './MovieItem';
import {TitleCustom} from './../shared/TitleCustom';


export const MoviesPage = () => {

    const movies = useMemo( ()=> getMoviesBy(), []);
    return (
      <>
      <TitleCustom title={"All the movies"}/>
  
      <div className='grid grid-cols-4 mb-auto mx-10 mt-5'>
        {
          movies.map( (movie) => (
            <MovieItem 
            key={movie.id}
            id={movie.id}
            title={movie.titulo}
            image={movie.imagenURL}
            date={movie.fechaCreacion}
            calification={movie.calificacion}
            // aca no puedo desestructurar pq se llaman distintos las properties de MovieItem con las de data
            />
        ))
        }
      </div>
      </>
    )
}
