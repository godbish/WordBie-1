import React from 'react';
import illustration from '../../assets/illustration.svg';
import './header.css';

const Header = () => {
  return (
    
    <div className="wordbie__header" id="home">
      <div className="wordbie__header-content">
        <h1 className="wordbie__text">
        PLAY IT.
        LEARN IT.
        LOVE IT.
        </h1>
    
      </div>
      <div className="wordbie__header-content__input">
          <button type="button">Get Started</button>
      </div>
      <div className='wordbie__header-image'>
        <img src={illustration} alt='illustration' />
      </div>
    </div>
  )
}

export default Header;
