import React from 'react';
import './Projects.css';

const Projects = ({ currentLanguage }) => {
  return (
    
    <section id="projects" className="projects">
      <hr class="section-divider" />
      <h2>{currentLanguage === 'tr' ? 'Projeler' : 'Projects'}</h2>
      <div className="project-items">
        {/* Proje 1 */}
        <div className="project-item">
          <div className="project-image" style={{ backgroundImage: 'url(/src/assets/project1.png)' }}></div>
          <h3>Workintech</h3>
          <p>{currentLanguage === 'tr' ? "Workintech'in açıklaması..." : 'Description for Workintech...'}</p>
          <div className="project-links">
            <button className="github-btn"><img src="/src/assets/github-icon.svg" alt="Github" /></button>
            <button className="view-site-btn">{currentLanguage === 'tr' ? 'Siteyi Gör' : 'View Site'}</button>
          </div>
        </div>
        {/* Proje 2 */}
        <div className="project-item">
          <div className="project-image" style={{ backgroundImage: 'url(/src/assets/project2.png)' }}></div>
          <h3>{currentLanguage === 'tr' ? 'İkinci Proje' : 'Project Two'}</h3>
          <p>{currentLanguage === 'tr' ? 'İkinci Projenin Açıklaması...' : 'Description for Project Two...'}</p>
          <div className="project-links">
            <button className="github-btn"><img src="/src/assets/github-icon.svg" alt="Github" /></button>
            <button className="view-site-btn">{currentLanguage === 'tr' ? 'Siteyi Gör' : 'View Site'}</button>
          </div>
        </div>
        {/* Proje 3 */}
        <div className="project-item">
          <div className="project-image" style={{ backgroundImage: 'url(/src/assets/project3.png)' }}></div>
          <h3>{currentLanguage === 'tr' ? 'Üçüncü Proje' : 'Project Three'}</h3>
          <p>{currentLanguage === 'tr' ? 'İkinci Projenin Açıklaması...' : 'Description for Project Two...'}</p>
          <div className="project-links">
            <button className="github-btn"><img src="/src/assets/github-icon.svg" alt="Github" /></button>
            <button className="view-site-btn">{currentLanguage === 'tr' ? 'Siteyi Gör' : 'View Site'}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
