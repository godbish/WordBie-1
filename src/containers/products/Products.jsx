import React from 'react'
import products from '../../assets/products.svg';
import product1 from '../../assets/product1.svg';
import product2 from '../../assets/product2.svg';
import product3 from '../../assets/product3.svg';
import './products.css';

const Products = () => {
  return (
    <div className="wordbie__product-content">
        <h1 className="Title">Our Products</h1>

    <div className="wordbie__product1">
      <div className="container1">
          <div className="wordbie__product1_textside">
              <h2 className="header1">WORD GUESSING GAME</h2>
              <p className="paragraph">We provide an all in one platform for learning and practising language, especially English. With us, language learning is simple and fun.</p>
              <div className="wordbie__product-content-button1">
              <button type="button"> Try now</button>
              </div>
          </div>
      </div>
          <div className="wordbie__product1_imageside">
              <img src={product1} alt='product1' />
          </div>

     </div>

     <div className="wordbie__product2">
     <div className="wordbie__product2_imageside">
              <img src={product2} alt='product2' />
          </div>
      <div className="container2">
          <div className="wordbie__product2_textside">
              <h2 className="header1">TYPING TEST</h2>
              <p className="paragraph">We provide an all in one platform for learning and practising language, especially English. With us, language learning is simple and fun.</p>
              <div className="wordbie__product-content-button2">
              <button type="button"> Try now</button>
              </div>
          </div>
      </div>
          

     </div>
     <div className="wordbie__product3">
      <div className="container3">
          <div className="wordbie__product3_textside">
              <h2 className="header1">QUIZ</h2>
              <p className="paragraph">We provide an all in one platform for learning and practising language, especially English. With us, language learning is simple and fun.</p>
              <div className="wordbie__product-content-button3">
            <button type="button"> Try Now</button> 
      </div>
          </div>
      </div>
          <div className="wordbie__product3_imageside">
              <img src={product3} alt='product3' />
          </div>

     </div>

      

      
    </div>
  )
}

export default Products;
