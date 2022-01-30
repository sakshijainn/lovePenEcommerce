import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { ThemeProvider } from "./context/ThemeContext";
import { WishListProvider } from "./context/WishListContext";


ReactDOM.render(
  //passing values and functions, you can also pass components called as children
  <React.StrictMode>

    <ThemeProvider>
      <ProductProvider>
        <WishListProvider>
          <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
          </AuthProvider>
        </WishListProvider>
      </ProductProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
