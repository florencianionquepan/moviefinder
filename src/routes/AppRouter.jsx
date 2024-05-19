import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { MoviesRoutes } from './MoviesRoutes'

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
