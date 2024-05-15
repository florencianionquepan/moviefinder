import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { AboutPage } from '../AboutPage'
import { MoviePage } from '../../movies/MoviePage'
import { SearchPage } from '../SearchPage'
import MiHeader from '../../shared/MiHeader'
import { MoviesPage } from '../../movies/MoviesPage'
import {GenreApp} from '../../genres/GenreApp'

export const MoviesRoutes = () => {
  return (
    <>
    <MiHeader/>
    <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="about" element={ <AboutPage/> }/>
        <Route path="genres" element={ <GenreApp/> }/>
        <Route path="movies" element={ <MoviesPage/> }/>
        <Route path="movie/:id" element={ <MoviePage/> }/>
        <Route path="search" element={ <SearchPage/> }/>
        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
    </>
  )
}
