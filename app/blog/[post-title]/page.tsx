import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { getMdxData, getMdxPost } from "@/lib/mdx"
import { MDXContent } from "@/components/mdx/MDXContent"

export async function generateStaticParams() {
  const posts = getMdxData("blog")
  return posts.map((post) => ({
    "post-title": post.slug,
  }))
}

export default async function BlogPostPage(props: {
  params: Promise<{ "post-title": string }>
}) {
  const params = await props.params
  const slug = params["post-title"]
  const post = getMdxPost("blog", slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl py-10 pb-20">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Writing
      </Link>

      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {post.frontmatter.title}
        </h1>
        <div className="mt-6 flex items-center gap-4 font-mono text-sm text-muted-foreground">
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
          <span>•</span>
          <span>5 min read</span>
        </div>
      </header>

      <MDXContent content={post.content} />
    </article>
  )
}
