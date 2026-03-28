import Link from 'next/link';
import { getBlogPosts, getWorkItems } from '@/lib/mdx';

export default async function Page() {
  const posts = await getBlogPosts();
  const works = await getWorkItems();

  return (
    <main className="flex flex-col gap-12 md:gap-24">
      {/* Intro Section */}
      <section id="intro" className="flex flex-col gap-4">
        <h1 className="text-xl font-medium">Gifty Egwuenu</h1>
        <p className="text-muted-foreground leading-relaxed">
          I'm a Frontend Engineer and Content Creator. I love building
          interfaces that are functional, accessible, and beautiful.
        </p>
      </section>

      {/* Works Section */}
      <section id="works" className="flex flex-col gap-8">
        <h2 className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
          Works
        </h2>
        <div className="flex flex-col gap-6">
          {works.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              className="group flex flex-col gap-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium group-hover:underline">
                  {work.title}
                </h3>
                <span className="text-muted-foreground text-xs">
                  {new Date(work.date).getFullYear()}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                {work.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="flex flex-col gap-8">
        <h2 className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
          Writing
        </h2>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-center justify-between"
            >
              <h3 className="text-sm font-medium group-hover:underline">
                {post.title}
              </h3>
              <span className="text-muted-foreground text-xs">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
