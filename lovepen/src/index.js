import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";


ReactDOM.render(
  //passing values and functions, you can also pass components called as children
  <React.StrictMode>
   <CartProvider>
       <App />
   </CartProvider>
     
    
  </React.StrictMode>,
  document.getElementById("root")
);
