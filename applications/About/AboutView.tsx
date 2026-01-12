import React, { useEffect, useRef, useState } from 'react';
import { WindowProps } from '@/components/WindowManagement/WindowCompositor';
import styles from './AboutView.module.css';
import { BaseApplicationManager } from '../ApplicationManager';
import { useTranslation } from 'next-i18next';
import { TFunction } from 'i18next';
import { ProjectAnimatronicHead, ProjectWoodenRecordPlayer, ProjectFlameThrowerGlove, ProjectRockPaperScissorsHand, ProjectTTrexRobot } from './Projects';
import getPublicPath from '@/lib/getPublicPath';
import { ScreenResolution } from '@/apis/Screen/ScreenService';

type SubView = (
  'home' |
  'about' |
  'experience' |
  'projects' |
  'project-animatronic-head' |
  'project-record-player' |
  'project-flame-thrower' |
  'project-rock-paper-scissors' |
  'project-t-trex-robot' |
  'contact'
);

export type SubViewParams = {
  needsMobileView: boolean,
  manager: BaseApplicationManager,
  changeParent: (view: SubView) => void,
  translate: TFunction,
  language: string
}

function Contact(props: { manager: BaseApplicationManager, language: string }) {
  function openContactApp() {
    props.manager.open('/Applications/Contact.app');
  }

  function englishContent() {
    return (<>
      <p>If you have any questions or comments, please contact me via the <a onClick={() => openContactApp()} href='#contact'>contact application</a> or shoot me an email at <a href="mailto:hayleybloch@college.harvard.edu">hayleybloch@college.harvard.edu</a></p>
    </>);
  }


  return englishContent();
}


function HomeSubView(params: SubViewParams) {
  const t = params.translate;

  const mobileClass = params.needsMobileView ? styles['mobile'] : '';

  return (<>
    <div className={styles['subpage-home']}>
      <h1 className={styles['home-title']}>Hayley Bloch</h1>
      <h3 className={styles['home-subtitle']}>Harvard Student Class of 2027, Fabrication Enthusiast</h3>

      <div className={styles['home-button-container']}>
        <button className={`${styles['home-button']} system-button ${mobileClass}`} onClick={() => params.changeParent('about')}>{t("about.navigation.about")}</button>
        <button className={`${styles['home-button']} system-button ${mobileClass}`} onClick={() => params.changeParent('experience')}>{t("about.navigation.experience")}</button>
        <button className={`${styles['home-button']} system-button ${mobileClass}`} onClick={() => params.changeParent('projects')}>{t("about.navigation.projects")}</button>
        <button className={`${styles['home-button']} system-button ${mobileClass}`} onClick={() => params.changeParent('contact')}>{t("about.navigation.contact")}</button>
      </div>
    </div>
  </>)
}

export function SubViewNavigation(params: SubViewParams) {
  const t = params.translate;

  const mobileClass = params.needsMobileView ? styles['mobile'] : '';

  return (<>
    <div className={styles['navigation']}>
      <div>
        <span className={styles['logo-part']}>Hayley</span>
        <span className={styles['logo-part']}>Bloch</span>
      </div>

      <div className={`${styles['navigation-button-container']} ${mobileClass}`}>
        <button className='system-button' onClick={() => params.changeParent('home')}>{t("about.navigation.home")}</button>
        <button className='system-button' onClick={() => params.changeParent('about')}>{t("about.navigation.about")}</button>
        <button className='system-button' onClick={() => params.changeParent('experience')}>{t("about.navigation.experience")}</button>
        <button className='system-button' onClick={() => params.changeParent('projects')}>{t("about.navigation.projects")}</button>
        <button className='system-button' onClick={() => params.changeParent('contact')}>{t("about.navigation.contact")}</button>
      </div>
    </div>
  </>)
}

function AboutSubView(params: SubViewParams) {
  function openContactApp() {
    params.manager.open('/Applications/Contact.app');
  }

  function ImageOfMyself(props: { language: string }) {

    return (<>
      <div className={styles['image-container']}>
        <img draggable={false} src={getPublicPath('/images/photo-of-me-min.jpg')} alt="Image of myself" />
      </div>
    </>);
  }



  function RenderEnglishContent() {
    return (
      <div>
        <h1 className={styles['page-h1']}>Welcome</h1>

        <p>
          I'm Hayley Bloch, a Harvard student cross‑registered at MIT exploring mechanical engineering, creative fabrication, and interactive art.
        </p>

        <p>Thanks for taking the time to explore my portfolio. I hope you enjoy it as much I did enjoy developing it. If you have any questions or comments, please contact me via the <a onClick={() => openContactApp()} href='#contact'>contact application</a> or shoot me an email at <a href="mailto:hayleybloch@college.harvard.edu">hayleybloch@college.harvard.edu</a></p>

        <h2>About Me</h2>
        <div className={styles['about-me-section']}>
          <div className={styles['about-me-text']}>
            <p>
              I work at the intersection of creative engineering, hands-on making,
              and entrepreneurship. At Harvard, I’ve built wearable devices,
              robotic systems, and interactive art while working in makerspaces and
              helping run programs that connect students with design, fabrication,
              and emerging technology. I enjoy moving between mechanics,
              electronics, and interaction design, always thinking about how people
              actually experience the things they use.
            </p>
            <p>
              My work is rooted in physical computing and mechatronics, combining
              CAD and digital fabrication with embedded systems and software.
              Alongside building, I’ve spent time managing shared fabrication
              spaces and supporting other makers as they turn ideas into working
              systems. That balance between making and community has shaped how I
              approach engineering as both a technical and creative practice.
            </p>
            <p>
              I’m especially drawn to projects that blur the line between function
              and expression. Whether I’m reimagining how we interact with music,
              designing gesture-driven wearables, or building machines that respond
              to human motion, my focus is on making technology feel tangible,
              legible, and human.
            </p>
          </div>
          <div className={styles['about-me-image']}>
            <ImageOfMyself language='en'/>
          </div>
        </div>
        <h2>Interests</h2>
        <p>
          Outside the studio, I’m drawn to practices that slow me down and
          ground my work. I spend time with ceramics and sculpture, where the
          process is physical, patient, and imperfect in a way that deeply
          influences how I think about making.
        </p>
        <p>
          Movement is another constant in my life. Soccer has long been an
          anchor for teamwork and momentum, while spin classes offer a
          rhythmic, meditative reset through music and repetition. Sound plays
          a big role for me as well, especially techno and the culture
          surrounding it in Berlin, where atmosphere, endurance, and
          collective energy shape the experience.
        </p>
        <p>
          Fashion and performance are another creative outlet, particularly
          through my role as Executive Producer for Eleganza, Harvard’s largest
          student-run production, where creativity becomes something shared
          and lived. I also love traveling and immersing myself in new places
          and cultures, experiences that continually feed back into how I
          approach design, engineering, and creative work.
        </p>
      </div>
    );
  }

  return (<>
    <div data-subpage className={styles['subpage']}>
      { SubViewNavigation(params) }
      <div data-subpage-content className={styles['subpage-content']}>
        { RenderEnglishContent() }
      </div>
    </div>
  </>);
}

function ExperienceSubView(params: SubViewParams) {
  const t = params.translate;

  function englishContent() {
    const makerStudio = (
      <>
        <p>
          In June 2025, I joined the Harvard Innovation Labs i-Lab Maker Studio team
          as a Teaching Assistant. I provide training, mentorship, and technical
          support for students building across digital fabrication and prototyping,
          with a strong emphasis on safe equipment use and practical iteration.
        </p>

        <p>
          Day to day, I help students troubleshoot and move projects forward across
          CAD, electronics, PCB design, 3D printing, and fabrication workflows.
        </p>

        <h3>Technologies and tools</h3>
        <p>
          Fusion 360, KiCad, SLA and FDM printing, soldering and electronics work,
          PCB prototyping, digital fabrication workflows
        </p>
      </>
    );

    const lpce = (
      <>
        <p>
          From January to October 2025, I supported entrepreneurship initiatives
          across Harvard as a Fellow with the Lemann Program on Creativity and
          Entrepreneurship (LPCE). My work spanned communications and production,
          including website and social media management, newsletter production,
          event communications, mentor relations, and support for key programs.
        </p>

        <h3>Technologies and tools</h3>
        <p>Figma, Canva, Google Workspace, Mailchimp, HTML/CSS for newsletters</p>
      </>
    );

    const halo = (
      <>
        <p>
          In April and May 2025, I worked at Halo as a Hardware Engineer focused on
          Product and Operations. I led hardware development and helped shape
          operational strategy for an early-stage wearable tech startup using facial
          recognition, collaborating closely with the founders to build prototypes,
          define product direction, and scale systems.
        </p>

        <h3>Technologies and tools</h3>
        <p>
          Rapid prototyping, hardware iteration, product development, operations
          systems, cross-functional collaboration
        </p>
      </>
    );

    const goBabyGo = (
      <>
        <p>
          From August 2022 to August 2023, I was a Project Designer with the Go Baby
          Go Powered Mobility Program. I collaborated with families to design and
          retrofit ride-on toy cars for children with mobility impairments, creating
          tailored mobility solutions that support independence and confidence.
        </p>

        <h3>Technologies and tools</h3>
        <p>Mechanical adaptation, user-centered design, prototyping, fabrication</p>
      </>
    );

    const research = (
      <>
        <p>
          From December 2021 to May 2023, I was a Research Intern at the University
          of North Texas in Professor Steven Jiang’s Mechanical Engineering lab. I
          designed and tested 3D-modeled helicoidal structures to evaluate enhanced
          support capabilities, bridging CAD modeling with experimental iteration.
        </p>

        <h3>Technologies and tools</h3>
        <p>CAD modeling, prototyping, test planning, mechanical evaluation</p>
      </>
    );

    const cleaverBrooks = (
      <>
        <p>
          During Summers 2020 and 2021, I worked as a Summer Mechanical Engineering
          Intern at Cleaver-Brooks. I used Autodesk Inventor to design and model
          boiler rooms and parts, and I also designed a custom removable truck
          liftgate to improve ergonomic efficiency.
        </p>

        <h3>Technologies and tools</h3>
        <p>Autodesk Inventor, mechanical design, modeling, fabrication support</p>
      </>
    );

    return { makerStudio, lpce, halo, goBabyGo, research, cleaverBrooks };
  }

  const content = englishContent();

  return (
    <>
      <div data-subpage className={styles["subpage"]}>
        {SubViewNavigation(params)}
        <div data-subpage-content className={`${styles["subpage-content"]} ${styles["experience-content"]}`}>
          <h1 className={styles["page-h1"]}>{t("about.navigation.experience")}</h1>

          <h2>June 2025 – Present, Teaching Assistant, Harvard Innovation Labs Maker Studio</h2>
          {content.makerStudio}

          <h2>January 2025 – October 2025, Fellow, Lemann Program on Creativity and Entrepreneurship</h2>
          {content.lpce}

          <h2>April 2025 – May 2025, Hardware Engineer (Product and Operations), Halo</h2>
          {content.halo}

          <h2>August 2022 – August 2023, Project Designer, Go Baby Go Powered Mobility Program</h2>
          {content.goBabyGo}

          <h2>December 2021 – May 2023, Research Intern, University of North Texas</h2>
          {content.research}

          <h2>Summers 2020 and 2021, Summer Mechanical Engineering Intern, Cleaver-Brooks</h2>
          {content.cleaverBrooks}

          <Contact manager={params.manager} language={params.language} />
        </div>
      </div>
    </>
  );
}

export { ExperienceSubView };


function ProjectsSubView(params: SubViewParams) {
  const t = params.translate;

  function ProjectButton(name: string, target: SubView, imageUrl: string) {
    return (<>
      <button className={styles['project-button']} onClick={() => params.changeParent(target) }>
        <div>
          <img src={getPublicPath(imageUrl)} alt={`${target} thumbnail`} width={25} height={25} />
        </div>
        <span>{name}</span>
      </button>
    </>);
  }

  return (<>
    <div data-subpage className={styles['subpage']}>
      { SubViewNavigation(params) }
      <div data-subpage-content className={styles['subpage-content']}>
        <h1 className={styles['page-h1']}>{t("about.navigation.projects")}</h1>

        <div>
          {ProjectButton('Animatronic Humanoid Head', 'project-animatronic-head', '/icons/icons8-robot-head-67.png')}
          {ProjectButton('Wooden Record Player', 'project-record-player', '/icons/icons8-record-player-48.png')}
          {ProjectButton('Flame Thrower Glove', 'project-flame-thrower', '/icons/icons8-flame-48.png')}
          {ProjectButton('Rock-Paper-Scissors Hand', 'project-rock-paper-scissors', '/icons/icons8-hand-peace-50.png')}
          {ProjectButton('T-TREX Robot', 'project-t-trex-robot', '/icons/icons8-dinosaur-80.png')}
        </div>
      </div>
    </div>
  </>);
}

function RenderSubView(view: SubView, params: SubViewParams): JSX.Element {
  switch (view) {
    case 'home': return HomeSubView(params);
    case 'about': return AboutSubView(params);
    case 'experience': return ExperienceSubView(params);
    case 'projects': return ProjectsSubView(params);
    case 'project-animatronic-head': return ProjectAnimatronicHead(params);
    case 'project-record-player': return ProjectWoodenRecordPlayer(params);
    case 'project-flame-thrower': return ProjectFlameThrowerGlove(params);
    case 'project-rock-paper-scissors': return ProjectRockPaperScissorsHand(params);
    case 'project-t-trex-robot': return ProjectTTrexRobot(params);
  }
  
  return <></>;
}

export default function AboutApplicationView(props: WindowProps) {
  const { application, windowContext } = props;

  const [subView, setSubView] = useState<SubView>('home');
  const [needsMobileView, setNeedsMobileView] = useState<boolean>(false);
  const { t, i18n } = useTranslation("common");

  const apis = application.apis;

  const contentParent = useRef<HTMLDivElement>(null);

  function resetSubPageScroll() {
    if (!contentParent.current) { return; }

    const subViewParent = contentParent.current;
    const subViewParentChildren = Array.from(subViewParent.children);

    const subView = subViewParentChildren.find(x => x.hasAttribute('data-subpage'));
    if (!subView) { return; }

    const subViewChildren = Array.from(subView.children);

    const contentView = subViewChildren.find(x => x.hasAttribute('data-subpage-content'));

    if (!contentView) { return; }
    contentView.scrollTop = 0;
  }

  function onScreenChangeListener(resolution: ScreenResolution): void {
    setNeedsMobileView(resolution.isMobileDevice());
  }

  useEffect(() => {
    const unsubscribe = apis.screen.subscribe(onScreenChangeListener);

    const resolution = apis.screen.getResolution();
    if (resolution) { onScreenChangeListener(resolution); }

    return () => {
      unsubscribe();
    }
  }, []);

  useEffect(() => {
    resetSubPageScroll();
  }, [subView]);

  function changeParent(view: SubView) {
    if (view === 'contact') {
      application.on({ kind: 'about-open-contact-event' }, windowContext);
      return;
    }

    setSubView(view);
  }

  return (
    <div className="content-outer">
      <div className="content">
        <div className='content-inner' ref={contentParent}>
          { RenderSubView(subView,
            {
              needsMobileView,
              manager: application.manager,
              changeParent,
              translate: t,
              language: i18n.language
            }
          ) }
        </div>
      </div>
    </div>
  )
}