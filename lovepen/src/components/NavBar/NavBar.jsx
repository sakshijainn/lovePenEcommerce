import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {ImCross} from "react-icons/im"
import {FiMenu} from "react-icons/fi"

import "./NavBar.css"
const NavBar = () => {
    const[isMobile ,setMobile] = useState(false)
    return (
        <nav className ="navbar">
            <h3 className ="logo"> 
         
            LovePEN</h3>
            <ul className={isMobile?"nav-links-mobile":"nav-links"}
              onClick={()=>setMobile(false)}
            >
                <Link to ="/" className ="home">
                    <li>Home</li>
                </Link>

                <Link to ="/cart" className ="cart">
                    <li>Cart</li>
                </Link>

                <Link to ="/wishlist" className ="wishlist">
                    <li>Wishlist</li>
                </Link>

                <Link to ="/login" className ="login">
                    <li>Login</li>
                </Link>
            </ul>

            <button className ='mobile-menu-icon'
            onClick={()=>setMobile(!isMobile)}>
                {isMobile ? <ImCross/> :<FiMenu/>}
            </button>
        </nav>
    )
}

export default NavBar
