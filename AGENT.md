# SEVORIA — Full Website Build Prompt (Vercel Geist — Dark Theme)

Paste this entire document into your AI coding tool (Claude Code, Cursor, v0, etc.) as the build spec. It contains the brand, the dark design system, component setup, the full sitemap, section-by-section content, and animation requirements. This supersedes any earlier light-theme version of this prompt — **dark theme is the only theme for this build.**

---

## 1. Project Brief

Build the full website for **Sevoria**, a medical marketing agency based in Lucknow, India. Sevoria helps doctors, clinics, hospitals, and pharma/healthcare brands grow through digital marketing — the site itself must look like proof of that expertise: premium, precise, confident, and modern. No stock-template feel anywhere. No light backgrounds anywhere — this is a near-black, ink-on-void system.

**Business details (fixed inputs — do not alter)**
| Field | Value |
|---|---|
| Brand name | Sevoria |
| Industry | Medical / healthcare marketing agency |
| Owner | Satyendra Tiwari |
| Phone | 1234567890 |
| Address | XYZ, Lucknow, Ashiyana |
| Email | satya@gmail.com |
| Location | Lucknow, Uttar Pradesh, India |

**Tone**: Confident, clinical-precise, premium — not corny "we love healthcare" copy. Think of how a top-tier B2B SaaS site talks, applied to medical growth marketing.

**Goal of this build**: A client should look at this site and immediately think "this agency is expensive and good," not "this agency needs marketing themselves."

---

## 2. Design System — Vercel Geist, Dark Mode

Why dark: for a medical growth agency, a near-black canvas with a single restrained blue→cyan→violet gradient reads as high-end health-tech / precision-engineering rather than "clinic brochure." The duotone (ink-on-void) plus one animated mesh-gradient hero is the entire decorative budget — spend it once, nowhere else.

### 2.1 Color Tokens (exact — do not invent new colors)

```css
--canvas: #000000;              /* page background */
--canvas-elevated: #0a0a0a;     /* cards, panels, inputs */
--hairline-soft: #111111;       /* alternating section bands */
--ink: #ededed;                 /* headings, primary text-on-dark */
--body: #a1a1a1;                /* paragraph text */
--mute: #888888;                /* captions, metadata, mono labels */
--faint: #666666;               /* placeholders, disabled */
--hairline: #333333;            /* 1px borders, everywhere */
--link: #0070f3;                /* Sevoria accent blue — links, focus, active states */
--link-deep: #3291ff;           /* hover/active blue */
--link-soft: rgba(0, 112, 243, 0.1);
--violet: #7928ca;
--cyan: #50e3c2;
--error: #ee0000;
--warning: #f5a623;

/* Hero mesh gradient stops — blue / violet / cyan only, no pink/amber */
--gradient-blob-1: #0070f3;   /* blue */
--gradient-blob-2: #7928ca;   /* violet */
--gradient-blob-3: #50e3c2;   /* cyan */
```

Map these directly into `tailwind.config.ts` as `theme.extend.colors`, and mirror them as CSS custom properties on `:root` (scoped under `html.dark` or just as the default root — this build has no light mode toggle).

### 2.2 Typography

- **Geist Sans** (fallback: Inter) for all UI/prose. **Geist Mono** (fallback: JetBrains Mono) for uppercase section eyebrows and numbered process steps only.
- Weight is binary: 600 for headings, 500 for buttons/labels, 400 for everything else. No italics, no light/black weights.

| Token | Size | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| display-xl | 40–72px (clamp, mobile→desktop) | 600 | 1.1 | -2.4px | Hero headline |
| heading-lg | 28–40px (clamp) | 600 | 1.15 | -1.28px | Section headings |
| heading-md | 20px | 600 | 28px | -0.4px | Card/sub-section headings |
| label-sm | 14px | 500 | 20px | -0.28px | Nav, strong labels |
| mono-eyebrow | 12px | 500 | 16px | 0.05em, uppercase | Section eyebrows ("OUR SERVICES") |
| body-lg | 16–18px | 400 | 24–28px | 0 | Lead paragraphs |
| body-md | 14px | 400 | 20px | 0 | Default body, nav |
| body-sm | 12px | 400 | 16px | 0 | Captions |
| button-lg | 16px | 500 | 20px | 0 | Marketing pill buttons |
| button-md | 14px | 500 | 20px | 0 | Nav/app buttons |

### 2.3 Spacing, Radius, Elevation

- **Spacing** — 4px base unit: 4, 8, 12, 16, 24, 32, 40, 64, 96, 128px. Section vertical rhythm = 96–128px. Card interior padding = 24–32px.
- **Radius** — 0px (full-bleed) · 6px (nav/app buttons, inputs) · 12px (feature cards) · 16px (pricing/panel cards) · 100px (marketing CTA pills) · 9999px (avatars, icon buttons).
- **Elevation** — Default: 1px hairline (`--hairline: #333333`), no shadow. Whisper: border + `0 1px 1px rgba(0,0,0,0.4)` (darker alpha than a light theme would use). Floating (menus/modals only): layered low-alpha shadow + inset hairline. Never use heavy drop shadows — on black, shadows barely register anyway; lean on border/glow instead.
- On dark, a card's "lift" on hover should be a **border color shift** (`--hairline` → `--mute`) rather than a shadow, plus optional 1–2% background lightening.

### 2.4 Buttons — two shapes only, never mixed within a context

- **Marketing CTA**: white pill on black background (`background: #fff; color: #000`), `rounded-full`, `padding: 0 24px`, `button-lg` type. Hover: scale 1→1.02, slight `background: #f0f0f0`.
- **Nav/app**: 6px square, `padding: 0 6px`, `button-md` type, ghost/outline against `--hairline`.
- Secondary CTA pill (used next to a primary pill): transparent background, 1px `--hairline` border, `--ink` text, hover fills `--hairline-soft`.

---

## 3. Tech Stack

- **Framework**: Next.js (App Router) + React + TypeScript
- **Styling**: Tailwind CSS, using the exact tokens above as CSS variables / Tailwind theme extensions — do not invent new colors. Dark is the only mode; no `dark:` variants needed, just build the whole theme dark natively.
- **Components**: shadcn/ui as the base component layer (Button, Card, Sheet/Drawer for mobile nav, Accordion for FAQ, Dialog for contact modal, Form for the contact form, Avatar for testimonials) — restyled to match the tokens above via `components.json` theme overrides, never left in shadcn's default zinc theme.
- **Hero animation**: Anime.js (v3) — for the hero headline reveal, the animated mesh-gradient blob, and staggered entrance of hero sub-elements. Scope Anime.js to the hero only.
- **Scroll animations**: Framer Motion for every other scroll-triggered animation on the site (fade/slide-up reveals, staggered card grids). Use `whileInView` + `viewport={{ once: true }}` throughout — one consistent library outside the hero, never mixed with Anime.js elsewhere.
- **Icons**: **lucide-react** (the React package, not the CDN script) — pairs natively with shadcn.
- **Fully responsive**: mobile-first, breakpoints at 640 / 768 / 1024 / 1200px per the layout spec below.

---

## 4. Component Setup — Testimonials Marquee (shadcn block)

Sevoria's testimonials section uses an infinite horizontal marquee of testimonial cards, not a static 3-up grid. Set it up exactly as follows.

### 4.1 Verify project prerequisites

Confirm the project has: a shadcn-initialized structure (`components.json` present), Tailwind CSS, and TypeScript. If any are missing, run:

```bash
npx shadcn@latest init
```

and confirm the default component path resolves to `/components/ui` — if it doesn't, that path must be created/aliased, because every shadcn primitive and the two files below assume `@/components/ui/*` imports.

### 4.2 Install dependency

```bash
npm install @radix-ui/react-avatar
```

### 4.3 Create `/components/ui/avatar.tsx`

```tsx
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium",
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
```

### 4.4 Create `/components/ui/testimonial-card.tsx`

> Note: this build does **not** ship stock photos as if they were real client headshots (Sevoria's own content rules in §8 forbid presenting fabricated content as real). Use `AvatarFallback` with the author's initials on a `--hairline-soft` background instead of `AvatarImage` — swap in real photos once Satyendra provides real client testimonials.

```tsx
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  role: string      // e.g. "Sharma Clinic, Lucknow"
  initials: string  // e.g. "AS"
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  className?: string
}

export function TestimonialCard({ author, text, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-hairline",
        "bg-canvas-elevated",
        "p-6 text-start",
        "max-w-[320px] shrink-0",
        "transition-colors duration-300 hover:border-mute",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11 border border-hairline">
          <AvatarFallback className="bg-hairline-soft text-ink">
            {author.initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold leading-none text-ink">
            {author.name}
          </h3>
          <p className="text-xs text-mute mt-1">{author.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-body">{text}</p>
    </div>
  )
}
```

### 4.5 Create `/components/sections/Testimonials.tsx`

```tsx
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
]

export function TestimonialsSection({
  title,
  description,
  testimonials: items,
  className,
}: TestimonialsSectionProps) {
  return (
    <section className={cn("bg-canvas text-ink py-24 md:py-32 px-0", className)}>
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 text-center sm:gap-16 px-6">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          <span className="mono-eyebrow">RESULTS</span>
          <h2 className="heading-lg max-w-[720px]">{title}</h2>
          <p className="body-lg max-w-[600px] text-body">{description}</p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
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

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by practitioners across Lucknow."
      description="Real results from clinics and hospitals who partnered with Sevoria to grow their patient pipeline."
      testimonials={testimonials}
    />
  )
}
```

### 4.6 Extend `tailwind.config.ts`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        "canvas-elevated": "#0a0a0a",
        "hairline-soft": "#111111",
        ink: "#ededed",
        body: "#a1a1a1",
        mute: "#888888",
        faint: "#666666",
        hairline: "#333333",
        link: "#0070f3",
        "link-deep": "#3291ff",
        violet: "#7928ca",
        cyan: "#50e3c2",
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
}
```

---

## 5. Sitemap

Single-page scrolling site with anchor navigation, built as distinct components under `/app/components/sections/` in this order:

1. Nav bar (sticky)
2. Hero
3. Trust strip (logo/stat strip)
4. About Us
5. Services
6. Why Sevoria (differentiators)
7. Process/How We Work
8. Testimonials (marquee — see §4)
9. CTA band
10. Contact
11. Footer

---

## 6. Section-by-Section Spec

### 6.1 Nav Bar (`Nav.tsx`)
- Sticky top, `background: rgba(0,0,0,0.8)` with `backdrop-blur`, bottom hairline, height ~64px.
- Left: Sevoria wordmark in `--ink`, weight 600.
- Center/right: ghost nav links (About, Services, Why Us, Contact) in `--body` grey, `body-md`, hover → `--ink`.
- Right: one white-pill-on-black CTA — "Book a Call".
- Mobile (≤640px): collapses to a hamburger (Lucide `Menu` icon) → shadcn `Sheet` drawer sliding from the right, full-height, black background, `--ink` text, large tap targets (≥44px).
- Sticky nav gains the hairline/backdrop-blur only after scrolling past the hero (adds a subtle "arrived" state).

### 6.2 Hero (`Hero.tsx`) — Anime.js required here
- Full-viewport-height (~90vh) band, `background: #000` with the animated mesh gradient (blue→violet→cyan blurred blobs, `filter: blur(100px)`, `opacity: ~0.4`) positioned behind the headline.
- Mono-eyebrow above headline (Geist Mono, uppercase): "MEDICAL GROWTH MARKETING · LUCKNOW"
- Headline (`display-xl`, tight tracking, `--ink`): **"Marketing That Doctors Actually Trust."** — draft 2 alternates in code comments for the client to pick between: *"Growth Marketing, Built for Medicine."* / *"Precision Marketing for Medical Practices."*
- Subheadline (`body-lg`, `--body` grey): positions Sevoria as a specialist agency for clinics, hospitals, and healthcare brands — not a generalist agency.
- Two CTAs: white pill primary ("Book a Free Strategy Call"), ghost/outline pill secondary ("See Our Work").
- **Anime.js entrance sequence on load** (build as a dedicated hook, e.g. `useHeroAnimation.ts` — do not inline into JSX): eyebrow fades/slides up first (delay 0ms) → headline fades/slides up (delay ~100ms) → subheadline fades up (delay ~100ms more) → CTAs fade/scale in (delay ~100ms more) → stat row fades up last. Total sequence under ~1.2s. Use `easeOutCubic` throughout — no elastic/bounce easing.
- **Mesh gradient blob motion**: 3 blurred divs/SVGs, each animated independently with Anime.js on an infinite loop — `translateX`/`translateY` drift + subtle `scale` breathing, 8–14s per cycle, `easeInOutSine`. Colors: blob 1 = `--link` (blue), blob 2 = `--violet`, blob 3 = `--cyan`.
- Below the fold of the hero: a thin stat row — "50+ Clinics Grown", "3.2x Avg. Patient Inquiries", "Pan-India Reach" — clearly commented as illustrative placeholder stats until the client supplies real numbers.
- Respect `prefers-reduced-motion`: disable blob looping and skip straight to the final entrance state.

### 6.3 Trust Strip (`TrustStrip.tsx`)
- Mono label, centered: "TRUSTED BY CLINICS & HEALTHCARE BRANDS ACROSS UP" + a greyscale row of placeholder logo blocks (`bg-hairline-soft`, low opacity). Comment clearly: `{/* PLACEHOLDER: replace with real client logos */}` — never fabricate real client names/logos.

### 6.4 About Us (`About.tsx`)
- Mono eyebrow: "ABOUT SEVORIA"
- `heading-lg`: "Built for medicine. Nothing else."
- Two-column layout (stacks on mobile, Framer Motion fade/slide-up on scroll):
  - Left: narrative copy — Sevoria founded by **Satyendra Tiwari**, based in Lucknow, specializing exclusively in healthcare marketing (compliance-aware advertising, patient trust, doctor credibility) vs. generalist agencies.
  - Right: a `--canvas-elevated` feature card with founder framing — name, short bio placeholder, and a quote-style philosophy line, rendered with a shadcn `Card`.

### 6.5 Services (`Services.tsx`)
- Mono eyebrow: "WHAT WE DO"
- `heading-lg`: "Everything a modern medical brand needs to grow."
- 3-up grid (2-up tablet, 1-up mobile) of shadcn `Card`s (`--canvas-elevated` background, 1px `--hairline` border, `rounded-xl`, 24–32px padding), each with a `lucide-react` icon in `--link`, `heading-md` title, 1–2 line `body-md` description:
  1. **Patient Acquisition** — `Target` icon
  2. **Doctor & Clinic Branding** — `Stethoscope` icon
  3. **Medical SEO & Local Search** — `Search` icon
  4. **Healthcare Ads (Google & Meta)** — `Megaphone` icon
  5. **Website & Landing Page Design** — `Monitor` icon
  6. **Reputation & Review Management** — `Star` icon
- Framer Motion: stagger children by ~60–80ms as the grid enters viewport.

### 6.6 Why Sevoria (`WhySevoria.tsx`)
- On a `--hairline-soft` background band to break rhythm from adjacent black sections.
- 4 differentiator blocks (icon + `heading-md` + one line), `lucide-react` icons in `--cyan`:
  1. **Healthcare-only focus** — `HeartPulse`
  2. **Compliance-aware campaigns** — `ShieldCheck`
  3. **Local Lucknow presence, pan-India delivery** — `MapPin`
  4. **Transparent reporting** — `FileBarChart`

### 6.7 Process / How We Work (`Process.tsx`)
- Horizontal (desktop) / vertical (mobile) numbered steps, 4 steps: **Audit → Strategy → Launch → Scale**. Large mono numerals (`01`–`04`, Geist Mono, `--mute`) as the numbering device — a thin left-border rail with a `--link` dot marker per step, matching the spec-sheet aesthetic.

### 6.8 Testimonials (`Testimonials.tsx`)
- Use the marquee component built in **§4** exactly. Infinite horizontal scroll, pauses on hover, edge-fade gradients into `--canvas` on left/right.

### 6.9 CTA Band (`CtaBand.tsx`)
- Full-width band, subtle vertical gradient from `--canvas` to `--canvas-elevated`.
- `display-xl` (scaled ~32–48px) headline, centered: "Ready to grow your practice?"
- One white pill CTA: "Book a Free Strategy Call"
- Secondary line, `--mute`, plain text: phone/email.

### 6.10 Contact (`Contact.tsx`)
- Split layout (stacks on mobile): 
  - Left = contact details (address, phone, email) formatted with `lucide-react` icons (`MapPin`, `Phone`, `Mail`) in `--link`, plus a `--canvas-elevated` map placeholder block for the Ashiyana, Lucknow address (`{/* PLACEHOLDER: embed real map */}`).
  - Right = shadcn `Form` (Name, Email, Phone, Clinic/Business Name, Message) styled to tokens — `--canvas-elevated` inputs, `--hairline` borders, `--link` focus ring. Client-side validation via `zod` + `react-hook-form` (shadcn's standard `Form` pattern). Submit handler wired to a placeholder (`console.log` or `mailto:` fallback) with a comment noting where to connect a real backend (Formspree, Resend, or a serverless route). White pill submit button, full-width on mobile.

### 6.11 Footer (`Footer.tsx`)
- `--canvas` background, top `--hairline` border, multi-column (2-up on mobile): Sevoria wordmark + one-line tagline · Quick links · Services list · Contact (phone/email/address). `body-md` throughout, `--mute` for the copyright line.

---

## 7. Animation Guidelines (site-wide)

| Trigger | Effect | Library |
|---|---|---|
| Hero load | Staggered entrance (eyebrow → headline → sub → CTAs → stats) + looping mesh-gradient blob motion | **Anime.js** (§6.2) |
| Section enters viewport | Fade + 16–24px slide-up, ~500–600ms, `ease-out`, once per element | **Framer Motion** (`whileInView`, `viewport={{ once: true }}`) |
| Card grids | Stagger children ~60–80ms as the grid enters view | **Framer Motion** (`staggerChildren`) |
| Buttons | Subtle scale (1 → 1.02) + border/background lift on hover; pill buttons should feel tactile | CSS transition, <150ms |
| Nav | Smooth-scroll to anchor sections; sticky nav gains hairline/blur only after scrolling past hero | CSS `scroll-behavior` + scroll listener |
| Numbers/stats | Optional count-up animation for the hero stat row when it enters view | Nice-to-have, Framer Motion or Anime.js |

Keep every animation subtle and fast — premium sites move with restraint, not bounce. Use `easeOutCubic`/`easeOutQuad`-family curves everywhere. Respect `prefers-reduced-motion` globally and provide a static fallback (final-state, no motion) for every animated element.

---

## 8. Responsive Requirements

| Breakpoint | Width | Key behavior |
|---|---|---|
| Mobile | ≤640px | Single column everywhere, hamburger → Sheet drawer, pill CTAs full-width, hero headline scales to ~32–36px, stat row stacks or scrolls horizontally |
| Tablet | 768px | 2-up card grids, condensed nav |
| Laptop | 1024px | 3–4-up grids, full nav row visible |
| Desktop | 1200px+ | Centered max-width container (~1200px), full multi-column layout, largest hero type scale |

All touch targets ≥44px. Manually verify the contact form and nav drawer at 375px specifically — these are the most common failure points on agency-site builds.

---

## 9. Content Rules

- Do not fabricate real client names, logos, or testimonial quotes as if they were real — every placeholder (testimonials, logos, stats, map, avatars) must be clearly marked in code comments (`{/* PLACEHOLDER: ... */}`) so Satyendra can swap in real assets later.
- Testimonial avatars use initials-based `AvatarFallback`, never stock photos standing in for real clients (see §4.4).
- Keep medical marketing claims generic and non-specific about outcomes — avoid hard guarantees ("we guarantee X patients"); healthcare marketing claims stay measured and credible.
- All copy in Sevoria's voice: precise, confident, no clichés like "we're passionate about healthcare."
- Never silently change brand copy, contact details, or business facts (name, address, phone, email) — these are fixed client inputs.

---

## 10. Deliverable

A fully built, responsive, production-ready **dark-theme** site matching every section above:

- All 11 sections built and responsive down to 375px.
- Token system from §2 used exactly — no invented colors/radii/shadows.
- Hero built in Anime.js with the entrance sequence + looping mesh gradient (§6.2).
- Every other scroll reveal built in Framer Motion, consistently.
- Testimonials marquee component wired exactly per §4.
- shadcn/ui as the component base throughout, restyled to tokens (never default zinc theme).
- lucide-react for all icons.
- No console errors, no layout shift on load, `prefers-reduced-motion` respected everywhere.
- Contact form validates (zod + react-hook-form) with a clear placeholder submit handler.

**End with a short list of "things the client needs to provide"**: real testimonials, real client logos, final headline choice (of the 3 drafted in §6.2), real map embed, form backend connection, real hero stats.