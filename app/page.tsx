import { Nav } from "@/components/sections/Nav"
import { Hero } from "@/components/sections/Hero"
import { TrustStrip } from "@/components/sections/TrustStrip"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { WhySevoria } from "@/components/sections/WhySevoria"
import { Process } from "@/components/sections/Process"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-canvas text-ink flex flex-col">
      {/* 1. Sticky Nav Bar */}
      <Nav />

      {/* Main Single-Page Content Assembly */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. About Us */}
        <About />

        {/* 5. Services */}
        <Services />

        {/* 6. Why Sevoria */}
        <WhySevoria />

        {/* 7. Process / How We Work */}
        <Process />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  )
}
