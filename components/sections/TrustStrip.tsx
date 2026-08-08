"use client"

import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import {
  ApolloLogo,
  FortisLogo,
  MaxLogo,
  MedantaLogo,
  SaharaLogo,
  KgmuLogo,
  CharakLogo,
} from "@/components/ui/hospital-logos"

const HOSPITAL_LOGOS = [
  { name: "Apollo Hospitals", component: ApolloLogo },
  { name: "Fortis Healthcare", component: FortisLogo },
  { name: "Max Healthcare", component: MaxLogo },
  { name: "Medanta The Medicity", component: MedantaLogo },
  { name: "Sahara Hospital Lucknow", component: SaharaLogo },
  { name: "KGMU Medical", component: KgmuLogo },
  { name: "Charak Health", component: CharakLogo },
]

export function TrustStrip() {
  return (
    <section className="bg-canvas border-b border-hairline py-12 px-0 overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-4 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mono-eyebrow text-center text-mute tracking-widest"
        >
          TRUSTED BY CLINICS & HEALTHCARE BRANDS ACROSS UP
        </motion.span>
      </div>

      {/* Hospital Logos Horizontal Marquee with slow smooth single-container animation */}
      <div className="relative mt-6 flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row [--duration:90s] w-full">
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row md:group-hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, setIndex) =>
              HOSPITAL_LOGOS.map((item, i) => {
                const LogoComp = item.component
                return (
                  <MagicCard
                    key={`${setIndex}-${i}`}
                    className="px-8 py-3.5 shrink-0 flex items-center justify-center h-14 w-[200px] sm:w-[220px]"
                  >
                    <LogoComp className="h-7 w-auto opacity-70 md:hover:opacity-100 transition-opacity" />
                  </MagicCard>
                )
              })
            )}
          </div>
        </div>

        {/* Clean Edge Fade Gradients into black canvas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-canvas sm:block z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-canvas sm:block z-10" />
      </div>
    </section>
  )
}
