import React, { useEffect, useRef, useState } from 'react';
import paperAnim from '../assets/paperAnimNoLoop.gif';
import paperWhite from '../assets/Untitledsdsadsadsa-1.webp';
import styles from './stack.module.css';
import reactIcon from '../assets/react-svgrepo-com.svg';
import jsIcon from '../assets/js-svgrepo-com.svg';
import javaIcon from '../assets/java-4-logo-svgrepo-com.svg';
import pyIcon from '../assets/python-svgrepo-com.svg';
import ktIcon from '../assets/kotlin-1-logo-svgrepo-com.svg';

export default function Stack() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [gifSrc, setGifSrc] = useState(null);
  const [opacity, setOpacity] = useState(false);
  const [opacityTitle, setOpacityTitle] = useState(false);
  const [opacityReact, setopacityReact] = useState(false);
  const [opacityJs, setopacityJs] = useState(false);
  const [opacityJava, setopacityJava] = useState(false);
  const [opacityPy, setopacityPy] = useState(false);
  const [opacityKt, setopacityKt] = useState(false);

  // Using a ref for the index ensures it persists across renders without needing state
  const indexRef = useRef(0);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      setTimeout(() => setOpacity(true), 50);
      setTimeout(() => setOpacityTitle(true), 2000);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  function startCount() {
    const countInter = setInterval(() => {
      switch (indexRef.current) {
        case 0: setopacityReact(true); break;
        case 1: setopacityJs(true); break;
        case 2: setopacityJava(true); break;
        case 3: setopacityPy(true); break;
        case 4: setopacityKt(true); break;
        case 5: clearInterval(countInter); return;
      }
      indexRef.current += 1;
    }, 500);
  }

  useEffect(() => {
    if (isVisible) {
      setGifSrc(paperAnim);
      startCount();
    }
  }, [isVisible]);

  return (
    <div className={styles.titleDiv}>
      <div className={styles.stackTitle}>
        <h2 className={opacityTitle ? styles.show : styles.hide}>STACK</h2>
      </div>

      <div className={styles.whitePaper} ref={containerRef}>
        <img draggable="false" src={paperWhite} className={opacity ? styles.show : styles.hide} alt="Paper White" />
      </div>

      {/* Changed to div to fix stacking issue */}
      <div className={styles.iconsTop}>
        <div className={styles.icon}>
          <img src={reactIcon} draggable="false" className={opacityReact ? styles.show : styles.hide} alt="React" />
        </div>
        <div className={styles.icon}>
          <img src={jsIcon} draggable="false" className={opacityJs ? styles.show : styles.hide} alt="Javascript" />
        </div>
      </div>

      {/* Changed to div to fix stacking issue */}
      <div className={styles.iconsBottom}>
        <div className={styles.icon}>
          <img src={javaIcon} draggable="false" className={opacityJava ? styles.show : styles.hide} alt="Java" />
        </div>
        <div className={styles.icon}>
          <img src={pyIcon} draggable="false" className={opacityPy ? styles.show : styles.hide} alt="Python" />
        </div>
        <div className={styles.icon}>
          <img src={ktIcon} draggable="false" className={opacityKt ? styles.show : styles.hide} alt="Kotlin" />
        </div>
      </div>

      <div className={styles.crumbledPaper}>
        {gifSrc && <img draggable="false" src={gifSrc} className={opacity ? styles.show : styles.hide} alt="Animation" />}
      </div>
    </div>
  );
}