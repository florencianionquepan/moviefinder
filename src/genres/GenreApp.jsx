import { useState } from "react";
import { AddGenre } from "./AddGenre";
import { MoviesByGenre } from "./MoviesByGenre";

export const GenreApp = () => {
    const [genres, setGenres]=useState(['Terror']);

    const onAddGenre=(g)=>{
        const formattedGenre = g.charAt(0).toUpperCase() + g.slice(1).toLowerCase();

        if(genres.includes(formattedGenre)) return;
        setGenres([formattedGenre,...genres]);
    }

    return (
    <>
    <h5>Genres:</h5>

    <AddGenre 
    //setGenres={setGenres}
    onNewGenre={(value)=>onAddGenre(value)}
    />

        {genres.map( gen =>
            <MoviesByGenre
                key={gen} 
                genre={gen}/>
        )}

    </>
    )
}