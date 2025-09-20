'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.hero}>
      {/* Background Image Overlay */}
      <div className={styles.backgroundOverlay}></div>
      
      <div className={`${styles.content} ${isLoaded ? styles.loaded : ''}`}>
        <div className={styles.badge}>
          <span className={styles.badgeText}>
            {isClient ? "Malawi's Premier Video Studio" : ""}
          </span>
        </div>
        <div>
          <h1 tabIndex={0} className={styles.title}>
            Studio Quality
          </h1>
        </div>
      </div>
    </div>
  );
}
