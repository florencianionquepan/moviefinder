import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css';
import {MovieApp} from './MovieApp';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            {/* <FormCustomHook/> */}
            {/* <MultipleCustomHook/> */}
            {/* <Layout/> */}
            {/* <Padre/> */}
            {/* <TodoApp/> */}
            <MovieApp/>
        </React.StrictMode>
    </BrowserRouter>

)