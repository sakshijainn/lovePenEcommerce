import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Items = ({name, image , description , price}) => {
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                  <img src={image}  alt="image"/>
                </div>

                <div className="title">
                  <h2>{name}</h2>
                  <p>{description}</p>
                </div>

                <div className="add-minus-quantity">
                  <AiOutlineMinus className="minus" />
                  <input type="text" placeholder="7"></input>
                  <AiOutlinePlus className="add" />
                </div>

                <div className="price">
                  <h3>{price}</h3>
                </div>

                <div className="remove-item">
                  <ImCross className="remove" />
                </div>
              </div>
              <hr />

        </>
    )
}

export default Items
