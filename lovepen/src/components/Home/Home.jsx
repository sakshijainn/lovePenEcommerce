import React, { useEffect, useState } from "react";
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./Home.css"
import { useCart } from "../../context/CartContext";
const Home = () => {
  const {setItemsInCart} = useCart();
  const [products, setProducts] = useState([]);
  const[loader , setLoader] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setupMockServer();
        setLoader(true)
        const response = await axios.get("/api/users");
        console.log(response.data.users);
        setLoader(false)
        setProducts(response.data.users);
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);
  console.log(products);
  return (
     
      <div className ="products">
        {loader && <div className="lds-heart"><div></div></div>}
          {products.map((product,index)=>(
              <div key={index} className ="card">
                    <div>
                        <img className="product-image" src={product.image} alt={product.name}/>
                    </div>

                    <div className ="product-name">
                        <h3>{product.name}</h3>
                    </div>

                    <div className ="product-description">
                        <p>{product.description}</p>
                    </div>

                    <div className ="product-price">
                        Rs {product.price} <button>wish</button>
                    </div>

                    <div  className="btn-div">
                        <button  onClick={()=>setItemsInCart((items)=>[...items, product])}
                        className="product-add-button"> ADD TO cart</button>
                       

                    </div>
                   


               </div>
          ))}
      </div>
    
    
  );
};

export default Home;
