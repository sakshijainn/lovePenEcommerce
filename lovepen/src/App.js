import React from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import NavBar from './components/NavBar/NavBar.jsx'
import Home from "./components/Home/Home.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Wishlist from "./components/Wishlist/Wishlist.jsx"
import Login from "./components/Login/Login.jsx"
const App = () => {
  return (
   <Router>
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

     </Switch>
   </Router>
  )
}

export default App
