import React from "react";
import '../styles/navbar.css'
import { Link, useNavigate } from "react-router-dom";

const Navigation = ({size,setShow}) =>{
    const navigate = useNavigate()
   const handleout = ()=>{
    localStorage.removeItem('username')
    localStorage.removeItem('id')
    navigate('/login')
   }
    return(
        <div className="Navbar" >
            <span className="my-shop" onClick={()=>setShow(true)}>
               <Link to={'/'}> MyShopping</Link>
            </span>
            <div className="cart-div">
            <div className="cart" onClick={()=>setShow(false)}>
            <div>
            <span>
                <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
            
            </div>
            
        </div>
        <div style={{marginLeft:"10px",top:10,cursor:"pointer"}} onClick={handleout}>
            Logout
            </div>
            </div>
             
        </div>
        
    )
}
export default Navigation;