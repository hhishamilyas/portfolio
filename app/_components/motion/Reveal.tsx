'use client';

import type { ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { motionTokens } from './tokens';

const elements = {
  div: m.div,
  dl: m.dl,
  article: m.article,
  header: m.header,
  section: m.section,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  p: m.p,
  span: m.span,
};

type RevealProps = {
  as?: keyof typeof elements;
  children: ReactNode;
  className?: string;
  id?: string;
  'aria-hidden'?: boolean;
  trigger?: 'mount' | 'view';
  effect?: 'fade' | 'rise' | 'hero-text';
  staggerIndex?: number;
};

export default function Reveal({
  as = 'div',
  children,
  trigger = 'view',
  effect = 'rise',
  staggerIndex = 0,
  ...attributes
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Element = elements[as];
  const isHeroText = effect === 'hero-text';
  const timing = isHeroText ? motionTokens.heroText : motionTokens;
  const opacity = isHeroText ? motionTokens.heroText.opacity : 0.86;
  const duration = isHeroText
    ? motionTokens.heroText.duration
    : trigger === 'view'
      ? motionTokens.duration.reveal
      : effect === 'fade' ? motionTokens.duration.page : motionTokens.duration.entrance;
  const target = reduceMotion
    ? undefined
    : effect === 'fade'
      ? { opacity: [opacity, 1] }
      : { opacity: [opacity, 1], y: [timing.rise, 0] };

  return (
    <Element
      {...attributes}
      initial={false}
      animate={trigger === 'mount' ? target : undefined}
      whileInView={trigger === 'view' ? target : undefined}
      viewport={{ once: true, amount: 'some' }}
      transition={{
        ease: motionTokens.ease,
        duration,
        delay: Math.min(Math.max(staggerIndex, 0) * timing.stagger, timing.maxStaggerDelay),
      }}
    >
      {children}
    </Element>
  );
}

export function AnimatedHeading(props: Omit<RevealProps, 'as'> & { as?: 'h1' | 'h2' | 'h3' }) {
  return <Reveal {...props} as={props.as ?? 'h2'} />;
}
