'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './VideoGallery.module.css';

type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  category: string;
  duration?: string;
  views?: number;
};

type VideoGalleryProps = {
  videos: Video[];
};

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  
  const categories = useMemo(() => 
    ['All', ...new Set(videos.map(v => v.category))], 
    [videos]
  );

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  const formatViews = (views?: number) => {
    if (!views) return '';
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M views`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K views`;
    return `${views} views`;
  };

  const handleVideoClick = (video: Video) => {
    // Open video in lightbox or new tab
    window.open(video.url, '_blank');
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Video Portfolio</h2>
        <p className={styles.sectionSubtitle}>
          Explore our latest work across different categories
        </p>
      </div>

      <div className={styles.categoryFilter}>
        <div className={styles.categoryButtons}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
              <span className={styles.categoryCount}>
                {category === 'All' ? videos.length : videos.filter(v => v.category === category).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.videosGrid}>
        {filteredVideos.map((video) => (
          <article
            key={video.id}
            className={styles.videoCard}
            aria-labelledby={`video-title-${video.id}`}
            onMouseEnter={() => setHoveredVideo(video.id)}
            onMouseLeave={() => setHoveredVideo(null)}
            onClick={() => handleVideoClick(video)}
          >
            <div className={styles.thumbnailContainer}>
              <Image
                src={video.thumbnail}
                alt={`Thumbnail for ${video.title}`}
                width={400}
                height={250}
                className={styles.thumbnail}
                loading="lazy"
              />
              
              <div className={`${styles.thumbnailOverlay} ${hoveredVideo === video.id ? styles.hovered : ''}`}>
                <span className={styles.categoryBadge}>{video.category}</span>
                
                <div className={styles.videoMeta}>
                  {video.duration && (
                    <span className={styles.duration}>{video.duration}</span>
                  )}
                  {video.views && (
                    <span className={styles.views}>{formatViews(video.views)}</span>
                  )}
                </div>
                
                <div className={styles.playButton}>
                  <span className={styles.playIcon}>▶</span>
                  <span className={styles.playText}>Play Video</span>
                </div>
              </div>

              <div className={styles.gradientOverlay}></div>
            </div>

            <div className={styles.videoInfo}>
              <h3 id={`video-title-${video.id}`} className={styles.videoTitle}>
                {video.title}
              </h3>
              <p className={styles.videoDescription}>{video.description}</p>
              
              <div className={styles.videoActions}>
                <button className={styles.watchButton}>
                  <span className={styles.watchIcon}>🎬</span>
                  Watch Now
                </button>
                <button className={styles.detailsButton}>
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>📹</div>
          <h3>No videos found</h3>
          <p>We couldn't find any videos in this category.</p>
          <button 
            className={styles.resetFilter}
            onClick={() => setSelectedCategory('All')}
          >
            Show All Videos
          </button>
        </div>
      )}
    </div>
  );
}
