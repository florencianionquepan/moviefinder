import {useForm} from '../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm} = useForm({
        description:'',
    })

    const onFSubmit= (event) =>{
        event.preventDefault();
        if(description.length<=1) return;

        const newTodo={
            id:new Date().getTime(),
            description:description,
            done:false
        }

        onNewTodo && onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <>
    <form className='mb-2' onSubmit={onFSubmit}>
        <input
        type='text'
        placeholder="Que hay que hacer?"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 mb-2 text-black"
        name="description"
        value={description}
        onChange={onInputChange}
        />

        <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 
                border-purple-500 hover:border-purple-700 border-4 text-white 
                py-1 px-2 rounded">
                Agregar
        </button>              
    </form>
    </>
  )
}
