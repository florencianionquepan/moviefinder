import { useState } from "react";

export const AddGenre = ({onNewGenre}) => {

    const [inputValue, setInputValue]=useState('');

    const onInputChange=({target})=>{
        setInputValue(target.value)
    }
 
    const onSubmit = (event)=>{
        //en React 18 no se renderiza el componente hasta que esta funcion termine
        //en 17 se renderizaba dos veces por el setGenres que estaba antes y por el setInputValue
        event.preventDefault();
        if (inputValue.trim().length<=1) return;
        onNewGenre(inputValue);
        setInputValue("");
    }

    return (
        <form className="w-full max-w-sm" onSubmit={onSubmit}>
            <div className="flex items-center border-b border-purple-500 py-2">
                <input className="w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" 
                placeholder="Add a genre!"
                value={inputValue}
                onChange={onInputChange}/>
                <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 
                    border-purple-500 hover:border-purple-700 text-sm border-4 text-white 
                    py-1 px-2 rounded">
                        Add Genre
                </button>
            </div>
        </form>
    )
}