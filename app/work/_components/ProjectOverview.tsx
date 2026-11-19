import Image from 'next/image';
import Link from 'next/link';
import BackHome from '../../_components/BackHome';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import styles from '../pharmaceutical-logistics-optimization/case-study.module.css';

export default function ProjectOverview({ title, project }: {
  title: string;
  project: { cover: string; description: string; type: string };
}) {
  return (
    <main className={`wrap ${styles.page}`}>
      <nav className="page-return-links" aria-label="Page shortcuts">
        <BackHome />
        <Link className={styles.back} href="/work"><ArrowLeft size={18} aria-hidden="true" /> Selected work</Link>
      </nav>
      <article>
        <header className={styles.header}>
          <p className="section-index"><span className="index-dot" /> {project.type}</p>
          <h1>{title}</h1>
          <p className={styles.deck}>{project.description}</p>
        </header>
        <figure className={`${styles.figure} ${styles.heroFigure}`}>
          <Image src={project.cover} alt="" width={1120} height={630} sizes="(max-width: 760px) 90vw, (max-width: 1440px) 89vw, 1280px" priority />
          <figcaption>Illustrative project image.</figcaption>
        </figure>
      </article>
      <footer className={styles.footer}>
        <Link className={styles.back} href="/work"><ArrowLeft size={18} aria-hidden="true" /> Selected work</Link>
        <Link className={styles.back} href="/contact">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </footer>
    </main>
  );
}
