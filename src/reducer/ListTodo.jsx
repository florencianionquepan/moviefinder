import { TodoItem } from './TodoItem';

export const ListTodo = ({todos=[]}) => {
  return (
    <ul className='list-disc list-inside'>
        {
        todos.map(todo =>(
            <TodoItem 
              key={todo.id}
              todo={todo}
            />
            ))              
        }               
    </ul>
  )
}
