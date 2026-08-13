"use client"

import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { Card, CardContent } from "@/components/ui/card"
import { BUSINESS_INFO } from "@/lib/business-info"
import { CheckCircle2, UserCheck } from "lucide-react"
import { Reveal } from "@/components/motion/Reveal"

export function About() {
  return (
    <section id="about" className="bg-canvas text-ink py-[var(--space-section)] px-5 sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-12">
        {/* Section Header */}
        <Reveal className="flex flex-col items-start gap-3">
          <span className="mono-eyebrow">ABOUT SEVIORA PHARMA</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            A trusted local pharmacy serving Ashiyana since registration.
          </h2>
        </Reveal>

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
              <strong className="text-ink font-semibold">{BUSINESS_INFO.companyName}</strong> is an MCA-registered
              business entity based in Ashiyana, Lucknow — serving healthcare practitioners, medical
              facilities, and families with genuine pharmaceutical and medical products.
            </p>

            {/* Single source of truth for the MCA verbatim quote */}
            <MagicCard className="p-4 leading-relaxed font-normal text-ink/90">
              &ldquo;As per MCA records <strong className="text-ink">{BUSINESS_INFO.companyName}</strong> is
              involved in activities such as Retail sale of pharmaceuticals, medical and orthopaedic goods
              and toilet articles.&rdquo;
            </MagicCard>

            <p>
              Under the leadership of <strong className="text-ink font-semibold">{BUSINESS_INFO.owner}</strong>,
              Seviora Pharma serves both walk-in customers and clinic partners with authentic, quality-checked
              products at every visit.
            </p>

            <ul className="flex flex-col gap-3 pt-2 text-sm text-ink font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>Retail Sale of Pharmaceuticals &amp; Prescription Medicines</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>Medical &amp; Orthopaedic Goods Supply</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>Toilet Articles &amp; Personal Care Hygiene Products</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Company & Director Card — kept as MagicCard (permitted exception) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card className="p-8 relative overflow-hidden border-hairline bg-canvas-elevated">
              <CardContent className="p-0 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-hairline-soft border border-hairline flex items-center justify-center text-ink/70 dark:text-ink/60 shrink-0">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="heading-md text-ink break-words">{BUSINESS_INFO.companyName}</h3>
                    <p className="text-xs text-mute font-mono uppercase tracking-wider mt-0.5 break-words">
                      {BUSINESS_INFO.owner} • Director
                    </p>
                  </div>
                </div>

                <div className="border-t border-hairline pt-6">
                  <p className="text-sm text-body italic leading-relaxed">
                    &ldquo;We are committed to delivering verified, high-grade pharmaceutical products,
                    orthopaedic equipment, and hygiene essentials with absolute integrity and reliability.&rdquo;
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-t border-hairline-soft pt-4 text-xs font-mono text-mute">
                  <div className="flex items-start justify-between gap-2">
                    <span className="shrink-0">MCA REGISTRATION</span>
                    <span className="text-ink font-semibold text-right">Lucknow, UP</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="shrink-0">LOCATION</span>
                    <span className="text-ink text-right min-w-0">{BUSINESS_INFO.shortAddress}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
