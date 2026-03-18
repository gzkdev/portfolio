"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

// Mock data (would normally be fetched from MDX or an API)
const projects = [
  {
    id: "linear-redesign",
    title: "Linear Redesign",
    description:
      "A comprehensive redesign conceptualizing new interaction paradigms for issue tracking and team collaboration.",
    links: { live: "https://linear.app", github: "https://github.com" },
    preview:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    description:
      "Financial dashboard featuring real-time data visualization, dark mode semantics, and complex data tables.",
    links: { live: "https://example.com", github: "https://github.com" },
    preview:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "e-commerce-system",
    title: "E-Commerce System",
    description:
      "Headless e-commerce storefront utilizing Next.js, Framer Motion for smooth cart interactions, and Shopify.",
    links: { live: "https://example.com", github: "https://github.com" },
    preview:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
  },
]

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState(projects[0])

  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col gap-8 md:flex-row lg:gap-16">
      {/* Left Column: List */}
      <div className="flex flex-col gap-6 py-4 md:w-1/2">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected Projects
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            A collection of robust web applications, design systems, and
            creative digital experiences.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col gap-3 border-b border-border/50 py-4 transition-colors last:border-0"
              onMouseEnter={() => setHoveredProject(project)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                {/* Mobile-only preview indicator */}
                <span className="rounded-full bg-secondary px-2 py-1 text-xs font-medium md:hidden">
                  Link below
                </span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-2 flex gap-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Source <Github className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Mobile preview image */}
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-secondary md:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.preview}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Desktop Preview Area */}
      <div className="sticky top-24 hidden h-[calc(100vh-8rem)] items-center justify-center pb-8 md:flex md:w-1/2">
        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-border/50 bg-secondary shadow-2xl xl:max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredProject.id}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="absolute inset-0 h-full w-full"
            >
              <div className="absolute inset-0 z-10 bg-linear-to-t from-background/40 to-transparent" />
              {/* Using a standard img tag for external generic mock images, in a real app use next/image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hoveredProject.preview}
                alt={hoveredProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <motion.span
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="rounded-full bg-background/80 px-3 py-1.5 text-sm font-semibold shadow-sm backdrop-blur-md"
                >
                  {hoveredProject.title}
                </motion.span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
