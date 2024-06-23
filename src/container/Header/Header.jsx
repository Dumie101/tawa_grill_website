import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className="header app__wrapper section__padding" id="home">

    <div className="app__wrapper_info">

      <h1 className="header-h1">Specializing in authentic indian flavours</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
        Immerse yourself in a warm and inviting atmosphere at our restaurant. 
        Savor mouthwatering dishes crafted with fresh, seasonal ingredients, 
        showcasing the rich flavors of [insert cuisine type here]. 
        Our friendly and attentive staff is dedicated to providing exceptional service, 
        ensuring your dining experience is truly unforgettable. 
        Whether you're celebrating a special occasion or simply enjoying a 
        casual night out, we offer the perfect place to gather with loved ones 
        and create lasting memories.</p>
        <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.header_food_image}/>
    </div>



  </div>
);

export default Header;
