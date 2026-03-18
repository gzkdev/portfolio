"use client"

import { Sandpack } from "@codesandbox/sandpack-react"
import { useTheme } from "next-themes"

interface SandpackWrapperProps {
  files?: Record<
    string,
    string | { code: string; hidden?: boolean; active?: boolean }
  >
  template?: "react" | "react-ts" | "vanilla" | "vanilla-ts" | "nextjs"
  options?: any
  customSetup?: any
}

export function SandpackWrapper({
  files,
  template = "react",
  options,
  customSetup,
}: SandpackWrapperProps) {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === "dark" ? "dark" : "light"

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border shadow-md">
      <Sandpack
        theme={theme}
        template={template}
        files={files}
        options={{
          ...options,
          showNavigator: false,
          showTabs: true,
          editorHeight: 400,
          editorWidthPercentage: 50,
          wrapContent: true,
        }}
        customSetup={{
          dependencies: {
            "framer-motion": "latest",
            "lucide-react": "latest",
          },
          ...customSetup,
        }}
      />
    </div>
  )
}
