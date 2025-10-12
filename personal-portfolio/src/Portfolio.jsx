import React, { useState } from 'react';
import './Portfolio.css';
import Card from './components/Card';

function Portfolio() {
  const [projects] = useState([
    {
      project_image: "",
      title: "Sakila Portal",
      description: "A full-stack web application using React and Express.js to interact with the Sakila MySQL database with RESTful API endpoints.",
      technologies: ["React", "Express.js", "MySQL", "Postman"],
    },
    {
      project_image: "",
      title: "Bank Manager",
      description: "A full-featured Bank Manager GUI using Python for backend functionality and CustomTkinter for modern interface design.",
      technologies: ["Python", "CustomTkinter"],
    },
    {
      project_image: "",
      title: "SFort95: Language Design",
      description: "A custom programming language implemented from scratch using C++ with lexical analyzer, parser, and interpreter.",
      technologies: ["C++", "Compiler Design"],
    },
    {
      project_image: "",
      title: "Portfolio Website",
      description: "A fully functional personal portfolio website showcasing skills, projects, and professional experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ]);

  return (
    <div style={{ 
      backgroundColor: '#fafafa', 
      minHeight: '100vh', 
      padding: '60px 20px' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '700', 
          color: '#2d3748', 
          textAlign: 'center',
          marginBottom: '20px'
        }}>My Projects</h1>
        
        <div style={{ 
          width: '80px', 
          height: '4px', 
          backgroundColor: '#333333', 
          margin: '0 auto 60px',
          borderRadius: '2px'
        }} />

        <div className="portfolio-section" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px', 
          justifyItems: 'center'
        }}>
          {projects.map((project, index) => (
            <Card key={index} project={project} colorIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
