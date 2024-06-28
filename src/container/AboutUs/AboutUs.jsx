import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
<div className="about_us" id="home">


  <div className="image_div">
    <img src={images.about_us_image_1} className="image"></img>
  </div>
  <div className="text_div">
    <h1 className="about_us_header_text">Eum ipsam laborum deleniti velit pariatur architecto aut nihil</h1>
    <h2 className="about_us_header_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
  </div>








  </div>
);

export default AboutUs;