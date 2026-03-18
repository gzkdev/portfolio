import Link from "next/link"

import { getMdxData } from "@/lib/mdx"

export default function BlogPage() {
  const posts = getMdxData("blog")

  return (
    <div className="flex max-w-2xl flex-col gap-12 pb-20">
      <header className="border-b border-border/50 py-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Writing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights on UI engineering, motion design, and building premium
          interfaces.
        </p>
      </header>

      <div className="flex flex-col gap-10">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2"
            >
              <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                {post.frontmatter.title}
              </h2>
              <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
                <time dateTime={post.frontmatter.publishedAt}>
                  {new Date(post.frontmatter.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </time>
              </div>
              <p className="mt-2 line-clamp-2 leading-relaxed text-muted-foreground">
                {post.frontmatter.description}
              </p>
            </Link>
          ))
        ) : (
          <div className="py-12 text-muted-foreground">
            No posts found. Add MDX files to content/blog.
          </div>
        )}
      </div>
    </div>
  )
}
