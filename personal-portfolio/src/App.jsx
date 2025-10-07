import React, { useState } from 'react';
import './App.css';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  const [currentComponent, setCurrentComponent] = useState('about');

  const handleNavClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="personal-profile-app">
      <div className="header-navigation">
        <div className="navigation-menu">
          <p onClick={() => handleNavClick('about')}>About Me</p>
          <p onClick={() => handleNavClick('portfolio')}>Portfolio</p>
          <p onClick={() => handleNavClick('resume')}>Resume</p>
          <p onClick={() => handleNavClick('contact')}>Contact</p>
        </div>
      </div>
      
      <div className="main-content-area">
        {currentComponent === 'resume' ? <Resume /> :
         currentComponent === 'contact' ? <Contact /> :
         currentComponent === 'portfolio' ? <Portfolio /> : <About />}
      </div>
    </div>
  );
}

export default App;
