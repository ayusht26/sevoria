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
          <span className="mono-eyebrow">ABOUT SEVIORA PHARMA</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Registered MCA enterprise for medical & pharmaceutical goods.
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
              <strong className="text-ink font-semibold">{BUSINESS_INFO.companyName}</strong> is an MCA-registered business entity based in Lucknow, Uttar Pradesh.
            </p>
            <p className="text-ink/90 bg-canvas-elevated p-4 rounded-lg border border-hairline leading-relaxed">
              &ldquo;As per MCA records <strong className="text-ink">{BUSINESS_INFO.companyName}</strong> is involved in activities such as Retail sale of pharmaceuticals, medical and orthopaedic goods and toilet articles.&rdquo;
            </p>
            <p>
              Under the leadership of <strong className="text-ink font-semibold">{BUSINESS_INFO.owner}</strong>, Seviora Pharma Private Limited serves healthcare practitioners, medical facilities, and retail customers with authentic pharmaceutical products, specialized orthopaedic aids, and personal hygiene essentials.
            </p>

            <ul className="flex flex-col gap-3 pt-2 text-sm text-ink font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>Retail Sale of Pharmaceuticals & Prescription Medicines</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>Medical & Orthopaedic Goods Supply</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-link shrink-0" />
                <span>Toilet Articles & Personal Care Hygiene Products</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Company & Director Card */}
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
                    <h3 className="heading-md text-ink">{BUSINESS_INFO.companyName}</h3>
                    <p className="text-xs text-mute font-mono uppercase tracking-wider mt-0.5">
                      {BUSINESS_INFO.owner} • Director
                    </p>
                  </div>
                </div>

                <div className="border-t border-hairline pt-6">
                  <p className="text-sm text-body italic leading-relaxed">
                    &ldquo;We are committed to delivering verified, high-grade pharmaceutical products, orthopaedic equipment, and hygiene essentials with absolute integrity and reliability.&rdquo;
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-t border-hairline-soft pt-4 text-xs font-mono text-mute">
                  <div className="flex items-center justify-between">
                    <span>MCA REGISTRATION</span>
                    <span className="text-ink font-semibold">Lucknow, UP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>LOCATION</span>
                    <span className="text-ink">{BUSINESS_INFO.shortAddress}</span>
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
