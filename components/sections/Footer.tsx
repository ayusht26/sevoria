import { BUSINESS_INFO } from "@/lib/business-info"

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline text-ink py-16 px-5 sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-12">
        {/* Footer Top Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand & Short Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xl font-semibold tracking-tight text-ink">
              {BUSINESS_INFO.companyName}
            </span>
            <p className="body-md text-body leading-relaxed max-w-sm">
              Your local source for genuine medicines and medical essentials in Ashiyana, Lucknow.
            </p>
            <p className="text-xs text-mute font-mono uppercase tracking-wider mt-1">
              {BUSINESS_INFO.shortAddress}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="mono-eyebrow text-ink">NAVIGATION</h4>
            <ul className="flex flex-col body-md text-body">
              <li>
                <a href="#about" className="block py-2 md:hover:text-ink transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="block py-2 md:hover:text-ink transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="block py-2 md:hover:text-ink transition-colors">
                  Why Sevoria Pharma
                </a>
              </li>
              <li>
                <a href="#process" className="block py-2 md:hover:text-ink transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 md:hover:text-ink transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Activities */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="mono-eyebrow text-ink">ACTIVITIES</h4>
            <ul className="flex flex-col gap-1.5 body-md text-body">
              <li className="py-1">Pharmaceuticals Retail</li>
              <li className="py-1">Medical &amp; Surgical Goods</li>
              <li className="py-1">Orthopaedic Supplies</li>
              <li className="py-1">Toilet Articles &amp; Hygiene</li>
              <li className="py-1">Local Order Delivery</li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="mono-eyebrow text-ink">CONTACT</h4>
            <div className="flex flex-col gap-2 body-md text-body">
              <p className="text-ink font-medium">{BUSINESS_INFO.owner}</p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="md:hover:text-ink transition-colors font-semibold"
              >
                {BUSINESS_INFO.formattedPhone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="md:hover:text-ink transition-colors text-xs text-mute"
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
