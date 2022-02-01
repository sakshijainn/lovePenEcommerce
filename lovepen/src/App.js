import React,{useState} from 'react'
import {BrowserRouter as Router , Route , Switch , Redirect} from "react-router-dom"
import NavBar from './components/NavBar/NavBar.jsx'
import Home from "./components/Home/Home.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Wishlist from "./components/Wishlist/Wishlist.jsx"
import Login from "./components/Login/Login.jsx"
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'
import CheckOut from './Private/CheckOut/CheckOut.jsx'
import {PrivateRoute} from "./Private/CheckOut/PrivateRoute.jsx"

  // const login = false;

  // function PrivateRoute({ login  ,  ...props })
  // {
    
  //   return login ? <Route {...props} /> : <Redirect replace to = "/login" />
  // }
  
  // const PrivateRoute = ({ login, component: Component, ...rest }) => {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) => {
  //         if (login) return <Component {...props} />;
  //         if (!login)
  //           return (
  //             <Redirect to='/login'  />
  //           );
  //       }}
  //     />
      
  //   );
  // };


const App = () => {

  // const[login , setLogin] = useState(false)
  // console.log(login)
  // const {isUserLogin} = useAuth();



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

        <Route path ="/product/:id" component ={ProductDetail} exact/>

       <PrivateRoute path ="/checkout" component={CheckOut}/>
      

      
        

     </Switch>
   </Router>
  )
}

export default App
