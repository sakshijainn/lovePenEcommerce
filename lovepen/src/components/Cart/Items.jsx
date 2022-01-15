import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useCart } from "../../context/CartContext";
const Items = ({ name, id, image, description, price, quantity }) => {
  const { itemsInCart, setItemsInCart } = useCart();

  const removeItem = (index) => {
    console.log("product id to be removed:", index);

    const newCart = itemsInCart.filter(
      (currItem) => currItem.id !== index
    );

    setItemsInCart(newCart);
  };

  const countIncrement = (index) => {
    setItemsInCart((itemsInCart) =>
      itemsInCart.map((currItem) =>
        currItem.id === index
          ? { ...currItem, quantity: currItem.quantity + 1 }
          : currItem
      )
    );
  };

  const countDecrement = (index) => {
    setItemsInCart((itemsInCart) =>
      itemsInCart.map((currItem) =>
        currItem.id === index
          ? {
              ...currItem,
              quantity: currItem.quantity - (currItem.quantity > 0 ? 1 : 0),
            }
          : currItem
      )
    );
  };

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={image} alt="product-image" />
        </div>

        <div className="title">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <AiOutlineMinus
            onClick={() => countDecrement(id)}
            className="minus"
          />
          <span>{quantity}</span>
          <AiOutlinePlus onClick={() => countIncrement(id)} className="add" />
        </div>

        <div className="price">
          <h3>{price * quantity}</h3>
        </div>

        <div className="remove-item">
          <ImCross onClick={() => removeItem(id)} className="remove" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
