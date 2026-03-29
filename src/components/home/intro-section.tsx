import Link from 'next/link';

export function IntroSection() {
  return (
    <section className="space-y-4">
      <header>
        <h1 className="font-medium tracking-tight">Godswill Ezihe</h1>
      </header>

      <div className="text-muted-foreground space-y-4">
        <p>
          I'm a Frontend Engineer dedicated to building fault-tolerant,
          performant applications at scale.
        </p>

        <p>
          Great engineering to me is about building applications that handle
          tough circumstances gracefully without sacrificing user experience.
        </p>

        <p>
          Previously, I worked as a Frontend Engineer at{' '}
          <a
            href="http://x.com/IthacaProtocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ithaca Protocol
          </a>
          . Currently, I spend a lot of time studying AI systems and building
          interactive prototypes.
        </p>

        <p>
          See my latest <Link href="/experiments">experiments</Link> or read
          about my technical journey and learnings{' '}
          <Link href="/blog">here</Link>.
        </p>

        <p>
          You can find me on{' '}
          <a
            href="http://x.com/ezihegodswill"
            target="_blank"
            rel="noopener noreferrer"
          >
            X/Twitter
          </a>{' '}
          or reach me via <a href="mailto:ezihegodswill01@gmail.com">Email</a>
        </p>
      </div>
    </section>
  );
}
