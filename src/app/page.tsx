import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import VideoGallery from './components/VideoGallery/VideoGallery';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import { fetchContent } from '@/lib/cms';

export const revalidate = 60;

export default async function HomePage() {
  const videos = await fetchContent('videos');
  const services = await fetchContent('services');
  const testimonials = await fetchContent('testimonials');

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', lineHeight: 1.6 }}>
      <Hero />
      
      <About />
      
      <section 
        id="services" 
        aria-labelledby="services-heading" 
        style={{ padding: '4rem 2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <h2 
          id="services-heading" 
          tabIndex={-1} 
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            fontWeight: 800,
            background: 'linear-gradient(45deg, #ffffff, #4ecdc4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Our Malawian Services
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#cccccc', 
          maxWidth: '600px', 
          margin: '0 auto 3rem',
          fontSize: '1.1rem',
          fontWeight: 300
        }}>
          Professional video production solutions tailored for the Malawian market
        </p>
        <Services services={services} />
      </section>
      
      <section 
        id="portfolio" 
        aria-labelledby="portfolio-heading" 
        style={{ padding: '4rem 2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <h2 
          id="portfolio-heading" 
          tabIndex={-1} 
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            fontWeight: 800,
            background: 'linear-gradient(45deg, #ffffff, #4ecdc4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Malawian Portfolio
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#cccccc', 
          maxWidth: '600px', 
          margin: '0 auto 3rem',
          fontSize: '1.1rem',
          fontWeight: 300
        }}>
          Explore our work showcasing the beauty and diversity of Malawi
        </p>
        <VideoGallery videos={videos} />
      </section>
      
      <section 
        id="testimonials" 
        aria-labelledby="testimonials-heading" 
        style={{ padding: '4rem 2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <h2 
          id="testimonials-heading" 
          tabIndex={-1} 
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            fontWeight: 800,
            background: 'linear-gradient(45deg, #ffffff, #4ecdc4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Malawian Client Stories
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#cccccc', 
          maxWidth: '600px', 
          margin: '0 auto 3rem',
          fontSize: '1.1rem',
          fontWeight: 300
        }}>
          Hear from businesses and creatives across Malawi who have worked with us
        </p>
        <Testimonials testimonials={testimonials} />
      </section>
      
      <section 
        id="contact" 
        aria-labelledby="contact-heading" 
        style={{ padding: '4rem 2rem', textAlign: 'center' }}
      >
        <h2 
          id="contact-heading" 
          tabIndex={-1} 
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            marginBottom: '1rem',
            fontWeight: 800,
            background: 'linear-gradient(45deg, #ffffff, #4ecdc4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Contact Us
        </h2>
        <p style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          color: '#cccccc',
          fontSize: '1.1rem',
          fontWeight: 300
        }}>
          Ready to bring your Malawian story to life? Get in touch with us today for a personalized consultation.
        </p>
        <ContactForm />
      </section>
      
      <Footer />
    </main>
  );
}
