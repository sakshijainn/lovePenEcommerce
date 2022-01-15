import React, { useEffect, useState } from "react";
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./Home.css"
import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishListContext";
import {BsFillHeartFill} from "react-icons/bs"



const Home = () => {
  const {itemsInCart , setItemsInCart} = useCart();
  const{itemsInWishList , setItemsInWishList} = useWishList();
  const [products, setProducts] = useState([]);
  const[loader , setLoader] = useState(false);
 


  const addToCart =(product) =>{
    console.log('adding to cart')
    let newCart = [...itemsInCart];
    let finalItemInCart = newCart.find((item)=>product.id === item.id)
    if(!finalItemInCart){
      finalItemInCart ={...product}
      newCart.push(finalItemInCart)
      setItemsInCart(newCart)
 }}


 const addToWishList =(product) =>{
  console.log('adding to wishlist')
  let newWishList = [...itemsInWishList];
  let finalItemInWishList = newWishList.find((item)=>product.id === item.id)
  if(!finalItemInWishList){
    finalItemInWishList ={...product}
    newWishList.push(finalItemInWishList)
    setItemsInWishList(newWishList)
}}



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
                 Rs {product.price} 
                 <span><BsFillHeartFill onClick={()=>addToWishList(product)}/></span>
                
             </div>

             <div  className="btn-div">
                 <button  onClick={()=>addToCart(product)}
                 className="product-add-button"> ADD TO cart</button>
                

             </div>
            


        </div>
   ))}
</div>

    
    
  );
};

export default Home;
