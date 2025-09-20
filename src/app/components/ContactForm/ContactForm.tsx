'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

// Helper function to escape HTML special characters
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Helper function to validate and sanitize input
const sanitizeInput = (input: string): string => {
  return escapeHtml(input.trim());
};

export default function ContactForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '',
    company: '',
    projectType: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Corporate Video',
    'Commercial',
    'Documentary',
    'Event Coverage',
    'Social Media Content',
    'Other'
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    
    const sanitizedName = sanitizeInput(formData.name);
    if (!sanitizedName) {
      newErrors.name = 'Name is required';
    } else if (sanitizedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    const sanitizedEmail = sanitizeInput(formData.email);
    if (!sanitizedEmail) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(sanitizedEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    const sanitizedMessage = sanitizeInput(formData.message);
    if (!sanitizedMessage) {
      newErrors.message = 'Message is required';
    } else if (sanitizedMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const fieldErrors = validate();
    if (fieldErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Sanitize all data before sending
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message),
        company: sanitizeInput(formData.company),
        projectType: sanitizeInput(formData.projectType)
      };
      
      // Simulate API call with sanitized data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', company: '', projectType: '' });
      setErrors({});
      setTouched({});
    } else {
      setErrors(validationErrors);
      setTouched({
        name: true,
        email: true,
        message: true,
        company: true,
        projectType: true
      });
    }
    
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successContent}>
          <div className={styles.successIcon}>&#10003;</div>
          <h3 className={styles.successTitle}>Message Sent Successfully!</h3>
          <p className={styles.successMessage}>
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className={styles.successButton}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={styles.form}
        aria-labelledby="form-title"
      >
        <div className={styles.formHeader}>
          <h2 id="form-title" className={styles.formTitle}>Get In Touch</h2>
          <p className={styles.formSubtitle}>
            Ready to bring your vision to life? Let&apos;s start a conversation about your project.
          </p>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`${styles.input} ${errors.name ? styles.errorInput : ''} ${touched.name ? styles.touched : ''}`}
              placeholder="Enter your full name"
              disabled={isSubmitting}
              maxLength={100}
            />
            {errors.name && touched.name && (
              <span id="name-error" role="alert" className={styles.errorMessage}>
                {errors.name}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`${styles.input} ${errors.email ? styles.errorInput : ''} ${touched.email ? styles.touched : ''}`}
              placeholder="your.email@example.com"
              disabled={isSubmitting}
              maxLength={150}
            />
            {errors.email && touched.email && (
              <span id="email-error" role="alert" className={styles.errorMessage}>
                {errors.email}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.label}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              className={styles.input}
              placeholder="Your company name (optional)"
              disabled={isSubmitting}
              maxLength={100}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="projectType" className={styles.label}>
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              onBlur={handleBlur}
              className={styles.select}
              disabled={isSubmitting}
            >
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="message" className={styles.label}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${styles.textarea} ${errors.message ? styles.errorInput : ''} ${touched.message ? styles.touched : ''}`}
              placeholder="Tell us about your project, timeline, and any specific requirements..."
              disabled={isSubmitting}
              maxLength={1000}
            />
            {errors.message && touched.message && (
              <span id="message-error" role="alert" className={styles.errorMessage}>
                {errors.message}
              </span>
            )}
          </div>
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner} aria-hidden="true"></span>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <span className={styles.arrow} aria-hidden="true">&rarr;</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
