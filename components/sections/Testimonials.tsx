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
    author: { name: "Dr. A. Sharma", role: "Sharma Clinic, Lucknow", initials: "AS" },
    text: "Patient inquiries doubled within three months of working with Sevoria. Professional, precise, and they understood our compliance concerns from day one.",
  },
  {
    author: { name: "Dr. R. Verma", role: "Lucknow Dental Care", initials: "RV" },
    text: "Finally, an agency that understands medical advertising rules. Our campaigns run safely and convert better than anything we tried before.",
  },
  {
    author: { name: "Dr. S. Singh", role: "Arogya Hospital", initials: "SS" },
    text: "The new site is fast, clean, and it shows in our local search visibility. Organic traffic from Lucknow searches has grown steadily since launch.",
  },
  {
    author: { name: "Dr. K. Patel", role: "Apex Heart & Vascular", initials: "KP" },
    text: "Sevoria transformed our patient leads quality. Their understanding of medical ethics and search positioning in UP is second to none.",
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
          <span className="mono-eyebrow">RESULTS</span>
          <h2 className="heading-lg max-w-[720px] text-ink">{title}</h2>
          <p className="body-lg max-w-[600px] text-body">{description}</p>
        </div>

        {/* Marquee matching original §4.5 spec with slowed down duration (60s) */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:60s] w-full">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
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
      title="Trusted by practitioners across Lucknow."
      description="Real results from clinics and hospitals who partnered with Sevoria to grow their patient pipeline."
      testimonials={testimonials}
    />
  )
}
