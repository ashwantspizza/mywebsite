import React from 'react';
import './LandingPage.css';
import work from '../images/work.png';
import about from '../images/about.png';
import contact from '../images/contact.png';
import cv from '../images/cv.png';

import name from '../images/name.png';

//images
import cloud from '../images/cloud.png';
import nudge from '../images/nudge.png';
import githublogo from '../images/githublogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import javascriptlogo from '../images/javascriptlogo.png';
import typescriptlogo from '../images/typescriptlogo.png';
import htmllogo from '../images/htmllogo.png';
import csslogo from '../images/csslogo.png';
import gitlogo from '../images/gitlogo.png';
import reactlogo from '../images/reactlogo.png';
import nodelogo from '../images/nodelogo.png';
import expresslogo from '../images/expresslogo.png';
import jestlogo from '../images/jestlogo.png';
import playwrightlogo from '../images/playwrightlogo.png';
import restAPIlogo from '../images/restAPIlogo.png';
import postgresql from '../images/postgresql.png';
import nextjs from '../images/nextjs.png';
import tailwindcss from '../images/tailwindcss.png';
import figmalogo from '../images/figmalogo.png';

import { HashRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ContactForm from './ContactForm';

function LandingPage() {

  {/*console.log('LandingPage component rendered :p');*/}

  const cvPdfUrl = process.env.PUBLIC_URL + '/cv.pdf';

  return (
    <>
    {/* hashlinks for nav bar */}
      <HashRouter>
        <nav>
        <div className='nav-bar'>

<div className='wacc-nav'>
        <div className='header-item'>
          <HashLink smooth to="/path#work">
            <img src={work} alt="work-img" className = "work-header"/>
          </HashLink>
          </div>
          <div className='header-item'>
          <HashLink smooth to="/path#about">
            <img src={about} alt="about-img" className = "about-header"/>
          </HashLink>
          </div>
          <div className='header-item'>
          <HashLink smooth to="/path#contact">
            <img src={contact} alt="contact-img" className = "contact-header"/>
          </HashLink>
          </div>
          <div className='header-item'>
          <a href={cvPdfUrl} target="_blank" rel="noopener noreferrer">
          <img src={cv} alt="cv-img" className = "cv-header"/>
          </a>
          </div>
  </div>
          </div>
        </nav>

        <section id="landingpage">
       
        <div className = "name-image-container">
    <img src={name} alt="name-img" className = "name-image"/>
  </div>

  <div className="landing-contact-container">

  <a href="https://github.com/ashwantspizza" target="_blank" rel="noreferrer">
<img src={githublogo} alt="github-img" className="github-logo" />
  </a>

  <a href="https://www.linkedin.com/in/aisling-brogan-smith-112302255/" target="_blank" rel="noreferrer">
<img src={linkedinlogo} alt="linkedin-img" className="linkedin-logo" />
  </a>

  </div>

        </section>

  <section id="work">

  <div className='my-work-section'>
    <div className="my-work-text">
      <h2>my work</h2>
    </div>
    <div className="weatherapp-container">
    <a href="https://github.com/ashwantspizza/weatherapp">
      <img src={cloud} alt="weatherapp-img" className="weatherapp-image" />
      </a>
      <div className="weatherapp-project-desc-container">
        <div className="weatherapp-project-title"> <h3>Weather App</h3> </div>
        <div className="weatherapp-project-desc">This weather application was my first project using TypeScript and integrating APIs, built to showcase both functional design and clean user experience. It fetches real-time weather data using the OpenWeatherMap API and presents it through a simple, responsive UI. Focusing on designing intuitive interactions, I aimed to make the interface accessible and user-friendly across devices. This project reflects my growing skills in front-end development and my attention to detail in crafting engaging, user-centered digital experiences.</div>
        <div className="weatherapp-project-link">
        </div>
      </div>
    </div>
    <div className="nudge-container">
    <a href="https://8bit-nudge.netlify.app/">
      <img src={nudge} alt="nudge-img" className="nudge-image" />
      </a>
      <div className="nudge-project-desc-container">
        <div className="nudge-project-title"> <h3>NUDGE</h3> </div>
        <div className="nudge-project-desc">Nudge is a gamified study companion designed to make productivity more engaging and rewarding. Developed collaboratively with a team, the project merges playful aesthetics and a fun colour palette to motivate users through visual progress and interactive feedback. We focused on creating an intuitive and enjoyable user journey whilst balancing fun and functionality. We worked iteratively to design user flows that felt both game-like and goal-oriented, with special attention to responsive design and accessibility. This project strengthened my skills in collaborative design, user engagement, and bringing creativity into everyday digital experiences.</div>
        <div className="nudge-project-link">
        </div>
      </div>
    </div>
  </div>

  {/* toolbox section */}
  <div className='toolbox-section-container'>
  <div className='toolbox-text'> <h2>toolbox</h2> </div>
  <div className='toolbox'>
<img src={javascriptlogo} alt="javascript-img" className="toolbox-item" />
<img src={typescriptlogo} alt="typescript-img" className="toolbox-item" />
<img src={htmllogo} alt="html-img" className="toolbox-item" />
<img src={csslogo} alt="css-img" className="toolbox-item" />
<img src={gitlogo} alt="git-img" className="toolbox-item" />
<img src={reactlogo} alt="react-img" className="toolbox-item" />
<img src={nodelogo} alt="node-img" className="toolbox-item" />
<img src={expresslogo} alt="express-img" className="toolbox-item" />
<img src={jestlogo} alt="jest-img" className="toolbox-item" />
<img src={playwrightlogo} alt="playwright-img" className="playwright-logo" />
<img src={restAPIlogo} alt="rest-img" className="rest-logo" />
<img src={postgresql} alt="postgresql-img" className="toolbox-item" />
<img src={nextjs} alt="nextjs-img" className="nextjs-logo" />
<img src={tailwindcss} alt="tailwindcss-img" className="toolbox-item" />
<img src={figmalogo} alt="figma-img" className="figma-logo" />
  </div>
  </div>
  
</section>

        <section id="about">

        <div className="about-section">
    <div className="about-text"> <h2>about</h2> </div>
    <div className="about-desc"> 
    <div className="about-desc-1">A lover of food who has a knack for puzzle-solving and creating innovative solutions to problems.</div>
<div className='about-desc-2'>Since childhood, the world of creating has always fascinated me - I'd always be annoying my mum by cutting things out from her magazines or newspapers, scribbling onto them, or creating collages to make something of my own.</div>
<div className="about-desc-3">Learning some python in high school briefly taught me how to be creative in a different way, whilst also solving problems; I thoroughly enjoyed it but I never had the courage to pursue it. I've taken the leap to revisit my love for design, along with balancing my career in retail, in hopes to ultimately pursue a career where I can apply my skills and creativity!</div>
</div>
    </div>

        </section>

        <section id="contact">

        <div className="contact-section">
    <div className="contact-text"> <h2>contact</h2> </div>
    <div className="contact-desc"> As I'm currently looking for a role in Product Design, I would love to hear any questions or feedback you have for me and will be open to any opportunities that you may have as well.</div>
    <div className="contact-section-logos">

    <a href="https://github.com/ashwantspizza" target="_blank" rel="noreferrer">
    <img src={githublogo} alt="github-img" className="github-logo" />
    </a>

    <a href="https://www.linkedin.com/in/aisling-brogan-smith-112302255/" target="_blank" rel="noreferrer">
    <img src={linkedinlogo} alt="linkedin-img" className="linkedin-logo" />
    </a>

    </div>

    <div className="contact-form-prompt">Reach out to me!</div>
    <ContactForm />
    
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