import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness, Compass, Plus, Workflow } from 'lucide-react';
import Landing from '../_components/Landing';
import styles from '../_components/landing.module.css';
import career from './career.module.css';
import story from './story.module.css';

export const metadata: Metadata = {
  title: 'About | Hisham Ilyas',
  description: 'Meet Hisham Ilyas, a marketing strategist and creative leader working across brand, performance, and marketing operations.',
};

const stories = [
  { title: 'From creative to strategy', description: 'I started in hands-on creative execution before moving into marketing strategy and leadership. That experience shapes how I connect positioning and campaign direction with the work a team needs to deliver.', icon: Compass, href: '#career-path', action: 'Explore my career' },
  { title: 'How I work', description: 'I start with the business problem, decide what the work needs to change, then use what we learn after launch to guide the next decision.', icon: Workflow, href: '/expertise', action: 'See my expertise' },
  { title: 'Where I’ve worked', description: 'My portfolio spans healthcare acquisition, fitness positioning, and brand development. I’m open to marketing leadership roles in Qatar and across the GCC.', icon: BriefcaseBusiness, href: '/work', action: 'View selected work' },
];

const roles = [
  { title: 'Manager – Performance Marketing', company: 'Trixcorp', period: 'Mar 2026 onward', location: 'Dubai, United Arab Emirates' },
  { title: 'Digital Strategist', company: 'RAC', period: 'Jun 2025 – Mar 2026', description: 'Managed cross-channel digital strategy and paid campaigns across Meta, Google, and LinkedIn, and used audience and performance insights to refine brand messaging.' },
  { title: 'Head of Marketing', company: 'D Tricho', period: 'Mar 2025 – Jun 2025', description: 'Led content, paid acquisition, CRM, and brand positioning, including doctor-led content, WhatsApp funnels, and lead tracking.' },
  { title: 'Performance Marketing Lead & Creative Strategist', company: 'Teqnius Innovations Private Limited', period: 'Apr 2023 – Feb 2025', description: 'Led digital campaigns, creative testing, audience segmentation, and production across healthcare, FMCG, retail, and education.' },
  { title: 'Marketing Specialist', company: 'Teqnius', period: 'Apr 2021 – Mar 2023', description: 'Managed awareness, engagement, and lead-generation campaigns alongside community management, video production, and graphic design.' },
  { title: 'Graphic Designer', company: 'Dawinci Branding', period: 'Aug 2020 – Apr 2021', description: 'Designed logos, brand identities, and packaging, with work in motion design, video editing, and visual storytelling.' },
];

export default function AboutPage() {
  return (
    <Landing label="ABOUT" title="About Hisham Ilyas" intro="I connect brand strategy and creative direction with the practical work of launching, measuring, and improving campaigns.">
      <div className={story.grid}>
        {stories.map(({ title, description, icon: Icon, href, action }) => (
          <section className={story.card} key={title}>
            <div className={story.icon}><Icon size={22} aria-hidden="true" /></div>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link className={story.link} href={href}>{action}<ArrowUpRight size={17} aria-hidden="true" /></Link>
          </section>
        ))}
      </div>
      <section id="career-path" className={career.career} aria-labelledby="career-heading">
        <h2 id="career-heading">Career path</h2>
        <ol className={career.timeline} role="list">
          {roles.map((role, index) => (
            <li key={role.title}>
              <details className={career.role} open={index === 0}>
                <summary>
                  <span className={career.period}>{role.period}</span>
                  <span className={career.title}>{role.title}</span>
                  <span className={career.company}>{role.company}</span>
                  <span className={career.toggle} aria-hidden="true"><Plus size={18} /></span>
                </summary>
                <p>{role.description ?? role.location}</p>
              </details>
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
