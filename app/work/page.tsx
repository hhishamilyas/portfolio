import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectGrid from './_components/ProjectGrid';
import styles from './pharmaceutical-logistics-optimization/case-study.module.css';

export const metadata: Metadata = {
  title: 'Work | Hisham Ilyas',
  description: 'Explore brand strategy, creative direction, customer acquisition, and operations projects by Hisham Ilyas.',
};

export default function WorkPage() {
  return (
    <main className={`site-shell wrap ${styles.page}`}>
      <Link className={styles.back} href="/"><ArrowLeft size={18} aria-hidden="true" /> Home</Link>
      <header className={styles.header}>
        <h1>Selected work.</h1>
        <p className={styles.deck}>Projects across brand strategy, creative direction, customer acquisition and operations.</p>
      </header>
      <ProjectGrid heading="h2" />
      <p className="project-note">Project images are illustrative.</p>
    </main>
  );
}
