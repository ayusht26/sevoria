"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/business-info"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Results", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      // Gains border hairline & backdrop blur after scrolling 60px past top hero
      if (window.scrollY > 60) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 flex items-center px-6 md:px-12",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-ink hover:text-white transition-colors"
        >
          {BUSINESS_INFO.brandName}
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="body-md text-body hover:text-ink transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Drawer */}
        <div className="flex items-center gap-4">
          <Button
            variant="primaryPill"
            size="pillMd"
            asChild
            className="hidden sm:inline-flex"
          >
            <a href="#contact">Book a Call</a>
          </Button>

          {/* Mobile Sheet Drawer Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                aria-label="Open Navigation Menu"
                className="p-2 text-ink hover:text-white rounded-md border border-hairline bg-canvas-elevated min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
              <div className="flex flex-col gap-8 pt-6">
                <SheetHeader>
                  <SheetTitle className="text-xl font-semibold text-ink">
                    {BUSINESS_INFO.brandName}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-body hover:text-ink transition-colors py-2 border-b border-hairline-soft min-h-[44px] flex items-center"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pb-8 flex flex-col gap-4">
                <Button
                  variant="primaryPill"
                  size="pillLg"
                  asChild
                  className="w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#contact">Book a Strategy Call</a>
                </Button>
                <p className="text-xs text-mute text-center">
                  Medical Marketing • Lucknow, UP
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
