"use client"

import { AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-6">
      <div className="rounded-full bg-destructive/10 p-4">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>

      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Something went wrong!
        </h2>
        <p className="max-w-sm text-muted-foreground">
          We encountered an unexpected error while trying to load this page.
        </p>
      </div>

      <Button onClick={() => reset()} variant="outline">
        Try again
      </Button>
    </div>
  )
}
