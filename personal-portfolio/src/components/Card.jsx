import { useState } from "react";

function Card({ project }) {


  return (
    <div className="card-container" style={{ perspective: '1000px', width: '200px', height: '300px', cursor: 'pointer' }}>
      <div className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Card;
