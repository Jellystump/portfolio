import React, { useState, useEffect } from 'react';
import styles from './projects.module.css';
import { useTranslation } from 'react-i18next';
import { flora1, flora2, flora3, flora4, flora5, flora6, flora7, flora8, flora9, flora10 } from '../assets/floraid';
import { signmaze1, signmaze2, signmaze3, signmaze4, signmaze5, signmaze6 } from '../assets/signmaze';
import { selene1, selene2, selene3 } from '../assets/selene';

const ImageSlider = ({ images, aspectRatio, maxWidth }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      className={styles.sliderContainer} 
      style={{ aspectRatio: aspectRatio, maxWidth: maxWidth }}
    >
      {images.map((img, idx) => (
        <img 
          key={idx} 
          src={img} 
          alt="Project" 
          className={idx === current ? styles.active : styles.hidden} 
        />
      ))}
    </div>
  );
};

export default function Projects() {
  const { t } = useTranslation();
  
  const projects = [
    { 
      id: 'Signmaze', 
      title: 'Signmaze', 
      description: t('projects.signmazeDesc'),
      images: [signmaze1, signmaze2, signmaze3, signmaze4, signmaze5, signmaze6],
      aspectRatio: '16 / 9',
      maxWidth: '550px'
    },
    { 
      id: 'FloraId', 
      title: 'FloraId', 
      description: t('projects.floraIDDesc'),
      images: [flora1, flora2, flora3, flora4, flora5, flora6, flora7, flora8, flora9, flora10],
      aspectRatio: '9 / 19',
      maxWidth: '280px'
    },
    { 
      id: 'Selene', 
      title: 'Selene', 
      description: t('projects.seleneDesc'),
      images: [selene1, selene2, selene3],
      aspectRatio: '16 / 9',
      maxWidth: '550px'
    },
  ];

  return (
    <section id='projects' className={styles['projects-section']}>  
      <div className={styles['projects-header']}><h2>{t('navbar.projects')}</h2></div>
      
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div 
              key={project.id} 
              className={`${styles.projectRow} ${isReverse ? styles.rowReverse : ''}`}
            >
              <ImageSlider 
                images={project.images} 
                aspectRatio={project.aspectRatio} 
                maxWidth={project.maxWidth} 
              />
              <div className={styles.projectInfo}>
                <h3 className={styles['project-tittle']}>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}