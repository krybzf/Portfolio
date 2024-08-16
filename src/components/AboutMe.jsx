import React from 'react';
import './AboutMe.css';

const AboutMe = ({ currentLanguage }) => {
  return (
    <section id="about-me">
      <hr class="section-divider" />
      <h1 className="main-heading">{currentLanguage === 'tr' ? 'PROFİL' : 'PROFILE'}</h1>
      <div className="content-wrapper">
        <div className="profile-info">
          <h2>{currentLanguage === 'tr' ? 'Profil' : 'Profile'}</h2>
          <ul>
            <li>{currentLanguage === 'tr' ? 'Doğum Tarihi: 07.10.1993' : 'Date of Birth: 07.10.1993'}</li>
            <li>{currentLanguage === 'tr' ? 'İkamet Şehri: İzmir' : 'City of Residence: İzmir'}</li>
            <li>{currentLanguage === 'tr' ? 'Eğitim Durumu: Dokuz Eylül Üniv. ÇEKO, Lisans, 2018' : 'Education: Dokuz Eylül Üniv. ÇEKO, Bachelor’s, 2018'}</li>
            <li>{currentLanguage === 'tr' ? 'Tercih Ettiği Rol: Frontend, UI' : 'Preferred Role: Frontend, UI'}</li>
          </ul>
        </div>
        <div className="about-me-content">
          <h2>{currentLanguage === 'tr' ? 'Hakkımda' : 'About Me'}</h2>
          <p>{currentLanguage === 'tr' ? 'Merhaba, ben Koray. Bu bölümde kendimden bahsetmek istiyorum.' : 'Hello, I\'m Koray. In this section, I would like to tell you more about myself.'}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
