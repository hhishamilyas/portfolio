'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, BarChart3, Compass, Layers3, MousePointer2, Palette, RotateCcw } from 'lucide-react';
import { services } from './services';
import styles from './journey.module.css';

const [strategy, creative, growth, analytics, digital] = services;

const steps = [
  {
    service: strategy, label: 'Set the direction', icon: Compass,
    title: 'Agree on what growth should look like.',
    work: 'Define who you need to reach, why they should choose you, and which business goal should guide the budget.',
    impact: 'Your team can prioritize the campaigns and markets that support the same growth goal.',
    measure: 'One agreed success metric and a baseline to compare against.',
  },
  {
    service: creative, label: 'Shape the message', icon: Palette,
    title: 'Give customers a reason to choose you.',
    work: 'Turn your positioning into campaign concepts, visual direction, and messaging that answers what customers care about.',
    impact: 'Prospects get a clearer, more consistent reason to act across ads, content, and sales conversations.',
    measure: 'Which messages generate the most relevant enquiries.',
  },
  {
    service: digital, label: 'Build the experience', icon: Layers3,
    title: 'Make the next step easy to take.',
    work: 'Match the landing page to the campaign, simplify the form or booking flow, and clarify what happens after an enquiry.',
    impact: 'Interested visitors can move from the ad to the action without getting lost or repeating information.',
    measure: 'Where visitors drop off and how many complete the key action.',
  },
  {
    service: growth, label: 'Grow demand', icon: MousePointer2,
    title: 'Find what brings in the right customers.',
    work: 'Test audiences, offers, and creative in paid campaigns. Compare what each combination brings in before moving spend.',
    impact: 'Budget decisions can reflect lead quality and customer acquisition, alongside the cost of generating interest.',
    measure: 'Cost per qualified lead and the share that progress to a consultation or sale.',
  },
  {
    service: analytics, label: 'Measure and improve', icon: BarChart3,
    title: 'Follow the results through to the business.',
    work: 'Connect campaign tracking with CRM stages and reporting, so marketing and sales can trace what happened after each enquiry.',
    impact: 'Teams can see which campaigns produce useful opportunities and where follow-up or conversion needs attention.',
    measure: 'Lead-to-sale conversion and pipeline attributed to each source.',
  },
];

export default function ExpertiseJourney() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;
  const isLast = active === steps.length - 1;

  return (
    <section className={styles.journey} aria-labelledby="journey-heading">
      <div className={styles.intro}>
        <h2 id="journey-heading">Your growth journey</h2>
        <p>Choose a step or follow the cards in order.</p>
      </div>

      <ol className={styles.steps} aria-label="Journey steps">
        {steps.map(({ label }, index) => (
          <li key={label}>
            <button
              type="button"
              aria-current={index === active ? 'step' : undefined}
              aria-controls="journey-card"
              onClick={() => setActive(index)}
            >
              <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
              {label}
            </button>
          </li>
        ))}
      </ol>

      <div className={styles.deck} id="journey-card">
        <article className={styles.card} key={active}>
          <header className={styles.cardHeader}>
            <span className={styles.icon}><Icon size={25} aria-hidden="true" /></span>
            <p>{step.service.name}</p>
            <h3>{step.title}</h3>
          </header>
          <dl className={styles.outcomes}>
            <div><dt>What we’ll do</dt><dd>{step.work}</dd></div>
            <div><dt>What changes for you</dt><dd>{step.impact}</dd></div>
            <div><dt>How we’ll measure it</dt><dd>{step.measure}</dd></div>
          </dl>
        </article>
      </div>

      <div className={styles.controls}>
        <button type="button" onClick={() => setActive(index => Math.max(0, index - 1))} disabled={active === 0}>
          <ArrowLeft size={17} aria-hidden="true" /> Previous
        </button>
        <span className={styles.progress} aria-live="polite" aria-atomic="true">Step {active + 1} of {steps.length}<span className={styles.srOnly}>: {step.label}</span></span>
        <button className={styles.next} type="button" onClick={() => setActive(index => (index + 1) % steps.length)}>
          {isLast ? <>Start again <RotateCcw size={17} aria-hidden="true" /></> : <>Next step <ArrowRight size={17} aria-hidden="true" /></>}
        </button>
      </div>
    </section>
  );
}
