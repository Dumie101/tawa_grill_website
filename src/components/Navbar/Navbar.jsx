import React, { useState } from 'react';

import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { ReactComponent as MyLogo } from '../../assets/logo.svg';
import NavButton from '../Buttons/NavButton';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      
      <nav className='navbar'>
        <div className='navbar-title'>
          <MyLogo/>
          <h1>TAWA GRILL</h1>
        </div>
        
        <ul className="navbar-links">
          <li className="p__opensans"><a href='#home'>HOME</a></li>
          <li className="p__opensans"><a href='#menu'>MENU</a></li>
          <li className="p__opensans"><a href='#about'>ABOUT US</a></li>
          <li className="p__opensans"><a href='#contact'>CONTACT</a></li>
        </ul>

        <NavButton className="tableButton"></NavButton>

                    
        <div className='navbar-smallscreen'>
              <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=> setToggleMenu(true) }></GiHamburgerMenu>
              {toggleMenu && (
                <div className='navbar-smallscreen_overlay flex__center slide-bottom'>
                  <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=> setToggleMenu(false) }/>
                  <ul className='navbar-smallscreen-links'>
                    <li className="p__opensans"><a href='#home'>HOME</a></li>
                    <li className="p__opensans"><a href='#menu'>MENU</a></li>
                    <li className="p__opensans"><a href='#about'>ABOUT US</a></li>
                    <li className="p__opensans"><a href='#contact'>CONTACT</a></li>
                  </ul>
                </div>
              )}
        </div>

      </nav>

    </div>
  )
}
export default Navbar;
