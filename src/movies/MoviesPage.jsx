import { getMoviesBy } from './helpers/getMoviesBy'
import {MovieItem} from './MovieItem';


export const MoviesPage = () => {
    const movies = getMoviesBy();
    return (
      <>
      <h1>Todas las pelis</h1>
  
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
