import React from 'react'
import products from '../../assets/products.svg';
import './products.css';
import {Link} from 'react-router-dom';

const Products = () => {
  return (
    <div className="wordbie__product-content" id='product'>
      <div className="wordbie__product-content-button1">
      <Link to = '/wordGuessingGame'>
      <button type="button"> Try now</button>
      </Link>
      </div>

      <div className="wordbie__product-content-button2">
        
      <Link to = '/typing'>
      <button type="button"> Try now</button>
      </Link>
      
      </div>

      <div className="wordbie__product-content-button3">
      <Link to = '/quiz'>
      <button type="button"> Try now</button>
      </Link>
      </div>
    </div>
  )
}

export default Products;
