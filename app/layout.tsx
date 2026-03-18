import { fontVariables } from "@/assets/fonts"

import "./globals.css"

import { ThemeProvider } from "@/providers/ThemeProvider"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Footer } from "@/components/shared/Footer"

export const metadata = {
  title: "Godswill Ezihe",
  description:
    "Frontend Engineer interested in Web3, AI, and Distributed Systems",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontVariables)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider>
            <main className="relative mx-auto w-full max-w-2xl px-6 py-12 sm:py-20">
              {children}
            </main>
            <Footer />
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
