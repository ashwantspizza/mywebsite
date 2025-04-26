import React from 'react';
import './LandingPage.css';
import work from '../images/work.png';
import about from '../images/about.png';
import contact from '../images/contact.png';
import cv from '../images/cv.png';
import name from '../images/name.png';
import moonclouds from '../images/moonclouds.png';
import hackhealth from '../images/hackhealth.png';
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
import pixelstar from '../images/pixelstar.png';
import arrow from '../images/arrow.png';
import heart from '../images/heart.png';
import footer from '../images/footer.png';
import { HashRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ContactForm from './ContactForm';

function LandingPage() {

  console.log('LandingPage component rendered :p');

  const cvPdfUrl = process.env.PUBLIC_URL + '/cv.pdf';

  return (
    <>
    {/* hashlinks for nav bar */}
      <HashRouter>
        <nav>
        <div className='nav-bar'>

        <HashLink smooth to="/path#landingpage">
        <div className = "moonclouds-container"> <img src={moonclouds} alt="moonclouds-img" className = "moonclouds-image"/> </div>
        </HashLink>

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
    <img src={arrow} alt="arrow-img" className="arrow-image" />
      <h2>my work</h2>
    </div>
    <div className="hackhealth-container">
    <a href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-room1-ash-anjum-david-tom">
      <img src={hackhealth} alt="hackhealth-img" className="hackhealth-image" />
      </a>
      <div className="hackhealth-project-desc-container">
        <div className="hackhealth-project-title"> <h3>HackHealth</h3> </div>
        <div className="hackhealth-project-desc">HackHealth is an application that helps you to keep track of your daily steps and your weekly step goals.</div>
        <div className="hackhealth-project-link">
        </div>
      </div>
    </div>
    <div className="nudge-container">
    <a href="https://8bit-nudge.netlify.app/">
      <img src={nudge} alt="nudge-img" className="nudge-image" />
      </a>
      <div className="nudge-project-desc-container">
        <div className="nudge-project-title"> <h3>NUDGE</h3> </div>
        <div className="nudge-project-desc">Nudge is an application that empowers individuals and motivates them to study, prompting them to revise consistently and compete with friends.</div>
        <div className="nudge-project-link">
        </div>
      </div>
    </div>
  </div>

  {/* toolbox section */}
  <div className='toolbox-section-container'>
  <div className='toolbox-text'> <img src={arrow} alt="arrow-img" className="arrow-image" /> <h2>toolbox</h2> </div>
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
  </div>
  </div>
  
</section>

        <section id="about">

        <div className="about-section">
    <div className="about-text"> <img src={arrow} alt="arrow-img" className="arrow-image" /> <h2>about</h2> </div>
    <div className="about-desc"> 
    <div className="about-desc-1">A 22-year-old aspiring software developer who is a foodie and has a knack for solving puzzles.</div>
<div className='about-desc-2'>Since childhood, the world of creating has always fascinated me - I'd always be annoying my mum by cutting things out from her magazines, scribbling onto them and creating messy collages.
Learning some python in high school briefly taught me how to solve simple problems digitally and this brought me so much joy but I never had the courage to pursue it.</div>
<div className="about-desc-3">Now, I've taken a leap to revisit my love of coding and pursue a career where I can apply my logical problem-solving skills!</div>
</div>
    </div>

        </section>

        <section id="contact">

        <div className="contact-section">
    <div className="contact-text"> <img src={arrow} alt="arrow-img" className="arrow-image" /> <h2>contact</h2> </div>
    <div className="contact-desc"> As I'm currently looking for a role in tech, I would love to hear any questions or feedback you have for me and will be open to any opportunities that you may have as well!</div>
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
        <div className="pixelstar-container">
          <div className="pixelstar">
          <HashLink smooth to="/path#landingpage">
          <img src={pixelstar} alt="star-img" className = "pixelstar"/>
          </HashLink>
          </div>
        </div>

        <div className="footer">
          <h3>designed and built with react.js by aisling 'ash' brogan-smith</h3>
          <p>&copy; 2023 all rights reserved</p>
        <div className='footer-image'>
          <img src={heart} alt="heart-img" className="heart-footer" />
          <img src={footer} alt="footer-img" className="chicken-footer" />
        </div>
        </div>
      </HashRouter>
    </>
  );
}

export default LandingPage;