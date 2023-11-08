import React from "react";
import "./Artists.css"
import artistBackground from "../../Assets/artist.jpg";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Carousel } from 'react-responsive-carousel';
import Logo from "../../Assets/R7-1.jpg";

import Slider from "react-slick";


const Artists = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="title-section">
        <h1>Our Artist</h1>
      </div>
      <div className="mis-artistas-container">
        <div className="imagen-con-filtro">
          <img
            src={artistBackground}
            alt="Mis artistas"
          />
          <div className="filtro-negro"></div>
          <div className="titulo-descripcion">
            <h2>Adilson Miranda</h2>
            <p>
              Animation Speciaist: adilson is passionate aboit animation and hasbeen instrumental creating visual tours that transport our clients to an immersive experience
            </p>
          </div>
        </div>
        <div className="slider">
          <Slider {...settings}>
            <div className="about-section-container-slider-div">
              <img src={Logo} />

              <h3>Exterior and interior rendering with high attention to detail.</h3>

            </div>
            <div className="about-section-container-slider-div">
              <img src={Logo} />

              <h3>Exterior and interior rendering with high attention to detail.</h3>

            </div>


          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Artists;
