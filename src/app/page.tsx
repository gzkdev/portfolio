import { PROJECTS } from '@/lib/constants';
import { getBlogPosts, getExperiments } from '@/lib/mdx';
import { BlogSection } from '@/components/home/blog-section';
import { ExperimentsSection } from '@/components/home/experiments-section';
import { IntroSection } from '@/components/home/intro-section';
import { ProjectsSection } from '@/components/home/projects-section';

export default async function Home() {
  const [blogPosts, experiments] = await Promise.all([
    getBlogPosts(),
    getExperiments(),
  ]);

  return (
    <main className="flex flex-col gap-16">
      <IntroSection />
      <ProjectsSection data={PROJECTS} />
      <ExperimentsSection data={experiments} />
      <BlogSection data={blogPosts} />
    </main>
  );
}
