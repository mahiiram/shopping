import React from "react";
import "../styles/Cards.css"
import {Link} from "react-router-dom";


function Cards({item,handleClick}){
    const {title, author,img,price,id} = item;
    return (
       <div className="container">
        <div className="row">
          <div className="col">
          <div className="card">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <h2>₹ {price}</h2>
          <button className="btn btn-primary" onClick={() =>handleClick(item)}>Add to Cart</button>
           </div>
           <Link to={`/product/${id}`
            } style={{textDecoration:'none',color:'black',textAlign:'center'}} ><h6>View Details</h6></Link>
         </div>
          </div>
        </div>
       </div>
        
      )
}

export default Cards;