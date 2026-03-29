import Link from 'next/link';
import { ProjectItem } from '@/lib/types';

type LatestProjectsSectionProps = {
  data: ProjectItem[];
};

export function ProjectsSection({ data }: LatestProjectsSectionProps) {
  return (
    <section className="flex min-h-[20vh] flex-col gap-4">
      <h2 className="font-medium tracking-tight">Latest Projects</h2>
      <div className="flex flex-col gap-6">
        {data.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1"
          >
            <div className="flex items-center justify-between">
              <h3>{project.title}</h3>
            </div>
            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
