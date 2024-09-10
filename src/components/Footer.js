import React from 'react';
import './Footer.css';  // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Ran Polac. All rights reserved.</p>
      <div className="footer-links">
      
        <a href="https://www.linkedin.com/in/ran-polac" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span>|</span>
        <a href="https://github.com/Ranash12P" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>|</span>
        <a href="#">Help</a>
      </div>
    </footer>
  );
};

export default Footer;
