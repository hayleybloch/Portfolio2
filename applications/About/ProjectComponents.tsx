import React, { useState } from 'react';
import { SubViewParams, SubViewNavigation } from './AboutView';
import styles from './AboutView.module.css';

// Component to detect aspect ratio and apply appropriate container style
export function AspectRatioAwareImageContainer({ children, src, isVideo }: { children: React.ReactNode, src: string, isVideo?: boolean }) {
  const [containerRatio, setContainerRatio] = React.useState('2/2.5');

  React.useEffect(() => {
    if (isVideo) {
      // Create a video element to load metadata and get dimensions
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        const aspectRatio = video.videoWidth / video.videoHeight;
        setContainerRatio(aspectRatio > 0.8 ? '2/3' : '2/2.5');
      };
      video.src = src;
    } else {
      // Load image to detect aspect ratio
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        setContainerRatio(aspectRatio > 0.8 ? '2/3' : '2/2.5');
      };
      img.src = src;
    }
  }, [src, isVideo]);

  return (
    <div style={{
      aspectRatio: containerRatio,
      overflow: 'hidden',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      padding: '1rem',
      width: '100%',
      maxWidth: '100%',
      maxHeight: '500px',
      position: 'relative'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}>
        {children}
      </div>
    </div>
  );
}

interface ProjectPageProps {
  title: string;
  content: React.ReactNode;
  params: SubViewParams;
}

export function ProjectPage({ title, content, params }: ProjectPageProps) {
  return (
    <div data-subpage className={styles['subpage']}>
      {SubViewNavigation(params)}
      <div data-subpage-content className={styles['subpage-content']}>
        <div style={{ maxWidth: '900px', width: '100%' }}>
          <h1 style={{ 
            fontFamily: "'Century Schoolbook', sans-serif",
            fontSize: '2.5rem',
            fontWeight: 'normal',
            marginBottom: '1.5rem',
            borderBottom: '2px solid #8b6f47',
            paddingBottom: '1rem'
          }}>
            {title}
          </h1>
          <button 
            onClick={() => params.changeParent('projects')} 
            className={styles['button-link']}
            style={{ 
              fontSize: '1rem',
              marginBottom: '2rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← Back to projects
          </button>
          
          <div style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#333'
          }}>
            {content}
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Questions?</h3>
            <p>If you have any questions or comments, feel free to reach out via <a href="mailto:hayleybloch@college.harvard.edu">hayleybloch@college.harvard.edu</a></p>
          </div>

          <button 
            onClick={() => params.changeParent('projects')} 
            className={styles['button-link']}
            style={{ 
              fontSize: '1rem',
              marginTop: '2rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← Back to projects
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  isVideo?: boolean;
}

export function ProjectImage({ src, alt, caption, isVideo = false }: ProjectImageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [isVertical, setIsVertical] = useState<boolean | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isVideo) {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        setIsVertical(video.videoHeight > video.videoWidth);
      };
      video.src = src;
    } else {
      const img = new Image();
      img.onload = () => {
        setIsVertical(img.naturalHeight > img.naturalWidth);
      };
      img.src = src;
    }
  }, [src, isVideo]);

  const handlePlay = () => {
    setShowLabel(false);
  };

  const handlePause = () => {
    setShowLabel(true);
  };

  const handleEnded = () => {
    setShowLabel(true);
  };

  // Use 2/2.5 ratio (125% padding) for vertical, auto for horizontal
  const paddingBottom = isVertical === null ? '75%' : (isVertical ? '125%' : 'auto');
  const containerStyle = isVertical === false ? { width: '100%', maxWidth: '600px', backgroundColor: '#f5f5f5', borderRadius: '8px', overflow: 'hidden' } : { width: '100%', paddingBottom, maxWidth: '600px', backgroundColor: '#f5f5f5', borderRadius: '8px', overflow: 'hidden', position: 'relative' as const };

  return (
    <>
      <figure className="project-media" onClick={() => !isVideo && setIsFullscreen(true)} style={{ 
        cursor: !isVideo ? 'pointer' : 'default', 
        position: 'relative', 
        margin: '1rem auto', 
        width: '100%', 
        maxWidth: '600px',
        height: 'auto'
      }}>
        {isVideo ? (
          <div style={containerStyle}>
            <video 
              ref={videoRef}
              className="project-video" 
              src={src} 
              controls 
              aria-label={alt}
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handleEnded}
              style={isVertical === false ? { width: '100%', height: 'auto', display: 'block' } : { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              Your browser does not support the video tag.
            </video>
            {showLabel && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                fontSize: '1rem',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                zIndex: 1
              }}>
                Click to play
              </div>
            )}
          </div>
        ) : (
          <div style={containerStyle}>
            <img 
              className="project-image" 
              src={src} 
              alt={alt}
              style={isVertical === false ? { width: '100%', height: 'auto', display: 'block' } : { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
        {caption && <figcaption style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>{caption}</figcaption>}
      </figure>

      {isFullscreen && !isVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem'
          }}
          onClick={() => setIsFullscreen(false)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img 
              src={src} 
              alt={alt}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setIsFullscreen(false)}
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: '0',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
