'use client';

import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import { BarChart3, Compass, Layers3, MousePointer2, Palette } from 'lucide-react';
import { services } from './services';
import styles from './journey.module.css';
import { motionTokens } from '../_components/motion/tokens';

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

const lastStep = steps.length - 1;
const inset = 16;

function getJourneyBounds(track: HTMLDivElement, stage: HTMLDivElement) {
  const top = Math.min(inset, window.innerHeight - stage.offsetHeight - inset);
  const start = window.scrollY + track.getBoundingClientRect().top - top;
  return { top, start, distance: track.offsetHeight - stage.offsetHeight };
}

export default function ExpertiseJourney() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    function updateStep() {
      if (!track || !stage) return;
      const { start, distance } = getJourneyBounds(track, stage);
      const progress = (window.scrollY - start) / distance;
      setActive(Math.max(0, Math.min(lastStep, Math.round(progress * lastStep))));
    }

    function resizeStage() {
      if (!track || !stage) return;
      stage.style.setProperty('--pin-top', `${getJourneyBounds(track, stage).top}px`);
      updateStep();
    }

    const resize = new ResizeObserver(resizeStage);
    resize.observe(stage);
    resizeStage();
    window.addEventListener('resize', resizeStage);
    window.addEventListener('scroll', updateStep, { passive: true });
    return () => {
      resize.disconnect();
      window.removeEventListener('resize', resizeStage);
      window.removeEventListener('scroll', updateStep);
    };
  }, []);

  function goToStep(index: number) {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const { start, distance } = getJourneyBounds(track, stage);
    setActive(index);
    window.scrollTo({ top: start + distance * index / lastStep, behavior: 'instant' });
  }

  return (
    <section className={styles.journey} aria-labelledby="journey-heading">
      <div className={styles.intro}>
        <h2 id="journey-heading">Your growth journey</h2>
        <p>Scroll through the five steps, or use the slider to jump ahead.</p>
      </div>

      <div className={styles.track} ref={trackRef}>
        <div className={styles.stage} ref={stageRef}>
          <div className={styles.cards} id="journey-cards">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const current = index === active;
              const direction = index < active ? -1 : 1;

              return (
                <m.div
                  className={styles.panel}
                  key={step.service.num}
                  aria-hidden={!current}
                  initial={false}
                  animate={current
                    ? { opacity: 1, y: 0, visibility: 'visible', zIndex: 1 }
                    : { opacity: 0, y: reduceMotion ? 0 : direction * motionTokens.rise, zIndex: 0, transitionEnd: { visibility: 'hidden' } }}
                  transition={{ duration: reduceMotion ? 0 : motionTokens.duration.card, ease: motionTokens.ease }}
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
                </m.div>
              );
            })}
          </div>

          <div className={styles.slider}>
            <div className={styles.sliderHeading}>
              <label htmlFor="journey-step">Explore the steps</label>
              <span aria-hidden="true">{active + 1} / {steps.length} · {steps[active].label}</span>
            </div>
            <input
              id="journey-step"
              type="range"
              min={0}
              max={lastStep}
              step={1}
              value={active}
              aria-controls="journey-cards"
              aria-valuetext={`Step ${active + 1} of ${steps.length}: ${steps[active].label}`}
              onChange={event => goToStep(event.currentTarget.valueAsNumber)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
