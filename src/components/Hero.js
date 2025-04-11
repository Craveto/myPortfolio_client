import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <p className="intro">hello, I’m</p>
          <h1 className="name">Snehal Dighore</h1>
          <p className="title">Full Stack Developer</p>
          <div className="buttons">
            <button className="btn btn-primary">Resume</button>
            <button className="btn btn-dark">Resume</button>
          </div>
        </div>

        {/* Right: Image placeholder */}
        <div className="hero-image">
          <div className="image-placeholder">my profile photo</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
