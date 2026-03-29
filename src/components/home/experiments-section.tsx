import Link from 'next/link';
import { ExperimentItem } from '@/lib/types';

type ExperimentsSectionProps = {
  data: ExperimentItem[];
};

export function ExperimentsSection({ data }: ExperimentsSectionProps) {
  return (
    <section className="flex min-h-[10vh] flex-col gap-4">
      <h2 className="font-medium tracking-tight">Experiments</h2>
      <div className="flex flex-col gap-2">
        {data.map((experiment) => (
          <Link key={experiment.slug} href={experiment.url}>
            {experiment.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
