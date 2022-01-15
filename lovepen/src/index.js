import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { WishListProvider } from "./context/WishListContext";



ReactDOM.render(
  //passing values and functions, you can also pass components called as children
  <React.StrictMode>

  <ThemeProvider>
     <WishListProvider>

     <CartProvider>
          <App />
      </CartProvider>

     </WishListProvider>
      

  </ThemeProvider>
    
      
 
     
    
  </React.StrictMode>,
  document.getElementById("root")
);
