import React from "react";
import "./Artists.css"
import artistBackground from "../../Assets/artist.jpg";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Carousel } from 'react-responsive-carousel';
import Logo from "../../Assets/R7-1.jpg";

import Slider from "react-slick";


const Artists = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div>
      <div className="title-section">
        <b>Our Artist</b>
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
              Animation Speciaist: adilson is passionate about animation and creat visual tours that transport our clients to an immersive experience.
            </p>
          </div>
        </div>
        <div className="slider">
          <Slider {...settings}>
            <div className="about-section-container-slider-div">
              <img src={Logo} />
              <span>-</span>
            </div>
            <div className="about-section-container-slider-div">
              <img src={Logo} />
              <span>-</span>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Artists;
