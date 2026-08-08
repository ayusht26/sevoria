import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-link disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Marketing CTAs (§2.4)
        primaryPill:
          "bg-white text-black md:hover:bg-[#f0f0f0] rounded-full button-lg shadow-sm md:hover:scale-[1.02]",
        secondaryPill:
          "bg-transparent border border-hairline text-ink md:hover:bg-hairline-soft rounded-full button-lg",
        
        // Nav & App buttons (§2.4)
        default:
          "bg-white text-black md:hover:bg-[#f0f0f0] rounded-md button-md",
        outline:
          "border border-hairline bg-transparent text-ink md:hover:bg-canvas-elevated md:hover:border-mute rounded-md button-md",
        ghost:
          "text-body md:hover:text-ink md:hover:bg-canvas-elevated rounded-md button-md",
        link:
          "text-link underline-offset-4 md:hover:underline button-md p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 px-6 py-3 text-base",
        pillLg: "h-12 px-6 py-3",
        pillMd: "h-10 px-5 py-2",
        icon: "h-9 w-9 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primaryPill",
      size: "pillLg",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
