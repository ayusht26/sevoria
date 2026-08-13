"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { BUSINESS_INFO } from "@/lib/business-info"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { MagicCard } from "@/components/ui/magic-card"
import { MapPin, Phone, Mail, CheckCircle, Send } from "lucide-react"
import { Reveal } from "@/components/motion/Reveal"

// Form validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number."),
  clinicName: z.string().min(2, "Clinic or practice name is required."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      clinicName: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    // PLACEHOLDER BACKEND HANDLER:
    // Connect to Formspree, Resend, or serverless route endpoint here.
    console.log("Contact Form Submission Data:", data)

    // Simulate network request delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitted(true)
    reset()
  }

  return (
    <section id="contact" className="bg-canvas text-ink py-[var(--space-section)] px-5 sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Section Header */}
        <Reveal className="flex flex-col items-start gap-3">
          <span className="mono-eyebrow">GET IN TOUCH</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Connect with SEVIORA PHARMA PRIVATE LIMITED.
          </h2>
        </Reveal>

        {/* Split Layout (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details & Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="heading-md text-ink">Contact & Office Location</h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-canvas-elevated border border-hairline flex items-center justify-center text-ink/70 dark:text-ink/60 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-mute font-mono uppercase tracking-wider">
                      Registered Office Address
                    </h4>
                    <p className="body-md text-ink mt-0.5">{BUSINESS_INFO.address}</p>
                    <p className="text-xs text-mute mt-1 font-mono">
                      (Google Maps listing: Satya Distributors)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-canvas-elevated border border-hairline flex items-center justify-center text-ink/70 dark:text-ink/60 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-mute font-mono uppercase tracking-wider">
                      Mobile & Direct Line
                    </h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="body-md text-ink md:hover:text-link transition-colors mt-0.5 block font-semibold"
                    >
                      {BUSINESS_INFO.formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-canvas-elevated border border-hairline flex items-center justify-center text-ink/70 dark:text-ink/60 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-mute font-mono uppercase tracking-wider">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="body-md text-ink md:hover:text-link transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl overflow-hidden border border-hairline shadow-md"
            >
              {/* Map iframe — always full color */}
              <div className="relative w-full h-[260px] overflow-hidden">
                <iframe
                  title="SEVIORA PHARMA PRIVATE LIMITED Google Maps Location"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                {/* Pulsing pin overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                  </span>
                </div>
              </div>

              {/* Footer bar with location label + open button */}
              <div className="flex items-center justify-between px-4 py-3 bg-canvas-elevated border-t border-hairline">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ink/60 shrink-0" />
                  <span className="text-xs font-mono text-body truncate max-w-[160px]">
                    Ashiyana, Lucknow
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-ink text-canvas md:hover:bg-ink/80 transition-colors shrink-0"
                >
                  <span>Open in Maps</span>
                  <Send className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <MagicCard className="p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="h-16 w-16 rounded-full bg-link/10 border border-link flex items-center justify-center text-link">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="heading-md text-ink">Inquiry Received</h3>
                <p className="body-md text-body max-w-[400px]">
                  Thank you. Satyendra Tiwari or a representative from SEVIORA PHARMA PRIVATE LIMITED will get back to you shortly.
                </p>
                <InteractiveHoverButton
                  variant="secondary"
                  text="Send Another Message"
                  onClick={() => setIsSubmitted(false)}
                  className="hidden sm:inline-flex mt-4"
                />
                <Button
                  variant="secondaryPill"
                  size="pillMd"
                  onClick={() => setIsSubmitted(false)}
                  className="sm:hidden mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase text-mute">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Satyendra Tiwari"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <span className="text-xs text-error">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase text-mute">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="contact@pharmacy.com"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <span className="text-xs text-error">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase text-mute">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="9452948453"
                      {...register("phone")}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <span className="text-xs text-error">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Clinic / Business Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase text-mute">
                      Organization / Practice Name *
                    </label>
                    <Input
                      placeholder="Clinic / Hospital / Retailer"
                      {...register("clinicName")}
                      aria-invalid={!!errors.clinicName}
                    />
                    {errors.clinicName && (
                      <span className="text-xs text-error">
                        {errors.clinicName.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase text-mute">
                    Inquiry Details *
                  </label>
                  <Textarea
                    placeholder="Specify requirements for pharmaceuticals, orthopaedic goods, or toilet articles..."
                    {...register("message")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span className="text-xs text-error">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <InteractiveHoverButton
                  variant="primary"
                  type="submit"
                  text={isSubmitting ? "Sending..." : "Send Product Enquiry"}
                  icon={<Send className="h-4 w-4 shrink-0" />}
                  disabled={isSubmitting}
                  className="hidden sm:inline-flex px-8 py-3.5 text-base w-auto self-start"
                />
                <Button
                  type="submit"
                  variant="primaryPill"
                  size="pillLg"
                  disabled={isSubmitting}
                  className="sm:hidden w-full gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Send Product Enquiry</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
