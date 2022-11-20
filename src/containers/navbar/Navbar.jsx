
import React, {useState} from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu =()=>(
  <>
    <p><a href ="#home">Overview</a></p>
          <p><a href ="#home">Features</a></p>
          <p><a href ="#home">About</a></p>
          <p><a href ="#home">Help</a></p>
          <p><a href ="#home">Contact</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    
    <div className='wordbie__navbar'>
      <div className='wordbie__navbar-links'>
        <div className='wordbie__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='wordbie__navbar-links_container'>
                <Menu />
          
        </div>
        </div>
        {/* <div className='wordbie__navbar-sign'>

          <button type="button"> Sign Up</button>
        </div> */}

        <div className='wordbie__navbar-menu'>
          {toggleMenu
           ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}></RiCloseLine>
           : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}></RiMenu3Line>  
          }
           {toggleMenu && (
            <div className='wordbie__navbar-menu_container scale-up-center'>
              <div className='wordbie__navbar-menu_container-links'>
              <Menu />
              {/* <div className='wordbie__navbar-menu_container-links-sign'>

          <button type="button"> Sign Up</button>
        </div> */}
              </div>
            </div>

            
        
           )} 
        </div>
    </div>
  )
}

export default Navbar;
  