import { createContext, useContext  , useState} from "react"

//our createContext or our global state
export const WishListContext = createContext();

  export function WishListProvider ({children})
  {
      const[itemsInWishList , setItemsInWishList] = useState([]);
      
     
      
        return(
        <WishListContext.Provider value={{itemsInWishList , setItemsInWishList}}>
        {children}
        </WishListContext.Provider>
      )
      
  }

export function useWishList()
{
    return useContext(WishListContext)
}