"use client"

import { Pill, Activity, Sparkles, ShieldCheck, Truck, Store } from "lucide-react"
import { PlainCard } from "@/components/ui/plain-card"
import { Reveal } from "@/components/motion/Reveal"
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup"

const SERVICES = [
  {
    icon: Pill,
    title: "Retail Sale of Pharmaceuticals",
    description:
      "Dispensing authentic prescription medicines, therapeutic drugs, and everyday healthcare pharmaceuticals with strict quality compliance.",
  },
  {
    icon: Activity,
    title: "Medical & Orthopaedic Goods",
    description:
      "Sourcing and retailing premium orthopaedic supports, braces, rehabilitation aids, and specialized medical clinical equipment.",
  },
  {
    icon: Sparkles,
    title: "Toilet Articles & Personal Hygiene",
    description:
      "A wide selection of personal care products, skin hygiene essentials, sanitization items, and premium toilet articles.",
  },
  {
    icon: Store,
    title: "Retail Pharmacy & Healthcare Outlet",
    description:
      "Accessible retail store located in Ashiyana, Lucknow, serving individual patients, practitioners, and regional buyers.",
  },
  {
    icon: Truck,
    title: "Order Fulfilment & Supply",
    description:
      "Streamlined inventory management and dependable local delivery for clinics, hospitals, and retail consumers.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Compliance & Standards",
    description:
      "Full adherence to Indian regulatory standards, ensuring genuine products and transparent sourcing for every order.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="bg-canvas text-ink py-[var(--space-section)] px-5 sm:px-6 md:px-10 lg:px-14 border-t border-hairline"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Section Header */}
        <Reveal className="flex flex-col items-start gap-3">
          <span className="mono-eyebrow">OUR SERVICES</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Genuine products and reliable service across every category we carry.
          </h2>
        </Reveal>

        {/* 3-Up Card Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <RevealItem key={service.title}>
                <PlainCard className="h-full p-7 lg:p-8 flex flex-col gap-4 group">
                  <div className="h-12 w-12 rounded-lg bg-hairline-soft border border-hairline flex items-center justify-center text-ink/70 dark:text-ink/60 md:group-hover:border-link/50 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="heading-md text-ink">{service.title}</h3>
                  <p className="body-md text-body leading-relaxed">{service.description}</p>
                </PlainCard>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
