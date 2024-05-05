import { Navigate, Route, Routes } from "react-router-dom";
import { GenreApp } from "./genres/GenreApp";
import { HomePage } from "./useContext/HomePage";
import { LoginPage } from "./useContext/LoginPage";
import { AboutPage } from "./useContext/AboutPage";
import {MoviePage} from "./movies/MoviePage";
import MiHeader from "./shared/MiHeader";
import {MiFooter} from "./shared/MiFooter";
import { UserProvider } from "./useContext/context/UserProvider";

export const MovieApp = () => {
    return (
        <>
        <UserProvider>
            <MiHeader/>
                <div className='min-h-[800px] flex flex-col m-5'>
                        {/* <GenreApp/> */}
                        <Routes>
                            <Route path="/" element={ <HomePage/> }/>
                            <Route path="login" element={ <LoginPage/> }/>
                            <Route path="about" element={ <AboutPage/> }/>
                            <Route path="movies" element={ <MoviePage/> }/>
                            <Route path="genres" element={ <GenreApp/> }/>
                            <Route path="/*" element={ <Navigate to="/"/> }/>
                        </Routes>
                </div>
            <MiFooter/>
        </UserProvider> 
        </>
    )
}
    
    
    