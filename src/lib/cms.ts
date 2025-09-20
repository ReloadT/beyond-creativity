// src/lib/cms.ts
export async function fetchContent<T>(type: string): Promise<T> {
  await new Promise((r) => setTimeout(r, 100));

  switch (type) {
    case 'videos':
      return [
        {
          id: 'vid1',
          title: 'Creative Commercial',
          description: 'A sleek commercial showcasing our video production skills.',
          url: 'https://example.com/videos/creative-commercial',
          thumbnail: '/thumbnails/creative-commercial.jpg',
          category: 'Commercials',
        },
        {
          id: 'vid2',
          title: 'Documentary Teaser',
          description: 'A teaser for an upcoming documentary project.',
          url: 'https://example.com/videos/documentary-teaser',
          thumbnail: '/thumbnails/documentary-teaser.jpg',
          category: 'Documentaries',
        },
        {
          id: 'vid3',
          title: 'Event Highlights',
          description: 'Highlights from a recent corporate event.',
          url: 'https://example.com/videos/event-highlights',
          thumbnail: '/thumbnails/event-highlights.jpg',
          category: 'Events',
        },
      ] as unknown as T;

    case 'services':
      return [
        {
          id: 'srv1',
          title: 'Corporate Videos',
          description: 'Professional videos tailored for corporate branding and communication.',
          icon: '🎥',
        },
        {
          id: 'srv2',
          title: 'Event Coverage',
          description: 'Capturing your events with high-quality video production.',
          icon: '📅',
        },
        {
          id: 'srv3',
          title: 'Creative Storytelling',
          description: 'Engaging narratives to bring your brand story to life.',
          icon: '✍️',
        },
        {
          id: 'srv4',
          title: 'Post-Production',
          description: 'Expert editing, color grading, and sound mixing.',
          icon: '🎬',
        },
      ] as unknown as T;

    case 'testimonials':
      return [
        {
          id: 't1',
          name: 'Alice Johnson',
          quote: 'Beyond Creativity transformed our vision into an amazing video!',
          photo: '/clients/alice.jpg',
          position: 'Marketing Director, Acme Corp',
        },
        {
          id: 't2',
          name: 'John Smith',
          quote: 'Professional and creative team delivering outstanding results.',
          photo: '/clients/john.jpg',
          position: 'CEO, Innovate LLC',
        },
        {
          id: 't3',
          name: 'Sofia Lee',
          quote: 'Highly recommend Beyond Creativity for any video project!',
          photo: '/clients/sofia.jpg',
          position: 'Founder, BrightStart',
        },
      ] as unknown as T;

    default:
      return [] as unknown as T;
  }
}
