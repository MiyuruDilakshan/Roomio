import React from "react";
import "../styles/AboutHero.css";
import heroImage from "../assets/about-hero.png";   // your hero image

function AboutHero() {
  return (
    <section className="about-hero">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="About Roomio"
        className="about-hero-image"
      />

      {/* Overlay */}
      <div className="about-hero-overlay"></div>

      {/* Content */}
      <div className="about-hero-content">

        <h1 className="about-title">
          About Roomio
        </h1>

        <p className="about-subtitle">
          Empowering everyone to design their dream spaces with AI-powered
           3D visualization.
        </p>

        <button className="about-btn">
          Get Started
        </button>

      </div>

    </section>
  );
}

export default AboutHero;