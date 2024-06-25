import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
<div className="about_us" id="home">

    <h1 className='about_us_header headtext__cormorant'>About Us</h1>


    <div className="about_us_images">
      <img src={images.about_us_image_2}/>
      <img src={images.about_us_image_4}/>
      <img src={images.about_us_image_3}/>
    </div>

    <p className="p__opensans" style={{margin: '2rem 10rem'}}>
      Immerse yourself in a warm and inviting atmosphere at our restaurant. 
      Savor mouthwatering dishes crafted with fresh, seasonal ingredients, 
      showcasing the rich flavors of [insert cuisine type here]. 
      Our friendly and attentive staff is dedicated to providing exceptional service, 
      ensuring your dining experience is truly unforgettable. 
      Whether you're celebrating a special occasion or simply enjoying a 
      casual night out, we offer the perfect place to gather with loved ones 
      and create lasting memories.
    </p>


  </div>
);

export default AboutUs;