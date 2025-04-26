import React from "react";
import "./Academics.css";

const academicsData = [
  {
    degree: "SSC",
    institution: "Subodh Vidyalay Masal",
    duration: "2017 - 2018",
    location: "Masal",
    score: "86%",
  },
  {
    degree: "HSC",
    institution: "Dr. Ambedkar College Nagpur",
    duration: "2018 - 2020",
    location: "Nagpur",
    score: "73.23%",
  },
  {
    degree: "Bachelors of Computer Application",
    institution: "Shri Shivaji Science College Nagpur",
    duration: "2021 - 2024",
    location: "Nagpur",
    score: "73.74%",
  },
  {
    degree: "Master of Computer Application",
    institution: "Vivekanand Education's Scociety Institute of Technology",
    duration: "2024 - Present",
    location: "Mumbai",
    score: "SGPI : 9.5 (1st sem)",
  },
];

const Academics = () => {
  return (
    <section className="academics-section" id="acedemics">
      <h2 className="academics-title">Academics</h2>
      <div className="timeline">
        {academicsData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.duration}</p>
              <p>{item.location}</p>
              <p>Score: {item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academics;
