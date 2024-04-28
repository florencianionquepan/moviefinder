export const TodoItem = ( {todo, onDeleteTodo} ) => {
  return (
    <>
    <li className='p-2 border rounded flex justify-between'
        key={todo.id}>
        <span className='my-auto'>
          {todo.description}
        </span>
        <button className='flex-shrink-0 bg-red-500 hover:bg-red-700 
            border-red-500 hover:border-red-700 text-sm border-4 text-white 
            py-1 px-2 rounded me-0'
            onClick={ ()=> onDeleteTodo(todo.id) }> 
            Borrar
        </button>      
    </li>
    </>
  )
}
