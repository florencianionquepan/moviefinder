import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../auth";

export const LoginPage = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const onLogin = () =>{
    login('Flower');

    navigate('/',{
      replace:true
    });
  }

  return (
    <>
      <pre>
        
      </pre>

      <button className='btn rounded bg-violet-600 mx-auto p-3' onClick={onLogin}>
        Login
      </button>
      
    </>
    
  )
}
