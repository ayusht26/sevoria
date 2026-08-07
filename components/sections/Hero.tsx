"use client"

import * as React from "react"
import { useHeroAnimation } from "@/hooks/useHeroAnimation"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react"

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const blob1Ref = React.useRef<HTMLDivElement>(null)
  const blob2Ref = React.useRef<HTMLDivElement>(null)
  const blob3Ref = React.useRef<HTMLDivElement>(null)

  useHeroAnimation(containerRef, blob1Ref, blob2Ref, blob3Ref)

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] w-full bg-canvas flex flex-col justify-between pt-32 pb-16 px-6 overflow-hidden"
    >
      {/* 1. Animated Mesh Gradient Backdrop (Blue / Violet / Cyan) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40 z-0">
        <div
          ref={blob1Ref}
          className="absolute w-[500px] h-[500px] rounded-full bg-link filter blur-[120px] -top-10 -left-10"
        />
        <div
          ref={blob2Ref}
          className="absolute w-[550px] h-[550px] rounded-full bg-violet filter blur-[130px] top-1/4 right-0"
        />
        <div
          ref={blob3Ref}
          className="absolute w-[450px] h-[450px] rounded-full bg-cyan filter blur-[110px] -bottom-10 left-1/3"
        />
      </div>

      {/* Hero Core Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] my-auto flex flex-col items-center text-center gap-6 md:gap-8">
        {/* Eyebrow */}
        <div className="hero-animate-item hero-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-canvas-elevated/80 backdrop-blur-sm opacity-0">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="mono-eyebrow text-[11px] sm:text-xs">
            MEDICAL GROWTH MARKETING · LUCKNOW
          </span>
        </div>

        {/* Main Headline */}
        {/* ALTERNATE HEADLINE 1: "Growth Marketing, Built for Medicine." */}
        {/* ALTERNATE HEADLINE 2: "Precision Marketing for Medical Practices." */}
        <h1 className="hero-animate-item hero-headline display-xl text-ink max-w-[900px] opacity-0 font-semibold tracking-tight">
          Marketing That Doctors <span className="text-white">Actually Trust.</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-animate-item hero-subheadline body-lg text-body max-w-[680px] opacity-0 leading-relaxed">
          Sevoria equips medical practices, clinics, and hospitals in Lucknow and across UP with compliant, high-performing patient acquisition campaigns and authoritative branding.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md">
          <div className="hero-animate-item hero-cta-item w-full sm:w-auto opacity-0">
            <Button
              variant="primaryPill"
              size="pillLg"
              asChild
              className="w-full sm:w-auto gap-2 group"
            >
              <a href="#contact">
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="hero-animate-item hero-cta-item w-full sm:w-auto opacity-0">
            <Button
              variant="secondaryPill"
              size="pillLg"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="#services">See Our Work</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Stat Strip (Below Fold) */}
      {/* PLACEHOLDER: Replace illustrative stats below with real client metrics once provided by Satyendra */}
      <div className="hero-animate-item hero-stats relative z-10 mx-auto w-full max-w-[1200px] pt-12 border-t border-hairline-soft opacity-0 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-hairline-soft">
          <div className="flex flex-col items-center justify-center p-3">
            <div className="flex items-center gap-2 text-link mb-1">
              <Users className="h-4 w-4" />
              <span className="text-xl sm:text-2xl font-semibold text-ink">50+</span>
            </div>
            <p className="text-xs text-mute font-mono uppercase tracking-wider">
              Clinics & Hospitals Grown
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-3">
            <div className="flex items-center gap-2 text-cyan mb-1">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xl sm:text-2xl font-semibold text-ink">3.2x</span>
            </div>
            <p className="text-xs text-mute font-mono uppercase tracking-wider">
              Avg. Patient Inquiry Increase
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-3">
            <div className="flex items-center gap-2 text-violet mb-1">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xl sm:text-2xl font-semibold text-ink">100%</span>
            </div>
            <p className="text-xs text-mute font-mono uppercase tracking-wider">
              Compliance-Approved Ads
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
