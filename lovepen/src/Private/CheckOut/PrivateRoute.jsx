import {Route , Redirect , Navigate} from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export function PrivateRoute({ path , ...props})
{
    const {isUserLogin} = useAuth();
    return isUserLogin ?<Route {...props} path ={path}/> : <Redirect
    state= {{from :path}} replace to ="/login"/>
}