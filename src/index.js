import React from 'react'
import ReactDOM from 'react-dom/client'
import MiHeader from './shared/MiHeader'
import { MiFooter } from './shared/MiFooter'
import './styles.css';
import {MovieApp} from './MovieApp';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <MiHeader/>
            {/* <FormCustomHook/> */}
            {/* <MultipleCustomHook/> */}
            {/* <Layout/> */}
            {/* <Padre/> */}
            {/* <TodoApp/> */}
            <MovieApp/>
            <MiFooter/>
        </React.StrictMode>
    </BrowserRouter>

)