import { GenreApp } from "./genres/GenreApp"

export const MovieApp = () => {
    return <div className='min-h-[800px] flex flex-col m-5'>
    Movies App
    <GenreApp/>
    </div>
}