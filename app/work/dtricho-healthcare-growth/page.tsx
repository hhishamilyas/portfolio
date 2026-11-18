import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import layout from '../pharmaceutical-logistics-optimization/case-study.module.css';
import styles from './dtricho.module.css';

const title = 'How DTricho cut Meta Ads cost per lead by 40%';
const description = 'A clinic acquisition case study covering Meta Ads segmentation, weekly creative rotation, WhatsApp landing pages, retargeting, and Zoho CRM tracking.';

export const metadata: Metadata = {
  title: `${title} | Hisham Ilyas`,
  description,
  openGraph: { title, description, type: 'article' },
};

const sections = [
  { id: 'overview', label: 'Client overview' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'strategy', label: 'Strategy & execution' },
  { id: 'results', label: 'Results & impact' },
  { id: 'takeaways', label: 'Key takeaways' },
];

const results = [
  { metric: 'Cost per lead', comparison: '100 → 60 (indexed)', change: '40% lower in six weeks' },
  { metric: 'Lead-to-consultation rate', comparison: '20% → 32%', change: '+12 percentage points' },
  { metric: 'WhatsApp opt-in rate', comparison: 'Relative change reported', change: '35% higher' },
  { metric: 'Retargeting ROI', comparison: 'Relative change reported', change: '50% higher' },
];

const stages = [
  { stage: 'Acquisition', execution: 'Segmented Meta Ads and weekly creative rotation' },
  { stage: 'Lead capture', execution: 'Local landing pages with shorter forms and an instant WhatsApp option' },
  { stage: 'Re-engagement', execution: 'Retargeting by video views, form activity, and website visits' },
  { stage: 'Measurement', execution: 'Zoho CRM tracking from lead source to consultation and treatment' },
];

function ComparisonChart({ title, before, after, max, unit, note }: {
  title: string;
  before: number;
  after: number;
  max: number;
  unit: string;
  note: string;
}) {
  return (
    <figure className={styles.chart}>
      <figcaption>{title}</figcaption>
      <dl>
        {[{ label: 'Before', value: before }, { label: 'After', value: after }].map(({ label, value }) => (
          <div className={styles.barRow} key={label}>
            <dt>{label}</dt>
            <dd>
              <span className={styles.track} aria-hidden="true">
                <span className={label === 'After' ? styles.after : styles.before} style={{ width: `${value / max * 100}%` }} />
              </span>
              <strong>{value}{unit}</strong>
            </dd>
          </div>
        ))}
      </dl>
      <p>{note}</p>
    </figure>
  );
}

export default function DTrichoCaseStudy() {
  return (
    <main className={`wrap ${layout.page}`}>
      <Link className={layout.back} href="/#work"><ArrowLeft size={18} aria-hidden="true" /> Selected work</Link>
      <article>
        <header className={layout.header}>
          <p className="section-index"><span className="index-dot" /> DTRICHO · HEALTHCARE GROWTH</p>
          <h1>{title}</h1>
          <p className={layout.deck}>As CMO, I restructured DTricho’s Meta Ads and clinic acquisition funnel. Within six weeks, cost per lead fell by 40% and the lead-to-consultation rate rose from 20% to 32%.</p>
          <dl className={layout.metrics}>
            <div><dt>Cost per lead in six weeks</dt><dd>−40%</dd></div>
            <div><dt>Lead-to-consultation rate</dt><dd>32%</dd></div>
            <div><dt>Retargeting ROI uplift</dt><dd>+50%</dd></div>
          </dl>
        </header>
        <figure className={`${layout.figure} ${layout.heroFigure}`}>
          <Image src="/images/work/dtricho.webp" alt="A scalp imaging instrument beside a tablet" width={1120} height={630} sizes="(max-width: 760px) 90vw, (max-width: 1440px) 89vw, 1280px" priority />
          <figcaption>Illustrative image of a trichology consultation setup.</figcaption>
        </figure>

        <div className={layout.readingLayout}>
          <nav className={layout.contents} aria-label="Case study sections">
            <p>On this page</p>
            <ul>{sections.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
          </nav>

          <div className={layout.prose}>
            <section id="overview">
              <h2>Client overview</h2>
              <p>DTricho used digital advertising to build awareness and bring prospective patients into its clinics. Meta Ads on Facebook and Instagram were its primary acquisition channel, but rising cost per lead (CPL) and low lead-to-consultation conversion were threatening profitability.</p>
            </section>

            <section id="challenges">
              <h2>Challenges</h2>
              <ul>
                <li>Broad demographic targeting generated irrelevant or low-quality leads.</li>
                <li>Cost per lead and customer acquisition cost were too high to sustain at scale.</li>
                <li>Limited creative testing led to ad fatigue and lower engagement.</li>
                <li>Disconnected ad and CRM data made it difficult to measure what happened after lead capture.</li>
              </ul>
            </section>

            <section id="strategy">
              <h2>Strategy &amp; execution</h2>
              <h3>Segmented campaign structure</h3>
              <p>Built interest-based, behavior-based, and location-specific audiences. Ran parallel campaigns with Leads, Conversions, and Traffic objectives to compare performance.</p>
              <h3>Weekly creative rotation</h3>
              <p>Planned reels, carousels, testimonial videos, and before-and-after images on a weekly calendar. Used doctor-led educational videos for high-intent audiences and testimonials for first-time visitors. Reviewed performance every seven days to rotate or retire creative before fatigue set in.</p>
              <h3>Localized landing pages and WhatsApp</h3>
              <p>Simplified forms, improved call-to-action placement, and added an instant WhatsApp option for people who preferred a conversation. Built localized landing pages for Coimbatore and Salem.</p>
              <h3>Retargeting and mid-funnel engagement</h3>
              <p>Built retargeting audiences from video views, form interactions, and website visits. Used time-sensitive messaging such as limited appointment slots and ran engagement campaigns before conversion campaigns.</p>
              <h3>Zoho CRM integration</h3>
              <p>Connected Meta Ads to Zoho CRM to track each lead’s source and lifecycle stage. Used lead quality and treatment uptake to refine audience exclusions and budget allocation.</p>
              <table className={styles.summaryTable}>
                <caption>How the acquisition funnel was set up</caption>
                <thead><tr><th scope="col">Stage</th><th scope="col">What changed</th></tr></thead>
                <tbody>{stages.map(({ stage, execution }) => <tr key={stage}><th scope="row">{stage}</th><td>{execution}</td></tr>)}</tbody>
              </table>
            </section>

            <section id="results">
              <h2>Results &amp; impact</h2>
              <p>The new setup improved campaign return on ad spend and raised the share of leads that reached consultation, supporting clinic revenue. It also became a repeatable framework for both clinic branches.</p>
              <div className={styles.charts}>
                <ComparisonChart title="Cost per lead" before={100} after={60} max={100} unit="" note="Index, 0–100. Baseline set to 100. Actual cost amounts were not provided." />
                <ComparisonChart title="Lead-to-consultation rate" before={20} after={32} max={40} unit="%" note="Share of leads reaching consultation. Chart scale 0–40%." />
              </div>
              <table className={styles.summaryTable}>
                <caption>Reported campaign outcomes</caption>
                <thead><tr><th scope="col">Metric</th><th scope="col">Comparison</th><th scope="col">Change</th></tr></thead>
                <tbody>{results.map(({ metric, comparison, change }) => <tr key={metric}><th scope="row">{metric}</th><td>{comparison}</td><td>{change}</td></tr>)}</tbody>
              </table>
            </section>

            <section id="takeaways">
              <h2>Key takeaways</h2>
              <ul>
                <li>Segment targeting to improve lead quality.</li>
                <li>Set a regular creative review cadence to manage fatigue.</li>
                <li>Offer WhatsApp as an alternative to a form to reduce friction.</li>
                <li>Match retargeting messages to audience intent and timing.</li>
                <li>Use CRM outcomes to improve campaign decisions and spend efficiency.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <footer className={layout.footer}>
        <Link className={layout.back} href="/#work"><ArrowLeft size={18} aria-hidden="true" /> Selected work</Link>
        <Link className={layout.back} href="/#contact">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </footer>
    </main>
  );
}
