'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section aria-label="Hero section" className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.background}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.particles}>
          {[...Array(50)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`${styles.content} ${isLoaded ? styles.loaded : ''}`}>
        <div className={styles.badge}>
          <span className={styles.badgeText}>Studio Quality</span>
        </div>
        
        <h1 tabIndex={0} className={styles.title}>
          <span className={styles.titleLine}>Beyond</span>
          <span className={styles.titleLineAccent}>Creativity</span>
        </h1>
        
        <p className={styles.subtitle}>
          Elevate your brand with stunning video production that tells your story with impact.
          <span className={styles.subtitleHighlight}> Transform your vision into motion.</span>
        </p>

        <div className={styles.ctaContainer}>
          <a href="#contact" className={styles.ctaPrimary}>
            <span className={styles.ctaText}>Get a Free Quote</span>
            <span className={styles.ctaIcon}>→</span>
          </a>
          <a href="#portfolio" className={styles.ctaSecondary}>
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>13+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
}
