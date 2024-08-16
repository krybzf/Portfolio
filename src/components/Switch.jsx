import React from "react"
import './Switch.css';
<div className="theme-switcher">
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌞' : '🌙'}
        </button>
      </div>

export default Switch;