import React, { useEffect, useState, useRef } from 'react';
import '../styles/Header.css';
import avatar from '../assets/images/rafat-img.jpg';

const jobTitles = [
  'Frontend Developer',
  'React Enthusiast',
  'UI/UX Designer',
  'Web Engineer'
];

const Header = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const avatarRef = useRef();

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    const interval = setInterval(() => {
      const current = jobTitles[index % jobTitles.length];
      if (!isDeleting) {
        setText(current.slice(0, i + 1));
        i++;
        if (i === current.length) {
          isDeleting = true;
          setTimeout(() => (isDeleting = false), 1000);
        }
      } else {
        i--;
        setText(current.slice(0, i));
        if (i === 0) {
          isDeleting = false;
          setIndex(prev => prev + 1);
        }
      }
    }, isDeleting ? 40 : 100);
    return () => clearInterval(interval);
  }, [index]);

  const handleMouseMove = e => {
    const x = (e.clientX - window.innerWidth / 2) * 0.02;
    const y = (e.clientY - window.innerHeight / 2) * 0.02;
    avatarRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleAvatarClick = () => {
    avatarRef.current.classList.add('pop-out');
    setTimeout(() => avatarRef.current.classList.remove('pop-out'), 500);
  };

  return (
    <header className="header" onMouseMove={handleMouseMove}>
      <div className="left">
        <h1>I am Rafat, <span className="typewriter">{text}<span className="cursor">|</span></span></h1>
        <p>A passionate frontend developer.</p>
      </div>
      <div className="right">
        <img
          ref={avatarRef}
          src={avatar}
          alt="avatar"
          className="avatar"
          onClick={handleAvatarClick}
        />
      </div>
    </header>
  );
};

export default Header;
