import { useState } from "react";
import { AddGenre } from "./AddGenre";
import { GenreGrid } from "./GenreGrid";

export const GenreApp = () => {
    const [genres, setGenres]=useState(['Terror','Comedy','Drama','Fiction']);

    const onAddGenre=(g)=>{
        if(genres.includes(g)) return;
        setGenres([...genres,g]);
    }

    return (
    <>
    <h5>Genres:</h5>

        {genres.map( gen =>
            <GenreGrid 
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