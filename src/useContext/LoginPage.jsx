import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <>
      Login Page

      <pre>
        {JSON.stringify(user,null,3)}
      </pre>

      <button className='btn rounded bg-violet-600 mx-auto p-3'
      onClick={()=>setUser({id:1, name:'flower', email:'flo@gmail.com'})} >
        Establecer usuario
      </button>
      
    </>
    
  )
}
