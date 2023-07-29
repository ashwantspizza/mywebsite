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
        <div className = "hackhealth-project-desc-container">
      <div className = "hackhealth-project-title">
        <h3>HackHealth</h3>
      </div>
      <div className = "hackhealth-project-desc">HackHealth is an application built in React that helps you to keep track of your daily steps and your weekly step goals.</div>
      <div className = "hackhealth-project-link">
      <a href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-room1-ash-anjum-david-tom">repo link</a>
      </div>
      </div>
  </div>
    </div>
  </>
  );
}

export default Content;
