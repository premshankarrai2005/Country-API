import React, { useContext, useState } from 'react';
import './style.css'
import { DarkModeContext } from '../contexts/ThemecontextdarkMode';

function Header() {
  const [isDark, setisDark] = useContext(DarkModeContext)

  // if (isDark) {
  //   document.body.classList.add('dark'
  // } else {
  //   document.body.classList.remove('dark')
  // }
  return (
    <>
      <header className={`header-container prem ${isDark ? 'dark' : ''}`}>
        <div className="header-content">
          <h2 className="title"><a href="/">Where in the world?</a></h2>
          <p className="theme-changer" onClick={() => {
            setisDark(!isDark)
            localStorage.setItem('isDarkmode', !isDark)
          }}><i className={`fa-${isDark ? 'solid' : 'regular'} fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} Mode</p>
        </div>
      </header >
    </>
  );
}

export default Header;
