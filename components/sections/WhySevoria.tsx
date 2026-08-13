"use client"

import { Pill, Truck, MapPin, PackageCheck } from "lucide-react"
import { PlainCard } from "@/components/ui/plain-card"
import { Reveal } from "@/components/motion/Reveal"
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup"

const DIFFERENTIATORS = [
  {
    icon: Pill,
    title: "100% Genuine Pharmaceuticals",
    description:
      "Sourced strictly from certified distributors and manufacturers, guaranteeing complete authenticity for all medicines and health goods.",
  },
  {
    icon: Truck,
    title: "Direct-from-Distributor Sourcing",
    description:
      "Every product arrives directly from licensed pharma distributors — no intermediaries, no counterfeit risk, full batch traceability.",
  },
  {
    icon: MapPin,
    title: "Prime Ashiyana Location",
    description:
      "Strategically located at Shop No 3, Ambika Vihar, Sector J, Ashiyana, Lucknow for convenient access and prompt local fulfilment.",
  },
  {
    icon: PackageCheck,
    title: "Comprehensive Inventory",
    description:
      "One-stop availability for pharmaceuticals, medical & orthopaedic goods, and personal toilet articles under one roof.",
  },
]

export function WhySevoria() {
  return (
    <section
      id="why-us"
      className="bg-canvas-elevated text-ink py-[var(--space-section)] px-5 sm:px-6 md:px-10 lg:px-14 border-y border-hairline"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Section Header */}
        <Reveal className="flex flex-col items-start gap-3">
          <span className="mono-eyebrow text-mute">WHY SEVIORA PHARMA</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Why clinics and families in Lucknow rely on us.
          </h2>
        </Reveal>

        {/* 4 Differentiator Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {DIFFERENTIATORS.map((diff) => {
            const Icon = diff.icon
            return (
              <RevealItem key={diff.title}>
                <PlainCard className="flex items-start gap-5 p-7 lg:p-8 h-full">
                  <div className="h-12 w-12 rounded-lg bg-canvas border border-hairline flex items-center justify-center text-ink/70 dark:text-ink/60 shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="heading-md text-ink">{diff.title}</h3>
                    <p className="body-md text-body leading-relaxed">{diff.description}</p>
                  </div>
                </PlainCard>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
