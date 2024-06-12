import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1>Majstor Plan</h1>
        </div>
        {/* <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span></span>
          <span></span>
        
        </div>
        <div className="footer-section-columns">
          <span></span>
          <span>majstorplan@gmail.com</span>
          
        </div>
        <div className="footer-section-columns">
          <span></span>
          <span>063 1249931</span>
        </div>
      </div>

      <div className="footer-line"></div>
      <div className="footer-copyright">
        &copy;Copyright 2024, Website by: mayacreativeweb@gmail.com
      </div>
    </div>
  );
};

export default Footer;
