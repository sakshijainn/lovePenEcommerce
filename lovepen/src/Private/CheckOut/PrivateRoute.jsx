import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../context/AuthContext"

export function PrivateRoute({ children }) {

  console.log(children)
   
  const { isUserLogin } = useAuth();

  console.log(isUserLogin)

  let location= useLocation();

  console.log(location)

  return isUserLogin ? children : <Navigate to="/login" />;
  
 
  
 

  
}