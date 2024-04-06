import React from 'react'
import ReactDOM from 'react-dom/client'
import MiHeader from './shared/MiHeader'
import { MiFooter } from './shared/MiFooter'
import './styles.css';
import { CounterApp } from './tareas/CounterApp';


const App=()=>{
    return <div className='min-h-[500px] flex flex-col'>
        Movies App
        </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MiHeader/>
        <CounterApp value={10}/>
        <App/>
        <MiFooter/>
    </React.StrictMode>

)