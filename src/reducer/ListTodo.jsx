import { TodoItem } from './TodoItem';

export const ListTodo = ({todos=[], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className='list-disc list-inside'>
        {
        todos.map(todo =>(
            <TodoItem 
              key={todo.id}
              todo={todo}
              onDeleteTodo={ id=> onDeleteTodo(id) }
              onToggleTodo={onToggleTodo}
            />
            ))              
        }               
    </ul>
  )
}
