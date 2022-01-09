import React, { useEffect, useState } from "react";
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./Home.css"
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        setupMockServer();
        const response = await axios.get("/api/users");
        console.log(response.data.users);
        setProducts(response.data.users);
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);
  console.log(products);
  return (
      <div className ="products">
          {products.map((product,index)=>(
              <div className ="card">
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
                        {product.price}
                    </div>

                    <div >
                        <button className="product-add-button">Add to cart</button>
                    </div>


               </div>
          ))}
      </div>
    
    
  );
};

export default Home;
