import React from 'react';
import '../styles/About.css';
import resume from '../assets/pdf/rafat-cv.pdf';
import avatar from '../assets/images/rafat-img.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <img src={avatar} alt="avatar" className="about-avatar" />
      </div>
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer focused on creating responsive and user-friendly websites.
          I enjoy turning complex problems into simple, beautiful interfaces.
        </p>
        <a href={resume} download className="download-btn">Download Resume</a>
      </div>
    </section>
  );
};

export default About;
