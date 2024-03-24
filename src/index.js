import React from 'react'
import ReactDOM from 'react-dom/client'
import MiHeader from './shared/MiHeader'


const App=()=>{
    return <h1>Movies App</h1>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MiHeader/>
        <App/>
    </React.StrictMode>

)