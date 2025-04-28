import React, { useEffect } from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaCss3Alt, FaComments } from 'react-icons/fa';

const skills = [
  { name: 'React', level: 72, icon: <FaReact /> },
  { name: 'Node.js', level: 65, icon: <FaNodeJs /> },
  { name: 'MongoDB', level: 80, icon: <FaDatabase /> },
  { name: 'JavaScript', level: 70, icon: <FaJsSquare /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt /> },
  { name: 'Communication', level: 86, icon: <FaComments /> },
];

const Skills = () => {

  useEffect(() => {
    const bars = document.querySelectorAll('.bar-filled');
    bars.forEach((bar, index) => {
      bar.style.width = skills[index].level + '%';
    });
  }, []); // ✅ Empty array fine now, because skills are declared outside component!

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-info">
              <div className="skill-name">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </div>
              <span>{skill.level}%</span>
            </div>
            <div className="bar">
              <div className="bar-filled"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
