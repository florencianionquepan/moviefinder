import { movies } from "../data/movies"

export const getMovieById = (id) =>{

    // eslint-disable-next-line eqeqeq
    return movies.find(movie => movie.id == id );
}