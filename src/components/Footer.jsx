import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-icons">
          <h4>Follow Me</h4>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
