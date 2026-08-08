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
  title: "SEVIORA PHARMA PRIVATE LIMITED — Pharmaceuticals, Medical & Orthopaedic Goods | Lucknow",
  description:
    "As per MCA records SEVIORA PHARMA PRIVATE LIMITED is involved in activities such as Retail sale of pharmaceuticals, medical and orthopaedic goods and toilet articles in Ashiyana, Lucknow, Uttar Pradesh.",
  keywords: [
    "SEVIORA PHARMA PRIVATE LIMITED",
    "Seviora Pharma Lucknow",
    "Retail sale of pharmaceuticals Lucknow",
    "Medical and orthopaedic goods Lucknow",
    "Toilet articles Lucknow",
    "Satya Distributors Ashiyana Lucknow",
    "Satyendra Tiwari Seviora",
  ],
  authors: [{ name: "Satyendra Tiwari", url: "https://maps.app.goo.gl/GwigRLtAJiDtfbYFA" }],
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
