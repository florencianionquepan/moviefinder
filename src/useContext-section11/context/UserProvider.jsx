import { useState } from "react";
import { UserContext } from "./userContext";

/* const user = {
    id:123,
    name:'Flower',
    email:'flower@gmail.com'
} */

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user , setUser }}>
        { children }
    </UserContext.Provider>
  )
}
