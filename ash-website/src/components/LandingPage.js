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
    {/* hashlinks for nav bar */}
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
          <div className='header-item'> cv </div>
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
        <div className="nudge-project-desc">Nudge is an application that empowers individuals and motivates them to study, prompting them to revise consistently and compete with friends.</div>
        <div className="nudge-project-link">
          <a href="https://8bit-nudge.netlify.app/">app link</a>
        </div>
      </div>
    </div>
  </div>

  {/* toolbox section */}
  <div className='toolbox-section-container'>
  <div className='toolbox-text'> <h2>toolbox</h2> </div>
  <div className='toolbox'>
  <p>JavaScript</p>
  <p>TypeScript</p>
  <p>HTML</p>
  <p>CSS</p>
  <p>Git</p>
  <p>GitHub</p>
  <p>React</p>
  <p>Node.js</p>
  <p>Express.js</p>
  <p>Jest</p>
  <p>Playwright</p>
  <p>Rest API</p>
  <p>PostgreSQL</p>
  </div>
  </div>
</section>

        <section id="about">
        <div className="about-section">
    <div className="about-text">
      <h2>about</h2>
    </div>
    </div>
        </section>

        <section id="contact">
        <div className="contact-section">
    <div className="contact-title-text"> <h2>contact</h2> </div>
    <div className="contact-desc"> <p>As I'm currently looking for my first role in tech, I would love to hear questions/feedback and will be open to any opportunities that you may have for me!</p></div>
    </div>
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