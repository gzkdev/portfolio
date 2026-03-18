import Link from "next/link"
import { ChevronRight } from "lucide-react"

type SectionHeaderProps = {
  title: React.ReactNode
  url: string
}

export default function SectionHeader({ title, url }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium">{title}</span>
      <Link
        href={url}
        className="inline-flex items-center text-sm text-blue-500 transition-opacity hover:opacity-80 focus-visible:opacity-80 dark:text-blue-300"
      >
        See All <ChevronRight size={16} />
      </Link>
    </div>
  )
}
