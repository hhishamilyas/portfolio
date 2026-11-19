import type { Metadata } from 'next';
import Link from 'next/link';
import Landing from '../_components/Landing';
import styles from '../_components/landing.module.css';
import career from './career.module.css';

export const metadata: Metadata = {
  title: 'About | Hisham Ilyas',
  description: 'Meet Hisham Ilyas, a marketing strategist and creative leader working across brand, performance, and marketing operations.',
};

const roles = [
  { title: 'Manager – Performance Marketing', company: 'Trixcorp', period: 'Mar 2026 onward' },
  { title: 'Digital Strategist', company: 'RAC', period: 'Jun 2025 – Mar 2026', description: 'Managed cross-channel digital strategy and paid campaigns across Meta, Google, and LinkedIn, and used audience and performance insights to refine brand messaging.' },
  { title: 'Head of Marketing', company: 'D Tricho', period: 'Mar 2025 – Jun 2025', description: 'Led content, paid acquisition, CRM, and brand positioning, including doctor-led content, WhatsApp funnels, and lead tracking.' },
  { title: 'Performance Marketing Lead & Creative Strategist', company: 'Teqnius Innovations Private Limited', period: 'Apr 2023 – Feb 2025', description: 'Led digital campaigns, creative testing, audience segmentation, and production across healthcare, FMCG, retail, and education.' },
  { title: 'Marketing Specialist', company: 'Teqnius', period: 'Apr 2021 – Mar 2023', description: 'Managed awareness, engagement, and lead-generation campaigns alongside community management, video production, and graphic design.' },
  { title: 'Graphic Designer', company: 'Dawinci Branding', period: 'Aug 2020 – Apr 2021', description: 'Designed logos, brand identities, and packaging, with work in motion design, video editing, and visual storytelling.' },
];

export default function AboutPage() {
  return (
    <Landing label="ABOUT" title="About Hisham Ilyas" intro="I connect brand strategy and creative direction with the practical work of launching, measuring, and improving campaigns.">
      <div className={styles.grid}>
        <section className={styles.card}><h2>From creative to strategy</h2><p>I started in hands-on creative execution before moving into marketing strategy and leadership. That experience shapes how I connect positioning and campaign direction with the work a team needs to deliver.</p></section>
        <section className={styles.card}><h2>How I work</h2><p>I start with the business problem, decide what the work needs to change, then use what we learn after launch to guide the next decision.</p></section>
        <section className={styles.card}><h2>Where I’ve worked</h2><p>My portfolio spans healthcare acquisition, fitness positioning, and brand development. I’m open to marketing leadership roles in Qatar and across the GCC.</p></section>
      </div>
      <section className={career.career} aria-labelledby="career-heading">
        <h2 id="career-heading">Career path</h2>
        <ol className={career.timeline} role="list">
          {roles.map(role => (
            <li key={role.title}>
              <span className={career.period}>{role.period}</span>
              <div>
                <h3>{role.title}</h3>
                <span className={career.company}>{role.company}</span>
                {role.description && <p>{role.description}</p>}
              </div>
            </li>
          ))}
        </ol>
        <a className={`text-link ${career.profile}`} href="https://www.linkedin.com/in/mhd-hisham/">View my LinkedIn profile</a>
      </section>
      <div className={styles.actions}>
        <Link className={styles.action} href="/work">View my work</Link>
        <Link className="text-link" href="/expertise">Explore my expertise</Link>
      </div>
    </Landing>
  );
}
