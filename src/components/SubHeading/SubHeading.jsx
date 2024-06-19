import React from 'react';
import { images } from '../../constants';
import './SubHeading.css'

const SubHeading = () => (
  <div className="sub">
    <img src={images.spoon} alt="spoon" className="spoon_img" />
  </div>
);

export default SubHeading;
