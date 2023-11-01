import React, {useEffect, useState} from 'react'
import '../styles/Home.css'
import Navigation from '../components/Navigation.js'
import Amazon from "../components/Amazon.js";
import Cart from "../components/Cart.js";
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()
  const [show,setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('username')){
      navigate('/')
    }else{
      navigate('/login')
    }  
  })
const handleClick=(item)=>{
    let ispresent = false;
    cart.forEach((e)=>{
      if(item.id === e.id)
      ispresent=true;
    })
    if(ispresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false) 
      },2000)
      return
    }
    setCart([...cart , item])
}
const handleChange = (item, d)=>{
    let ind = -1;
    cart.forEach((data,index)=>{
      if(data.id === item.id)
      ind = index;
    })
    const temArr = cart
    temArr[ind].amount += d
    if(temArr[ind].amount === 0)
    temArr[ind].amount = 1
    setCart([...temArr])
  
}

  return (
    <div className="App">
      <Navigation size={cart.length} setShow={setShow}/>
      {
        show?<Amazon handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {
        warning && <div className='warning'>This item is already added</div>
      }
      
    </div>
    
  ); 
}

export default Home;
