import React from 'react';
import './Content.css';
import hackhealth from '../images/hackhealth.png';
import name from '../images/name.png';

function Content() {
  return (
  <>
  <div className = "name-image-container">
    <img src={name} alt="name-img" className = "name-image"/>
  </div>
  <div className = "my-work-section">
   <div className = "my-work-text">
        <h2>my work</h2>
  </div>
  <div className = "hackhealth-container">
        <img src={hackhealth} alt="hackhealth-img" className = "hackhealth-image"/>
      <div className = "hackhealth-project-text">
        <h3>HackHealth</h3>
      </div>
  </div>
    </div>
  </>
  );
}

export default Content;
