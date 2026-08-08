"use client"

import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Requirement & Consultation",
    description: "Understanding specific pharmaceutical, medical orthopaedic, or hygiene product needs for retail buyers, clinics, or practitioners.",
  },
  {
    number: "02",
    title: "Verified Sourcing",
    description: "Procuring authentic medicines and medical goods directly from licensed manufacturers and certified pharma distributors.",
  },
  {
    number: "03",
    title: "Quality Control & Storage",
    description: "Inspecting batch numbers, expiry dates, and maintaining regulated storage conditions at our Ashiyana, Lucknow facility.",
  },
  {
    number: "04",
    title: "Fulfillment & Delivery",
    description: "Efficient over-the-counter retail sales and prompt regional distribution across Lucknow and surrounding Uttar Pradesh areas.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-canvas text-ink py-24 md:py-32 px-6">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3"
        >
          <span className="mono-eyebrow">OUR PROCESS</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            A reliable 4-step workflow for authentic pharmaceutical & medical supply.
          </h2>
        </motion.div>

        {/* Numbered Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MagicCard
                gradientFrom="#0070f3"
                gradientTo="#50e3c2"
                className="relative flex flex-col gap-4 p-6 group pl-7 border-l-2 border-l-link h-full"
              >
                {/* Geist Mono Large Step Number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl md:text-3xl font-semibold text-mute group-hover:text-link transition-colors">
                    {step.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-link/60 group-hover:bg-link group-hover:scale-125 transition-all" />
                </div>

                <h3 className="heading-md text-ink group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="body-md text-body leading-relaxed">
                  {step.description}
                </p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
