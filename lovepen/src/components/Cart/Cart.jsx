import React from "react";
import { useCart } from "../../context/CartContext";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./Cart.css";
import Items from "./Items";
const Cart = () => {
  const { itemsInCart, count } = useCart();
  console.log({ itemsInCart });
  console.log(count);
  return (
    <>
      <section className="main-cart-section">
        <p className="total-items">
          You have <span className="total-items-count">7</span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
				{itemsInCart .map((item)=>(
						<Items key ={item.id} {...item}/>
				))}
              
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>2000000 Rs</span>
          </h3>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
