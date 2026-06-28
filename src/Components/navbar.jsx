import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import star from '../assets/tittlestar.png'



export default function Navbar() {
  const [stage, setStage] = useState('hidden');

    useEffect(() => {
      const fadeTimer = setTimeout(() => setStage('fade'), 50);

      const navTimer = setTimeout(() => setStage('nav'), 1450);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(navTimer);
      };
  }, []);

  return (
    <header>
      <div className={`${styles.spacer} ${styles[stage]}`} />
      
      <div className={`${styles.wrapper} ${styles[stage]}`}>
        <h2>Jose<br/>Ramos</h2>
        <img src={star} alt="star" draggable="false" />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}