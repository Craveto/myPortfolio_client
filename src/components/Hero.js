import React from 'react';
import './Hero.css';
import myImg3 from './img/myImg3.png';
// import ParticlesBackground from './ParticlesBackground';
import { FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* <ParticlesBackground /> */}
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <p className="intro">hello, I’m</p>
          <h1 className="name">Snehal Dighore</h1>
          <p className="title">Full Stack Developer</p>
          <div className="buttons">

            <button className="btn btn-primary">Resume</button>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/snehal-dighore-339242244" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:snehaldighore1335@gmail.com">
                <FaEnvelope />
              </a>
              <a href="https://leetcode.com/snehalLeetCode" target="_blank" rel="noreferrer">
                <FaCode />
              </a>
            </div>
          </div>
        </div>




        {/* Right: Image placeholder */}
        <div className="hero-image image-placeholder">
          <img src={myImg3} alt="Snehal Dighore" className="profile-photo" />
        </div>

      </div>


    </section>
  );
};

export default Hero;
