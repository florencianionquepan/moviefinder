export const todoReducer = (initialState = [], action) =>{
    
    switch(action.type){
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TOOO] Remove Todo':
            //en el payload viene el id del que quiero eliminar
            return initialState.filter(todo => todo.id !== action.payload);

        default:
            return initialState;
    }
}