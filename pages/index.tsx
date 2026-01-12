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
  return (
    <>
      <Head>
        <title>Hayley Bloch - Desktop</title>
        <link rel="icon" href="/favicon.ico" />
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
