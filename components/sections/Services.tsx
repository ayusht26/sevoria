"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Pill, Activity, Sparkles, ShieldCheck, Truck, Store } from "lucide-react"

const SERVICES = [
  {
    icon: Pill,
    title: "Retail Sale of Pharmaceuticals",
    description: "Dispensing authentic prescription medicines, therapeutic drugs, and everyday healthcare pharmaceuticals with strict quality compliance.",
  },
  {
    icon: Activity,
    title: "Medical & Orthopaedic Goods",
    description: "Sourcing and retailing premium orthopaedic supports, braces, rehabilitation aids, and specialized medical clinical equipment.",
  },
  {
    icon: Sparkles,
    title: "Toilet Articles & Personal Hygiene",
    description: "A wide selection of personal care products, skin hygiene essentials, sanitization items, and premium toilet articles.",
  },
  {
    icon: Store,
    title: "Retail Pharmacy & Healthcare Outlet",
    description: "Accessible retail store located in Ashiyana, Lucknow, serving individual patients, practitioners, and regional buyers.",
  },
  {
    icon: Truck,
    title: "Order Fulfilment & Supply",
    description: "Streamlined inventory management and dependable local delivery for clinics, hospitals, and retail consumers.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Compliance & Standards",
    description: "Full adherence to Indian regulatory standards and MCA guidelines, ensuring genuine products and transparent sourcing.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Services() {
  return (
    <section id="services" className="bg-canvas text-ink py-24 md:py-32 px-6 border-t border-hairline">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3"
        >
          <span className="mono-eyebrow">OUR BUSINESS SCOPE</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Activities as per MCA records of SEVIORA PHARMA PRIVATE LIMITED.
          </h2>
        </motion.div>

        {/* 3-Up Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-canvas-elevated border-hairline hover:border-mute transition-all duration-300 group p-2">
                  <CardHeader className="flex flex-col gap-4">
                    <div className="h-12 w-12 rounded-lg bg-hairline-soft border border-hairline flex items-center justify-center text-link group-hover:border-link/50 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-ink group-hover:text-white transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="body-md text-body leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
