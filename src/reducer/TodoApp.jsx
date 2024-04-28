import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { ListTodo } from './ListTodo';
import { TodoAdd } from './TodoAdd';

const initialState =[
    
];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

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


  return (
    <div className='min-h-[500px] m-5'>
        <h1 className='text-2xl ms-4'>TodoApp (10) - <small> Pendientes: 2</small></h1>

        <div className="grid grid-cols-3 gap-4">
            <div className='m-5'>
                <ListTodo todos={todos} onDeleteTodo={id => handleDeleteTodo(id)} />
            </div>
            
            <div>
                <h4 className='text-xl mb-2'>Agregar todo</h4>
                
                <TodoAdd onNewTodo={todo => handleNewTodo(todo)}/>

            </div>
        </div>

    </div>
  )
}
