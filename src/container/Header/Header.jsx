import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className="header app__wrapper section__padding" id="home">

    <div className="app__wrapper_info">

      <h1 className="header-h1">Specializing in authentic indian flavours.</h1>
        <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.header_food_image}/>
    </div>



  </div>
);

export default Header;
