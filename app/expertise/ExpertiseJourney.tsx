'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { PointerEvent } from 'react';
import { BarChart3, Compass, Layers3, MousePointer2, Palette } from 'lucide-react';
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

function moveCard(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== 'mouse') return;
  const deck = event.currentTarget;
  const bounds = deck.getBoundingClientRect();
  const x = Math.max(-1, Math.min(1, 2 * (event.clientX - bounds.left) / bounds.width - 1));
  const y = Math.max(-1, Math.min(1, 2 * (event.clientY - bounds.top) / bounds.height - 1));

  deck.style.setProperty('--card-x', String(x));
  deck.style.setProperty('--card-y', String(y));
}

function resetCard(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.removeProperty('--card-x');
  event.currentTarget.style.removeProperty('--card-y');
}

export default function ExpertiseJourney() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.journey} aria-labelledby="journey-heading">
      <div className={styles.intro}>
        <h2 id="journey-heading">Your growth journey</h2>
        <p>Scroll through the five steps, or jump straight to one.</p>
      </div>

      <ol className={styles.steps} aria-label="Journey steps">
        {steps.map(({ label, service }, index) => (
          <li key={service.num}>
            <a href={`#journey-${service.num}`}>
              <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
              {label}
            </a>
          </li>
        ))}
      </ol>

      <div className={styles.cards}>
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              className={styles.reveal}
              id={`journey-${step.service.num}`}
              key={step.service.num}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index / 10, ease: 'easeOut' }}
            >
              <div className={styles.deck} onPointerMove={moveCard} onPointerLeave={resetCard} onPointerCancel={resetCard}>
                <article className={styles.card}>
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
