import React from "react"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"

import { SandpackWrapper } from "./SandpackWrapper"

const components = {
  h1: (props: any) => (
    <h1
      className="mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props: any) => <p className="leading-7 not-first:mt-6" {...props} />,
  ul: (props: any) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
  ),
  li: (props: any) => <li className="mb-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="mt-6 border-l-2 pl-6 text-muted-foreground italic"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: any) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="font-medium underline underline-offset-4 transition-colors hover:text-primary"
          {...props}
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline underline-offset-4 transition-colors hover:text-primary"
        {...props}
      >
        {children}
      </a>
    )
  },
  // Map custom code components like Sandpack
  Sandpack: SandpackWrapper,
}

interface MDXContentProps {
  content: string
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert w-full max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  )
}
