export async function fetchContent<T>(type: string): Promise<T> {
  await new Promise((r) => setTimeout(r, 100));

  switch (type) {
    case 'videos':
      return [
        {
          id: 'vid1',
          title: 'Malawi Tourism Campaign',
          description: 'Showcasing the beauty of Malawi through stunning visuals and authentic storytelling.',
          url: 'https://example.com/videos/malawi-tourism',
          thumbnail: '/thumbnails/malawi-tourism.jpg',
          category: 'Documentaries',
          duration: '3:45',
          views: 125000
        },
        {
          id: 'vid2',
          title: 'Lilongwe Business Expo',
          description: 'Comprehensive coverage of the largest business exhibition in Malawi.',
          url: 'https://example.com/videos/business-expo',
          thumbnail: '/thumbnails/business-expo.jpg',
          category: 'Events',
          duration: '5:20',
          views: 89000
        },
        {
          id: 'vid3',
          title: 'Malawian Brand Commercial',
          description: 'Professional commercial for a leading Malawian consumer brand.',
          url: 'https://example.com/videos/brand-commercial',
          thumbnail: '/thumbnails/brand-commercial.jpg',
          category: 'Commercials',
          duration: '0:45',
          views: 150000
        },
      ] as unknown as T;

    case 'services':
      return [
        {
          id: 'srv1',
          title: 'Corporate Videos',
          description: 'Professional videos for Malawian businesses and organizations.',
          icon: '🎥',
          features: ['Brand storytelling', 'CEO messages', 'Company profiles', 'Training videos']
        },
        {
          id: 'srv2',
          title: 'Event Coverage',
          description: 'Comprehensive coverage of weddings, conferences, and cultural events.',
          icon: '📅',
          features: ['Multi-camera setup', 'Live streaming', 'Highlight reels', 'Full documentation']
        },
        {
          id: 'srv3',
          title: 'TV Commercials',
          description: 'High-impact commercials for Malawian television and digital platforms.',
          icon: '📺',
          features: ['Script development', 'Professional actors', 'Location scouting', 'TV optimization']
        },
        {
          id: 'srv4',
          title: 'Documentaries',
          description: 'Authentic stories that capture the essence of Malawian culture and life.',
          icon: '🎬',
          features: ['Research & development', 'Cultural sensitivity', 'Local storytelling', 'Global appeal']
        },
      ] as unknown as T;

    case 'testimonials':
      return [
        {
          id: 't1',
          name: 'Ace Magic',
          quote: 'Beyond Creativity transformed my card trick performances into magical visual experiences that captivated audiences across Africa!',
          photo: '/clients/ace-magic.jpg',
          position: 'Professional Magician',
          company: 'Ace Magic Entertainment',
          rating: 5
        },
        {
          id: 't2',
          name: 'Lucus Home',
          quote: 'As both CEO and actor, I appreciate how Beyond Creativity understands the unique needs of Malawian businesses and creatives.',
          photo: '/clients/lucus-home.jpg',
          position: 'CEO & Actor',
          company: 'Home Productions',
          rating: 5
        },
        {
          id: 't3',
          name: 'Sarah Banda',
          quote: 'Their understanding of African storytelling and Malawian culture made our documentary truly authentic and powerful.',
          photo: '/clients/sarah-banda.jpg',
          position: 'Documentary Producer',
          company: 'Malawi Stories',
          rating: 5
        },
      ] as unknown as T;

    default:
      return [] as unknown as T;
  }
}
