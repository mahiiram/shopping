import React from "react";
import '../styles/navbar.css'
import { Link } from "react-router-dom";

const Navigation = ({size,setShow}) =>{
    return(
        <div className="Navbar" >
            <span className="my-shop" onClick={()=>setShow(true)}>
               <Link to={'/'}> MyShopping</Link>
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
            <div>
            <span>
                <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
            </div>
        </div>

        </div>
        
    )
}
export default Navigation;