'use client';

import Image from 'next/image';
import Link from 'next/link';
import hero from './home-hero.module.css';
import { useEffect, useState } from 'react';
import { services } from './expertise/services';
import ProjectGrid from './work/_components/ProjectGrid';
import { projects } from './work/projects';
import { ArrowDown, ArrowDownRight, ArrowUpRight, X, Plus, MoveUpRight } from 'lucide-react';

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const cvUrl = process.env.NEXT_PUBLIC_CV_URL;

export default function Home() {
  const [openService, setOpenService] = useState<number | null>(0);
  const [year, setYear] = useState('');
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <div className="site-shell">
      <main>
        <section className={`wrap ${hero.hero}`} aria-labelledby="hero-heading">
          <div className={hero.content}>
            <dl className={hero.highlights}>
              <div><dt>Featured projects</dt><dd>{String(projects.length).padStart(2, '0')}</dd></div>
              <div><dt>Lower CPL at DTricho</dt><dd>40%</dd></div>
            </dl>
            <div className={hero.intro}>
              <h1 id="hero-heading">Hello<span>.</span> <span className={hero.srOnly}>I’m Hisham Ilyas.</span></h1>
              <p className={hero.name} aria-hidden="true">I’m Hisham Ilyas.</p>
              <p className={hero.role}>Marketing strategist &amp; creative leader</p>
            </div>
            <a className={hero.workLink} href="#work">Explore selected work <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <div className={hero.portrait}>
            <Image
              src="/images/hisham-portrait.webp"
              alt="Black-and-white portrait of Hisham Ilyas"
              fill
              sizes="(max-width: 740px) calc(100vw - 44px), (max-width: 1440px) 48vw, 685px"
              priority
            />
          </div>
        </section>

        <section className="intro wrap" id="about"><div className="section-index"><span className="index-dot"/> 01 / WHO I AM</div><div className="intro-body"><h2>I connect the <span className="soft">big picture</span> with the <span className="underline-accent">small details.</span></h2><div className="intro-bottom"><p>My work began with hands-on creative execution and grew into marketing strategy and leadership. Today I connect positioning and campaign direction with the practical work of launching, measuring and improving them. My portfolio spans healthcare, fitness and brand development.</p><Link href="/about" className="text-link">MORE ABOUT MY APPROACH <ArrowUpRight size={19} aria-hidden="true" /></Link></div></div></section>

        <section className="work-section wrap" id="work">
          <div className="section-heading">
            <div><div className="section-index"><span className="index-dot"/> 02 / PORTFOLIO</div><h2>Selected <em>work.</em></h2></div>
            <p>Projects across brand strategy, creative direction, customer acquisition and operations.</p>
          </div>
          <ProjectGrid />
          <p className="project-note">Project images are illustrative.</p>
          <Link className="text-link" href="/work" style={{ display: 'inline-flex' }}>VIEW ALL WORK <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </section>

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
