import React, { useState, useEffect } from 'react';
import styles from './projects.module.css';
import { flora1, flora2, flora3, flora4, flora5, flora6, flora7, flora8, flora9, flora10 } from '../assets/floraid';
import { signmaze1, signmaze2, signmaze3, signmaze4, signmaze5, signmaze6} from '../assets/signmaze';

// Component for the individual image slider
const ImageSlider = ({ images, aspectRatio, width }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // Apply both dynamic aspect ratio AND dynamic width
    <div 
    className={styles.sliderContainer} 
    style={{ aspectRatio: aspectRatio, width: width }}
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
  // Added an aspectRatio property to each project object
  const projects = [
    { 
      id: 'Signmaze', 
      title: 'Signmaze', 
      description: 'AI-powered web solution designed for sign language translation and interactive learning. Built with React and Node.js, leveraging TensorFlow to achieve visual recognition.',
      images: [signmaze1, signmaze2, signmaze3, signmaze4, signmaze5, signmaze6],
      aspectRatio: '16 / 9',
      width: '550px' 
    },
    { 
      id: 'FloraId', 
      title: 'FloraId', 
      description: 'Mobile app for real-time botanical identification and health diagnosis utilizing React Native, Python, and OpenCV. Features automated image processing pipelines powered by TensorFlow to deliver instant plant disease analysis.',
      images: [flora1, flora2, flora3, flora4, flora5, flora6, flora7, flora8, flora9, flora10],
      aspectRatio: '9 / 19',
      width: '280px'
    },/*
    { 
      id: 'Selene', 
      title: 'Selene', 
      description: 'Selene is a high-fidelity, celestial-themed mobile application built using React Native, TypeScript, and Turborepo. Engineered with an offline-first architecture, the app utilizes native location data to run precise local mathematical models—delivering real-time moon phases, illumination percentages, and global astronomical events (eclipses, meteor showers) via a completely customized, interactive SVG calendar interface.',
      images: [flora1, flora2],
      aspectRatio: '9 / 19',
      width: '280px'
    },*/
  ];

  return (
    <section id='projects' className={styles['projects-section']}>  
      <div className={styles['projects-header']}><h2>Projects</h2></div>
      
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => {
          // Check if index is odd (1, 3, 5...) to determine the middle/alternating items
          const isReverse = index % 2 !== 0;

          return (
            <div 
              key={project.id} 
              className={`${styles.projectRow} ${isReverse ? styles.rowReverse : ''}`}
              
            >
              <ImageSlider images={project.images} aspectRatio={project.aspectRatio} width={project.width} />
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
