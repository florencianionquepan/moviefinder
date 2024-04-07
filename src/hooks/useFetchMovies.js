import React, { useEffect, useState } from 'react'
import { getMovies } from '../helpers/getMoviesByGenre';

export const useFetchMovies = (genre) => {

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

  return {
    movies,
    isLoading:true
  }
}
