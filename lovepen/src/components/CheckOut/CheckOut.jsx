import React from "react";
import { useCart } from "../../context/CartContext";
import "./CheckOut.css"
const CheckOut = () => {
    const {itemsInCart, cartTotal} = useCart();
  return (
    <>
      
      <div className="Fields">
        <div>
        <div className="formContainer">
            <h4>
              Cart{" "}
              <span className="price" style={{color:"black"}}>
                <b>Total items :{itemsInCart.length}</b>
              </span>
            </h4>
            <p>
                {itemsInCart.map((checkoutItem)=>(
                    <div>
                         <a style={{textDecoration: "none"}} href="#">
                          {checkoutItem.name}</a>
                        <span className="price">Rs {checkoutItem.price}</span>
                    </div>

                ))}
             
            </p>
         
            <p>
              Total{" "}
              <span className="price" style={{color:"black"}}>
                <b>Rs {cartTotal}</b>
              </span>
            </p>
          </div>
          <div className="formContainer">
            <form>
              <div className="Fields">
                <div>
                  <h3>Billing Address</h3>
                  <label for="fname">Full Name</label>
                  <input type="text" id="fname" name="firstname" />
                  <label for="email"> Email</label>
                  <input type="text" id="email" name="email" />
                  <label for="adr"> Address</label>
                  <input type="text" id="adr" name="address" />
                </div>
                <div>
                  <h3>Payment</h3>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" />
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" />
                  <div className="Fields">
                    <div>
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" />
                    </div>
                    <div>
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" />
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="submit"
                value="Continue to checkout"
                className="checkout"
              />
            </form>
          </div>
        </div>
        <div>
         
        </div>
      </div>
    </>
  );
};

export default CheckOut;
