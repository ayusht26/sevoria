"use client"

import { PlainCard } from "@/components/ui/plain-card"
import { Reveal } from "@/components/motion/Reveal"
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup"

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Requirement & Consultation",
    description:
      "Understanding specific pharmaceutical, medical orthopaedic, or hygiene product needs for retail buyers, clinics, or practitioners.",
  },
  {
    number: "02",
    title: "Verified Sourcing",
    description:
      "Procuring authentic medicines and medical goods directly from licensed manufacturers and certified pharma distributors.",
  },
  {
    number: "03",
    title: "Quality Control & Storage",
    description:
      "Inspecting batch numbers, expiry dates, and maintaining regulated storage conditions at our Ashiyana, Lucknow facility.",
  },
  {
    number: "04",
    title: "Fulfilment & Delivery",
    description:
      "Efficient over-the-counter retail sales and prompt regional distribution across Lucknow and surrounding Uttar Pradesh areas.",
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="bg-canvas text-ink py-[var(--space-section)] px-5 sm:px-6 md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Section Header */}
        <Reveal className="flex flex-col items-start gap-3">
          <span className="mono-eyebrow">OUR PROCESS</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            A reliable 4-step workflow for authentic pharmaceutical &amp; medical supply.
          </h2>
        </Reveal>

        {/* Numbered Steps Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {PROCESS_STEPS.map((step) => (
            <RevealItem key={step.number}>
              <PlainCard className="relative flex flex-col gap-4 p-7 lg:p-8 group border-l-2 border-l-accent h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl md:text-3xl font-semibold text-mute md:group-hover:text-link transition-colors">
                    {step.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent/60 md:group-hover:bg-accent md:group-hover:scale-125 transition-all" />
                </div>

                <h3 className="heading-md text-ink">{step.title}</h3>
                <p className="body-md text-body leading-relaxed">{step.description}</p>
              </PlainCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
