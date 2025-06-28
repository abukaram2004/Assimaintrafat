import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Graduation – B.Sc. in Computer Science',
    },
    {
      year: '2023',
      title: 'Frontend Developer Internship at TechCorp',
    },
    {
      year: '2021',
      title: 'Started Bachelor Program',
    },
  ];

  return (
    <section className="education" id="education">
      <h2>Education & Experience</h2>
      <div className="timeline">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
