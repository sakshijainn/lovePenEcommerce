import { createContext, useContext, useState , useReducer } from "react";
import {productReducer} from "../reducer/productReducer"
import {filterReducer}  from "../reducer/filterReducer"
//our createContext or our global state
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  // const [products, setProducts] = useState([]);

  const [state,productDispatch]= useReducer(productReducer , {products:[]})

  const[filterState , filterDispatch] = useReducer(filterReducer ,{searchQuery :''})


  return (
    <ProductContext.Provider value={{ state,productDispatch  , filterState , filterDispatch}}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
