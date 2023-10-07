"use client"

import { useEffect } from 'react';
import { useState } from 'react';

export default function Header() {

    const [isActive, setIsActive] = useState(false);
  
    const handleClick = event => {
      setIsActive(current => !current);
    };

    const jumpToTools = () => {
      window.location.href = "#tools";
    }
  
    return (
      <header className="header">
      <div className="overlay has-fade"></div>
        <nav className="flex flex-jc-sb flex-ai-c">
          <a href='/' className='header-logo'>
            <img src="./static/images/logo.png"/>
          </a>
        <a href='#' className={isActive ? 'header-toggle open overlay fade-in' : 'header-toggle'} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </nav>
        <div className='header-content has-fade'>
          <a href='#'>Home</a>
          <a href='#about'>About</a>
          <a href='#tools'>Tools</a>
          <a href='#projects'>Projects</a>
          <a href='#connect'>Connect</a>
        </div>
      </header>
      )}