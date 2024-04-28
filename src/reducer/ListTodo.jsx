import { TodoItem } from './TodoItem';

export const ListTodo = ({todos=[], onDeleteTodo }) => {
  return (
    <ul className='list-disc list-inside'>
        {
        todos.map(todo =>(
            <TodoItem 
              key={todo.id}
              todo={todo}
              onDeleteTodo={ id=> onDeleteTodo(id) }
            />
            ))              
        }               
    </ul>
  )
}
