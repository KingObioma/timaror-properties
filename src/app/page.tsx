import Image from "next/image";
import Link from "next/link";
import { estates, testimonials, WHATSAPP_LINK, PHONE_NUMBERS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/estates/berry-view/1.jpg"
            alt="Estate aerial view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              CAC Registered &bull; Verified Titles
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Secure Verified Land in Port Harcourt&apos;s{" "}
              <span className="text-[#4ade80]">Fastest-Growing</span> Locations
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl">
              Own a plot in a high-appreciation zone with flexible payment plans
              starting from ₦1.8M. Trusted by 500+ investors across Nigeria and
              the diaspora.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#estates"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-dark transition-colors"
              >
                View Our Estates
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1da851] transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBERS[0].replace(/\s/g, "")}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white hover:text-foreground transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="bg-light border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🏛️", label: "CAC Registered", sub: "Company" },
              { icon: "📋", label: "Verified Property", sub: "Titles" },
              { icon: "💳", label: "Flexible Payment", sub: "Plans" },
              { icon: "⭐", label: "500+ Satisfied", sub: "Investors" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-bold text-foreground">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED ESTATES ============ */}
      <section id="estates" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Premium Land Investment Opportunities
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Every estate is verified, surveyed, and positioned in
              high-appreciation zones. Prices increase as development progresses —
              invest now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {estates.slice(0, 3).map((estate) => (
              <Link
                key={estate.slug}
                href={`/estates/${estate.slug}`}
                className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow bg-white"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={estate.images[0]}
                    alt={estate.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Now Selling
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {estate.name}
                  </h3>
                  <p className="text-sm text-muted mt-1">{estate.location}</p>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        {estate.price}
                      </span>
                      <span className="text-xs text-muted ml-1">
                        {estate.priceNote}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {estates.length > 3 && (
            <div className="text-center mt-10">
              <Link
                href="/estates/timaror-gardens"
                className="text-primary font-semibold hover:underline"
              >
                View All Estates →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section id="why-us" className="py-20 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why 500+ Investors Trust Timaror
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              We don&apos;t just sell land. We deliver verified assets in
              growth corridors with proper documentation and after-sale support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Strategic Locations",
                desc: "Every estate is positioned in a high-growth corridor near major roads, airports, or commercial hubs — where land values are rising fastest.",
                icon: "📍",
              },
              {
                title: "Secure Documentation",
                desc: "All properties come with Registered Survey, Deed of Assignment, and verified titles. No hidden risks, no legal grey areas.",
                icon: "🔒",
              },
              {
                title: "Flexible Payment Plans",
                desc: "Start with a deposit and spread your balance over 6 months. We make land ownership accessible to every investor.",
                icon: "📊",
              },
              {
                title: "Proven Appreciation",
                desc: "Our estates have shown 30–50% appreciation within 12–18 months. Early investors consistently see strong returns.",
                icon: "📈",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-bold mt-4 text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INSPECTION CTA ============ */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 sm:p-14 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  See the Land Before You Pay
                </h2>
                <p className="mt-4 text-white/80 text-lg leading-relaxed">
                  We offer free guided inspections every weekend. Visit any of
                  our estates, meet the team, verify the documents, and see
                  exactly what you&apos;re investing in. No pressure, no
                  obligation.
                </p>
                <ul className="mt-6 space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">✓</span>
                    <span>Free transportation to estate location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">✓</span>
                    <span>Meet the legal team & verify documents on-site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">✓</span>
                    <span>No commitment required — just come and see</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 sm:p-14">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Book a Free Inspection
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-border text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                    <option value="">Which estate interests you?</option>
                    {estates.map((e) => (
                      <option key={e.slug} value={e.slug}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="w-full bg-primary text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
                  >
                    Book Inspection
                  </button>
                  <p className="text-xs text-muted text-center">
                    Or call us directly:{" "}
                    <a
                      href={`tel:${PHONE_NUMBERS[0].replace(/\s/g, "")}`}
                      className="text-primary font-semibold"
                    >
                      {PHONE_NUMBERS[0]}
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Our Investors Say
            </h2>
            <p className="mt-4 text-muted text-lg">
              Real stories from real investors who trusted Timaror.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold text-sm text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 sm:py-24 bg-foreground text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Land Prices Only Go Up.
            <br />
            <span className="text-[#4ade80]">The Best Time to Invest Is Now.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Every month you wait, prices move further out of reach. Secure your
            plot today with a flexible payment plan and join 500+ smart investors
            building wealth through land.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1da851] transition-colors"
            >
              Chat on WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE_NUMBERS[0].replace(/\s/g, "")}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white hover:text-foreground transition-colors"
            >
              Call {PHONE_NUMBERS[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
