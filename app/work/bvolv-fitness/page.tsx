import type { Metadata } from 'next';
import ProjectOverview from '../_components/ProjectOverview';
import { bvolvFitness } from './project';

export const metadata: Metadata = { title: 'BVOLV Fitness | Hisham Ilyas', description: bvolvFitness.description };

export default function BvolvFitnessPage() {
  return <ProjectOverview title="BVOLV Fitness" project={bvolvFitness} />;
}
