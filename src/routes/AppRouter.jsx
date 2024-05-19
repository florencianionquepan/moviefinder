import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { MoviesRoutes } from './MoviesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="login/*" element={
            <PublicRouter>
              {/* <LoginPage/> */}
              <Routes>
                <Route path="/*" element={<LoginPage/>}/>
              </Routes>
            </PublicRouter>
          } />

            {/* <Route path="login" element={ <LoginPage/> }/> */}

            <Route path="/*" element={ 
            <PrivateRoute>
              <MoviesRoutes/> 
            </PrivateRoute>
            }/>

            {/* <Route path="/*" element={ <MoviesRoutes/>}/> */}
        </Routes>
    </>
  )
}
