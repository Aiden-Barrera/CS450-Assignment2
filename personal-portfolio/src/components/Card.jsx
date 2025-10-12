import { useState } from "react";

function Card({ project, colorIndex }) {
  const colors = ['#f5f5f5', '#e8e8e8', '#d3d3d3', '#c0c0c0'];

  return (
    <div
      className="card-container"
      style={{
        width: "350px",
        height: "400px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
        overflow: "hidden"
      }}
    >
      <div className="project-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          height: '180px', 
          backgroundColor: colors[colorIndex % colors.length], 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          borderBottom: '1px solid #e2e8f0'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: '#2d3748',
            textAlign: 'center',
            margin: '0'
          }}>{project.title}</h3>
        </div>
        
        <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: '1.6', 
            color: '#4a5568',
            margin: '0 0 20px 0'
          }}>{project.description}</p>
          
          <div className="technologies" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} style={{ 
                backgroundColor: '#f7fafc', 
                color: '#2d3748',
                padding: '6px 12px', 
                borderRadius: '12px', 
                fontSize: '0.85rem',
                fontWeight: '500',
                border: '1px solid #e2e8f0'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
