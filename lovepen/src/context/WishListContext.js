import { createContext, useContext  , useState , useReducer} from "react"
import {wishlistReducer} from "../reducer/wishlistReducer"
//our createContext or our global state
export const WishListContext = createContext();

  export function WishListProvider ({children})
  {
      // const[itemsInWishList , setItemsInWishList] = useState([]);

      const[state, wishlistDispatch] = useReducer(wishlistReducer , {itemsInWishList:[]})
      
     
      
        return(
        <WishListContext.Provider value={{state, wishlistDispatch}}>
        {children}
        </WishListContext.Provider>
      )
      
  }

export function useWishList()
{
    return useContext(WishListContext)
}