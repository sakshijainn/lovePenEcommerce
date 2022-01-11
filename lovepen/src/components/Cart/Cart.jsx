import React from 'react'
import { useCart} from "../../context/CartContext"

const Cart = () => {
 const  {itemsInCart } = useCart();
 
    return (
        <div>
            <h1>Cart {itemsInCart} </h1>
        </div>
    )
}

export default Cart