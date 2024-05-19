import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../auth";

export const LoginPage = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const onLogin = () =>{

    const lastPath= localStorage.getItem('lastPath') || '/';

    login('Flower');

    navigate(lastPath,{
      replace:true
    });
  }

  return (
    <>

      <button className='btn rounded bg-violet-600 m-auto p-3' onClick={onLogin}>
        Login
      </button>
      
    </>
    
  )
}
