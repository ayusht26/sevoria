import { BUSINESS_INFO } from "@/lib/business-info"

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline text-ink py-16 px-6">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-12">
        {/* Footer Top Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xl font-semibold tracking-tight text-ink">
              {BUSINESS_INFO.companyName}
            </span>
            <p className="body-md text-body leading-relaxed max-w-sm">
              {BUSINESS_INFO.mcaText}
            </p>
            <p className="text-xs text-mute font-mono uppercase tracking-wider mt-2">
              SECTOR J, ASHIYANA • LUCKNOW • UP 226012
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="mono-eyebrow text-ink">NAVIGATION</h4>
            <ul className="flex flex-col gap-2.5 body-md text-body">
              <li>
                <a href="#about" className="hover:text-ink transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ink transition-colors">
                  Business Activities
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-ink transition-colors">
                  Why Sevoria Pharma
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-ink transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-ink transition-colors">
                  Client Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Services */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="mono-eyebrow text-ink">ACTIVITIES</h4>
            <ul className="flex flex-col gap-2.5 body-md text-body">
              <li>Pharmaceuticals Retail</li>
              <li>Medical & Surgical Goods</li>
              <li>Orthopaedic Supplies</li>
              <li>Toilet Articles & Hygiene</li>
              <li>Local Order Delivery</li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="mono-eyebrow text-ink">CONTACT</h4>
            <div className="flex flex-col gap-2 body-md text-body">
              <p className="text-ink font-medium">{BUSINESS_INFO.owner}</p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hover:text-ink transition-colors font-semibold"
              >
                {BUSINESS_INFO.formattedPhone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="hover:text-ink transition-colors text-xs text-mute"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="border-t border-hairline pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mute">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.companyName}. All rights reserved.</p>
          <p className="font-mono">
            Ashiyana, Lucknow, Uttar Pradesh 226012
          </p>
        </div>
      </div>
    </footer>
  )
}
