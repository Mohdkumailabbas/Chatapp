import { createContext, Dispatch, SetStateAction,  useEffect, useState } from "react";
type AuthUserType = {
	id: string;
	fullName: string;
	email: string;
	profilePic: string;
	gender: string;
};
// export const useAuthContext=()=>{
//     return useContext(AuthContext)
// }


export const AuthContext= createContext<{
    authUser:AuthUserType |null,
    setAuthUser:Dispatch<SetStateAction<AuthUserType | null>  >,
    isLoading:boolean
}>(
    {
        authUser :null,
        setAuthUser:()=>{},
        isLoading: true
    }
);

export const AuthContextProvider=({children}:{children:React.ReactNode})=>{
       const [authUser,setAuthUser]=useState<AuthUserType|null >(null)
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       const [isLoading,setIsLoading]=useState(true);
       useEffect(()=>{
        const fetchAuthUser= async()=>{
            try {
                const res = await fetch("/api/auth/me");
                const data=await res.json();
                if(!res.ok){
                    throw new Error(data.error)
                }
                setAuthUser(data)
            } catch (error) {
                console.error(error)
            } finally{
                setIsLoading(false)
            }
        };
        fetchAuthUser()
       },[]);
       return(
        <AuthContext.Provider
         value={{
            authUser,
            isLoading,
            setAuthUser
         }}
        
        >
            {children}
        </AuthContext.Provider>
    )
}
