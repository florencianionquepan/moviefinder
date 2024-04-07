import { useState } from "react";
import { AddGenre } from "./AddGenre";

export const GenreApp = () => {
    const [genres, setGenres]=useState(['Terror','Comedy','Drama','Fiction']);

    const onAddGenre=(g)=>{
        if(genres.includes(g)) return;
        setGenres([...genres,g]);
    }

    return (
    <>
    <h5>Genres:</h5>

    <ol>
        {genres.map(genre=>{
            return <li key={genre}>
                {genre}
            </li>
        })}
        <li></li>
    </ol>

    <AddGenre 
    //setGenres={setGenres}
    onNewGenre={(value)=>onAddGenre(value)}
    />

    </>
    )
}