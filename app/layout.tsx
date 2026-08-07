import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sevoria — Medical Marketing Agency | Lucknow, Uttar Pradesh",
  description:
    "Sevoria helps doctors, clinics, and hospitals in Lucknow and across UP grow through precision digital marketing, compliance-aware patient acquisition, local SEO, and medical branding.",
  keywords: [
    "Medical Marketing Agency Lucknow",
    "Healthcare Marketing Lucknow",
    "Doctor Branding UP",
    "Clinic Patient Acquisition",
    "Medical SEO Lucknow",
    "Satyendra Tiwari Sevoria",
  ],
  authors: [{ name: "Satyendra Tiwari", url: "https://sevoria.com" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-canvas text-ink antialiased selection:bg-link selection:text-white"
      >
        {children}
      </body>
    </html>
  )
}
