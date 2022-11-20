import React from 'react'
import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import header1 from '../../assets/header1.svg';
import './header1.css';

const Header1 = () => {
  return (
    <div className="wordbie__header1">
    <div className="wordbie__header1-content">
      <div className="wordbie__header1-content_title">
      
        <h1 className="wordbie__text_header1">
        Why WordBie?
        </h1>

        <p className="wordbie__text_header2">
        We provide an all in one platform for learning and practising language, especially English. With us, language learning is simple and fun.
        </p>
      
      </div>
      <div className="wordbie__header1_containers">
      <div className="wordbie__header1-content_box1">
      <img src={image1} alt='image1' />
      <h2 className="wordbie__box1_header1">
        Improve your vocabulary
        </h2>
      </div>
      <div className="wordbie__header1-content_box2">
      <img src={image2} alt='image2' />
      <h2 className="wordbie__box2_header1">
        Expand your language IQ
        </h2>
      </div>
      <div className="wordbie__header1-content_box3">
      <img src={image3} alt='image3' />
      <h2 className="wordbie__box3_header1">
        Increase your typing speed
        </h2>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Header1;
