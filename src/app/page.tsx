// src/app/page.tsx
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
      <section id="services" aria-labelledby="services-heading" style={{ padding: '4rem 2rem', borderBottom: '1px solid #fff' }}>
        <h2 id="services-heading" tabIndex={-1} style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Our Services
        </h2>
        <Services services={services} />
      </section>
      <section id="portfolio" aria-labelledby="portfolio-heading" style={{ padding: '4rem 2rem', borderBottom: '1px solid #fff' }}>
        <h2 id="portfolio-heading" tabIndex={-1} style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Video Portfolio
        </h2>
        <VideoGallery videos={videos} />
      </section>
      <section id="testimonials" aria-labelledby="testimonials-heading" style={{ padding: '4rem 2rem', borderBottom: '1px solid #fff' }}>
        <h2 id="testimonials-heading" tabIndex={-1} style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          What Our Clients Say
        </h2>
        <Testimonials testimonials={testimonials} />
      </section>
      <section id="contact" aria-labelledby="contact-heading" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 id="contact-heading" tabIndex={-1} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Contact Us
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          Ready to bring your vision to life? Get in touch with us today for a personalized consultation.
        </p>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
