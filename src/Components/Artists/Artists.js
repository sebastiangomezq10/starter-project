import React, { useEffect } from "react";
import "./Artists.css"
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Carousel } from 'react-responsive-carousel';
import Logo from "../../Assets/Renders/R7-1.jpg";
import Slider from "react-slick";
import Image from "../../Helpers/Images"


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
  var artistsInfo = [{
    name: 'Adilson Miranda',
    description: 'Animation Speciaist: adilson is passionate about animation and creating visual tours that transport our clients to an immersive experience.',
    picture: './Artist/artist.jpg',
    renders: [{ img: './Renders/R1-3.jpg', description: '-' }, { img: './Renders/R5-2.jpg', description: '-' }],
  }, {
    name: 'Olga Romero',
    description: 'Animation Speciaist: adilson is passionate about animation and creating visual tours that transport our clients to an immersive experience.',
    picture: './Artist/olga.jpg',
    renders: [{ img: './Renders/R7-1.jpg', description: '-' }, { img: './Renders/R7-5.jpg', description: '-' }],
  }
  ];
  return (
    <div>
      <div className="title-section">
        <b>Our Artist</b>
      </div>

      {artistsInfo.map((artistInfo, indexArtist) => (
        <div className="mis-artistas-container" key={{ index: indexArtist }}>
          <div className="imagen-con-filtro">
            <img
              /* The `src={artistInfo.picture}` is setting the source attribute of the `img` element to the value of
              `artistInfo.picture`. This is used to display the image of the artist in the component. */
              src={Image(artistInfo.picture)}
              alt="Mis artistas"
            />
            <div className="filtro-negro"></div>
            <div className="titulo-descripcion">
              <h2>{artistInfo.name}</h2>
              <p>
                {artistInfo.description}
              </p>
            </div>
          </div>
          <div className="slider">

            <Slider {...settings}>
              {artistInfo.renders.map((render, indexrender) => (
                <div className="about-section-container-slider-div" key={indexrender}>
                  <img src={Image(render.img)} alt={`Render ${indexrender}`} />
                  <span>{render.description}</span>
                </div>
              ))}

            </Slider>
          </div>
        </div>))}
    </div>
  );
};

export default Artists;
