import {MiFooter} from "./shared/MiFooter";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./auth";

export const MovieApp = () => {
    return (
        <>
        <AuthProvider>
                <div className='min-h-[800px] flex flex-col mx-10'>
                        {/* <GenreApp/> */}
                        <AppRouter/>
                </div>
            <MiFooter/>
        </AuthProvider> 
        </>
    )
}
    
    
    