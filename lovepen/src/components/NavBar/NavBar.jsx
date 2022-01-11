import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {ImCross} from "react-icons/im"
import {FiMenu} from "react-icons/fi"
import {AiFillHome} from "react-icons/ai"
import {BsFillCartCheckFill} from "react-icons/bs"
import {FaRegHeart,FaUserAlt} from "react-icons/fa"


import "./NavBar.css"
import { useCart } from '../../context/CartContext'
import { useTheme } from '../../context/ThemeContext'


const NavBar = () => {
    const{itemsInCart} = useCart();
    const { theme, toggleTheme } = useTheme();
    const[isMobile ,setMobile] = useState(false)
    return (
        <nav className ="navbar">
            <h3 className ="logo"> 
         
            LovePEN</h3>
            <button onClick={toggleTheme}> mode{theme ==="light" ?"dark":"light"} </button>
           
            <ul className={isMobile?"nav-links-mobile":"nav-links"}
              onClick={()=>setMobile(false)}
            >
                <Link to ="/" className ="home">
                    <li>{isMobile ?"Home":<AiFillHome/>}</li>
                </Link>

                <Link to ="/cart" className ="cart">
                <li>{isMobile ?"Cart":<BsFillCartCheckFill/>}( {itemsInCart.length})</li>
                </Link>

                <Link to ="/wishlist" className ="wishlist">
                <li>{isMobile ?"Wishlist":<FaRegHeart/>}</li>
                    
                </Link>

                <Link to ="/login" className ="login">
                <li>{isMobile ?"Login":<FaUserAlt/>}</li>
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
