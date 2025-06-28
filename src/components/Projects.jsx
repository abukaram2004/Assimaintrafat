import React, { useState } from 'react';
import '../styles/Projects.css';
import weatherAppImg from '../assets/images/weather-app.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const projectData = [
  {
    title: 'Portfolio Website',
    tech: 'React, CSS',
    images: [weatherAppImg, weatherAppImg],
    description: 'A personal portfolio site.'
  },
  {
    title: 'E-Commerce App',
    tech: 'React, Redux',
    images: [weatherAppImg],
    description: 'Online store with cart functionality.'
  },
  {
    title: 'Blog Platform',
    tech: 'Node.js, MongoDB',
    images: [weatherAppImg],
    description: 'Full-stack blog application.'
  },
  {
    title: 'Weather App',
    tech: 'React, API',
    images: [weatherAppImg],
    description: 'Shows real-time weather data.'
  },
  {
    title: 'Chat App',
    tech: 'Socket.io, Node.js',
    images: [weatherAppImg],
    description: 'Live chat with users.'
  },
  {
    title: 'Task Manager',
    tech: 'React, Firebase',
    images: [weatherAppImg],
    description: 'Track and manage daily tasks.'
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className="project-card"
              onClick={() => setActiveProject(project)}
            >
              <img src={project.images[0]} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.tech}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{activeProject.title}</h3>
            <Swiper spaceBetween={10} slidesPerView={1}>
              {activeProject.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`slide-${i}`} className="modal-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <p>{activeProject.description}</p>
            <span>{activeProject.tech}</span>
            <button onClick={() => setActiveProject(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
