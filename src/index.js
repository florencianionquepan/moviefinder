import React from 'react'
import ReactDOM from 'react-dom/client'
import MiHeader from './shared/MiHeader'
import { MiFooter } from './shared/MiFooter'
import './styles.css';


const App=()=>{
    return <h1>Movies App</h1>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MiHeader/>
        <App/>
        <MiFooter/>
    </React.StrictMode>

)