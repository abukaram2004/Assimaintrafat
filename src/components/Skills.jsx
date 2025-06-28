import React, { useEffect, useState } from 'react';
import "../styles/Skills.css"
const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-left">
        <h2>My Skills</h2>
        <div className='bars-container'>
      {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <span>{skill.name}</span>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: loaded ? `${skill.level}%` : '0%' }}
              ></div>
          </div>
          </div>

        ))}
        </div>
  
      </div>
      <div className="skills-right">
        <p>
          I have a strong foundation in frontend development and continuously enhance my skills in building modern, interactive user interfaces.
        </p>
        <button className="contact-btn" onClick={() => window.location.href='#contact'}>
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Skills;
