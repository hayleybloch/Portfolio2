import React, { useMemo } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { TFunction } from 'i18next';

import type { SubViewParams } from '@/applications/About/AboutView';
import { ProjectAnimatronicHead } from '@/applications/About/AnimatronicHead';
import { ProjectWoodenRecordPlayer } from '@/applications/About/WoodenRecordPlayer';
import { ProjectFlameThrowerGlove } from '@/applications/About/FlameThrowerGlove';
import { ProjectRockPaperScissorsHand } from '@/applications/About/RockPaperScissorsHand';
import { ProjectTTrexRobot } from '@/applications/About/TTrexRobot';
import { ProjectPottery } from '@/applications/About/Pottery';
import SITE_URL from '@/lib/siteUrl';

type ProjectSlug =
  | 'animatronic-head'
  | 'wooden-record-player'
  | 'flame-thrower-glove'
  | 'rock-paper-scissors-hand'
  | 't-trex-robot'
  | 'pottery';

type SubViewValue =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'project-animatronic-head'
  | 'project-record-player'
  | 'project-flame-thrower'
  | 'project-rock-paper-scissors'
  | 'project-t-trex-robot'
  | 'project-pottery'
  | 'contact';

interface ProjectPageProps {
  slug: ProjectSlug;
}

const slugToSubView: Record<ProjectSlug, SubViewValue> = {
  'animatronic-head': 'project-animatronic-head',
  'wooden-record-player': 'project-record-player',
  'flame-thrower-glove': 'project-flame-thrower',
  'rock-paper-scissors-hand': 'project-rock-paper-scissors',
  't-trex-robot': 'project-t-trex-robot',
  pottery: 'project-pottery'
};

const subViewToSlug: Partial<Record<SubViewValue, ProjectSlug>> = {
  'project-animatronic-head': 'animatronic-head',
  'project-record-player': 'wooden-record-player',
  'project-flame-thrower': 'flame-thrower-glove',
  'project-rock-paper-scissors': 'rock-paper-scissors-hand',
  'project-t-trex-robot': 't-trex-robot',
  'project-pottery': 'pottery'
};

const navLabelMap: Record<string, string> = {
  'about.navigation.home': 'Home',
  'about.navigation.about': 'About',
  'about.navigation.experience': 'Experience',
  'about.navigation.projects': 'Projects',
  'about.navigation.contact': 'Contact'
};

const titleBySlug: Record<ProjectSlug, string> = {
  'animatronic-head': 'Animatronic Humanoid Head',
  'wooden-record-player': 'Wooden Digital Record Player',
  'flame-thrower-glove': 'Flame Thrower Glove',
  'rock-paper-scissors-hand': 'Rock-Paper-Scissors Hand',
  't-trex-robot': 'T-TREX Robot',
  pottery: 'Pottery & Ceramics'
};

function renderProject(slug: ProjectSlug, params: SubViewParams) {
  switch (slug) {
    case 'animatronic-head':
      return ProjectAnimatronicHead(params);
    case 'wooden-record-player':
      return ProjectWoodenRecordPlayer(params);
    case 'flame-thrower-glove':
      return ProjectFlameThrowerGlove(params);
    case 'rock-paper-scissors-hand':
      return ProjectRockPaperScissorsHand(params);
    case 't-trex-robot':
      return ProjectTTrexRobot(params);
    case 'pottery':
      return ProjectPottery(params);
    default:
      return null;
  }
}

export default function ProjectSlugPage({ slug }: ProjectPageProps) {
  const router = useRouter();

  const params = useMemo<SubViewParams>(() => {
    const changeParent = (view: SubViewValue) => {
      if (view === 'projects') {
        void router.push('/projects');
        return;
      }

      const targetSlug = subViewToSlug[view];
      if (targetSlug) {
        void router.push(`/projects/${targetSlug}`);
        return;
      }

      void router.push('/');
    };

    const translate: TFunction = ((key: string) => navLabelMap[key] ?? key) as TFunction;

    return {
      needsMobileView: false,
      manager: {} as any,
      changeParent: changeParent as SubViewParams['changeParent'],
      translate,
      language: 'en'
    };
  }, [router]);

  const title = titleBySlug[slug];

  return (
    <>
      <Head>
        <title>{`Hayley Bloch - ${title}`}</title>
        <meta name="description" content={`${title} project page`} />
        <link rel="canonical" href={`${SITE_URL}/projects/${slug}`} />
      </Head>
      {renderProject(slug, params)}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: ProjectSlug[] = [
    'animatronic-head',
    'wooden-record-player',
    'flame-thrower-glove',
    'rock-paper-scissors-hand',
    't-trex-robot',
    'pottery'
  ];

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params, locale }) => {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return { notFound: true };
  }

  const allowed: ProjectSlug[] = [
    'animatronic-head',
    'wooden-record-player',
    'flame-thrower-glove',
    'rock-paper-scissors-hand',
    't-trex-robot',
    'pottery'
  ];

  if (!allowed.includes(slug as ProjectSlug)) {
    return { notFound: true };
  }

  return {
    props: {
      slug: slug as ProjectSlug,
      ...(await serverSideTranslations(locale ?? 'en', ['common']))
    }
  };
};
