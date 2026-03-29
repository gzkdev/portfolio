export function Footer() {
  return (
    <footer className="border-t py-6 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <ul className="flex items-center gap-2">
          <li>
            <a
              href="https://x.com/ezihegodswill"
              target="_blank"
              rel="noopener noreferrer"
            >
              X/Twitter
            </a>
          </li>

          <li>
            <a
              href="https://github.com/gzkdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/godswill-ezihe"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a href="mailto:ezihegodswill01@gmail.com">Email</a>
          </li>
        </ul>

        <div className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Godswill Ezihe
        </div>
      </div>
    </footer>
  );
}
