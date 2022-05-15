import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { fakeAuthApi } from "../api/fakeAuthApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogin, setLogin] = useState(false);

  async function loginUserWithCredentials(username, password) {
    try {
      const response = await fakeAuthApi(username, password);
      if (response.success) {
        setLogin(true);
        console.log("sucesss");
        console.log(isUserLogin)
      }
    } catch (error) {
      console.log("not correct username and password", error);
    }
  }

  return (
    <AuthContext.Provider value={{ isUserLogin, loginUserWithCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};