import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getExperimentBySlug, getExperiments } from '@/lib/mdx';
import { MDXComponents } from '@/components/mdx-components';
import { PageHeader } from '@/components/page-header';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const experiments = await getExperiments();
  return experiments.map((experiment) => ({ slug: experiment.slug }));
}

export default async function ExperimentPage({ params }: PageProps) {
  const { slug } = await params;
  const experiment = await getExperimentBySlug(slug);

  if (!experiment) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <PageHeader
        title={experiment.title}
        date={experiment.date}
        backHref="/"
        backLabel="Experiments"
      />
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        <MDXRemote source={experiment.content} components={MDXComponents} />
      </div>
    </article>
  );
}
