import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './about.module.css'; // Named import for CSS modules

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <section id='about' className={styles['about-section']}>
      <div className={styles['about-header']}>
        <h2>{t('navbar.about')}</h2>
      </div>

      <p className={styles['about-pitch']}>
        {t('about.aboutPitch1')} <span className={styles['about-highlight']}>{t('about.aboutPitch2')}</span> {t('about.aboutPitch3')}
      </p>

      <div className={styles['about-grid']}>
        <div className={styles['about-card']}>
          <div className={styles['card-title-wrapper']}>
            <h3>{t('about.technicalCore')}</h3>
          </div>
          <p className={styles['card-description']}>{t('about.technicalCoreDescription')}</p>
          <div className={styles['badge-container']}>
            <span className={styles['tech-badge']}>Javascript/Typescript</span>
            <span className={styles['tech-badge']}>React</span>
            <span className={styles['tech-badge']}>React Native</span>
            <span className={styles['tech-badge']}>Node.js</span>
            <span className={styles['tech-badge']}>PHP</span>
            <span className={styles['tech-badge']}>C# / Unity</span>
          </div>
        </div>

        <div className={styles['about-card']}>
          <div className={styles['card-title-wrapper']}>
            <h3>{t('about.availabilityInfo')}</h3>
          </div>
          <ul className={styles['mono-list']}>
            <li><span className={styles['list-prompt']}>&gt;</span>{t('about.availabilityInfoEnglish')} <br/> {t('about.availabilityInfoSpanish')}</li>
            <li><span className={styles['list-prompt']}>&gt;</span> {t('about.availabilityInfoTimezone')}</li>
            <li><span className={styles['list-prompt']}>&gt;</span> {t('about.availabilityInfoAvaibility')}</li>
          </ul>
        </div>

        {/* Note the template literal handling for combining scoped class strings */}
        <div className={`${styles['about-card']} ${styles['col-span-2']}`}>
          <div className={styles['card-title-wrapper']}>
            <h3>{t('about.remoteInfrastructureSLA')}</h3>
          </div>
          <p className={styles['card-description']} style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
            {t('about.remoteInfrastructureSLADesc1')} <span className={styles['about-highlight']}>{t('about.remoteInfrastructureSLADescSpeed')}</span> {t('about.remoteInfrastructureSLADesc2')} <span className={styles['about-highlight']}>{t('about.remoteInfrastructureSLADesc3')}</span> {t('about.remoteInfrastructureSLADesc4')}
          </p>
        </div>
      </div>
    </section>
  );
}