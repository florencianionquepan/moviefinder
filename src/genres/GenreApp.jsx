import { useState } from "react";

export const GenreApp = () => {
    const [genres, setGenres]=useState(['Terror','Comedy','Drama','Fiction']);

    const onAddGenre=(g)=>{
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


    </>
    )
}