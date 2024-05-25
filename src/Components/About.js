import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Painting2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">O nama</p>
        <h1 className="primary-heading">
          Profesionalne Molerske Usluge
        </h1>
        <p className="primary-text">
        Naš tim stručnih molera nudi vrhunske usluge krečenja i farbanja specijalno prilagođene potrebama građevinskih investitora. Bilo da radite na stambenom, poslovnom ili industrijskom objektu, mi vam garantujemo besprekornu završnu obradu koja će zadovoljiti i najzahtevnije standarde.
      </p>
      <p className="primary-text">
        Sa dugogodišnjim iskustvom u velikim i malim projektima, naš cilj je da vašim objektima pružimo estetski privlačan i profesionalan izgled. 
      </p>
        <div className="about-buttons-container">
          {/* <button className="secondary-button">Saznajte više</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Pogledajte video
          </button> */}
        </div>
      </div>
    </div>
  );  
};

export default About;
