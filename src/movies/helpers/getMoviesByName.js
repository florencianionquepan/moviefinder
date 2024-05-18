import { movies } from "../data/movies";

export const getMoviesByName = (name ='') =>{

    name = name.toLocaleLowerCase().trim();

    if( name.length ===0 ) return [];

    return movies.filter(
        movie => movie.titulo.toLocaleLowerCase().includes( name )
    );

}