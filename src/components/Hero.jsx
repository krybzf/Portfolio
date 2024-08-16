import React from 'react';
import './Hero.css';

const Hero = ({ currentLanguage }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>{currentLanguage === 'tr' ? 'Yaratıcı Düşünür' : 'Creative thinker'} <br /> {currentLanguage === 'tr' ? 'Minimalizm Aşığı' : 'Minimalism lover'}</h1>
        <p>{currentLanguage === 'tr' ? 'Merhaba, ben Koray. Ben bir full-stack geliştiricisiyim. Sağlam ve ölçeklenebilir frontend ürünler üretecek bir geliştirici arıyorsanız, benimle el sıkışalım.' : 'Hi, I\'m Koray. I\'m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let\'s shake hands with me.'}</p>
        <div className="hero-buttons">
          <a href="https://github.com/krybzf" target="_blank" rel="noopener noreferrer" className="github-btn1">
            <img src="/src/assets/github-icon.svg" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/koray-bozefe-262684173/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
            <img src="/src/assets/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <button className="hire-me-btn">{currentLanguage === 'tr' ? 'Beni İşe Al' : 'Hire me'}</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="src/assets/profile.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
