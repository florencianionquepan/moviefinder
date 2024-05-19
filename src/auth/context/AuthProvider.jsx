import { useReducer, useState } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

/* const initialState ={
  logged:false
} */

const init = () =>{
  const user = JSON.parse(localStorage.getItem('user'));
  //si 'user' no existe , user dara null

  return {
    //si user existe, logged sera true
    logged: !!user,
    user
  }
}


export const AuthProvider = ({children}) => {

  const [ state, dispatch ] = useReducer( authReducer, {}, init );

  const login = (name = '')=>{
    const user = {
      id:1,
      name: name
    };

    const action= {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user',JSON.stringify(user));

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ 
      ...state,
      login: login
     }}>
        { children }
    </AuthContext.Provider>
  )
}
