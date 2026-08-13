"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, onAnimationEnd, onTransitionEnd, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    onAnimationEnd={(e) => {
      if (e.target !== e.currentTarget) {
        e.stopPropagation()
      }
      onAnimationEnd?.(e)
    }}
    onTransitionEnd={(e) => {
      if (e.target !== e.currentTarget) {
        e.stopPropagation()
      }
      onTransitionEnd?.(e)
    }}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 sheet-overlay-animated",
      className
    )}
    {...props}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, onAnimationEnd, onTransitionEnd, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      onAnimationEnd={(e) => {
        if (e.target !== e.currentTarget) {
          e.stopPropagation()
        }
        onAnimationEnd?.(e)
      }}
      onTransitionEnd={(e) => {
        if (e.target !== e.currentTarget) {
          e.stopPropagation()
        }
        onTransitionEnd?.(e)
      }}
      className={cn(
        "fixed inset-y-0 right-0 z-50 h-full w-3/4 max-w-sm border-l border-hairline bg-canvas p-6 shadow-2xl sheet-content-animated text-ink flex flex-col justify-between transform-gpu",
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-md opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-link focus:ring-offset-2 disabled:pointer-events-none p-2 text-ink">
        <X className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-ink", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
}
