import React from 'react';
import './Content.css';
import hackhealth from '../images/hackhealth.png';

function Content() {
  return (
  <>
    <div className = "my-work">
      <h2>my work</h2>
        <img src={hackhealth} alt="hackhealth-img" className = "hackhealth-image"/>
    </div>
  </>
  );
}

export default Content;
