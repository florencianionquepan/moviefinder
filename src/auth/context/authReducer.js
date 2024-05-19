import { types } from "../types/types";

//ni el local storage ni el console.log deben usarse en el reducer!

export const authReducer =( state, action )=>{
    
    switch (action.type) {
        case types.login:
            return {
                ...state, //por si en un futuro tengo mas properties en state
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                logged: false,
            }

        default:
            return state;
    }
}