import { NativeLink } from "@/components/shared/NativeLink"

export default function Header() {
  return (
    <header className="space-y-16">
      <div className="flex items-center gap-4">
        <span className="inline-block size-11 shrink-0 rounded-full bg-foreground/25" />
        <div className="leading-tight">
          <h1 className="font-medium">Godswill Ezihe</h1>
          <p className="text-muted-foreground">Frontend Engineer</p>
        </div>
      </div>

      <div className="space-y-6 leading-relaxed text-muted-foreground">
        <p>
          I like to bridge the gap between clean interfaces and deep technical
          architecture. Currently, I spend my free time experimenting with
          shaders and studying the mechanics of browsers, compilers and build
          tools.
        </p>

        <p>
          Previously, I worked at
          <NativeLink
            href="https://ithacaprotocol.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Ithaca Protocol{" "}
          </NativeLink>
          as a Frontend Engineer. You can reach me
          <NativeLink
            href="https://x.com/ezihegodswill"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            @ezihegodswill{" "}
          </NativeLink>
          or via
          <NativeLink href="mailto:ezihegodswill01@gmail.com">
            {" "}
            email.{" "}
          </NativeLink>
          See my profile on{" "}
          <NativeLink
            href="https://github.com/gzkdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github.
          </NativeLink>
        </p>
      </div>
    </header>
  )
}
