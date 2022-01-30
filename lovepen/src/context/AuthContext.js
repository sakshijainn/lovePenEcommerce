import {createContext , useContext} from "react"
import {useState} from "react"

export const AuthContext = createContext();

export const AuthProvider =({children}) =>{
    const[isUserLogin , setLogin] = useState(false)

    return(
        <AuthContext.Provider value ={{isUserLogin , setLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{
    return useContext(AuthContext)
}