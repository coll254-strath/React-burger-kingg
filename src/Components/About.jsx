import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="About"className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        One bite will leave you hooked!
        </h1>
        <p className="primary-text">
        Whether you're in the mood for a hearty steak,
         a fragrant curry, or a delectable dessert, 
         our talented chefs have meticulously crafted each item to ensure a harmonious blend of flavors and textures.
        </p>
        <p className="primary-text">
        Our warm and welcoming ambiance, complemented by attentive service,
         creates the perfect setting for intimate gatherings, 
        family celebrations, or simply enjoying a delightful meal with friends.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;