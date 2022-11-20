import React from 'react';
import illustration from '../../assets/illustration.svg';
import './header.css';

const Header = () => {
  return (
    
    <div className="wordbie__header" id="home">
      <div className="wordbie__header__main">
      <div className="wordbie__header-content" >
        <h1 className="wordbie__text">
        <ul>
        <li>PLAY IT.</li> 
        <li>LEARN IT.</li>
        <li>LOVE IT.</li>
        </ul>
        </h1>
    
      </div>
      <div className="wordbie__header-content__input">
          <button type="button">Get Started</button>
      </div>
      
      
    </div>

      <div className='wordbie__header-image'>
        <img src={illustration} alt='illustration' />
      </div>
    </div>
  )
}

export default Header;
