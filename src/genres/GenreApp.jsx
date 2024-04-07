import { useState } from "react";
import { AddGenre } from "./AddGenre";
import { GenreGrid } from "./GenreGrid";
import { MoviesByGenre } from "./MoviesByGenre";

export const GenreApp = () => {
    const [genres, setGenres]=useState(['Terror']);

    const onAddGenre=(g)=>{
        if(genres.includes(g)) return;
        setGenres([...genres,g]);
    }

    return (
    <>
    <h5>Genres:</h5>

        {genres.map( gen =>
            <MoviesByGenre
                key={gen} 
                genre={gen}/>
        )}

    <AddGenre 
    //setGenres={setGenres}
    onNewGenre={(value)=>onAddGenre(value)}
    />

    </>
    )
}