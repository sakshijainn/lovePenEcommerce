import React,{useState} from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import NavBar from './components/NavBar/NavBar.jsx'
import Home from "./components/Home/Home.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Wishlist from "./components/Wishlist/Wishlist.jsx"
import Login from "./components/Login/Login.jsx"
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'
import CheckOut from './Private/CheckOut/CheckOut.jsx'


// const login = false;


const App = () => {

  const[login , setLogin] = useState(false)

  return (
   <Router>
     <button onClick={()=>setLogin(login=>!login)}>{login? "logout":"login"}</button>
     <NavBar/>
     <Switch>
       <Route path ="/" component= {Home} exact>
          <Home/>
        </Route>


        <Route path ="/cart" component= {Cart} exact>
          <Cart/>
        </Route>

        <Route path ="/wishlist" component= {Wishlist} exact>
          <Wishlist/>
        </Route>

        <Route path ="/login" component= {Login} exact>
          <Login/>
        </Route>

        <Route path ="/product/:id" component ={ProductDetail} exact/>

       {login && <Route path ="/checkout" component={CheckOut} exact/>} 

       {!login && <Route path ="/checkout" component={Login} exact/>} 
        

     </Switch>
   </Router>
  )
}

export default App
