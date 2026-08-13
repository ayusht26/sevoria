import * as React from "react"
import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        suppressHydrationWarning
        className={cn(
          "flex h-11 w-full rounded-md border border-hairline bg-canvas-elevated px-4 py-2 text-sm text-ink placeholder:text-faint transition-colors duration-200 focus-visible:outline-none focus-visible:border-link focus-visible:ring-1 focus-visible:ring-link disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
