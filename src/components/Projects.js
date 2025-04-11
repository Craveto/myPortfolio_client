import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Expense Tracker',
      description: 'A MERN stack app to manage your income and expenses with an intuitive UI.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      img: '/projects/expense-tracker.png',
      live: 'https://exptracker-beige.vercel.app/',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal responsive portfolio built with React and hosted on Vercel.',
      tech: ['React', 'CSS', 'Vercel'],
      img: '/projects/portfolio.png',
      live: 'https://foodee-alpha.vercel.app/',
      github: '#'
    },
    // Add more projects...
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
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
    </section>
  );
};

export default Projects;
