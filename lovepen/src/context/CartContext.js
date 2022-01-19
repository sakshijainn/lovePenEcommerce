import { createContext, useContext, useState, useReducer } from "react";
import {cartReducer} from  "../reducer/cartReducer"
//our createContext or our global state
export const CartContext = createContext();

export function CartProvider({ children }) {
  // const [itemsInCart, setItemsInCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);


  //STEP1 : USEREDUCER 
  const [state, cartDispatch] = useReducer(cartReducer , {itemsInCart:[] , totalAmount:0} )

  return (
    <CartContext.Provider
  //STEP2 PASS STATE AND DISPATCH IN CONTEXT
      value={{ state,cartDispatch}}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
