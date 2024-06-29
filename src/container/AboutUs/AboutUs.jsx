import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
<div className="about_us" id="about_us">
  <div className="about_us_content">

    <div className="about_us_text">
      <p className="our_story_text"> Our story</p>
      <h1 className="about_us_header"> Welcome to Tawa Grill</h1>
      <p className="about_us_p1"> Chef Patron Joan Smith and Executive Chef François Lemoine 
         have teamed up to open one of the most exciting restaurants in Anytown.</p>
      <p className="about_us_p2"> Our speciality is delicious cuisine created with the ingenuity and passion inspired by the fantastic flavours of France itself. 
         We take great pride in improving upon your favourite French dishes in new and creative ways.</p>   
    </div>

    <div className="image_1_div">
      <img src={ images.about_us_image_4} alt="" className="image_1" />
    </div>

    <div className="image_2_div">
      <img src={ images.about_us_image_5} alt="" className="image_2" />
    </div>
    
  </div>
</div>
);

export default AboutUs;