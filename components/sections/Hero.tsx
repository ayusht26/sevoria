"use client"

import * as React from "react"
import { useHeroAnimation } from "@/hooks/useHeroAnimation"
import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { ArrowRight, ShieldCheck, Pill, MapPin } from "lucide-react"
import { Component as GradientBackground } from "@/components/ui/gradient-background-4"
import { MagicCard } from "@/components/ui/magic-card"

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const blob1Ref = React.useRef<HTMLDivElement>(null)
  const blob2Ref = React.useRef<HTMLDivElement>(null)
  const blob3Ref = React.useRef<HTMLDivElement>(null)

  useHeroAnimation(containerRef, blob1Ref, blob2Ref, blob3Ref)

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] w-full bg-canvas flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* 1. Gradient Background Component */}
      <GradientBackground className="pointer-events-none z-0" />

      {/* 2. Animated Mesh Gradient Backdrop Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30 z-0">
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
      <div className="relative z-10 mx-auto w-full max-w-[1200px] my-auto flex flex-col items-center text-center gap-6 md:gap-8 pt-4">
        {/* Eyebrow */}
        <div className="hero-animate-item hero-eyebrow inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-hairline bg-canvas-elevated/80 backdrop-blur-md opacity-0 shadow-lg shadow-black/40">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="mono-eyebrow text-[11px] sm:text-xs tracking-wider text-ink/90 font-medium">
            SEVIORA PHARMA PRIVATE LIMITED · LUCKNOW
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-animate-item hero-headline display-xl text-ink max-w-[950px] opacity-0 font-semibold tracking-tight leading-[1.08]">
          <DiaTextReveal
            duration={2.2}
            textColor="#ffffff"
            colors={["#50e3c2", "#0070f3", "#7928ca", "#ff0080", "#ffffff"]}
            text="Retail Sale of Pharmaceuticals & Medical Goods."
          />
        </h1>

        {/* Subheadline */}
        <p className="hero-animate-item hero-subheadline body-lg text-body max-w-[720px] opacity-0 leading-relaxed font-normal">
          As per MCA records, SEVIORA PHARMA PRIVATE LIMITED is involved in activities such as Retail sale of pharmaceuticals, medical and orthopaedic goods and toilet articles.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full max-w-md">
          <div className="hero-animate-item hero-cta-item w-full sm:w-auto opacity-0 flex justify-center">
            <InteractiveHoverButton
              variant="primary"
              text="Contact Us"
              href="#contact"
              className="hidden sm:inline-flex w-auto px-7 py-3 text-base shadow-lg shadow-blue-600/20"
            />
            <Button
              variant="primaryPill"
              size="pillLg"
              asChild
              className="sm:hidden w-full gap-2 group shadow-lg shadow-blue-600/20"
            >
              <a href="#contact">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform duration-200 md:group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="hero-animate-item hero-cta-item w-full sm:w-auto opacity-0 flex justify-center">
            <InteractiveHoverButton
              variant="secondary"
              text="Explore Activities"
              href="#services"
              className="hidden sm:inline-flex w-auto px-7 py-3 text-base border border-hairline backdrop-blur-sm"
            />
            <Button
              variant="secondaryPill"
              size="pillLg"
              asChild
              className="sm:hidden w-full border border-hairline md:hover:border-hairline/80 backdrop-blur-sm"
            >
              <a href="#services">Explore Activities</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Stat Cards (Revamped 3 Cards) */}
      <div className="hero-animate-item hero-stats relative z-10 mx-auto w-full max-w-[1200px] pt-12 opacity-0 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Card 1: MCA Registered */}
          <MagicCard
            gradientSize={200}
            gradientFrom="#0070f3"
            gradientTo="#38bdf8"
            gradientColor="rgba(56, 189, 248, 0.12)"
            className="p-6 transition-all duration-300 md:hover:scale-[1.02] border-hairline/60 bg-canvas-elevated/70 backdrop-blur-xl shadow-xl shadow-black/50"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-inner">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400/80 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                  Government Verified
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-ink tracking-tight mb-1">
                  MCA Registered
                </h3>
                <p className="text-xs text-mute font-mono uppercase tracking-wider leading-relaxed">
                  SEVIORA PHARMA PRIVATE LIMITED
                </p>
              </div>
            </div>
          </MagicCard>

          {/* Card 2: Pharma & Orthopaedic */}
          <MagicCard
            gradientSize={200}
            gradientFrom="#06b6d4"
            gradientTo="#10b981"
            gradientColor="rgba(6, 182, 212, 0.12)"
            className="p-6 transition-all duration-300 md:hover:scale-[1.02] border-hairline/60 bg-canvas-elevated/70 backdrop-blur-xl shadow-xl shadow-black/50"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-inner">
                  <Pill className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/80 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  Supply & Distribution
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-ink tracking-tight mb-1">
                  Pharma & Orthopaedic
                </h3>
                <p className="text-xs text-mute font-mono uppercase tracking-wider leading-relaxed">
                  Medical Supplies & Toilet Articles
                </p>
              </div>
            </div>
          </MagicCard>

          {/* Card 3: Lucknow, UP */}
          <MagicCard
            gradientSize={200}
            gradientFrom="#7928ca"
            gradientTo="#a855f7"
            gradientColor="rgba(168, 85, 247, 0.12)"
            className="p-6 transition-all duration-300 md:hover:scale-[1.02] border-hairline/60 bg-canvas-elevated/70 backdrop-blur-xl shadow-xl shadow-black/50"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-inner">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400/80 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                  Primary Location
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-ink tracking-tight mb-1">
                  Lucknow, UP
                </h3>
                <p className="text-xs text-mute font-mono uppercase tracking-wider leading-relaxed">
                  Ashiyana Distribution Hub
                </p>
              </div>
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
  )
}

