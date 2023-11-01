import React from 'react'
import List from '../data';

function Description() {
   const id =  localStorage.getItem('id')
   console.log(id)
  return (
    <div>
    <div style={{color:'white'}}>
          <h2 style={{margin:'20px', padding:'10px'}}>Selected Product</h2>
          {List.map((product) =>
            product.id === id ? (
              <div key={product.id} style={{margin:'20px', padding:'10px'}}>
                <img src={product.img}  style={{width:'200px',height:'200px'}} alt=''/>
                <h3>{product.title}</h3>
                <p>{product.description}</p>   
              </div>
            ) : null
          )}
        </div>
    
    </div>
);
  
}

export default Description