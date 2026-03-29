import Link from 'next/link';
import { BlogPostItem } from '@/lib/types';

type BlogSectionProps = {
  data: BlogPostItem[];
};

export function BlogSection({ data }: BlogSectionProps) {
  return (
    <section className="flex min-h-[25vh] flex-col gap-4">
      <h2 className="font-medium tracking-tight">Blog</h2>
      <div className="flex flex-col gap-4">
        {data.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex items-center justify-between"
          >
            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
