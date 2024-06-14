import React from 'react';

import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css'


const Navbar = () => (
  <div>
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={images.tawalogo} alt="tawa grill logo" />
      </div>
      <ul className="navbar-links">
        <li className="p__opensans"><a href='#home'>Home</a></li>
        <li className="p__opensans"><a href='#about'>About</a></li>
        <li className="p__opensans"><a href='#menu'>Menu</a></li>
        <li className="p__opensans"><a href='#contact'>Contact</a></li>
      </ul>
    </nav> 
  </div>
);

export default Navbar;
