"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Target, Stethoscope, Search, Megaphone, Monitor, Star } from "lucide-react"

const SERVICES = [
  {
    icon: Target,
    title: "Patient Acquisition",
    description: "Multi-channel lead funnels optimized to deliver qualified, high-intent patient inquiries directly to your front desk.",
  },
  {
    icon: Stethoscope,
    title: "Doctor & Clinic Branding",
    description: "Positioning practitioners as premier local medical authorities through refined visual identity and thought leadership.",
  },
  {
    icon: Search,
    title: "Medical SEO & Local Search",
    description: "Dominating local search results for high-value treatments, procedures, and specialist keywords in your city.",
  },
  {
    icon: Megaphone,
    title: "Healthcare Ads (Google & Meta)",
    description: "Targeted PPC and social ad campaigns compliant with healthcare advertising policies and optimized for maximum ROI.",
  },
  {
    icon: Monitor,
    title: "Website & Landing Page Design",
    description: "Lightning-fast, high-converting digital portals engineered specifically for medical trust and frictionless appointment booking.",
  },
  {
    icon: Star,
    title: "Reputation & Review Management",
    description: "Systematic Google Business review generation and proactive online reputation shielding for doctors and clinics.",
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
          <span className="mono-eyebrow">WHAT WE DO</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Everything a modern medical brand needs to grow.
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
