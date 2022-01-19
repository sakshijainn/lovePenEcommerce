import React, { useState , useEffect} from "react";
import { useCart } from "../../context/CartContext";
import { Scrollbars } from "react-custom-scrollbars-2";
import {Link} from "react-router-dom"
import "./Cart.css";
import Items from "./Items";

const Cart = () => {
  const { state:{itemsInCart , totalAmount}, cartDispatch } = useCart();

  useEffect(()=>{
    cartDispatch({type:"GET_TOTAL"})
  },[itemsInCart])



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
            Cart Total : <span>{totalAmount} Rs</span>
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
