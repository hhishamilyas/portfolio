import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../projects';
import Reveal from '../../_components/motion/Reveal';

export default function ProjectGrid({ heading: Heading = 'h3' }: { heading?: 'h2' | 'h3' }) {
  const total = String(projects.length).padStart(2, '0');

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Reveal as="article" className="project motion-project" key={project.href} staggerIndex={index}>
          <div className={`project-visual ${project.theme} project-photo`}>
            <span className="project-visual-top">{project.label}</span>
            <Image src={project.cover} alt="" fill sizes="(max-width: 760px) calc(100vw - 44px), 45vw" />
            <span className="project-visual-bottom" aria-hidden="true">
              MH — SELECTED WORK <span>{String(index + 1).padStart(2, '0')} / {total}</span>
            </span>
          </div>
          <div className="project-info">
            <div>
              <span className="project-category">{project.type}</span>
              <Heading><Link href={project.href} className="project-link">{project.name}</Link></Heading>
              <p>{project.description}</p>
            </div>
            <span className="project-icon" aria-hidden="true"><ArrowUpRight size={23} /></span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
