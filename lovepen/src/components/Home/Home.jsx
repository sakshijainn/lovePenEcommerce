import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./Home.css";
import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishListContext";
import { BsFillHeartFill } from "react-icons/bs";
import { useProduct } from "../../context/ProductContext";

const Home = () => {
  //STEP 3 : PASS THE STATE TO COMPONENT
  const {
    state: { itemsInCart },
    cartDispatch,
  } = useCart();

  const {
    state: { itemsInWishList },
    wishlistDispatch,
  } = useWishList();

  const {
    state: { products },
    productDispatch,
  } = useProduct();
  const [loader, setLoader] = useState(false);

  const {
    filterState: { searchQuery, sort },
    filterDispatch,
  } = useProduct();

  console.log("sortkaunsahai", sort);

  useEffect(() => {
    (async function () {
      try {
        setupMockServer();
        setLoader(true);
        const response = await axios.get("/api/users");
        console.log(response.data.users);
        setLoader(false);
        // setProducts(response.data.users);
        productDispatch({ type: "SET_PRODUCTS", payload: response.data.users });
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowtoHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort ==="highToLow" ? b.price - a.price : a.price - b.price
      );
    }

    if(searchQuery)
    {
      sortedProducts = sortedProducts.filter((prod)=>(
        prod.name.toLowerCase().includes(searchQuery)
      ))
    }
    return sortedProducts;
  };

  return (
    <>
      <div className="filters">
        <form className="search-container">
          <input
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
            type="text"
            className="search-bar"
            placeholder="What can I help you with today?"
          />
          
        </form>

        <fieldset className="sort">
          <label>
            <input
              onChange={() =>
                filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
              }
              checked={sort === "lowToHigh" ? true : false}
              type="radio"
              name="sort"
            ></input>{" "}
            Price - Low to High
          </label>
          <label>
            <input
              onChange={() =>
                filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
              }
              checked={sort === "highToLow" ? true : false}
              type="radio"
              name="sort"
            ></input>{" "}
            Price - High to Low
          </label>

          <a
            onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
            style={{
              color: "white",
              marginLeft: "50px",
              margin:"10px",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Clear Filter
          </a>

         
        </fieldset>
      </div>

      <div className="products">
        {loader && (
          <div className="lds-heart">
            <div></div>
          </div>
        )}
        {transformProducts().map((product, index) => (
          <div key={index} className="card">
            <div>
              <Link
                to={{
                  pathname: `/product/${product.id}`,
                  state: { products: product },
                }}
              >
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
            </div>

            <div className="product-name">
              <h3>{product.name}</h3>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-price">
              Rs {product.price}
              <span>
                <BsFillHeartFill
                  onClick={() =>
                    wishlistDispatch({ type: "ADD_TO_WISH", payload: product })
                  }
                  // onClick={() => addToWishList(product)}
                />
              </span>
            </div>

            <div className="btn-div">
              <button
                // onClick={() => addToCart(product)}
                onClick={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: product })
                }
                className="product-add-button"
              >
                {" "}
                ADD TO cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
