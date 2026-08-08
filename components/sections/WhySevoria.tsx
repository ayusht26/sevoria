"use client"

import { motion } from "framer-motion"
import { Pill, ShieldCheck, MapPin, PackageCheck } from "lucide-react"

const DIFFERENTIATORS = [
  {
    icon: Pill,
    title: "100% Genuine Pharmaceuticals",
    description: "Sourced strictly from certified distributors and manufacturers, guaranteeing complete authenticity for all medicines and health goods.",
  },
  {
    icon: ShieldCheck,
    title: "MCA Registered Entity",
    description: "Operated as SEVIORA PHARMA PRIVATE LIMITED with complete legal compliance and adherence to Indian regulatory standards.",
  },
  {
    icon: MapPin,
    title: "Prime Ashiyana Location",
    description: "Strategically located at Shop No 3, Ambika Vihar, Sector J, Ashiyana, Lucknow for convenient access and prompt local fulfillment.",
  },
  {
    icon: PackageCheck,
    title: "Comprehensive Inventory",
    description: "One-stop availability for pharmaceuticals, medical & orthopaedic goods, and personal toilet articles under one roof.",
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
          <span className="mono-eyebrow text-mute">WHY SEVIORA PHARMA</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Why clinics and customers rely on SEVIORA PHARMA PRIVATE LIMITED.
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
