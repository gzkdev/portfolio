import Link from "next/link"

import SectionHeader from "./SectionHeader"

const POSTS = [
  {
    slug: "building-premium-interfaces",
    title: "Building Premium Interfaces",
    date: "Jan 12, 2024",
  },
  {
    slug: "motion-is-meaning",
    title: "Motion is Meaning",
    date: "Dec 05, 2023",
  },
]

export default function BlogSection() {
  return (
    <section className="space-y-6">
      <SectionHeader title="Writing" url="/blog" />

      <div className="grid gap-4">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group -mx-4 flex flex-col justify-between rounded-xl p-4 transition-colors hover:bg-secondary/80 sm:flex-row sm:items-center"
          >
            <h3>{post.title}</h3>
            <span className="mt-2 text-sm text-muted-foreground sm:mt-0">
              {post.date}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
