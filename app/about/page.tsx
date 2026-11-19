import type { Metadata } from 'next';
import Link from 'next/link';
import Landing from '../_components/Landing';
import styles from '../_components/landing.module.css';

export const metadata: Metadata = {
  title: 'About | Hisham Ilyas',
  description: 'Meet Hisham Ilyas, a marketing strategist and creative leader working across brand, performance, and marketing operations.',
};

export default function AboutPage() {
  return (
    <Landing label="ABOUT" title="About Hisham Ilyas" intro="I connect brand strategy and creative direction with the practical work of launching, measuring, and improving campaigns.">
      <div className={styles.grid}>
        <section className={styles.card}><h2>From creative to strategy</h2><p>I started in hands-on creative execution before moving into marketing strategy and leadership. That experience shapes how I connect positioning and campaign direction with the work a team needs to deliver.</p></section>
        <section className={styles.card}><h2>How I work</h2><p>I start with the business problem, decide what the work needs to change, then use what we learn after launch to guide the next decision.</p></section>
        <section className={styles.card}><h2>Where I’ve worked</h2><p>My portfolio spans healthcare acquisition, fitness positioning, and brand development. I’m open to marketing leadership roles in Qatar and across the GCC.</p></section>
      </div>
      <div className={styles.actions}>
        <Link className={styles.action} href="/work">View my work</Link>
        <Link className="text-link" href="/expertise">Explore my expertise</Link>
      </div>
    </Landing>
  );
}
