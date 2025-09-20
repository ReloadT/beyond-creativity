'use client';

import { useState, useEffect } from 'react';
import styles from './About.module.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      aria-labelledby="about-heading" 
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.preTitle}>OUR STORY</div>
          <h2 id="about-heading" className={styles.heading}>
            Crafting Visual <span className={styles.accent}>Excellence</span>
          </h2>
          <div className={styles.underline}></div>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Since 2010, Beyond Creativity has been at the forefront of video production, 
              transforming visions into compelling visual narratives that resonate with audiences 
              and elevate brands to new heights.
            </p>
            
            <p className={styles.paragraph}>
              Our team of award-winning filmmakers, creative directors, and technical experts 
              collaborates closely with clients to deliver exceptional results across corporate 
              branding, commercial campaigns, documentaries, and live event coverage.
            </p>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>13+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Global Clients</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>✨</div>
            <h3 className={styles.featureTitle}>Creative Vision</h3>
            <p className={styles.featureDesc}>Innovative storytelling that captures attention and drives engagement</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Technical Excellence</h3>
            <p className={styles.featureDesc}>State-of-the-art equipment and cutting-edge production techniques</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🤝</div>
            <h3 className={styles.featureTitle}>Client Partnership</h3>
            <p className={styles.featureDesc}>Collaborative approach ensuring your vision becomes reality</p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
}
