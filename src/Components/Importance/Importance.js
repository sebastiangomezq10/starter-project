import React from "react";
import "./Importance.css"
import importanceBackground from "../../Assets/R7-5.jpg";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Carousel } from 'react-responsive-carousel';
import Logo from "../../Assets/R7-1.jpg";

import Slider from "react-slick";


const Artists = () => {

  return (
    <div className="importance-section-container">
      <div className="importance-section-container-description">
        <h2>Importance</h2>
        <ul>
          <li>Present projects in a realistic and attractive way to attract more clients.</li>
          <li>Facilitate decision-making in the design and construction phase.</li>
          <li>Save time and resources by eliminating the need for physical models.</li>
          <li>Enhance your company's image and stand out in the market.</li>
          <li>Create immersive and exciting experiences for your clients.</li>
          <li>Boost client confidence and satisfaction.</li>
        </ul>
      </div>
      <div className="importance-section-container-img">
        <img
          src={importanceBackground}
          alt="Mis artistas"
        />
        <div className="importance-section-container-img-filter"></div>

      </div>
    </div>
  );
};

export default Artists;
