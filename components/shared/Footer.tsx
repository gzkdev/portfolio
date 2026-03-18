import Link from "next/link"

export function Footer() {
  return (
    <footer className="mx-auto mt-20 flex w-full max-w-2xl flex-col items-center justify-between border-t border-border px-6 py-12 text-sm text-muted-foreground md:flex-row">
      <p>© {new Date().getFullYear()} Godswill Ezihe. All rights reserved.</p>

      <div className="mt-4 flex gap-4 md:mt-0">
        <Link
          href="https://twitter.com/ezihegodswill"
          target="_blank"
          className="transition-colors hover:text-foreground"
        >
          Twitter
        </Link>

        <Link
          href="https://github.com/gzkdev"
          target="_blank"
          className="transition-colors hover:text-foreground"
        >
          GitHub
        </Link>

        <Link
          href="https://linkedin.com/in/godswill-ezihe"
          target="_blank"
          className="transition-colors hover:text-foreground"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  )
}
