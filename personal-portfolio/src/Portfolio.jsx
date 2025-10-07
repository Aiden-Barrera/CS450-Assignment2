import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [projects] = useState([
    {
      project_image: "",
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "CSS3"],
    },
    {
      project_image: "",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    },
  ]);

  return (
    <div className="portfolio-section">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;