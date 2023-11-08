import React from "react";
import "./About.css"
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Carousel } from 'react-responsive-carousel';
import Logo from "../../Assets/R7-1.jpg";

import Slider from "react-slick";


const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="about-section-container">
      <div className="title-section">
        <b>Services</b>
      </div>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-container-slider">

        <Slider {...settings}>
          <div className="about-section-container-slider-div">
            <img src={Logo} />

            <h3>Exterior and interior rendering with high attention to detail.</h3>
            <button className="secondary-button">
              See more
            </button>
          </div>
          <div className="about-section-container-slider-div">
            <img src={Logo} />

            <h3>Animations and virtual tours to showcase the project in its entirety</h3>
            <button className="secondary-button">
              See more
            </button>
          </div>
          <div className="about-section-container-slider-div">
            <img src={Logo} />

            <h3>Visualization of landscapes and urban environments.								</h3>
            <button className="secondary-button">
              See more
            </button>
          </div>
          <div className="about-section-container-slider-div">
            <img src={Logo} />

            <h3>360 rendering for immersive experiences</h3>
            <button className="secondary-button">
              See more
            </button>
          </div>
          <div className="about-section-container-slider-div">
            <img src={Logo} />

            <h3> Interior modeling and design for personalized spaces.</h3>
            <button className="secondary-button">
              See more
            </button>
          </div>

        </Slider>

      </div>
      {/* <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div> */}
      {/* <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div> */}
    </div>
  );
};
// https://react-slick.neostack.com/docs/api
// https://www.npmjs.com/package/react-responsive-carousel
export default About;
