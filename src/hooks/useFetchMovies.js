import { useEffect, useState } from 'react'
import { getMovies } from '../helpers/getMoviesByGenre';

export const useFetchMovies = (genre) => {

    const [movies, setMovies]= useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const getImagesMovies=async()=>{
        const newM = await getMovies(genre);
        setMovies(newM);
        setIsLoading(false);
    }

    //en modo estricto se dispara dos veces, 
    //sino una sola (en produccion no se usa modo estricto)
    useEffect( () => {
        getImagesMovies();
    }, [])

  return {
    movies,
    isLoading
  }
}
