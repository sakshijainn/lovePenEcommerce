import React from 'react'
import { useWishList } from '../../context/WishListContext'
import { Scrollbars } from "react-custom-scrollbars-2";
import WishListItems from "./WishListItems"
import "./WishList.css"
const Wishlist = () => {
    const {state:{itemsInWishList}} = useWishList();
    console.log(itemsInWishList)
    return (
     <>
      <section className="main-wishlist-section">
        <p className="total-items">
          You have <span className="total-items-count">{itemsInWishList.length}</span> items in
          wishlist
        </p>

        <div className="wishlist-items">
          <div className="wishlist-items-container">
            <Scrollbars>
              {itemsInWishList.map((item) => (
                <WishListItems key={item.id} {...item} />
              ))}
            </Scrollbars>
          </div>
        </div>

       
      </section>
    </>
    )
}

export default Wishlist