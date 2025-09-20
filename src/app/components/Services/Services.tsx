'use client';

import { useState } from 'react';
import styles from './Services.module.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className={styles.servicesSection} aria-labelledby="services-heading">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 id="services-heading" className={styles.sectionTitle}>
            Our Premium Services
          </h2>
          <p className={styles.sectionSubtitle}>
            Professional video production solutions tailored to elevate your brand
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`${styles.serviceCard} ${index === activeService ? styles.active : ''}`}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setActiveService(index)}
              tabIndex={0}
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className={styles.cardVisual}>
                <div className={styles.iconWrapper}>
                  <span className={styles.serviceIcon} aria-hidden="true">
                    {service.icon}
                  </span>
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.cardPattern}></div>
              </div>

              <div className={styles.cardContent}>
                <h3 id={`service-title-${service.id}`} className={styles.serviceTitle}>
                  {service.title}
                </h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                {service.features && (
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.featureItem}>
                        <span className={styles.featureCheckmark}>✓</span>
                        <span className={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className={styles.cardActions}>
                  <button className={styles.primaryButton}>
                    Explore Service
                    <span className={styles.buttonArrow}>→</span>
                  </button>
                  <button className={styles.secondaryButton}>
                    View Portfolio
                  </button>
                </div>
              </div>

              <div className={styles.cardHoverEffect}></div>
              <div className={styles.cardBorder}></div>
            </article>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Ready to bring your vision to life?</p>
          <button className={styles.ctaButton}>
            Start Your Project Today
            <span className={styles.ctaArrow}>⟶</span>
          </button>
        </div>
      </div>
    </section>
  );
}
