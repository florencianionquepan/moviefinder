import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { ListTodo } from './ListTodo';
import { TodoAdd } from './TodoAdd';

const initialState =[
    {
        id: new Date().getTime(),
        description: 'Recoletar piedritas del baño de abajo',
        done:false
    },
    {
        id: new Date().getTime()*2,
        description: 'Recoletar piedritas del baño de arriba',
        done:false
    },
];

const handleNewTodo = (todo) =>{
    console.log({todo});
}

export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState)


  return (
    <div className='min-h-[500px] m-5'>
        <h1 className='text-2xl ms-4'>TodoApp (10) - <small> Pendientes: 2</small></h1>

        <div className="grid grid-cols-3 gap-4">
            <div className='m-5'>
                <ListTodo todos={todos}/>
            </div>
            
            <div>
                <h4 className='text-xl mb-2'>Agregar todo</h4>
                
                <TodoAdd onNewTodo={todo => handleNewTodo(todo)}/>

            </div>
        </div>

    </div>
  )
}
