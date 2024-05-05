import { ListTodo } from './ListTodo';
import { TodoAdd } from './TodoAdd';
import { useTodos } from './useTodos';


export const TodoApp = () => {
    
    const {todos, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();

  return (
    <div className='min-h-[500px] m-5'>
        <h1 className='text-2xl ms-4'>TodoApp: {todos.length} 
        - <small> Pendientes:{todos.filter (t=>!t.done).length}</small></h1>

        <div className="grid grid-cols-3 gap-4">
            <div className='m-5'>
                <ListTodo 
                todos={todos} 
                onDeleteTodo={id => handleDeleteTodo(id)} 
                onToggleTodo ={handleToggleTodo}
                />
            </div>
            
            <div>
                <h4 className='text-xl mb-2'>Agregar todo</h4>
                
                <TodoAdd onNewTodo={todo => handleNewTodo(todo)}/>

            </div>
        </div>

    </div>
  )
}
