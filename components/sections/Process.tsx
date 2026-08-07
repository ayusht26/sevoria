"use client"

import { motion } from "framer-motion"

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit & Analysis",
    description: "Deep dive into your clinic’s current market share, online visibility, patient reviews, and competitor landscapes in Lucknow.",
  },
  {
    number: "02",
    title: "Strategy & Framing",
    description: "Formulating compliant campaign messaging, high-converting landing funnels, and local SEO blueprints tailored to your medical specialty.",
  },
  {
    number: "03",
    title: "Launch & Acquisition",
    description: "Deploying high-intent search ads, hyper-targeted social branding, and patient inquiry automation tools.",
  },
  {
    number: "04",
    title: "Optimization & Scale",
    description: "Continuously refining ad spend, scaling patient volume, and solidifying long-term clinic authority.",
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
          <span className="mono-eyebrow">HOW WE WORK</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            A methodical 4-step framework for predictable clinic growth.
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
              className="relative flex flex-col gap-4 p-6 rounded-xl bg-canvas-elevated border border-hairline hover:border-mute transition-colors group pl-7 border-l-2 border-l-link"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
