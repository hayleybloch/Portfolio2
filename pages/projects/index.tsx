import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const projects = [
  { slug: 'animatronic-head', title: 'Animatronic Humanoid Head' },
  { slug: 'wooden-record-player', title: 'Wooden Digital Record Player' },
  { slug: 'flame-thrower-glove', title: 'Flame Thrower Glove' },
  { slug: 'rock-paper-scissors-hand', title: 'Rock-Paper-Scissors Hand' },
  { slug: 't-trex-robot', title: 'T-TREX Robot' },
  { slug: 'pottery', title: 'Pottery & Ceramics' }
] as const;

export default function ProjectsIndexPage() {
  return (
    <>
      <Head>
        <title>Hayley Bloch - Projects</title>
        <meta name="description" content="Project pages" />
      </Head>

      <main style={{ minHeight: '100vh', padding: '2rem 1rem', background: '#f5f0e8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', border: '1px solid #d9d2c8', padding: '1.25rem 1rem' }}>
          <h1 style={{ marginTop: 0 }}>Projects</h1>
          <p>Shareable project links:</p>
          <ul>
            {projects.map((project) => (
              <li key={project.slug} style={{ marginBottom: '0.5rem' }}>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </li>
            ))}
          </ul>
          <p>
            <Link href="/">← Back to desktop portfolio</Link>
          </p>
        </div>
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
