import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { getMdxData, getMdxPost } from "@/lib/mdx"
import { MDXContent } from "@/components/mdx/MDXContent"

export async function generateStaticParams() {
  const posts = getMdxData("prototypes")
  return posts.map((post) => ({
    projectId: post.slug,
  }))
}

export default async function PrototypePage(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const post = getMdxPost("prototypes", params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl py-10 pb-20">
      <Link
        href="/prototypes"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Prototypes
      </Link>

      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {post.frontmatter.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {post.frontmatter.description}
        </p>
        <div className="mt-6 flex items-center gap-4 font-mono text-sm text-muted-foreground">
          <time dateTime={post.frontmatter.publishedAt}>
            {new Date(post.frontmatter.publishedAt).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              }
            )}
          </time>
        </div>
      </header>

      <MDXContent content={post.content} />
    </article>
  )
}
