import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import Login from "./components/Login/Login.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import CheckOut from "./Private/CheckOut/CheckOut.jsx";
import {PrivateRoute} from "./Private/CheckOut/PrivateRoute.jsx";


const App = () => {
 
  return (
    <Router>
      <NavBar />
      <Routes>
       

        <Route path="/" element={<Home />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        

        <Route path="/wishlist" element={<Wishlist />}></Route>

        

        <Route path="/login" element={<Login />}></Route>

       

        <Route path="/product/:id" element={<ProductDetail />}></Route>
        

        <Route path="/checkout"  element={ <PrivateRoute> <CheckOut /> </PrivateRoute> }/>
        

      


          
      
      </Routes>
      </Router>
   
  );
};

export default App;
