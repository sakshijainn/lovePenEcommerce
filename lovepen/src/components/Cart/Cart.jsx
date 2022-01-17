import React, { useState , useEffect} from "react";
import { useCart } from "../../context/CartContext";
import { Scrollbars } from "react-custom-scrollbars-2";
import {Link} from "react-router-dom"
import "./Cart.css";
import Items from "./Items";

const Cart = () => {
  const { itemsInCart } = useCart();
  const {cartTotal, setCartTotal}= useCart();

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < itemsInCart.length; i++) {
      totalVal += itemsInCart[i].price * itemsInCart[i].quantity;
    }
    setCartTotal(totalVal);
  };

  useEffect(() => {
    total();
  }, [itemsInCart]);

  return (
    <>
      <section className="main-cart-section">
        <p className="total-items">
          You have <span className="total-items-count">{itemsInCart.length}</span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {itemsInCart.map((item) => (
                <Items key={item.id} {...item} />
              ))}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{cartTotal} Rs</span>
          </h3>
          <Link to ="/checkout">
          <button>Checkout</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
