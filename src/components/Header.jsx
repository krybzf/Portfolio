import React from 'react';
import './Header.css';

const Header = ({ theme, toggleTheme, toggleLanguage, currentLanguage }) => {
  return (
    <header className={`header ${theme}`}>
      <div className="right-buttons">
        <div className="theme-switch-container">
          <span className={`mode-label dark-mode ${theme === 'dark' ? 'active' : ''}`}>
            Dark Mode
          </span>
          <div className="theme-switch" onClick={toggleTheme}>
            <div className={`switch ${theme === 'dark' ? 'dark' : 'light'}`}></div>
          </div>
          <span className={`mode-label light-mode ${theme === 'dark' ? '' : 'active'}`}>
            Light Mode
          </span>
        </div>
        <button className="language-toggle" onClick={toggleLanguage}>
          {currentLanguage === 'tr' ? 'English' : 'Türkçe'}
        </button>
      </div>
      <nav>
        <ul className="nav-buttons">
          <li><a href="#skills">{currentLanguage === 'tr' ? 'Yetenekler' : 'Skills'}</a></li>
          <li><a href="#projects">{currentLanguage === 'tr' ? 'Projeler' : 'Projects'}</a></li>
          <li><button className="hire-me-btn">{currentLanguage === 'tr' ? 'Beni İşe Al' : 'Hire me'}</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
