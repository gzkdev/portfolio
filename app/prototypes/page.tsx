import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { BaseFrontmatter, getMdxData } from "@/lib/mdx"

export default function PrototypesPage() {
  const prototypes = getMdxData("prototypes")

  return (
    <div className="flex flex-col gap-8 pb-20">
      <header className="border-b border-border/50 py-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Interaction Prototypes
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Case studies, micro-interactions, and experimental UI built with
          React, Motion, and Three.js.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {prototypes.length > 0 ? (
          prototypes.map((item) => (
            <Link
              key={item.slug}
              href={`/prototypes/${item.slug}`}
              className="group relative flex aspect-video flex-col justify-end overflow-hidden rounded-2xl border border-border/50 bg-secondary/30 p-6 transition-colors hover:border-border"
            >
              <div className="absolute inset-0 z-10 bg-linear-to-t from-background/90 via-background/20 to-transparent" />

              {item.frontmatter.image && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.frontmatter.image}
                  alt={item.frontmatter.title}
                  className="absolute inset-0 z-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-70"
                />
              )}

              <div className="relative z-20">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-medium">
                    {item.frontmatter.title}
                  </h3>
                  <div className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {item.frontmatter.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-2 rounded-xl border border-dashed py-12 text-center text-muted-foreground">
            No prototypes found. Add MDX files to content/prototypes.
          </div>
        )}
      </div>
    </div>
  )
}
