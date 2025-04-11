import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hi! I'm Snehal Dighore — a passionate frontend developer who loves crafting beautiful and responsive web experiences.
          I'm currently building projects using the MERN stack and improving my skills every day!
        </p>

        <ul className="about-highlights">
          <li>🌐 MERN Stack Developer</li>
          <li>🎨 UI/UX Enthusiast</li>
          <li>📱 Mobile-Responsive Web Design</li>
          <li>🚀 Always Learning & Exploring</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
