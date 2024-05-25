import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Painting1.png";
import Navbar from "./Navbar";
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
            Majstor Plan 
          </h1>
          <p className="primary-text">
          Dobrodošli na naš web sajt. Naša kompanija okuplja vrhunske stručnjake za keramiku, postavljanje vrata, moleraj i gipsarske radove, koji stvaraju lepe i funkcionalne prostore. Sa dugogodišnjim iskustvom i posvećenošću kvalitetu, pružamo pouzdane usluge koje ispunjavaju najviše standarde građevinske industrije.
</p>
          {/* <button className="secondary-button">
            Contact Us Now! <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
