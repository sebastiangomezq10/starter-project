import React from "react";
import "./Home.css"
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/Renders/R7-1.jpg";
import Navbar from "../Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Professional Architectural Rendering.
          </h1>
          <p className="primary-text">
            A creative and experienced team to bring your architectural projects to life with quality and realism.
            We are a Colombian company that operates remotely, offering architectural rendering services to clients in the United States.
            Our goal is to help architects, designers, and construction professionals visualize their ideas and present projects in a stunning way.
            Our expertise and passion for architecture make us a strategicall for your success. Welcome to NudoLab!
          </p>
          <button className="secondary-button">
            Contact Us <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
