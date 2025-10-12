import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Arts Computer Science",
      school: "New Jersey Institute of Technology",
      location: "Newark, NJ",
      year: "Expected Graduation May 2026",
      gpa: "3.85/4.0",
      honors: "Dean's List, The National Society of Collegiate Scholars",
      coursework: "Intensive Programming in Linux, Programming Language Concepts, Database System Design & Management, Internet Applications, Introduction to Data Science"
    }
  ];

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Bank of America - Global Technology",
      period: "Summer 2025",
      responsibilities: [
        "Maintained and developed team's ETL pipeline tool to improve data flow upstream and downstream",
        "Enhanced data processing capabilities for millions of data points serving multiple tenants",
        "Collaborated with cross-functional teams to optimize data infrastructure and performance"
      ]
    },
    {
      title: "CS Grader",
      company: "NJIT - Ying Wu College of Computing",
      period: "Jan. 2024 – present",
      responsibilities: [
        "Served as Teaching Assistant for Data Structures and Algorithms class at NJIT",
        "Assisted students with understanding and completing lab assignments by providing guidance on problem-solving techniques",
        "Successfully guided students through challenging lab assignments and coursework"
      ]
    },
    {
      title: "Instructor Intern",
      company: "Black Rocket Production",
      location: "Newark, NJ / Paramus, NJ",
      period: "Jun. 2024 – Aug. 2024",
      responsibilities: [
        "Demonstrated leadership by effectively instructing students on course material",
        "Collaborated with lead instructors to enhance in-class performance and management",
        "Assisted younger students in understanding technological topics, including Machine Learning and game development using various game engines"
      ]
    }
  ];

  const skills = {
    "Languages": ["Python", "Go", "JavaScript", "C/C++", "MySQL", "HTML/CSS"],
    "Frameworks": ["React", "Express.js", "Node.js"],
    "Developer Tools": ["Postman", "Git", "VS Code", "Jupyter Notebooks"],
    "Libraries": ["Axios", "Socket.io", "AntD"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school} - {edu.location}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                    <p className="item-honors"><strong>Honors & Awards:</strong> {edu.honors}</p>
                    <p className="item-coursework"><strong>Relevant Coursework:</strong> {edu.coursework}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} {exp.location && `- ${exp.location}`} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
