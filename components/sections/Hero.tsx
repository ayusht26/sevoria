"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { SplitReveal } from "@/components/motion/SplitReveal"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full bg-canvas flex flex-col justify-center pt-32 pb-16 px-5 sm:px-6 overflow-hidden">
      {/* Minimal background: one soft radial tint, nothing else */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 20%, var(--accent-soft), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] my-auto flex flex-col items-center text-center gap-7 md:gap-8 pt-4">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-hairline bg-canvas-elevated/80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="mono-eyebrow text-[11px] sm:text-xs text-ink/80 font-medium">
            SEVIORA PHARMA · ASHIYANA, LUCKNOW
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="display-xl text-ink max-w-[880px] font-semibold tracking-tight leading-[1.1]">
          <SplitReveal text="Genuine medicines and medical supplies you can rely on." />
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="body-lg text-body max-w-[640px] leading-relaxed"
        >
          An MCA-registered pharmacy serving clinics, practitioners, and families
          in Ashiyana with authentic pharmaceuticals, orthopaedic goods, and
          everyday hygiene essentials.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md"
        >
          <InteractiveHoverButton
            variant="primary"
            text="Contact Us"
            href="#contact"
            className="hidden sm:inline-flex w-auto px-7 py-3 text-base"
          />
          <Button
            variant="primaryPill"
            size="pillLg"
            asChild
            className="sm:hidden w-full gap-2 group"
          >
            <a href="#contact">
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <InteractiveHoverButton
            variant="secondary"
            text="View Our Range"
            href="#services"
            className="hidden sm:inline-flex w-auto px-7 py-3 text-base"
          />
          <Button
            variant="secondaryPill"
            size="pillLg"
            asChild
            className="sm:hidden w-full"
          >
            <a href="#services">View Our Range</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
