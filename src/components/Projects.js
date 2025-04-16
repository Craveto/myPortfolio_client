import React from 'react';
import './Projects.css';

const projectList = [
  {
    title: 'Expense Tracker',
    description: 'Track your income and expenses using the MERN stack.',
    tech: ['React', 'Node.js', 'MongoDB'],
    img: require('./img/project.png'),
    live: '#',
    github: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'My modern responsive developer portfolio.',
    tech: ['React', 'CSS', 'Vercel'],
    img: require('./img/project.png'),
    live: '#',
    github: '#'
  },
  {
    title: 'Weather App',
    description: 'Weather forecast app with real-time data.',
    tech: ['React', 'API', 'Tailwind'],
    img: require('./img/project.png'),
    live: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="slider-container">
        <div className="slider-track">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
