import React from 'react'
import products from '../../assets/products.svg';
import './products.css';

const Products = () => {
  return (
    <div className="wordbie__product-content">
      <div className="wordbie__product-content-button1">
      <button type="button"> Try now 1</button>
      </div>

      <div className="wordbie__product-content-button2">
      <button type="button"> Try now 2</button>
      </div>

      <div className="wordbie__product-content-button3">
      <button type="button"> Try Now 3</button> 
      </div>
      <img src={products} alt='products' />
    </div>
  )
}

export default Products;
