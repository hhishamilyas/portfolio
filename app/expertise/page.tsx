import type { Metadata } from 'next';
import Link from 'next/link';
import Landing from '../_components/Landing';
import styles from '../_components/landing.module.css';
import ExpertiseJourney from './ExpertiseJourney';

export const metadata: Metadata = {
  title: 'Expertise | Hisham Ilyas',
  description: 'Explore five disciplines spanning strategy, creative direction, performance, marketing technology, and digital experiences.',
};

export default function ExpertisePage() {
  return (
    <Landing label="EXPERTISE" title="Marketing expertise" intro="I bring five disciplines together, from defining the brief to reviewing what the work achieved.">
      <ExpertiseJourney />
      <div className={styles.actions}>
        <Link className={styles.action} href="/work">See the work</Link>
        <Link className="text-link" href="/connect">Discuss a project</Link>
      </div>
    </Landing>
  );
}
