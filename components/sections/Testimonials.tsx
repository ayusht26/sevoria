"use client"

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
  }>
  className?: string
}

// PLACEHOLDER: replace all entries below with real client testimonials
// once Satyendra provides them. Names, clinics, and quotes here are
// illustrative only and must not be presented to a client as real.
const testimonials: TestimonialsSectionProps["testimonials"] = [
  {
    author: { name: "Dr. A. Sharma", role: "Orthopaedic Specialist, Lucknow", initials: "AS" },
    text: "SEVIORA PHARMA PRIVATE LIMITED has been our go-to supplier for high-quality orthopaedic goods and medical supplies in Ashiyana. Prompt delivery and authentic products always.",
  },
  {
    author: { name: "Dr. R. Verma", role: "Lucknow Healthcare Centre", initials: "RV" },
    text: "Reliable retail and stock availability for essential pharmaceuticals and surgical goods. Their team is extremely professional and cooperative.",
  },
  {
    author: { name: "Dr. S. Singh", role: "Arogya Medical Care", initials: "SS" },
    text: "From toilet articles and personal hygiene supplies to specialized medical goods, Sevoria Pharma Private Limited maintains genuine quality and timely service.",
  },
  {
    author: { name: "Dr. K. Patel", role: "Apex Clinic, Lucknow", initials: "KP" },
    text: "Finding a trusted distributor in Lucknow for pharmaceuticals and orthopaedic aids was easy once we partnered with Sevoria. Outstanding product reliability.",
  },
]

export function TestimonialsSection({
  title,
  description,
  testimonials: items,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className={cn(
        "bg-canvas text-ink py-24 md:py-32 px-0 border-t border-hairline overflow-hidden",
        className
      )}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 text-center sm:gap-16 px-6">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          <span className="mono-eyebrow">CLIENT FEEDBACK</span>
          <h2 className="heading-lg max-w-[720px] text-ink">{title}</h2>
          <p className="body-lg max-w-[600px] text-body">{description}</p>
        </div>

        {/* Marquee with slow smooth single-container animation */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:100s] w-full">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row md:group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                items.map((t, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...t} />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-canvas sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-canvas sm:block" />
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <TestimonialsSection
      title="Trusted across Lucknow clinics & healthcare facilities."
      description="Feedback from healthcare practitioners and clients relying on SEVIORA PHARMA PRIVATE LIMITED for pharmaceuticals, medical & orthopaedic goods."
      testimonials={testimonials}
    />
  )
}
