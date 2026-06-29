import React from 'react';
import styles from './about.module.css'; // Named import for CSS modules

export default function About() {
  return (
    <section id='about' className={styles['about-section']}>
      <div className={styles['about-header']}>
        <h2>About me</h2>
      </div>

      <p className={styles['about-pitch']}>
        I am a <span className={styles['about-highlight']}>Computer Science Engineer</span> focused on software efficiency, backend optimization, and cross-platform mobile architectures.
      </p>

      <div className={styles['about-grid']}>
        <div className={styles['about-card']}>
          <div className={styles['card-title-wrapper']}>
            <h3>Technical Core</h3>
          </div>
          <p className={styles['card-description']}>Engineered around structured data pipelines, state management, and real-time execution trees.</p>
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
            <h3>Global Operations</h3>
          </div>
          <ul className={styles['mono-list']}>
            <li><span className={styles['list-prompt']}>&gt;</span> Language: English (Fluent, C1) <br/> Spanish (Native)</li>
            <li><span className={styles['list-prompt']}>&gt;</span> Timezone: GMT-4 (LATAM / US East Align)</li>
            <li><span className={styles['list-prompt']}>&gt;</span> Availability: Remote / B2B Contractor</li>
          </ul>
        </div>

        {/* Note the template literal handling for combining scoped class strings */}
        <div className={`${styles['about-card']} ${styles['col-span-2']}`}>
          <div className={styles['card-title-wrapper']}>
            <h3>Remote Infrastructure SLA</h3>
          </div>
          <p className={styles['card-description']} style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
            Operating with a fully redundant setup to ensure uninterrupted deployment and communication. Powered by a high-speed <span className={styles['about-highlight']}>400 Mbps fiber optics link</span> and dedicated, independent auxiliary power backups providing <span className={styles['about-highlight']}>100% remote uptime</span> during core operational hours.
          </p>
        </div>
      </div>
    </section>
  );
}