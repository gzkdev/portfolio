import Link from "next/link"

import { cn } from "@/lib/utils"

export function NativeLink({
  className,
  href,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <Link
      href={href ?? "#"}
      className={cn(
        className,
        "text-blue-500 transition-opacity hover:opacity-60 dark:text-blue-300"
      )}
      {...props}
    />
  )
}
