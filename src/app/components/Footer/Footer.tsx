'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
    { href: '#about', label: 'About' }
  ];

  const socialLinks = [
    { href: 'https://facebook.com/beyondcreativitymw', label: 'Facebook', icon: '📘' },
    { href: 'https://instagram.com/beyondcreativitymw', label: 'Instagram', icon: '📸' },
    { href: 'https://youtube.com/@beyondcreativitymw', label: 'YouTube', icon: '🎥' },
    { href: 'https://tiktok.com/@beyondcreativitymw', label: 'TikTok', icon: '💃' }
  ];

  const companyInfo = {
    email: 'info@beyondcreativity.mw',
    phone: '+265 888 123 456',
    address: 'Kanjedza, Blantyre, Malawi'
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <span className={styles.logoText}>
              Beyond <span className={styles.logoAccent}>Creativity</span>
            </span>
          </div>
          <p className={styles.tagline}>
            Malawi's premier video production studio. Telling African stories with passion and excellence.
          </p>
          <div className={styles.contactInfo}>
            <a href={`mailto:${companyInfo.email}`} className={styles.contactLink}>
              {companyInfo.email}
            </a>
            <a href={`tel:${companyInfo.phone}`} className={styles.contactLink}>
              {companyInfo.phone}
            </a>
            <p className={styles.address}>{companyInfo.address}</p>
          </div>
        </div>

        <nav aria-label="Footer navigation" className={styles.navSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.servicesSection}>
          <h3 className={styles.sectionTitle}>Our Services</h3>
          <ul className={styles.servicesList}>
            <li>Corporate Videos</li>
            <li>TV Commercials</li>
            <li>Event Coverage</li>
            <li>Documentaries</li>
            <li>Social Media Content</li>
            <li>Music Videos</li>
          </ul>
        </div>

        <div className={styles.newsletterSection}>
          <h3 className={styles.sectionTitle}>Stay Updated</h3>
          <p className={styles.newsletterText}>
            Subscribe for the latest projects and industry insights in Malawi.
          </p>
          
          {isSubscribed ? (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✓</span>
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.newsletterInput}
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                className={styles.newsletterButton}
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <span className={styles.spinner} aria-hidden="true"></span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={social.label}
            >
              <span className={styles.socialIcon}>{social.icon}</span>
              <span className={styles.socialText}>{social.label}</span>
            </a>
          ))}
        </div>

        <div className={styles.legalSection}>
          <p className={styles.copyright}>
            © {currentYear} Beyond Creativity Malawi. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
            <a href="/terms" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={styles.backToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
