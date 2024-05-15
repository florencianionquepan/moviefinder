import MiHeader from "./shared/MiHeader";
import {MiFooter} from "./shared/MiFooter";
import { UserProvider } from "./useContext/context/UserProvider";
import { AppRouter } from "./AppRouter";

export const MovieApp = () => {
    return (
        <>
        <UserProvider>
                <div className='min-h-[800px] flex flex-col m-5'>
                        {/* <GenreApp/> */}
                        <AppRouter/>
                </div>
            <MiFooter/>
        </UserProvider> 
        </>
    )
}
    
    
    