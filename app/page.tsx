'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, ChevronDown, Menu, X, Plus, Linkedin, Mail, MoveUpRight } from 'lucide-react';

const projects = [
  { n: '01', name: 'DTRICHO', description: 'A performance-led patient acquisition ecosystem.', type: 'Healthcare · Growth Strategy', theme: 'hair', label: 'GROWTH / 2025', monogram: 'D', number: '01' },
  { n: '02', name: 'RAC GLOBAL', description: 'Building visibility through brand, content and experience.', type: 'Brand · Creative Direction', theme: 'rac', label: 'BRAND / 2026', monogram: 'R', number: '02' },
  { n: '03', name: 'BVOLV FITNESS', description: 'A local growth strategy for an ambitious fitness brand.', type: 'Positioning · Activation', theme: 'bvolv', label: 'STRATEGY / 2026', monogram: 'B', number: '03' },
];

const services = [
  { num: '01', name: 'Brand Strategy', desc: 'Positioning, brand architecture, storytelling, audience research and go-to-market direction.' },
  { num: '02', name: 'Performance & Growth', desc: 'Paid media, conversion journeys, lead generation, CRM and revenue-focused measurement.' },
  { num: '03', name: 'Creative Direction', desc: 'Campaign ideas, visual systems, content direction and cross-channel creative execution.' },
  { num: '04', name: 'Marketing Operations', desc: 'Team leadership, workflow design, reporting frameworks, automation and scalable systems.' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<number | null>(0);
  const [year, setYear] = useState('');
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <div className="site-shell" id="top">
      <header className="site-header wrap">
        <a href="#top" className="brand" aria-label="Home"><span className="brand-symbol">h<span className="brand-dot">.</span></span><span className="brand-caption">MUHAMMAD<br/>HISHAM</span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-contact" href="mailto:hello@example.com?subject=Let's%20collaborate">LET'S CONNECT <ArrowUpRight size={16}/></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24}/> : <Menu size={24}/>}</button>
      </header>

      <main>
        <section className="hero wrap" aria-labelledby="hero-heading">
          <div className="hero-topline"><div className="availability"><span className="status-dot"/> OPEN TO MEANINGFUL OPPORTUNITIES</div><span className="edition">INDEPENDENT THINKING. CONNECTED EXECUTION.</span></div>
          <div className="hero-main">
            <div className="hero-left">
              <p className="eyebrow">BRAND STRATEGY <span>✳</span> CREATIVE <span>✳</span> GROWTH</p>
              <h1 id="hero-heading">Ideas into<br/><em>impact<span className="hero-period">.</span></em></h1>
              <div className="hero-bottom"><p>I’m <strong>Muhammad Hisham.</strong> A brand and growth strategist working at the intersection of <strong>strategy, creativity and performance.</strong></p><a href="#work" className="round-arrow" aria-label="Explore projects"><ArrowDownRight size={34} strokeWidth={1.5}/></a></div>
            </div>
            <div className="hero-art" aria-label="Abstract creative composition representing strategy and growth" role="img">
              <div className="art-grid"/><div className="art-corner top-left">H / 26</div><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sphere"><div className="sphere-shine"/></div><div className="art-cross">✳</div><div className="art-stamp">THINK<br/>MAKE<br/>GROW<span>↗</span></div><div className="art-corner bottom-right">STRATEGY IN MOTION — 001</div>
            </div>
          </div>
          <div className="hero-foot"><span>SCROLL TO EXPLORE <ArrowRight size={14}/></span><span>BASED IN INDIA · WORKING ACROSS MARKETS</span><span>01 / 04</span></div>
        </section>

        <section className="marquee" aria-label="Focus areas"><div className="marquee-track">{Array.from({length: 4}).map((_, i) => <span key={i}>BRANDS <Asterisk/> CAMPAIGNS <Asterisk/> EXPERIENCES <Asterisk/> GROWTH <Asterisk/></span>)}</div></section>

        <section className="intro wrap" id="about"><div className="section-index"><span className="index-dot"/> 01 / WHO I AM</div><div className="intro-body"><h2>I connect the <span className="soft">big picture</span> with the <span className="underline-accent">small details.</span></h2><div className="intro-bottom"><p>From shaping a brand’s story to optimising the last step of a conversion funnel, I believe good marketing connects bold thinking with measurable action. My work spans strategy, performance, creative leadership and the systems that make it all work.</p><a href="#expertise" className="text-link">MORE ABOUT MY APPROACH <ArrowUpRight size={19}/></a></div></div></section>

        <section className="work-section wrap" id="work"><div className="section-heading"><div><div className="section-index"><span className="index-dot"/> 02 / THE WORK</div><h2>Selected <em>work.</em></h2></div><p>A few projects that show how strategy<br/>becomes something tangible.</p></div><div className="projects">{projects.map((project) => <article className="project" key={project.n}><div className={`project-visual ${project.theme}`}><span className="project-visual-top">{project.label}</span><div className="project-graphic"><span className="project-mono">{project.monogram}</span><span className="project-shape"/></div><span className="project-visual-bottom">MH — SELECTED WORK <span>{project.number} / 03</span></span></div><div className="project-info"><div><span className="project-category">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-icon"><ArrowUpRight size={23}/></span></div></article>)}</div><p className="project-note">Project artwork is illustrative. Replace with approved case-study visuals and verified outcomes.</p></section>

        <section className="expertise-section" id="expertise"><div className="wrap expertise-inner"><div className="expertise-head"><div className="section-index light-index"><span className="index-dot"/> 03 / WHAT I DO</div><h2>My toolkit is <em>connected.</em></h2><p>Not a collection of disconnected services. A joined-up approach to building brands and moving businesses forward.</p></div><div className="service-list">{services.map((service, i) => <div className={`service-row ${openService === i ? 'service-active' : ''}`} key={service.num}><button aria-expanded={openService === i} onClick={() => setOpenService(openService === i ? null : i)}><span className="service-num">{service.num}</span><span className="service-title">{service.name}</span><span className="service-toggle">{openService === i ? <X size={20}/> : <Plus size={20}/>}</span></button>{openService === i && <p className="service-desc">{service.desc}</p>}</div>)}</div></div></section>

        <section className="statement wrap"><span className="section-index"><span className="index-dot"/> 04 / MY PHILOSOPHY</span><p>“Good strategy means nothing if it never makes it <em>out into the world.</em>”</p><div className="statement-sign">— HISHAM / THINK → BUILD → MEASURE</div></section>

        <section className="contact" id="contact"><div className="wrap contact-inner"><div className="section-index light-index"><span className="index-dot"/> HAVE SOMETHING IN MIND?</div><h2>Let’s make<br/><em>it matter.</em><span className="contact-star">✳</span></h2><div className="contact-bottom"><p>Interesting challenge? Ambitious brand? New opportunity? I’d love to hear about it.</p><a className="contact-button" href="mailto:hello@example.com?subject=Let's%20work%20together">START A CONVERSATION <MoveUpRight size={23}/></a></div></div></section>
      </main>
      <footer className="footer wrap"><div className="footer-mark">h<span>.</span></div><span>© {year || '2026'} MUHAMMAD HISHAM</span><span>DESIGNED TO MAKE AN IMPACT.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
