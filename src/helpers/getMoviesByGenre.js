export const getMovies=async(genre)=>{

    const url=`http://localhost:9090/api/v1/bootcamp/peliculas/genero/${genre}`;
    const resp= await fetch (url);
    const {data}= await resp.json();

    const movies =data.map(movie=>({
        id:movie.id,
        title:movie.titulo,
        date:movie.fechaCreacion,
        calification:movie.calificacion,
        image:movie.imagenURL
    }))
    console.log(movies);
    return movies;
}