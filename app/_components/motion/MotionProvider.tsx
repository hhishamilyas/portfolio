'use client';

import type { ReactNode } from 'react';
import { LazyMotion } from 'motion/react';

const loadFeatures = () => import('./features').then(module => module.default);

export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={loadFeatures} strict>{children}</LazyMotion>;
}
