import Image from "next/image";
import Link from "next/link";
import {
  estates,
  testimonials,
  WHATSAPP_LINK,
  PHONE_NUMBERS,
} from "@/lib/data";

/* ── Reusable WhatsApp icon ── */
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* =============================================
          HERO — Full viewport, cinematic
          ============================================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/estates/berry-view/1.jpg"
            alt="Timaror Properties estate"
            fill
            sizes="100vw"
            className="object-cover md:hidden"
            priority
            quality={90}
          />
          <Image
            src="/estates/jacobs-court/1.jpg"
            alt="Timaror Properties estate"
            fill
            sizes="100vw"
            className="object-cover hidden md:block"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-2xl pt-36 pb-24">
            {/* Brand line */}
            <div className="brand-line mb-8" />

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              CAC Registered &middot; Verified Titles &middot; 500+ Investors
            </div>

            <h1 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight">
              Own Prime Land
              <br />
              <span className="text-primary-light">Before Prices Double</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-lg font-light">
              Secure verified, survey-backed plots in Port Harcourt&apos;s
              fastest-appreciating corridors — with flexible payment plans
              starting from &#8358;800K deposit.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="#estates"
                className="inline-flex items-center justify-center bg-accent text-white px-9 py-4 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
              >
                View Our Estates
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 text-white px-9 py-4 rounded-md font-semibold text-[15px] hover:bg-white/15 transition-all duration-200"
              >
                <WhatsAppIcon className="w-5 h-5 opacity-80" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-14 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "bg-green-800",
                  "bg-red-800",
                  "bg-emerald-700",
                  "bg-stone-700",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-black/30 flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {["CA", "BO", "EN", "SU"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/50">
                <span className="text-white/80 font-semibold">500+</span>{" "}
                investors already in
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </section>

      {/* =============================================
          TRUST BAR — Minimal, authoritative
          ============================================= */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-border">
            {[
              {
                stat: "CAC",
                label: "Registered Company",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                stat: "Verified",
                label: "Property Titles",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
              },
              {
                stat: "Flexible",
                label: "Payment Plans",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                ),
              },
              {
                stat: "500+",
                label: "Satisfied Investors",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 py-6 sm:py-8 px-0 sm:px-8 first:pl-0 last:pr-0 border-b lg:border-b-0 border-border last:border-b-0"
              >
                <span className="text-primary">{item.icon}</span>
                <div>
                  <div className="text-sm font-bold text-foreground leading-tight">
                    {item.stat}
                  </div>
                  <div className="text-xs text-muted mt-0.5">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          FEATURED ESTATES — Premium cards
          ============================================= */}
      <section id="estates" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="max-w-xl mb-16">
            <div className="brand-line mb-5" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Featured Estates
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight tracking-tight">
              Locations Where Value
              <br className="hidden sm:block" />
              Is Rising Fastest
            </h2>
            <p className="mt-5 text-muted text-base leading-relaxed">
              Each estate sits along a proven growth corridor — near the
              airport, major expressways, or emerging commercial hubs. Every
              title is verified. Every plot is dry and build-ready.
            </p>
          </div>

          {/* Estate cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {estates.slice(0, 3).map((estate) => (
              <Link
                key={estate.slug}
                href={`/estates/${estate.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/20 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={estate.images[0]}
                    alt={estate.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* Promo badge */}
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span className="bg-accent text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-lg">
                      Easter Promo
                    </span>
                  </div>
                  {/* Location overlay */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-1.5 text-white/90 text-sm">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {estate.location}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-7">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {estate.name}
                  </h3>

                  {estate.promoGift && (
                    <p className="text-xs text-accent font-semibold mt-2.5 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                      Gift: {estate.promoGift}
                    </p>
                  )}

                  <div className="mt-5 pt-5 border-t border-border flex items-end justify-between">
                    <div>
                      {estate.originalPrice && (
                        <span className="text-sm text-muted line-through mr-2">
                          {estate.originalPrice}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-bold text-primary">
                          {estate.price}
                        </span>
                        <span className="text-xs text-muted">
                          / {estate.priceNote.replace("per ", "")}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2.5 transition-all duration-300">
                      View
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View all link */}
          {estates.length > 3 && (
            <div className="mt-14 text-center">
              <Link
                href="/estates/timaror-gardens"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-accent hover:bg-accent-dark px-6 py-3 rounded-md transition-colors"
              >
                View All Estates
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* =============================================
          HOW IT WORKS — 3-step process
          ============================================= */}
      <section id="process" className="py-24 sm:py-32 bg-primary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
              From Interest to Ownership
              <br className="hidden sm:block" />
              <span className="text-primary-light">in 3 Simple Steps</span>
            </h2>
          </div>

          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[calc(50%+24px)] left-1/2 -translate-x-1/2 w-[55%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {[
              {
                step: "01",
                title: "Browse & Choose",
                desc: "Explore our verified estates. Every listing includes full documentation, location details, pricing, and payment plans — no hidden costs.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Inspect for Free",
                desc: "Book a free site inspection. We provide transportation, introduce you to our legal team on-ground, and let you verify everything. Zero obligation.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Secure Your Plot",
                desc: "Lock in today's price with a deposit. Pay the balance over 6 months. Receive your Survey, Deed of Assignment, and instant allocation.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="relative text-center group"
              >
                {/* Step number circle */}
                <div className="w-14 h-14 rounded-full bg-white text-primary font-bold text-lg flex items-center justify-center mx-auto mb-8 shadow-lg shadow-black/10 ring-4 ring-white/20">
                  {item.step}
                </div>

                {/* Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 pt-7 hover:bg-white/[0.14] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-primary-light flex items-center justify-center mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow connector — mobile only */}
                {i < 2 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent text-white px-9 py-4 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
            >
              Book Your Free Inspection
            </a>
          </div>
        </div>
      </section>

      {/* =============================================
          WHY CHOOSE US — Asymmetric premium layout
          ============================================= */}
      <section id="why-us" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Header + featured card */}
            <div>
              <div className="brand-line mb-5" />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
                The Timaror Difference
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight tracking-tight">
                Why Smart Investors
                <br />
                Keep Coming Back
              </h2>
              <p className="mt-5 text-muted text-base leading-relaxed max-w-md">
                We don&apos;t just sell land — we deliver verified, appreciating
                assets backed by documentation you can take to any lawyer.
              </p>

              {/* Featured dark card */}
              <div className="mt-10 bg-primary rounded-2xl p-9 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-primary-light flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">30–50% Value Growth</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  While savings lose value to inflation, our investors have
                  watched their plots appreciate 30–50% in 12–18 months. Land
                  doesn&apos;t crash. Land builds generational wealth.
                </p>
              </div>
            </div>

            {/* Right — 3 cards */}
            <div className="space-y-5 lg:pt-8">
              {[
                {
                  title: "Locations That Appreciate",
                  desc: "Every estate sits along the airport corridor, major expressways, or emerging commercial zones — the exact areas where early buyers see the biggest gains.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Bulletproof Documentation",
                  desc: "Registered Survey. Deed of Assignment. Verified titles you can take to any lawyer. We hand you the paperwork before you pay — buy with full confidence.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                },
                {
                  title: "Pay at Your Own Pace",
                  desc: "Lock in today's price with a deposit, then spread your balance over 6 months. No bank loans. No interest. Designed for salaried professionals and diaspora investors.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-warm rounded-2xl p-8 border border-border group hover:bg-white hover:shadow-md hover:border-primary/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          INSPECTION CTA — High-impact split section
          ============================================= */}
      <section id="contact" className="py-24 sm:py-32 bg-surface-warm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Persuasion */}
              <div className="bg-primary p-12 sm:p-16 lg:p-20 text-white relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />

                <div className="relative z-10">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-6">
                    Free Site Inspection
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
                    Don&apos;t Take Our
                    <br />
                    Word for It.
                    <br />
                    <span className="text-primary-light">Come and See.</span>
                  </h2>
                  <p className="mt-6 text-white/50 text-base leading-relaxed max-w-md">
                    Every weekend, we take prospective investors straight to the
                    land — free of charge. Walk the plots. Meet the legal team.
                    Inspect every document. Then decide.
                  </p>
                  <ul className="mt-10 space-y-5">
                    {[
                      "Free transportation to the site",
                      "Meet our lawyers on-ground & verify documents",
                      "Zero obligation — walk away if not convinced",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-sm text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right — Form */}
              <div className="bg-white p-12 sm:p-16 lg:p-20">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Reserve Your Inspection Spot
                </h3>
                <p className="text-sm text-muted mb-8">
                  Drop your details — we handle the rest. No cost, no strings.
                </p>
                <form className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-light"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide uppercase">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0801 234 5678"
                      className="w-full px-4 py-3.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-light"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide uppercase">
                      Interested Estate
                    </label>
                    <select className="w-full px-4 py-3.5 rounded-lg border border-border bg-surface text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                      <option value="">Select an estate</option>
                      {estates.map((e) => (
                        <option key={e.slug} value={e.slug}>
                          {e.name} — {e.location}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-accent text-white py-4 rounded-lg font-semibold text-sm hover:bg-accent-dark transition-all duration-200 shadow-sm hover:shadow-md mt-2"
                  >
                    Book My Free Inspection
                  </button>
                  <p className="text-xs text-muted text-center pt-1">
                    Or call us directly:{" "}
                    <a
                      href={`tel:${PHONE_NUMBERS[0].replace(/\s/g, "")}`}
                      className="text-primary font-semibold hover:underline"
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

      {/* =============================================
          TESTIMONIALS
          ============================================= */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="brand-line mx-auto mb-5" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Investor Stories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight tracking-tight">
              They Took the Leap.
              <br />
              Here&apos;s What Happened.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`rounded-2xl p-9 border ${
                  i === 0
                    ? "bg-primary border-transparent text-white"
                    : "bg-white border-border"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className={`w-4 h-4 ${
                        i === 0 ? "fill-primary-light" : "fill-accent"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className={`text-[15px] leading-relaxed ${i === 0 ? "text-white/70" : "text-muted"}`}>
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className={`mt-8 pt-6 border-t flex items-center gap-3 ${i === 0 ? "border-white/10" : "border-border"}`}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <div className={`text-sm font-semibold ${i === 0 ? "text-white" : "text-foreground"}`}>
                      {t.name}
                    </div>
                    <div className={`text-xs ${i === 0 ? "text-white/40" : "text-muted"}`}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          FINAL CTA
          ============================================= */}
      <section className="py-28 sm:py-36 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
            The Window Is Closing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            A Year From Now,
            <br />
            You&apos;ll Wish You Bought
            <br />
            <span className="text-primary-light">
              at Today&apos;s Price.
            </span>
          </h2>
          <p className="mt-7 text-lg text-white/40 leading-relaxed max-w-xl mx-auto">
            Every development milestone pushes prices higher. The 500+
            investors who moved early are already sitting on 30–50% gains.
            Your plot is still available — but not for long.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-9 py-4 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE_NUMBERS[0].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center border border-white/15 text-white/70 px-9 py-4 rounded-md font-semibold text-[15px] hover:bg-white/5 hover:text-white transition-all duration-200"
            >
              Call {PHONE_NUMBERS[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
