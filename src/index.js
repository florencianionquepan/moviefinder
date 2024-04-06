import React from 'react'
import ReactDOM from 'react-dom/client'
import MiHeader from './shared/MiHeader'
import { MiFooter } from './shared/MiFooter'
import './styles.css';
import {MovieApp} from './MovieApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MiHeader/>
        <MovieApp/>
        <MiFooter/>
    </React.StrictMode>

)