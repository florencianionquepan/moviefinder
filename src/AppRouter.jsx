import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './useContext/LoginPage'
import { MoviesRoutes } from './useContext/routes/MoviesRoutes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="/*" element={ <MoviesRoutes/>}/>
        </Routes>
    </>
  )
}
