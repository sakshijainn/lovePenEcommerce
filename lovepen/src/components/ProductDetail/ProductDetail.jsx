import React from 'react'
import {Link}  from "react-router-dom"
import { useCart } from '../../context/CartContext'
import "./ProductDetail.css"
const ProductDetail = (props) => {
    const {itemsInCart , setItemsInCart} = useCart();
    const{name,image,price,description} = props.location.state.products;


    const addToCart =(product) =>{
        console.log('adding to cart')
        let newCart = [...itemsInCart];
        let finalItemInCart = newCart.find((item)=>product.id === item.id)
        if(!finalItemInCart){
          finalItemInCart ={...product}
          newCart.push(finalItemInCart)
          setItemsInCart(newCart)
     }}

     
    return (
        <div className="product-details-container">
          

                    <div className ="details">
                            <div className="big-img">
                                <img src={image} alt="" />
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{name}</h2>
                                    <span>{price}</span>
                                </div>

                                <p>{description}</p>
                                <Link to ="/cart">
                                <button onClick={()=>addToCart(props.location.state.products)} className="cart">Add to cart</button>
                                </Link>
                                
                            </div>
                    </div> 
               
           
        </div>
    )
}

export default ProductDetail
