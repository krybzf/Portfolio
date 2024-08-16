import React, { useState, useEffect } from 'react';

import Header from './components/Header'; 
import Hero from './components/Hero';      
import Skills from './components/Skills';  
import AboutMe from './components/AboutMe'; 
import Projects from './components/Projects'; 
import Footer from './components/Footer';  
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'tr' : 'English'));
  };
  

  useEffect(() => {
    document.body.className = theme;  // 'light' veya 'dark' olarak body className ayarlanıyor
  }, [theme]);

  return (
    <div className="App">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        currentLanguage={language}
      />
      <Hero theme={theme} currentLanguage={language} />
      <Skills theme={theme} currentLanguage={language} />
      <AboutMe theme={theme} currentLanguage={language}/> 
      <Projects theme={theme} currentLanguage={language}/>
      <Footer theme={theme} currentLanguage={language}/>
    </div>
  );
}

export default App;
