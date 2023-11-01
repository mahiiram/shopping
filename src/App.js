import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home.js';
import Login from './components/Login';
import ProductDescription from './components/ProductDescription';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDescription/>}/>
      </Routes>
    </Router>  
  ); 
}

export default App;
