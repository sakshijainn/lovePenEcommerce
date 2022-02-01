import {createContext , useContext} from "react"
import {useState} from "react"

export const AuthContext = createContext();

const user ={
    username: "sakshi",
    password :"sakshi"
}

export const AuthProvider =({children}) =>{
    const[isUserLogin , setLogin] = useState(false)

    function loginUserWithCredentials(username , password )
    {
        if(user.username === username && user.password === password)
        {
            setLogin(true)
        }
    }

    return(
        <AuthContext.Provider value ={{isUserLogin ,loginUserWithCredentials}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{
    return useContext(AuthContext)
}