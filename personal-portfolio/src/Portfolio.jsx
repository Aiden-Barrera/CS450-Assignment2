import React, { useState } from 'react';
import './Portfolio.css';
import Card from './components/Card';

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
    <div className="portfolio-section" style={{ display: 'flex', flexDirection: 'column',flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
}

export default Portfolio;