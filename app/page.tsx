'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X, Plus, Minus } from 'lucide-react';
import styles from './home.module.css';

const projects = [
  { name: 'DTricho', description: 'A performance-led patient acquisition ecosystem.', type: 'Healthcare · Growth Strategy', cover: '/images/work/dtricho.webp' },
  { name: 'RAC Global', description: 'Building visibility through brand, content and experience.', type: 'Brand · Creative Direction', cover: '/images/work/rac-global.webp' },
  { name: 'BVOLV Fitness', description: 'A local growth strategy for an ambitious fitness brand.', type: 'Positioning · Activation', cover: '/images/work/bvolv-fitness.webp' },
  { name: 'D2C Pharma Logistics', description: 'Scaling rural order fulfillment through warehouse automation and a redesigned India Post workflow.', type: 'Operations · Case Study', cover: '/images/work/pharma-logistics.webp', href: '/work/pharmaceutical-logistics-optimization' },
];

const services = [
  { num: '01', name: 'Strategy & Leadership', desc: 'Shape positioning, go-to-market plans and integrated campaigns. Align teams and stakeholders around priorities, budgets and measures of success.' },
  { num: '02', name: 'Brand & Creative', desc: 'Translate strategy into creative concepts, visual identities and campaign content. My contribution can span hands-on design or creative direction, depending on the project.' },
  { num: '03', name: 'Performance & Growth', desc: 'Connect paid media and lead generation to conversion journeys. Use testing and measurement to find where campaigns and landing pages can improve.' },
  { num: '04', name: 'Marketing Technology & Analytics', desc: 'Make lead management and measurement more useful by connecting CRM workflows, automation, conversion tracking and reporting.' },
  { num: '05', name: 'Digital Experiences & Content', desc: 'Plan websites, landing pages and content around what people need to find, understand and do. Collaborate on UX and production to carry the plan through.' },
];

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const cvUrl = process.env.NEXT_PUBLIC_CV_URL;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<number | null>(0);
  const [year, setYear] = useState('2026');

  useEffect(() => setYear(String(new Date().getFullYear())), []);

  const navigation = [
    { label: 'Selected work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
  ];

  return (
    <div className={styles.home} id="top">
      <header className={`${styles.frame} ${styles.header}`}>
        <a href="#top" className={styles.wordmark}>Hisham Ilyas<span>.</span></a>
        <nav id="main-navigation" className={menuOpen ? styles.navOpen : styles.nav} aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className={styles.headerContact} href="#contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a>
        <button
          className={styles.menu}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main className={styles.frame}>
        <section className={styles.hero} aria-labelledby="hero-heading">
          <p className={styles.role}>Marketing strategist &amp; creative leader</p>
          <h1 id="hero-heading">Hisham Ilyas<span>.</span></h1>
          <div className={styles.heroDetail}>
            <p>I bring brand strategy, creative direction and performance marketing together to help businesses grow.</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#work">View selected work <ArrowDownRight size={18} aria-hidden="true" /></a>
              <a className={styles.inlineLink} href="#contact">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <p className={styles.availability}><span aria-hidden="true" /> Open to marketing leadership roles in Qatar and the GCC</p>
        </section>

        <section className={styles.work} id="work" aria-labelledby="work-heading">
          <div className={styles.sectionHeader}>
            <h2 id="work-heading">Selected work</h2>
            <p>Brand strategy, creative direction, customer acquisition and operations.</p>
          </div>
          <div className={styles.projects}>
            {projects.map(project => (
              <article className={styles.project} key={project.name}>
                <div className={styles.cover}>
                  <Image
                    src={project.cover}
                    alt=""
                    fill
                    sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1256px) calc(50vw - 59px), 569px"
                  />
                </div>
                <div className={styles.projectDetails}>
                  <p className={styles.category}>{project.type}</p>
                  <h3>{project.href ? <Link href={project.href} className={styles.projectLink}>{project.name}</Link> : project.name}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  {project.href && <span className={styles.projectArrow} aria-hidden="true"><ArrowUpRight size={21} /></span>}
                </div>
              </article>
            ))}
          </div>
          <p className={styles.imageCredit}>Project images are illustrative.</p>
        </section>

        <section className={styles.splitSection} id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <div className={styles.aboutBody}>
            <p className={styles.aboutLead}>I connect strategy with execution.</p>
            <p>My work began with hands-on creative execution and grew into marketing strategy and leadership. Today I connect positioning and campaign direction with the practical work of launching, measuring and improving them. My portfolio spans healthcare, fitness and brand development.</p>
            <p>Start with the business problem. Build the work around it. Measure what changes.</p>
          </div>
        </section>

        <section className={styles.splitSection} id="expertise" aria-labelledby="expertise-heading">
          <h2 id="expertise-heading">Expertise</h2>
          <div className={styles.services}>
            {services.map((service, index) => (
              <div className={styles.service} key={service.num}>
                <h3>
                  <button
                    aria-expanded={openService === index}
                    aria-controls={`service-${service.num}`}
                    onClick={() => setOpenService(openService === index ? null : index)}
                  >
                    {service.name}
                    {openService === index ? <Minus size={19} aria-hidden="true" /> : <Plus size={19} aria-hidden="true" />}
                  </button>
                </h3>
                <p id={`service-${service.num}`} hidden={openService !== index}>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Let’s talk<span>.</span></h2>
          <div>
            <p>I’m interested in marketing leadership roles in Qatar and across the GCC, as well as consulting and creative collaborations.</p>
            {(contactEmail || linkedinUrl || cvUrl) && (
              <div className={styles.contactActions}>
                {contactEmail && <a className={styles.inlineLink} href={`mailto:${contactEmail}`}>Email me <ArrowUpRight size={17} aria-hidden="true" /></a>}
                {linkedinUrl && <a className={styles.inlineLink} href={linkedinUrl}>LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>}
                {cvUrl && <a className={styles.inlineLink} href={cvUrl} download>Download CV <ArrowDownRight size={17} aria-hidden="true" /></a>}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className={`${styles.frame} ${styles.footer}`}>
        <span>© {year} Hisham Ilyas</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
