// HeroSection.jsx
import React from "react";
import "./heroSection.css";
import searchIcon from "../../../assets/search_icon.png"; // Make sure path is correct

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button className="search-icon-button">
            <img src={searchIcon} alt="Search" className="search-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
