import React from 'react'
import products from '../../assets/products.svg';
import './products.css';
import {Link} from 'react-router-dom';

const Products = () => {
  return (
    <div className="wordbie__product-content">
      <div className="wordbie__product-content-button1">
      <Link to = '/wordGuessingGame'>
      <button type="button"> Try now</button>
      </Link>
      </div>

      <div className="wordbie__product-content-button2">
        
      <button type="button"> Try now</button>
      
      </div>

      <div className="wordbie__product-content-button3">
      <button type="button"> Try Now</button> 
      </div>
    </div>
  )
}

export default Products;
