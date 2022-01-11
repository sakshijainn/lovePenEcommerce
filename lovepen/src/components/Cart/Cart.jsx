import React from 'react'
import { useCart} from "../../context/CartContext"
import "./Cart.css"
const Cart = () => {
 const  {itemsInCart } = useCart();
 console.log({itemsInCart})
    return (
        <div>
            <h1>Cart {itemsInCart.length} </h1>
            <div className ="products-cart">
            {itemsInCart.map((cartItem,index)=>(
                
              <div key={index} className ="card-cart">
                    <div>
                        <img className="product-image-cart" src={cartItem.image} alt={cartItem.name}/>
                    </div>

                    <div className ="product-name-cart">
                        <h3>{cartItem.name}</h3>
                    </div>

                    <div className ="product-description-cart">
                        <p>{cartItem.description}</p>
                    </div>

                    <div className ="product-price-cart">
                        Rs {cartItem.price} 
                    </div>

               </div>
          ))}
      </div>
        </div>
    )
}

export default Cart