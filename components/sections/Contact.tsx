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
import { MapPin, Phone, Mail, CheckCircle, Send } from "lucide-react"

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
    <section id="contact" className="bg-canvas text-ink py-24 md:py-32 px-6">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3"
        >
          <span className="mono-eyebrow">GET IN TOUCH</span>
          <h2 className="heading-lg max-w-[720px] text-ink">
            Start growing your medical practice today.
          </h2>
        </motion.div>

        {/* Split Layout (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="heading-md text-ink">Contact Details</h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-canvas-elevated border border-hairline flex items-center justify-center text-link shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-mute font-mono uppercase tracking-wider">
                      Office Address
                    </h4>
                    <p className="body-md text-ink mt-0.5">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-canvas-elevated border border-hairline flex items-center justify-center text-link shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-mute font-mono uppercase tracking-wider">
                      Direct Line
                    </h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="body-md text-ink hover:text-link transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-canvas-elevated border border-hairline flex items-center justify-center text-link shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-mute font-mono uppercase tracking-wider">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="body-md text-ink hover:text-link transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed Placeholder Card */}
            {/* PLACEHOLDER: Embed Google Maps iframe or interactive map for XYZ, Ashiyana, Lucknow */}
            <div className="rounded-xl border border-hairline bg-canvas-elevated p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[180px]">
              <MapPin className="h-8 w-8 text-mute animate-bounce" />
              <p className="text-sm text-body font-medium">
                XYZ, Ashiyana, Lucknow, UP
              </p>
              <span className="text-xs text-mute font-mono">
                {/* PLACEHOLDER: Embed live Google Maps iframe here */}
                [ Interactive Map Embed Placeholder ]
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 rounded-xl border border-hairline bg-canvas-elevated p-8"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="h-16 w-16 rounded-full bg-link/10 border border-link flex items-center justify-center text-link">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="heading-md text-ink">Inquiry Received</h3>
                <p className="body-md text-body max-w-[400px]">
                  Thank you. Satyendra Tiwari or a senior Sevoria strategist will contact you within 24 hours.
                </p>
                <Button
                  variant="secondaryPill"
                  size="pillMd"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4"
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
                      placeholder="Dr. Rajesh Kumar"
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
                      placeholder="doctor@clinic.com"
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
                      placeholder="9876543210"
                      {...register("phone")}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <span className="text-xs text-error">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Clinic Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase text-mute">
                      Clinic / Practice Name *
                    </label>
                    <Input
                      placeholder="Lucknow Care Clinic"
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
                    How can we help your practice? *
                  </label>
                  <Textarea
                    placeholder="Tell us about your clinic, specialty, and current patient acquisition goals..."
                    {...register("message")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span className="text-xs text-error">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primaryPill"
                  size="pillLg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Submit Strategy Request</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
