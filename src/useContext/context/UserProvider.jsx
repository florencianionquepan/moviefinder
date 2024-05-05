import { UserContext } from "./userContext";

const user = {
    id:123,
    name:'Flower',
    email:'flower@gmail.com'
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{ hola:'Mundo', user:user }}>
        { children }
    </UserContext.Provider>
  )
}
