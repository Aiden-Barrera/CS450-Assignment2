import React, {useState} from 'react';
import './About.css';

function About() {
  const [skills] = useState(['React', 'Express.js', 'FastAPI', 'MySQL', 'MongoDB', 'AWS Cloud Services' ]);

  return (
    <div className="about-section" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '20px', height: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>About Me</h1>
      <hr style={{ width: '8%', margin: '15px 0', border: '1.3px solid #333' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', height: '30vh', marginTop: '20px' }}>
        <div className="about-image" style={{ backgroundColor: '#333333', padding: '0 30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="About Me" style={{color: "#ffffff"}}/>
        </div>
        <div className="about-text" >
          <div>
            <p>Hello! I'm [Your Name], a passionate developer with experience in building web applications. I love coding and creating beautiful, functional user experiences.</p>
            <p>In my free time, I enjoy hiking, reading, and exploring new technologies.</p>
          </div>
          <div style={{ marginTop: '10px' }}>
            <h2>Skills & Technologies</h2>
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge" style={{ display: 'inline-block', backgroundColor: '#f0f0f0', padding: '10px 15px', borderRadius: '16px', margin: '5px' }}>
                {skill}
              </span>
            ))}

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;