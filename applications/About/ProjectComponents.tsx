import React from 'react';
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
            <p>If you have any questions or comments, feel free to reach out via <a href="mailto:hayleybl@mit.edu">hayleybl@mit.edu</a></p>
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
  return (
    <figure className="project-media">
      {isVideo ? (
        <video 
          className="project-video" 
          src={src} 
          controls 
          aria-label={alt}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img 
          className="project-image" 
          src={src} 
          alt={alt} 
        />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
