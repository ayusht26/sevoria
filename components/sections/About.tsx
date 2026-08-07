"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BUSINESS_INFO } from "@/lib/business-info"
import { CheckCircle2, UserCheck } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-canvas text-ink py-24 md:py-32 px-6">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3"
        >
          <span className="mono-eyebrow">ABOUT SEVORIA</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Built for medicine. Nothing else.
          </h2>
        </motion.div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6 body-lg text-body"
          >
            <p>
              Founded by <strong className="text-ink font-semibold">{BUSINESS_INFO.owner}</strong> in Lucknow, <strong className="text-ink font-semibold">{BUSINESS_INFO.brandName}</strong> was born out of a stark realization: generalist marketing agencies consistently fail medical professionals because they treat a doctor’s clinic like an e-commerce store.
            </p>
            <p>
              Medical growth requires a deep respect for medical compliance, patient psychology, and local community authority. We don't sell gimmicks or vanity metrics. We engineer high-converting patient pipelines, build unbreakable local search dominance, and elevate doctor branding across Lucknow and North India.
            </p>

            <ul className="flex flex-col gap-3 pt-2 text-sm text-ink font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>100% Medical & Healthcare Vertical Focus</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>Strict Compliance with Medical Council Advertising Guidelines</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>Deep Local Understanding of Uttar Pradesh Patient Dynamics</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Founder & Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card className="p-8 relative overflow-hidden border-hairline bg-canvas-elevated">
              {/* Subtle Corner Glow Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-link/10 filter blur-xl pointer-events-none" />

              <CardContent className="p-0 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-hairline-soft border border-hairline flex items-center justify-center text-link">
                    <UserCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="heading-md text-ink">{BUSINESS_INFO.owner}</h3>
                    <p className="text-xs text-mute font-mono uppercase tracking-wider mt-0.5">
                      Founder & Managing Director
                    </p>
                  </div>
                </div>

                <div className="border-t border-hairline pt-6">
                  <p className="text-sm text-body italic leading-relaxed">
                    &ldquo;In healthcare marketing, trust precedes conversion. If a patient doesn’t feel absolute confidence in your clinical authority within 3 seconds, no ad budget in the world will save your campaign.&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-mute font-mono border-t border-hairline-soft pt-4">
                  <span>LOCATION</span>
                  <span className="text-ink">{BUSINESS_INFO.shortAddress}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
