import { createContext, useContext } from "react";
import { useState ,useEffect} from "react";
import { fakeAuthApi } from  "../api/fakeAuthApi"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogin, setLogin] = useState(false);
  
  
   //check the login value
   useEffect(() => {
     
    const loginStatus = JSON.parse(localStorage?.getItem("login"))
    
    loginStatus?.isUserLoggedIn && setLogin(true)
     
   }, [ ])
  

  


  async function loginUserWithCredentials(username, password) {
    try {
      const response = await fakeAuthApi(username, password);
      if (response.success) {
        setLogin(true);
        //persist the data now 
        localStorage?.setItem(
          "login",
          JSON.stringify({isUserLoggedIn :true})
        )

        
      }
    } catch (error) {
      console.log("Sahi username password nahi pata kya?", error);
    }

  }

  async function logout()
  {
    localStorage.removeItem("login")
    setLogin(false)
    
  }

  return (
    <AuthContext.Provider value={{ isUserLogin, loginUserWithCredentials, setLogin , logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
