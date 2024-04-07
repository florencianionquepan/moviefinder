import { useState } from "react";

export const AddGenre = () => {

    const [inputValue, setInputValue]=useState('Comedy');

    const onInputChange=({target})=>{
        setInputValue(target.value)
    }
 
    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(inputValue);
    }

    return (
        <form className="w-full max-w-sm" onSubmit={(event)=>onSubmit(event)}>
            <div className="flex items-center border-b border-purple-500 py-2">
                <input className="w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" 
                placeholder="Add a genre!"
                value={inputValue}
                onChange={onInputChange}/>
                <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 
                    border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Add Genre
                </button>
            </div>
        </form>
    )
}