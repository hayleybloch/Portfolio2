import { WindowProps } from "@/components/WindowManagement/WindowCompositor";
import { useTranslation } from "next-i18next";
import styles from './ContactView.module.css';
import React from 'react';

export default function ContactApplicationView(props: WindowProps) {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="content-outer">
      <div className="content">
        <div className={styles['center']}>
          <div className={styles['center-content']}>
            <div className={styles['contact-header']}>
              <h1>Contact</h1>
            </div>
            
            <p className={styles['contact-info']}>
              I'm currently a Junior at Harvard, but I'm always interested in connecting with fellow makers, engineers, and artists! Whether you want to collaborate on a project, discuss fabrication techniques, or just chat about creative technology, feel free to reach out!
            </p>

            <div className={styles['contact-details']}>
              <p><b>Email:&nbsp;</b><a href="mailto:hayleybloch@college.harvard.edu">hayleybloch@college.harvard.edu</a></p>
              <p><b>LinkedIn:&nbsp;</b><a href="https://www.linkedin.com/in/hayleybloch" target="_blank">linkedin.com/in/hayleybloch</a></p>
              <p><b>Location:&nbsp;</b>Cambridge, MA</p>
              <p style={{marginTop: '15px'}}>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf`} download style={{padding: '8px 16px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px', display: 'inline-block'}}>
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
