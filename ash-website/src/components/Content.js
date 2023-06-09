import React from 'react';
import './Content.css';
import hackhealth from '../images/hackhealth.png';


function Content() {
  return (
    <div className = "my-work">
      <div className = "hackhealth-image">
        <img src={hackhealth} alt="hackhealth-img" />
      </div>
      <h2>my work</h2>
      <p></p>
    </div>
  );
}

export default Content;
