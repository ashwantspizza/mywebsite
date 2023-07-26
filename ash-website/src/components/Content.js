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
    <div className = "my-work">
      <h2>my work</h2>
        <img src={hackhealth} alt="hackhealth-img" className = "hackhealth-image"/>
    </div>
  </>
  );
}

export default Content;
