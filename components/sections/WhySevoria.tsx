"use client"

import { motion } from "framer-motion"
import { HeartPulse, ShieldCheck, MapPin, FileBarChart } from "lucide-react"

const DIFFERENTIATORS = [
  {
    icon: HeartPulse,
    title: "Healthcare-Only Focus",
    description: "We don't do e-commerce, real estate, or crypto. We live and breathe medical marketing 100% of the time.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Aware Campaigns",
    description: "Built to honor medical council guidelines, patient privacy, and platform advertising restrictions without risk.",
  },
  {
    icon: MapPin,
    title: "Local Lucknow Presence, Pan-India Delivery",
    description: "On-the-ground understanding of North Indian healthcare markets paired with nationwide digital execution.",
  },
  {
    icon: FileBarChart,
    title: "Transparent Reporting",
    description: "No vanity impressions or confusing jargon. Clear dashboards tracking booked consults and ROI.",
  },
]

export function WhySevoria() {
  return (
    <section id="why-us" className="bg-hairline-soft text-ink py-24 md:py-32 px-6 border-y border-hairline">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3"
        >
          <span className="mono-eyebrow text-mute">THE SEVORIA DIFFERENCE</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Why leading medical practitioners partner with us.
          </h2>
        </motion.div>

        {/* 4 Differentiator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((diff, index) => {
            const Icon = diff.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-xl bg-canvas border border-hairline hover:border-mute transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-canvas-elevated border border-hairline flex items-center justify-center text-cyan shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="heading-md text-ink">{diff.title}</h3>
                  <p className="body-md text-body leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
