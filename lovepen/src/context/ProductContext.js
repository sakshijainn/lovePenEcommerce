import { createContext, useContext, useState , useReducer } from "react";
import {productReducer} from "../reducer/productReducer"
//our createContext or our global state
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  // const [products, setProducts] = useState([]);

  const [state,productDispatch]= useReducer(productReducer , {products:[]})

  return (
    <ProductContext.Provider value={{ state,productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
