import React, { useState } from 'react';
import { SubViewParams, SubViewNavigation } from './AboutView';
import styles from './AboutView.module.css';

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

  return (
    <>
      <figure className="project-media" onClick={() => !isVideo && setIsFullscreen(true)} style={{ cursor: !isVideo ? 'pointer' : 'default' }}>
        {isVideo ? (
          <video 
            className="project-video" 
            src={src} 
            controls 
            aria-label={alt}
            style={{ maxHeight: '100vh', width: 'auto', display: 'block' }}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            className="project-image" 
            src={src} 
            alt={alt}
            style={{ maxHeight: '600px', width: 'auto', objectFit: 'contain' }}
          />
        )}
        {caption && <figcaption>{caption}</figcaption>}
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
