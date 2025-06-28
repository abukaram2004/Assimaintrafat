import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [scrollPercent, setScrollPercent] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollPercent((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className="scroll-indicator" style={{ width: `${scrollPercent}%` }}></div>
      <Navbar
        active={activeSection}
        toggleTheme={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Customers />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
