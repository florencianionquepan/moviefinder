import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { AboutPage } from '../AboutPage'
import { MoviePage } from '../../movies/MoviePage'
import MiHeader from '../../shared/MiHeader'

export const MoviesRoutes = () => {
  return (
    <>
    <MiHeader/>
    <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="about" element={ <AboutPage/> }/>
        <Route path="movies" element={ <MoviePage/> }/>
        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
    </>
  )
}
