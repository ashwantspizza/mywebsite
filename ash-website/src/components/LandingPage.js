import React from 'react';
import './LandingPage.css';
import name from '../images/name.png';
import hackhealth from '../images/hackhealth.png';
import nudge from '../images/nudge.png';
import { HashRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function LandingPage() {
  return (
    <>
      <HashRouter>
        <nav>
        <div className='nav-bar'>
        <div className='header-item'>
          <HashLink smooth to="/path#work">
            work
          </HashLink>
          </div>
          <div className='header-item'>
          <HashLink smooth to="/path#about">
            about
          </HashLink>
          </div>
          <div className='header-item'>
          <HashLink smooth to="/path#contact">
            contact
          </HashLink>
          </div>
          <div className='header-item'>
          <HashLink smooth to="/path#cv">
            cv
          </HashLink>
          </div>
          </div>
        </nav>

        <div className = "name-image-container">
    <img src={name} alt="name-img" className = "name-image"/>
  </div>

  <section id="work">
  <div className="my-work-section">
    <div className="my-work-text">
      <h2>my work</h2>
    </div>
    <div className="hackhealth-container">
      <img src={hackhealth} alt="hackhealth-img" className="hackhealth-image" />
      <div className="hackhealth-project-desc-container">
        <div className="hackhealth-project-title"> <h3>HackHealth</h3> </div>
        <div className="hackhealth-project-desc">HackHealth is an application that helps you to keep track of your daily steps and your weekly step goals.</div>
        <div className="hackhealth-project-link">
          <a href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-room1-ash-anjum-david-tom">repo link</a>
        </div>
      </div>
    </div>
    <div className="nudge-container">
      <img src={nudge} alt="nudge-img" className="nudge-image" />
      <div className="nudge-project-desc-container">
        <div className="nudge-project-title"> <h3>Nudge</h3> </div>
        <div className="nudge-project-desc">Nudge is an application that empowers individuals and motivates them to study, prompting them to revise cosistently and compete with friends.</div>
        <div className="nudge-project-link">
          <a href="https://8bit-nudge.netlify.app/">app link</a>
        </div>
      </div>
    </div>
  </div>
</section>

        <section id="about">
          {/* Content for the "about" section goes here */}
        </section>

        <section id="contact">
          {/* Content for the "contact" section goes here */}
        </section>

        <section id="cv">
          {/* Content for the "cv" section goes here */}
        </section>

        <div className="footer">
          <h3>designed and built with react.js by aisling 'ash' brogan-smith</h3>
          <p>&copy; 2023 all rights reserved</p>
        </div>
      </HashRouter>
    </>
  );
}

export default LandingPage;