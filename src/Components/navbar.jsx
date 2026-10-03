import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './navbar.module.css';
import star from '../assets/tittlestar.png';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stage, setStage] = useState('hidden');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const languages = [
    { code: "en", name: "English", flag: "US" },
    { code: "es", name: "Español", flag: "ES" },
    { code: "jp", name: "日本語", flag: "JP" },
  ];

  useEffect(() => {
    const fadeTimer = setTimeout(() => setStage('fade'), 50);
    const navTimer = setTimeout(() => setStage('nav'), 1450);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className={`${styles.spacer} ${styles[stage]}`} />
      
      <div className={`${styles.topBar} ${stage === 'nav' ? styles.scrolledNav : ''}`}>
        <div className={`${styles.wrapper} ${styles[stage]}`}>
          <h2>Jose<br/>Ramos</h2>
          <img src={star} alt="star" draggable="false" />
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={styles.hamburgerBtn} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navbar / Mobile Dropdown Menu */}
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('navbar.about')}</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('navbar.projects')}</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('navbar.contact')}</a></li>
          </ul>
          <div className={styles.langSelector}>
            <select 
              value={i18n.language} 
              onChange={(e) => changeLanguage(e.target.value)}
              className={styles.selectInput}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}