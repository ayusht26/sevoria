"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { BUSINESS_INFO } from "@/lib/business-info"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CtaBand() {
  return (
    <section className="relative bg-gradient-to-b from-canvas via-canvas-elevated to-canvas text-ink py-24 md:py-32 px-6 border-y border-hairline overflow-hidden">
      {/* Background Subtle Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-link via-violet to-cyan filter blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="mono-eyebrow text-cyan">GET IN TOUCH WITH US</span>
          <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink max-w-[800px]">
            Need Pharmaceutical or Medical Supplies?
          </h2>
          <p className="body-lg text-body max-w-[650px] leading-relaxed">
            Contact SEVIORA PHARMA PRIVATE LIMITED in Ashiyana, Lucknow for authentic pharmaceuticals, orthopaedic goods, and toilet articles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <InteractiveHoverButton
            variant="primary"
            text="Send Product Enquiry"
            href="#contact"
            className="hidden sm:inline-flex px-8 py-3.5 text-base"
          />
          <Button
            variant="primaryPill"
            size="pillLg"
            asChild
            className="sm:hidden w-full gap-2 group"
          >
            <a href="#contact">
              Send Product Enquiry
              <ArrowRight className="h-4 w-4 transition-transform duration-200" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-mute pt-4 font-mono"
        >
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 md:hover:text-ink transition-colors"
          >
            <Phone className="h-4 w-4 text-link" />
            <span>{BUSINESS_INFO.formattedPhone}</span>
          </a>
          <span className="hidden sm:inline text-hairline">•</span>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="flex items-center gap-2 md:hover:text-ink transition-colors"
          >
            <Mail className="h-4 w-4 text-link" />
            <span>{BUSINESS_INFO.email}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
