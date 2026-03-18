import Link from "next/link"

import { PROTOTYPES } from "@/lib/constants"

import SectionHeader from "./SectionHeader"

export default function PrototypesSection() {
  return (
    <section className="space-y-8">
      <SectionHeader title="Prototypes" url="/prototypes" />

      <div className="grid gap-6 sm:grid-cols-2">
        {PROTOTYPES.map(({ description, id, name }) => (
          <Link
            key={name}
            href={`/prototypes/${id}`}
            className="group relative flex aspect-video flex-col justify-end overflow-hidden rounded-2xl border border-border/50 bg-secondary/30 p-6 shadow-sm transition-colors hover:border-border"
          >
            <div className="absolute inset-0 z-10 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
            <div className="relative z-20 transform transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="text-lg font-medium">{name}</h3>
              <p className="mt-1 text-sm text-muted-foreground transition-opacity duration-300">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
