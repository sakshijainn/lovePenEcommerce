import { createContext, useContext  , useState} from "react"

//our createContext or our global state
export const CartContext = createContext();

  export function CartProvider ({children})
  {
      const[itemsInCart , setItemsInCart] = useState(0);
      return(
        <CartContext.Provider value={{itemsInCart ,setItemsInCart}}>
        {children}
        </CartContext.Provider>
      )
      
  }

export function useCart()
{
    return useContext(CartContext)
}