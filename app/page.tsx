'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X, Plus, MoveUpRight } from 'lucide-react';

const projects = [
  { n: '01', name: 'DTRICHO', description: 'A performance-led patient acquisition ecosystem.', type: 'Healthcare · Growth Strategy', theme: 'hair', label: 'GROWTH / 2025', cover: '/images/work/dtricho.webp', number: '01' },
  { n: '02', name: 'RAC GLOBAL', description: 'Building visibility through brand, content and experience.', type: 'Brand · Creative Direction', theme: 'rac', label: 'BRAND / 2026', cover: '/images/work/rac-global.webp', number: '02' },
  { n: '03', name: 'BVOLV FITNESS', description: 'A local growth strategy for an ambitious fitness brand.', type: 'Positioning · Activation', theme: 'bvolv', label: 'STRATEGY / 2026', cover: '/images/work/bvolv-fitness.webp', number: '03' },
  { n: '04', name: 'D2C PHARMA LOGISTICS', description: 'Scaling rural order fulfillment through warehouse automation and a redesigned India Post workflow.', type: 'Operations · Case Study', theme: 'hair', label: 'OPERATIONS / CASE STUDY', cover: '/images/work/pharma-logistics.webp', number: '04', href: '/work/pharmaceutical-logistics-optimization' },
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
  const [year, setYear] = useState('');
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <div className="site-shell" id="top">
      <header className="site-header wrap">
        <a href="#top" className="brand" aria-label="Home"><span className="brand-symbol">h<span className="brand-dot">.</span></span><span className="brand-caption">HISHAM<br/>ILYAS</span></a>
        <nav id="main-navigation" className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-contact" href="#contact">LET'S CONNECT <ArrowUpRight size={16}/></a>
        <button className="menu-toggle" aria-controls="main-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24}/> : <Menu size={24}/>}</button>
      </header>

      <main>
        <section className="hero wrap" aria-labelledby="hero-heading">
          <div className="hero-main">
            <div className="hero-left">
              <p className="eyebrow">Marketing Strategist &amp; Creative Leader</p>
              <h1 id="hero-heading">Hisham<br/><em>Ilyas<span className="hero-period">.</span></em></h1>
              <p className="hero-description">I bring brand strategy, creative direction and performance marketing together to help businesses grow.</p>
              <div className="hero-actions">
                <a className="hero-primary" href="#work">View selected work <ArrowDownRight size={19} aria-hidden="true" /></a>
                <a className="hero-secondary" href="#contact">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
              <p className="availability"><span className="status-dot" /> Open to marketing leadership roles in Qatar and the GCC</p>
            </div>
            <div className="hero-art" aria-label="Abstract creative composition representing strategy and growth" role="img">
              <div className="art-grid"/><div className="art-corner top-left">H / 26</div><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sphere"><div className="sphere-shine"/></div><div className="art-cross">✳</div><div className="art-stamp">THINK<br/>MAKE<br/>GROW<span>↗</span></div><div className="art-corner bottom-right">STRATEGY IN MOTION — 001</div>
            </div>
          </div>
        </section>

        <section className="intro wrap" id="about"><div className="section-index"><span className="index-dot"/> 01 / WHO I AM</div><div className="intro-body"><h2>I connect the <span className="soft">big picture</span> with the <span className="underline-accent">small details.</span></h2><div className="intro-bottom"><p>My work began with hands-on creative execution and grew into marketing strategy and leadership. Today I connect positioning and campaign direction with the practical work of launching, measuring and improving them. My portfolio spans healthcare, fitness and brand development.</p><a href="#expertise" className="text-link">MORE ABOUT MY APPROACH <ArrowUpRight size={19}/></a></div></div></section>

        <section className="work-section wrap" id="work"><div className="section-heading"><div><div className="section-index"><span className="index-dot"/> 02 / PORTFOLIO</div><h2>Selected <em>work.</em></h2></div><p>Projects across brand strategy, creative direction, customer acquisition and operations.</p></div><div className="projects">{projects.map((project) => <article className="project" key={project.n}><div className={`project-visual ${project.theme} project-photo`}><span className="project-visual-top">{project.label}</span><Image src={project.cover} alt="" fill sizes="(max-width: 760px) calc(100vw - 44px), 45vw" /><span className="project-visual-bottom">MH — SELECTED WORK <span>{project.number} / {String(projects.length).padStart(2, '0')}</span></span></div><div className="project-info"><div><span className="project-category">{project.type}</span><h3>{project.href ? <Link href={project.href} className="project-link">{project.name}</Link> : project.name}</h3><p>{project.description}</p></div>{project.href && <span className="project-icon" aria-hidden="true"><ArrowUpRight size={23}/></span>}</div></article>)}</div><p className="project-note">Project images are illustrative.</p></section>

        <section className="expertise-section" id="expertise"><div className="wrap expertise-inner"><div className="expertise-head"><div className="section-index light-index"><span className="index-dot"/> 03 / WHAT I DO</div><h2>My toolkit is <em>connected.</em></h2><p>I work across five disciplines, from defining the brief to reviewing what the work achieved.</p></div><div className="service-list">{services.map((service, i) => <div className={`service-row ${openService === i ? 'service-active' : ''}`} key={service.num}><button aria-expanded={openService === i} onClick={() => setOpenService(openService === i ? null : i)}><span className="service-num">{service.num}</span><span className="service-title">{service.name}</span><span className="service-toggle">{openService === i ? <X size={20}/> : <Plus size={20}/>}</span></button>{openService === i && <p className="service-desc">{service.desc}</p>}</div>)}</div></div></section>

        <section className="statement wrap"><span className="section-index"><span className="index-dot"/> 04 / HOW I WORK</span><p>Start with the business problem. Build the work around it. <em>Measure what changes.</em></p><div className="statement-sign">— HISHAM / THINK → BUILD → MEASURE</div></section>

        <section className="contact" id="contact"><div className="wrap contact-inner"><div className="section-index light-index"><span className="index-dot"/> HAVE SOMETHING IN MIND?</div><h2>Let’s make<br/><em>it matter.</em><span className="contact-star">✳</span></h2><div className="contact-bottom"><p>I’m interested in marketing leadership roles in Qatar and across the GCC, as well as consulting and creative collaborations.</p>{(contactEmail || linkedinUrl || cvUrl) && (
          <div>
            {contactEmail && <a className="contact-button" href={`mailto:${contactEmail}`}>EMAIL ME <MoveUpRight size={23}/></a>}
            {linkedinUrl && <a className="text-link" href={linkedinUrl}>LINKEDIN <ArrowUpRight size={19}/></a>}
            {cvUrl && <a className="text-link" href={cvUrl} download>DOWNLOAD CV <ArrowDownRight size={19}/></a>}
          </div>
        )}</div></div></section>
      </main>
      <footer className="footer wrap"><div className="footer-mark">h<span>.</span></div><span>© {year || '2026'} HISHAM ILYAS</span><span>MARKETING STRATEGIST & CREATIVE LEADER</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
