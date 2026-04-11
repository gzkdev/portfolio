import { MDXComponents } from '@/components/mdx-components';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
      <MDXRemote source={post.content} components={MDXComponents} />
    </div>
  );
}
