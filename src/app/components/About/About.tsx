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
        <div className={styles.header}>
          <div className={styles.preTitle}>OUR MALAWIAN STORY</div>
          <h2 id="about-heading" className={styles.heading}>
            Crafting African <span className={styles.accent}>Excellence</span>
          </h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Since 2019, Beyond Creativity has been at the forefront of video production in Malawi, 
              transforming visions into compelling visual narratives that resonate with African audiences 
              and elevate brands across the continent.
            </p>
            
            <p className={styles.paragraph}>
              Founded and led by Director Nosh, our team of creative professionals collaborates closely 
              with clients to deliver exceptional results across corporate branding, commercial campaigns, 
              documentaries, and event coverage with authentic African storytelling.
            </p>

            {/* Leadership Section */}
            <div className={styles.leadership}>
              <div className={styles.directorCard}>
                <div className={styles.directorImage}>
                  <span className={styles.directorIcon}>👑</span>
                </div>
                <div className={styles.directorInfo}>
                  <h4 className={styles.directorName}>Director Nosh</h4>
                  <p className={styles.directorTitle}>Founder & Creative Director</p>
                  <p className={styles.directorBio}>
                    Visionary leader with a passion for authentic African storytelling and 
                    innovative video production techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Malawian Clients</div>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>✨</div>
            <h3 className={styles.featureTitle}>African Storytelling</h3>
            <p className={styles.featureDesc}>Authentic narratives that capture the essence of African culture and values</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Technical Excellence</h3>
            <p className={styles.featureDesc}>State-of-the-art equipment and cutting-edge production techniques</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🤝</div>
            <h3 className={styles.featureTitle}>Local Expertise</h3>
            <p className={styles.featureDesc}>Deep understanding of the Malawian and African market landscape</p>
          </div>
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
}
