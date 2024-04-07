import { MovieItem } from '../movies/MovieItem';
import { useFetchMovies } from '../hooks/useFetchMovies';

export const MoviesByGenre=({genre})=>{

    //de esta forma asi solo se dispara dos veces la funcion
    //getMovies(genre);

    const {movies,isLoading}= useFetchMovies(genre);

    return (
        <>
            <h5> {genre}</h5>
            {
                isLoading && (<h4> Cargando... </h4>) 
            }
            <div className="flex mb-auto mx-10 mt-5">
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