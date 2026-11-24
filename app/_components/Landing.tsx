import type { ReactNode } from 'react';
import BackHome from './BackHome';
import Reveal from './motion/Reveal';
import styles from './landing.module.css';

export default function Landing({ label, title, intro, children }: {
  label: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className={`wrap ${styles.page}`}>
      <BackHome />
      <Reveal as="header" className={styles.hero} trigger="mount" effect="fade">
        <p className="section-index"><span className="index-dot" /> {label}</p>
        <h1>{title}</h1>
        <p className={styles.intro}>{intro}</p>
      </Reveal>
      {children}
    </main>
  );
}
