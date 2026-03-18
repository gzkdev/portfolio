import Link from "next/link"

import { PROJECTS } from "@/lib/constants"

import SectionHeader from "./SectionHeader"

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      <SectionHeader title="Projects" url="/projects" />

      <div className="space-y-4">
        {PROJECTS.map(({ name, description }) => (
          <Link
            key={name}
            href={`/projects`}
            className="group -mx-4 block rounded-xl p-4 transition-colors hover:bg-secondary/60 sm:flex-row sm:items-center"
          >
            <h3 className="font-medium">{name}</h3>
            <p className="mt-1 text-muted-foreground">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
