import React from 'react'
import {Link} from "react-router-dom"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {BsCartCheck} from "react-icons/bs"
import { useWishList } from '../../context/WishListContext';
const WishListItems = ({ name, id, image, description, price, quantity }) => {

    const{itemsInWishList , setItemsInWishList} = useWishList();

    const removeItem = (index) => {
        console.log("product id to be removed:", index);
    
        const newWishList = itemsInWishList.filter(
          (currItem) => currItem.id !== index
        );
    
        setItemsInWishList(newWishList);
      };

    const countIncrement = (index) => {
        setItemsInWishList((itemsInWishList) =>
          itemsInWishList.map((currItem) =>
            currItem.id === index
              ? { ...currItem, quantity: currItem.quantity + 1 }
              : currItem
          )
        );
      };
    
      const countDecrement = (index) => {
        setItemsInWishList((itemsInWishList) =>
          itemsInWishList.map((currItem) =>
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
        <div className="remove-item">
            <ImCross onClick={() => removeItem(id)}  className="remove" />
          </div>
          <div className="product-img">
            <img src={image} alt="product-image" />
          </div>
  
          <div className="title">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
  
          <div className="add-minus-quantity">
            <AiOutlineMinus onClick={() => countDecrement(id)}
              className="minus"
            />
            <span>{quantity}</span>
            <AiOutlinePlus onClick={() => countIncrement(id)}  className="add" />
          </div>
  
          <div className="price">
            <h3>{price * quantity}</h3>
          </div>
  
        <Link to ="/cart">
        <div className="add-item">
            <BsCartCheck  className="add-btn" />
          </div>
       
        
        </Link> 
          
        <hr />
        </div>
      </>
    )
}

export default WishListItems
