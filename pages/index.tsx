import * as React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import dynamic from 'next/dynamic';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const OperatingSystem = dynamic(
  () => import("@/components/OperatingSystem").then(mod => ({ default: mod.OperatingSystem })),
  { ssr: false }
);

class ErrorBoundary extends React.Component<React.PropsWithChildren, { hasError: boolean; message?: string }> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error?.message };
  }
  componentDidCatch(error: Error) {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.error('Desktop render error:', error);
    }
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ padding: 16 }}>Failed to load desktop: {this.state.message}</div>;
    }
    return this.props.children;
  }
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hayley Bloch',
    url: 'https://hayleybloch.com/',
    sameAs: [
      'https://github.com/hayleybloch'
    ],
    knowsAbout: [
      'Robotics',
      'Mechanical Engineering',
      'Physical AI',
      'Electromechanical Systems',
      'Rapid Prototyping',
      'Interactive Hardware'
    ]
  };

  return (
    <>
      <Head>
        <title>Hayley Bloch | Robotics, Engineering & Design</title>
        <meta
          name="description"
          content="Hayley Bloch is a Harvard student and engineer building robotics, physical AI, electromechanical systems, and interactive hardware."
        />
        <link rel="canonical" href="https://hayleybloch.com/" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hayley Bloch | Robotics, Engineering & Design" />
        <meta
          property="og:description"
          content="Portfolio of Hayley Bloch, focused on robotics, physical AI, mechanical engineering, electromechanical systems, and interactive hardware."
        />
        <meta property="og:url" content="https://hayleybloch.com/" />
        <meta property="og:site_name" content="Hayley Bloch" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Hayley Bloch | Robotics, Engineering & Design" />
        <meta
          name="twitter:description"
          content="Portfolio of Hayley Bloch, focused on robotics, physical AI, mechanical engineering, electromechanical systems, and interactive hardware."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className={styles.main}>
        <ErrorBoundary>
          <OperatingSystem />
        </ErrorBoundary>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common']))
    }
  };
};
