import * as React from "react"
import { cn } from "@/lib/utils"

export function PlainCard({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-hairline bg-canvas-elevated",
        "transition-all duration-300 md:hover:border-mute md:hover:-translate-y-1 md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      {children}
    </div>
  )
}
