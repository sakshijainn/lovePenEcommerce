import React from 'react'
import { useAuth } from '../../context/AuthContext'
import "./Login.css"
const Login = () => {
    const {isUserLogin , setLogin} = useAuth();
    
    return (
        <div>
            <h3>chaabi laaya kya ?</h3>
             <button onClick={()=>setLogin(isUserLogin =>! isUserLogin)}>{isUserLogin ?"I am logged in":"I am logged out"}</button> *
        </div>
    )
}

export default Login
