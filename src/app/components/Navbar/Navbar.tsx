'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 868);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((open) => !open);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const handleLinkClick = (section: string) => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
    setActiveSection(section);
  };

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#portfolio', label: 'Portfolio', id: 'portfolio' },
    { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} 
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <a 
          href="#home" 
          className={styles.logo} 
          aria-label="Beyond Creativity Home"
          onClick={() => handleLinkClick('home')}
        >
          <span className={styles.logoText}>
            Beyond <span className={styles.creativity}>Creativity</span>
          </span>
        </a>

        {/* Desktop Navigation - Always visible on large screens */}
        <div className={styles.desktopNav}>
          <ul className={styles.menu}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${styles.link} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                  <span className={styles.linkIndicator}></span>
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#contact" className={styles.ctaButton}>
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button - Only shows on mobile */}
        {isMobile && (
          <button
            className={styles.menuButton}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={handleMenuToggle}
          >
            <span className={styles.menuIcon}>
              <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`}></span>
              <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`}></span>
              <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`}></span>
            </span>
          </button>
        )}
      </div>

      {/* Mobile Menu - Only shows on mobile */}
      {isMobile && (
        <>
          <div 
            id="mobile-menu"
            className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
          >
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileMenuHeader}>
                <span className={styles.mobileMenuTitle}>Menu</span>
                <button
                  className={styles.closeButton}
                  onClick={handleMenuToggle}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              
              <ul className={styles.mobileMenuList}>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`${styles.mobileLink} ${activeSection === item.id ? styles.mobileActive : ''}`}
                      onClick={() => handleLinkClick(item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className={styles.mobileMenuFooter}>
                <div className={styles.contactInfo}>
                  <p className={styles.contactText}>Ready to create something amazing?</p>
                  <a href="#contact" className={styles.ctaButtonMobile} onClick={() => handleLinkClick('contact')}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div 
              className={styles.backdrop}
              onClick={handleMenuToggle}
              aria-hidden="true"
            />
          )}
        </>
      )}
    </nav>
  );
}
