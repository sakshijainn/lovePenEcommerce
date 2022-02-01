import React from 'react'
import { useAuth } from '../../context/AuthContext'
import {useLocation, useNavigate} from "react-router-dom"
import { useHistory } from "react-router-dom";
import "./Login.css"

const Login = () => {
    const {isUserLogin , loginUserWithCredentials} = useAuth();
    const {state} = useLocation();
    let history = useHistory();
   

    console.log({state})

    const loginHandler =()=>{
        // setLogin(isUserLogin =>! isUserLogin)
        loginUserWithCredentials("aniket" ,"sakshi")
        history.push("/checkout");
 
        

    }
    
    return (
        <div>
            <h3>chaabi laaya kya ?</h3>
             <button onClick={loginHandler}>
             {isUserLogin ?"I am logged in":"I am logged out"}
             </button> 
        </div>
    )
}

export default Login
