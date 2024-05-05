import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState =[];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () =>{


    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos])
      
    
    const handleNewTodo = (todo) =>{
          const action = {
              type: '[TODO] Add Todo',
              payload: todo
          }
      
          dispatchTodo (action);
          //console.log({todo})
      }
    
    const handleDeleteTodo = (id) => {
          dispatchTodo({
              type:'[TOOO] Remove Todo',
              payload:id
          })
      };
    
    const handleToggleTodo =(id) =>{
          dispatchTodo({
              type:'[TODO] Toggle Todo',
              payload:id
          })
    }

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}