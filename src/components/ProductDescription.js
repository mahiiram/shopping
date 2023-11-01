import React from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import Description from './Description';


function ProductDescription() {

     const id = useParams();
     const paramid=  id.id.toString()
     localStorage.setItem('id',paramid)

  return (
    <div className="App">
      <Description /> 
    </div>
  ); 
}

export default  ProductDescription;
