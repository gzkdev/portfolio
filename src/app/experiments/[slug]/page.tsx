import { MDXComponents } from '@/components/mdx-components';
import { getExperimentBySlug, getExperiments } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
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
    <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
      <MDXRemote source={experiment.content} components={MDXComponents} />
    </div>
  );
}
