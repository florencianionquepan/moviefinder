const initialState =[{
    id:1,
    todo:"Juntar caca de gatitos",
    done:false
}];

const todoReducer = ( state = initialState, action = {} ) =>{
    if(action.type==='[TODO] add todo'){
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo:"Comprar carne",
    done:false
}

const addTodoAction ={
    type: '[TODO] add todo',
    //lo que va dentro de la accion: a veces no se necesita esto por ej. si se borra todo
    payload: newTodo,
}

todos= todoReducer(todos,  addTodoAction)

console.log({state: todos});