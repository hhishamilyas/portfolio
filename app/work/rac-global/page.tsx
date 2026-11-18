import type { Metadata } from 'next';
import ProjectOverview from '../_components/ProjectOverview';
import { racGlobal } from './project';

export const metadata: Metadata = { title: 'RAC Global | Hisham Ilyas', description: racGlobal.description };

export default function RacGlobalPage() {
  return <ProjectOverview title="RAC Global" project={racGlobal} />;
}
