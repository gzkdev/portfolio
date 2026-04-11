export default async function Page() {
  return (
    <main className="mx-auto flex max-w-xl flex-col gap-16">
      <section className="space-y-4">
        <h1 className="font-semibold tracking-tight">Godswill Ezihe</h1>

        <div className="space-y-4">
          <p>
            Software engineer building onchain and AI-native apps and tools.
          </p>

          <p>
            I believe great engineering is about architecting and building apps
            that handle tough circumstances gracefully without sacrificing user
            experience.
          </p>

          <p>
            Previously, I worked at{' '}
            <a
              href="http://x.com/IthacaProtocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ithaca Protocol
            </a>
            . Today, I'm actively learning more about AI, Algorithms and UI
            engineering.
          </p>

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
            •
            <li>
              <a
                href="https://github.com/gzkdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            •
            <li>
              <a href="mailto:ezihegodswill01@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
