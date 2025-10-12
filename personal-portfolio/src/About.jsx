import React, {useState} from 'react';
import './About.css';

function About() {
  const [skills] = useState(['React', 'Express.js', 'Python', 'C++', 'MySQL', 'JavaScript']);

  return (
    <div className="about-section" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      padding: '60px 20px', 
      minHeight: '100vh',
      backgroundColor: '#fafafa'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '700', 
          color: '#2d3748', 
          textAlign: 'center',
          marginBottom: '20px'
        }}>About Me</h1>
        
        <div style={{ 
          width: '80px', 
          height: '4px', 
          backgroundColor: '#333333', 
          margin: '0 auto 60px',
          borderRadius: '2px'
        }} />

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '300px 1fr', 
          gap: '60px', 
          alignItems: 'start',
          marginBottom: '60px'
        }}>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '40px', 
            borderRadius: '20px', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
            textAlign: 'center'
          }}>
            <img src="/CS450-Assignment2/PersonalPic.JPEG" alt="About Me" style={{
              width: "200px", 
              height: "200px", 
              objectFit: "cover",
              borderRadius: '50%',
              marginBottom: '20px',
              border: '4px solid #e2e8f0'
            }}/>
          </div>

          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '40px', 
            borderRadius: '20px', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#4a5568', 
              marginBottom: '20px'
            }}>
              Hello! I'm a passionate developer and Computer Science student at NJIT with experience in full-stack development and teaching. I currently serve as a CS Grader for Data Structures and Algorithms, helping students master complex problem-solving techniques.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#4a5568'
            }}>
              I've worked as an Instructor Intern at Black Rocket Production, where I taught students about Machine Learning and game development. I love building innovative applications and exploring new technologies.
            </p>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: '40px', 
          borderRadius: '20px', 
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '600', 
            color: '#2d3748', 
            marginBottom: '30px'
          }}>Skills & Technologies</h2>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '15px'
          }}>
            {skills.map((skill, index) => (
              <span key={index} style={{ 
                backgroundColor: '#333333', 
                color: '#ffffff',
                padding: '12px 24px', 
                borderRadius: '25px', 
                fontSize: '0.95rem',
                fontWeight: '500',
                boxShadow: '0 4px 15px rgba(51, 51, 51, 0.3)',
                transition: 'transform 0.2s'
              }}>
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
