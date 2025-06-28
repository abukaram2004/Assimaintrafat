import React, { useEffect, useRef, useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ active, toggleTheme, darkMode }) => {
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;

      setVisible(!goingDown || currentY < 50);
      lastScrollY.current = currentY;

      const scrolled = (currentY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${visible ? 'visible' : 'hidden'}`} ref={navbarRef}>
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          {['about', 'skills', 'education', 'projects', 'customers', 'contact'].map((id) => (
            <li key={id}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className={active === id ? 'active' : ''}
                href={`#${id}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <div className="scroll-progress">
        <div className="progress-circle">
          <span>{Math.round(scrollPercent)}%</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
