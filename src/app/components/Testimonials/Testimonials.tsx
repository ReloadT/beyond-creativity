'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

// Helper function to escape HTML special characters
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

type Testimonial = {
  id: string;
  name: string;
  quote: string;
  photo: string;
  position: string;
  company?: string;
  rating?: number;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`${styles.star} ${i < rating ? styles.filled : ''}`}
      >
        &#9733;
      </span>
    ));
  };

  if (testimonials.length === 0) return null;

  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <p className={styles.subtitle}>
          Hear from Malawian businesses and creatives we&apos;ve worked with
        </p>
      </div>

      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialSlide} ${
                index === currentIndex ? styles.active : ''
              }`}
              aria-hidden={index !== currentIndex}
            >
              <div className={styles.testimonialCard}>
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>

                <div className={styles.quoteContainer}>
                  <span className={styles.quoteIcon}>&#8220;</span>
                  <p className={styles.quote}>&ldquo;{escapeHtml(testimonial.quote)}&rdquo;</p>
                </div>

                <div className={styles.author}>
                  <div className={styles.photoContainer}>
                    <Image
                      src={escapeHtml(testimonial.photo)}
                      alt={`Photo of ${escapeHtml(testimonial.name)}`}
                      width={80}
                      height={80}
                      className={styles.photo}
                      loading="lazy"
                    />
                    <div className={styles.photoBorder}></div>
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.name}>{escapeHtml(testimonial.name)}</p>
                    <p className={styles.position}>{escapeHtml(testimonial.position)}</p>
                    {testimonial.company && (
                      <p className={styles.company}>{escapeHtml(testimonial.company)}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > 1 && (
          <>
            <button
              className={styles.navButton}
              onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <button
              className={styles.navButton}
              onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              &rarr;
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.trustBadges}>
        <div className={styles.trustBadge}>
          <span className={styles.badgeIcon}>&#11088;</span>
          <span>Rated 4.9/5 Stars</span>
        </div>
        <div className={styles.trustBadge}>
          <span className={styles.badgeIcon}>&#128188;</span>
          <span>200+ Projects</span>
        </div>
        <div className={styles.trustBadge}>
          <span className={styles.badgeIcon}>&#128077;</span>
          <span>98% Would Recommend</span>
        </div>
      </div>
    </div>
  );
}
