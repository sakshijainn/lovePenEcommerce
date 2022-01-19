import React, { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useCart } from "../../context/CartContext";
const Items = (prod) => {
  // const { itemsInCart, setItemsInCart } = useCart();

  const
   {state:{itemsInCart}, cartDispatch}  = useCart();



  // const removeItem = (index) => {
  //   console.log("product id to be removed:", index);

  //   const newCart = itemsInCart.filter(
  //     (currItem) => currItem.id !== index
  //   );

  //   setItemsInCart(newCart);
  // };

  // const countIncrement = (index) => {
  //   setItemsInCart((itemsInCart) =>
  //     itemsInCart.map((currItem) =>
  //       currItem.id === index
  //         ? { ...currItem, quantity: currItem.quantity + 1 }
  //         : currItem
  //     )
  //   );
  // };

  // const countDecrement = (index) => {
  //   setItemsInCart((itemsInCart) =>
  //     itemsInCart.map((currItem) =>
  //       currItem.id === index
  //         ? {
  //             ...currItem,
  //             quantity: currItem.quantity - (currItem.quantity > 0 ? 1 : 0),
  //           }
  //         : currItem
  //     )
  //   );
  // };

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={prod.image} alt="product-image" />
        </div>

        <div className="title">
          <h2>{prod.name}</h2>
          <p>{prod.description}</p>
        </div>

        <div className="add-minus-quantity">
          <AiOutlineMinus
            // onClick={() => countDecrement(id)}
            onClick={()=>cartDispatch({type:"DECREMENT_QTY" , payload : prod})}
            className="minus"
          />
          <span>{prod.quantity}</span>
          
          <AiOutlinePlus 
          // onClick={() => countIncrement(id)} 
          onClick={()=>cartDispatch({type:"INCREMENT_QTY" , payload : prod})}
          className="add" />
         
          
        </div>

        <div className="price">
          <h3>{prod.price * prod.quantity}</h3>
        </div>

        <div className="remove-item">
          <ImCross
          //  onClick={() => removeItem(id)}
          onClick={()=>cartDispatch({type:"REMOVE_FROM_CART" , payload : prod})}
            className="remove" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
