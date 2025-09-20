'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

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
        ★
      </span>
    ));
  };

  if (testimonials.length === 0) return null;

  return (
    <div className={styles.testimonialsContainer}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Client Testimonials</h2>
        <p className={styles.subtitle}>Hear what our clients have to say about our work</p>
      </div>

      {/* Carousel */}
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
                {/* Rating */}
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <div className={styles.quoteContainer}>
                  <span className={styles.quoteIcon}>❝</span>
                  <p className={styles.quote}>"{testimonial.quote}"</p>
                </div>

                {/* Author */}
                <div className={styles.author}>
                  <div className={styles.photoContainer}>
                    <Image
                      src={testimonial.photo}
                      alt={`Photo of ${testimonial.name}`}
                      width={80}
                      height={80}
                      className={styles.photo}
                      loading="lazy"
                    />
                    <div className={styles.photoBorder}></div>
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.name}>{testimonial.name}</p>
                    <p className={styles.position}>{testimonial.position}</p>
                    {testimonial.company && (
                      <p className={styles.company}>{testimonial.company}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {testimonials.length > 1 && (
          <>
            <button
              className={styles.navButton}
              onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              className={styles.navButton}
              onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              →
            </button>

            {/* Dots */}
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

      {/* Trust Badges */}
      <div className={styles.trustBadges}>
        <div className={styles.trustBadge}>
          <span className={styles.badgeIcon}>⭐</span>
          <span>Rated 4.9/5 Stars</span>
        </div>
        <div className={styles.trustBadge}>
          <span className={styles.badgeIcon}>💼</span>
          <span>100+ Projects</span>
        </div>
        <div className={styles.trustBadge}>
          <span className={styles.badgeIcon}>👍</span>
          <span>98% Would Recommend</span>
        </div>
      </div>
    </div>
  );
}
