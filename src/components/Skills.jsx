import React from 'react';
import './Skills.css';

const Skills = ({ currentLanguage }) => {
  return (
    <section id="skills">
      <h2 className="skills-title">{currentLanguage === 'tr' ? 'Yetenekler' : 'Skills'}</h2>
      <div className="skill-items">
        <div className="skill-item">
          <h3>JavaScript</h3>
          <p>{currentLanguage === 'tr' ? 'JavaScript yeteneği hakkında açıklama.' : 'Description about JavaScript skill.'}</p>
        </div>
        <div className="skill-item">
          <h3>React.js</h3>
          <p>{currentLanguage === 'tr' ? 'React.js yeteneği hakkında açıklama.' : 'Description about React.js skill.'}</p>
        </div>
        <div className="skill-item">
          <h3>Node.js</h3>
          <p>{currentLanguage === 'tr' ? 'Node.js yeteneği hakkında açıklama.' : 'Description about Node.js skill.'}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
