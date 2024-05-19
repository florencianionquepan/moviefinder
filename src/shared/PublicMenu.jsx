import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth"
import { useContext } from "react";

export const PublicMenu = ({isOpen}) => {

  let Links=[
    {id:1, name:'Home', link:'/'},
    {id:2, name:'About', link:'/about'},
    {id:3, name:'Movies', link:'/movies'},
    {id:4, name:'Search', link:'/search'}
  ]

  const navigate = useNavigate();
  
  const {user, logout} = useContext(AuthContext);
  console.log(user);

  const onLogout = () =>{
    logout();
    navigate('/',{
      replace:true
    }
    )
  }

  return (
    <>
    {/* lie items */}
    <ul className={`md:flex md:items-center 
        md:pb-0 pb-12 md:static md:z-auto
        left-0 w-full md:w-auto md:pl-0 pl-9
        transition-all duration-500 ease-in 
        ${isOpen?'top-20':'hidden'} z-50 bg-[#21232A]`}>
          {
            Links.map(li=>
            <li className='font-semibold my-7 md:my-0 md:ml-8' key={li.id}>
              <NavLink 
                to={li.link}
                // className="hover:text-violet-400 active:bg-violet-500"> 
                className={ ({isActive}) =>`hover:text-violet-400 ${ isActive? 'text-violet-300':''}`} >
                {li.name}
              </NavLink>

            </li>)
          }

          <p className="mx-10"> {user?.name} </p>
          <NavLink to="login" replace className='btn rounded bg-violet-600 font-semibold my-7 md:my-0 d:static px-5 py-1'>
            Login
          </NavLink>

          <button 
            className='btn rounded bg-violet-600 font-semibold my-7 md:my-0 d:static px-5 py-1 ms-2'
            onClick={()=>onLogout()}>
            Logout
          </button>
        </ul>
    </>
  )
}
