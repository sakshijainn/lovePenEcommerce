import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";



ReactDOM.render(
  //passing values and functions, you can also pass components called as children
  <React.StrictMode>

  <ThemeProvider>
      <CartProvider>
              <App />
      </CartProvider>

  </ThemeProvider>
    
      
 
     
    
  </React.StrictMode>,
  document.getElementById("root")
);
