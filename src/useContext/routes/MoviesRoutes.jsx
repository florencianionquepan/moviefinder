import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { AboutPage } from '../AboutPage'
import { MoviePage } from '../../movies/MoviePage'
import { SearchPage } from '../SearchPage'
import MiHeader from '../../shared/MiHeader'
import { MoviesPage } from '../../movies/MoviesPage'

export const MoviesRoutes = () => {
  return (
    <>
    <MiHeader/>
    <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="about" element={ <AboutPage/> }/>
        <Route path="movies" element={ <MoviesPage/> }/>
        <Route path="movie" element={ <MoviePage/> }/>
        <Route path="search" element={ <SearchPage/> }/>
        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
    </>
  )
}
