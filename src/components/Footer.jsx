import React from 'react';
import './Footer.css'; 

const Footer = ({ currentLanguage }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <span className="contact-icon">👉</span>
          <a href="mailto:kbozefe@gmail.com" className="contact-email">
            kbozefe@gmail.com
          </a>
        </div>

        <div className="footer-links">
          <a href="#personal-blog" className="footer-link blog-link">{currentLanguage === 'tr' ? 'Kişisel Blog' : 'Personal Blog'}</a>
          <a href="#github" className="footer-link github-link">Github</a>
          <a href="#linkedin" className="footer-link linkedin-link">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
